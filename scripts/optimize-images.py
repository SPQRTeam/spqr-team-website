#!/usr/bin/env python3
"""Optimize the images in public/ and point the site at the optimized files.

Every matched image is resized to a sane maximum size and re-encoded as WebP,
the original is removed, and every reference to it (in the JSON data files, in
the Vue pages and in index.html) is rewritten to the new name.

Open Graph / Twitter card images are the exception: crawlers are not reliable
about WebP, so for those a plain JPEG copy is kept alongside the WebP one and
the social meta tags keep pointing at the JPEG.

The script is idempotent - already converted images are simply skipped - so it
can be re-run after adding new pictures:

    npm run optimize:images          # convert and rewrite references
    npm run optimize:images -- -n    # dry run, only report what would change
"""

import argparse
import fnmatch
import json
import os
import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is missing. Install it with: pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

SOURCE_EXTENSIONS = (".png", ".jpg", ".jpeg")

# (glob on the path relative to public/, longest side in px, webp quality).
# The first matching rule wins, so specific patterns come before generic ones.
RULES = [
    ("assets/events/cover-*", 900, 80),          # event card covers (~435px on screen)
    ("assets/team/team-*", 1400, 80),            # team group photos in the carousel
    ("assets/team/team_*", 1400, 80),
    ("assets/*/cover.png", 1600, 78),            # full width page headers
    ("assets/*/cover.jpg", 1600, 78),
    ("assets/team/*", 700, 82),                  # member portraits (~300px on screen)
    ("assets/home/ig/*", 800, 80),
    ("assets/publications/*", 1000, 82),
    ("assets/sponsor/stats/*", 1600, 92),        # charts, text must stay readable
    ("assets/sponsor/images/*", 1200, 82),
    ("assets/sponsor/current/*", 600, None),     # sponsor logos: lossless, keeps alpha
    ("assets/codebase/*", 1400, 82),
]

# Left untouched: small logos and icons, where the size saved is negligible and
# the branding assets are better kept in their original format.
SKIP = [
    "assets/logo.png",
    "assets/sapienza_logos/*",
    "logos/*",
    "icons/*",
]

# Images also used as og:image / twitter:image. A JPEG copy is kept for crawlers.
OG_IMAGES = {
    "assets/home/cover.png": "assets/home/cover.jpg",
    "assets/team/cover.png": "assets/team/cover.jpg",
}
OG_MAX_SIZE = 1200
OG_QUALITY = 85

SITE_URL = "https://spqr.diag.uniroma1.it"

# Files whose content may reference an image.
REFERENCE_GLOBS = ["src/**/*.vue", "src/**/*.js", "scripts/*.js", "index.html"]


def match(rel_path, pattern):
    """fnmatch that does not let '*' cross a path separator."""
    parts, pat_parts = rel_path.split("/"), pattern.split("/")
    if len(parts) != len(pat_parts):
        return False
    return all(fnmatch.fnmatch(p, q) for p, q in zip(parts, pat_parts))


def rule_for(rel_path):
    if any(match(rel_path, pattern) for pattern in SKIP):
        return None
    for pattern, max_size, quality in RULES:
        if match(rel_path, pattern):
            return max_size, quality
    return None


def load(path):
    image = ImageOps.exif_transpose(Image.open(path))
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
    return image


def resized(image, max_size):
    if max(image.size) <= max_size:
        return image
    ratio = max_size / max(image.size)
    size = (round(image.width * ratio), round(image.height * ratio))
    return image.resize(size, Image.LANCZOS)


def save_jpeg(image, path, max_size, quality):
    if image.mode == "RGBA":
        flattened = Image.new("RGB", image.size, (255, 255, 255))
        flattened.paste(image, mask=image.split()[-1])
        image = flattened
    resized(image, max_size).save(path, "JPEG", quality=quality, optimize=True, progressive=True)


def convert(path, rel_path, max_size, quality, dry_run):
    """Write the .webp (plus the .jpg for OG images) and drop the original."""
    target = path.with_suffix(".webp")
    og_target = PUBLIC / OG_IMAGES[rel_path] if rel_path in OG_IMAGES else None
    before = path.stat().st_size

    if dry_run:
        return before, 0

    image = load(path)
    if quality is None:
        resized(image, max_size).save(target, "WEBP", lossless=True, method=6)
    else:
        resized(image, max_size).save(target, "WEBP", quality=quality, method=6)

    after = target.stat().st_size
    if og_target is not None:
        save_jpeg(image, og_target, OG_MAX_SIZE, OG_QUALITY)
        after += og_target.stat().st_size

    if path != target:
        path.unlink()
    return before, after


def rewrite_references(renames, dry_run):
    """Point every reference at the new file names.

    Absolute OG urls are rewritten first, so that the social meta tags end up on
    the JPEG copy instead of the WebP one.
    """
    changed = []

    def apply(text):
        for rel_path, og_rel in OG_IMAGES.items():
            if rel_path in renames:
                text = text.replace(f"{SITE_URL}/{rel_path}", f"{SITE_URL}/{og_rel}")
        for rel_path, new_rel in renames.items():
            text = text.replace(f"/{rel_path}", f"/{new_rel}")
        return text

    for pattern in REFERENCE_GLOBS:
        for path in sorted(ROOT.glob(pattern)):
            original = path.read_text()
            updated = apply(original)
            if updated != original:
                changed.append(path)
                if not dry_run:
                    path.write_text(updated)

    # The JSON data files store bare file names, resolved against their own
    # directory by the page that loads them, so only rename within that folder.
    for path in sorted(PUBLIC.glob("assets/**/*.json")):
        folder = path.parent.relative_to(PUBLIC).as_posix()
        local = {
            Path(rel).name: Path(new).name
            for rel, new in renames.items()
            if Path(rel).parent.as_posix() == folder
        }
        if not local:
            continue
        original = path.read_text()
        pattern = re.compile("|".join(re.escape(name) for name in sorted(local, key=len, reverse=True)))
        updated = pattern.sub(lambda m: local[m.group(0)], original)
        if updated != original:
            json.loads(updated)  # never leave a data file broken
            changed.append(path)
            if not dry_run:
                path.write_text(updated)

    return changed


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("-n", "--dry-run", action="store_true", help="report what would change without writing")
    args = parser.parse_args()

    renames, total_before, total_after = {}, 0, 0
    for path in sorted(PUBLIC.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in SOURCE_EXTENSIONS:
            continue
        rel_path = path.relative_to(PUBLIC).as_posix()
        if rel_path in OG_IMAGES.values():
            continue  # a JPEG copy produced by a previous run
        rule = rule_for(rel_path)
        if rule is None:
            continue

        before, after = convert(path, rel_path, *rule, args.dry_run)
        renames[rel_path] = str(Path(rel_path).with_suffix(".webp"))
        total_before += before
        total_after += after
        saved = f"-> {after / 1024:8.0f} KB" if after else "(dry run)"
        print(f"  {before / 1024:8.0f} KB {saved}  {rel_path}")

    if not renames:
        print("Nothing to optimize, every image is already converted.")
        return

    changed = rewrite_references(renames, args.dry_run)
    print(f"\n{len(renames)} images, {total_before / 1048576:.1f} MB -> {total_after / 1048576:.1f} MB", end="")
    if total_before:
        print(f" ({100 - 100 * total_after / total_before:.0f}% smaller)")
    print(f"{len(changed)} files updated to reference the new names:")
    for path in changed:
        print(f"  {path.relative_to(ROOT)}")
    if args.dry_run:
        print("\nDry run, nothing was written.")


if __name__ == "__main__":
    main()
