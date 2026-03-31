<template>
  <div class="cover-section">
    <v-img
      class="cover-image"
      src="/assets/home/cover.png"
      alt="Sponsors Header Cover"
      cover
    >
      <div class="cover-overlay">
        <h1 class="cover-title">SPONSORS</h1>
      </div>
    </v-img>
  </div>

  <v-banner
    lines="one"
    class="contact-banner"
    color="rgb(0, 103, 120)"
    icon="mdi-email-outline"
    sticky
  >
    <template #text>
      <div class="banner-text">
        <span>Want to support the team? Reach out at</span>
        <a class="banner-link" href="mailto:spqr@diag.uniroma1.it">spqr@diag.uniroma1.it</a>
      </div>
    </template>
  </v-banner>

  <v-container class="carousel-container">
    <v-carousel
      class="sponsor-carousel"
      cycle
      height="auto"
      :interval="5000"
      hide-delimiters
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="item in carouselItems"
        :key="item.src"
        class="carousel-item-wrapper"
      >
        <div class="carousel-content">
          <v-img
            :src="item.src"
            :alt="item.alt"
            class="sponsor-photo"
            aspect-ratio="1"
            cover
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>

  <v-container class="stats-section">
    <div class="section-heading">
      <p class="eyebrow">Instagram stats — October 2025</p>
      <h2 class="section-title">Performance snapshot for sponsors</h2>
      <p class="section-subtitle">
        Data exported from Meta Business Suite to highlight traction, reach, and profile intent.
      </p>
    </div>

    <v-row class="stat-card-row" dense>
      <v-col
        v-for="card in statsCards"
        :key="card.title"
        cols="12"
        sm="6"
        md="4"
      >
        <div class="stat-card">
          <div class="stat-card__title">{{ card.title }}</div>
          <div class="stat-card__value">{{ card.value }}</div>
          <div class="stat-card__hint">{{ card.hint }}</div>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-6" dense align="stretch">
      <v-col cols="12" md="6">
        <div class="stat-panel">
          <div class="stat-panel__title">Content mix</div>
          <div class="stat-panel__subtitle">Stories-led cadence with supplemental posts</div>
          <div class="format-bars">
            <div
              v-for="format in formatBreakdown"
              :key="format.label"
              class="format-row"
            >
              <div class="format-row__label">{{ format.label }}</div>
              <div class="format-row__bar">
                <div
                  class="format-row__bar-fill"
                  :style="{ width: `${format.share}%` }"
                ></div>
              </div>
              <div class="format-row__value">{{ format.value }} ({{ format.share }}%)</div>
            </div>
          </div>
          <p class="stat-panel__note">
            Stories carry most of the volume, driving daily touchpoints and reach spikes.
          </p>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="stat-panel image-panel">
          <div class="stat-panel__title">Meta Business export</div>
          <div class="stat-panel__subtitle">Latest snapshot used for sponsor reporting</div>
          <v-img
            src="/assets/sponsor/stats/general.png"
            alt="Meta Business performance screenshot"
            class="stat-screenshot"
            cover
          />
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="py-8 content-wrapper">
    <div class="plans-heading">
      <p class="eyebrow plans-eyebrow">Sponsorship plans</p>
      <h2 class="plans-title">Pick the coverage that fits your goals</h2>
      <p class="plans-subtitle">
        Instagram presence plus branding on the robot jersey and team t-shirts, scaled from competition-only to year-round visibility.
      </p>
    </div>

    <v-row class="sponsor-row" dense align="stretch">
      <v-col
        v-for="(sponsor, index) in sponsorsFormatted"
        :key="`sponsor-${index}`"
        cols="12"
        md="6"
      >
        <div class="sponsor-card">
          <div class="card-title">
            {{ sponsor.title }}
          </div>
          <div class="card-content">
            <ul class="sponsor-points">
              <li v-for="(point, idx) in sponsor.bullets" :key="idx">{{ point }}</li>
            </ul>
            <div class="price-chip">
              <v-icon start size="small">mdi-currency-eur</v-icon>
              <span class="price-text">{{ sponsor.price }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useSeo } from '@/composables/useSeo'
import sponsorsData from '/public/assets/sponsor/sponsors.json'

// SEO Configuration
useSeo({
  title: 'Sponsors - SPQR Team | Partners and Support',
  description: 'SPQR Team sponsors and partners supporting our RoboCup research and robotics development at Sapienza University of Rome.',
  path: '/sponsors/',
  canonical: 'https://spqr.diag.uniroma1.it/sponsors/',
  ogTitle: 'Sponsors - SPQR Team',
  ogDescription: 'Our sponsors and partners supporting robotics research.',
  ogUrl: 'https://spqr.diag.uniroma1.it/sponsors/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png',
  twitterTitle: 'Sponsors - SPQR Team',
  twitterDescription: 'Our sponsors and partners supporting robotics research.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/sponsors/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png'
})

const sponsors = sponsorsData
const sponsorsFormatted = computed(() =>
  sponsors.map((sponsor) => ({
    ...sponsor,
    bullets: sponsor.description
      .split(';')
      .map((item) => item.trim())
      .filter(Boolean)
  }))
)
const carouselItems = [
  { src: '/assets/sponsor/images/sponsor_1.jpg', alt: 'Sponsor 1' },
  { src: '/assets/sponsor/images/sponsor_2.jpg', alt: 'Sponsor 2' },
  { src: '/assets/sponsor/images/sponsor_3.jpg', alt: 'Sponsor 3' },
  { src: '/assets/sponsor/images/sponsor_4.jpg', alt: 'Sponsor 4' },
  { src: '/assets/sponsor/images/sponsor_5.jpg', alt: 'Sponsor 5' },
  { src: '/assets/sponsor/images/sponsor_6.jpg', alt: 'Sponsor 6' },
  { src: '/assets/sponsor/images/sponsor_7.jpg', alt: 'Sponsor 7' },
]

const statsCards = [
  { title: 'Reach', value: '41,278', hint: 'Peak 6,429 on Oct 19' },
  { title: 'Views', value: '132,650', hint: 'Peak 29,368 on Oct 19' },
  { title: 'Content interactions', value: '1,033', hint: 'Peak 185 on Oct 19' },
  { title: 'Profile visits', value: '594', hint: 'Peak 125 on Oct 19' },
  { title: 'New follows', value: '77', hint: 'Peak 21 on Oct 18' },
]

const formatBreakdown = [
  { label: 'Stories', value: 54, share: 93 },
  { label: 'Posts', value: 4, share: 7 },
]

</script>

<style scoped>
.cover-image :deep(img) {
  object-position: center 40% !important;
}

.cover-section {
  position: relative;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
}

.cover-title {
  color: #ffffff;
  letter-spacing: 0.2rem;
  font-weight: 800;
}

.contact-banner {
  position: sticky;
  top: 0;
  z-index: 10;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.contact-banner :deep(.v-banner__content) {
  justify-content: center;
}

.banner-text {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-weight: 600;
}

.banner-link {
  color: #ffffff;
  text-decoration: underline;
}

.banner-link:hover {
  color: #ffd166;
}

.carousel-container {
  margin-bottom: 2rem;
}

.sponsor-carousel {
  max-width: 1200px;
  margin: 0 auto 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
}

.sponsor-carousel :deep(.v-carousel-item) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-carousel :deep(.v-window__container) {
  display: flex;
  justify-content: center;
}

.sponsor-carousel :deep(.v-carousel-item__content) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.carousel-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding: 1.5rem;
  margin: 0 auto;
}

.sponsor-photo {
  display: block;
  width: min(70vw, 520px);
  height: min(70vw, 520px);
  margin: 0 auto;
  border-radius: 12px;
  background: transparent;
  box-shadow: none;
}

.sponsor-photo :deep(img) {
  object-fit: cover;
  object-position: center;
}

.content-wrapper {
  max-width: 1200px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.plans-heading {
  margin-bottom: 1.5rem;
}

.plans-eyebrow {
  margin: 0 0 0.35rem;
  color: #006778;
  font-size: 0.9rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  font-weight: 700;
}

.plans-title {
  margin: 0 0 0.35rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #0b0b0f;
}

.plans-subtitle {
  margin: 0;
  color: #4b4b4b;
  line-height: 1.6;
}

.stats-section {
  max-width: 1200px;
  margin: 2rem auto 3rem;
  padding: 0 1rem;
}

.section-heading {
  text-align: left;
  margin-bottom: 1.5rem;
}

.eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  color: #006778;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 0.35rem;
  color: #0b0b0f;
}

.section-subtitle {
  margin: 0;
  color: #4b4b4b;
  line-height: 1.5;
}

.sponsor-row {
  row-gap: 20px;
}

.stat-card-row {
  row-gap: 16px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.stat-card__title {
  font-size: 0.95rem;
  color: #0b0b0f;
  font-weight: 750;
  margin-bottom: 0.3rem;
}

.stat-card__value {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0b0b0f;
  margin-bottom: 0.1rem;
}

.stat-card__hint {
  color: #3f4a52;
  font-size: 0.95rem;
}

.stat-panel {
  background: #ffffff;
  border: 1px solid #e5e8eb;
  border-radius: 14px;
  padding: 1.2rem 1.2rem 1.4rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.stat-panel__title {
  font-size: 1.2rem;
  font-weight: 780;
  margin-bottom: 0.25rem;
  color: #0b0b0f;
}

.stat-panel__subtitle {
  margin: 0 0 1rem;
  color: #4b4f55;
}

.format-bars {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.format-row {
  display: grid;
  grid-template-columns: 90px 1fr 90px;
  align-items: center;
  gap: 0.5rem;
}

.format-row__label {
  font-weight: 750;
  color: #0b0b0f;
}

.format-row__bar {
  background: #eef2f4;
  border-radius: 999px;
  overflow: hidden;
  height: 10px;
}

.format-row__bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #00a6b0, #006778);
}

.format-row__value {
  text-align: right;
  font-weight: 750;
  color: #0b0b0f;
}

.stat-panel__note {
  margin-top: 0.75rem;
  margin-bottom: 0;
  color: #4b4f55;
}

.image-panel {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.stat-screenshot {
  border-radius: 12px;
  border: 1px solid #e5e8eb;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
}

.sponsor-card {
  background-color: #ffffff;
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sponsor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #822433;
  line-height: 1.3;
  padding: 1.25rem 1.25rem 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.card-content {
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sponsor-points {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
  display: grid;
  gap: 0.35rem;
  color: #303437;
  line-height: 1.55;
}

.price-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 103, 120, 0.1);
  border-left: 3px solid rgb(0, 103, 120);
  border-radius: 8px;
  font-weight: 700;
  color: #004f5a;
  align-self: flex-start;
  margin-top: auto;
}

.price-text {
  letter-spacing: 0.02rem;
}
</style>
