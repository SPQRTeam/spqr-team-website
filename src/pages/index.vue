<template>
  <!-- JSON-LD Structured Data for better SEO -->
  <component :is="'script'" type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ResearchOrganization",
      "name": "SPQR Team",
      "alternateName": "Sapienza Piazza Quattro Romani Team",
      "url": "https://spqrteam.github.io/spqr-team-website/",
      "logo": "https://spqrteam.github.io/spqr-team-website/logos/spqr-logo.png",
      "description": "RoboCup research group at Sapienza University of Rome specializing in humanoid robotics, multi-agent systems, and artificial intelligence since 1998.",
      "foundingDate": "1998",
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "Sapienza University of Rome",
        "url": "https://www.uniroma1.it/"
      },
      "department": {
        "@type": "Organization",
        "name": "Department of Computer, Control, and Management Engineering Antonio Ruberti",
        "url": "http://www.diag.uniroma1.it/"
      },
      "sameAs": [
        "https://www.instagram.com/spqrteam/"
      ],
      "areaServed": "International",
      "knowsAbout": [
        "Humanoid Robotics",
        "Multi-Agent Systems",
        "Computer Vision",
        "Robot Perception",
        "Deep Learning",
        "Reinforcement Learning",
        "Edge Computing",
        "RoboCup",
        "Artificial Intelligence"
      ]
    }
  </component>

  <!-- Full screen video hero -->
  <section class="hero" aria-label="SPQR Team">
    <video
      class="hero-video"
      :poster="heroPoster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    >
      <source :src="heroVideo" type="video/mp4" />
    </video>
    <div class="hero-overlay"></div>
    <img
      class="hero-sapienza"
      :src="sapienzaLogo"
      alt="Sapienza Università di Roma"
    />
    <div class="hero-content">
      <h1 class="hero-title">
        <!-- the wordmark is the Sapienza typeface, which the site has no webfont for -->
        <img class="hero-logo" :src="spqrLogo" alt="SPQR Team" />
      </h1>
      <p class="hero-subtitle">RoboCup research at Sapienza University of Rome</p>
      <p class="hero-since">
        <span class="hero-rule" aria-hidden="true"></span>
        Since MCMXCVIII
        <span class="hero-rule" aria-hidden="true"></span>
      </p>
    </div>
    <a href="#about" class="hero-scroll" aria-label="Scroll to content">
      <v-icon size="40">mdi-chevron-down</v-icon>
    </a>
  </section>

  <v-container>
    <!-- Who we are -->
    <section id="about" class="home-section" aria-label="Who we are">
      <h2 class="home-section-title">Who we are</h2>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="9">
          <p class="lead-text">
            SPQR Team is the RoboCup research group of the
            <a href="http://www.diag.uniroma1.it/" target="_blank" rel="noopener">Department of Computer,
            Control, and Management Engineering Antonio Ruberti</a> at
            <a href="https://www.uniroma1.it/it/" target="_blank" rel="noopener">Sapienza University of
            Rome</a>. Since 1998 we have brought together professors and students around
            one question: how can a team of fully autonomous humanoid robots play soccer together, with no
            human in the loop? 
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" class="stats-row">
        <v-col
          v-for="stat in stats"
          :key="stat.label"
          cols="6"
          md="3"
          class="stat-col"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </v-col>
      </v-row>
    </section>

    <!-- What we do -->
    <section class="home-section" aria-label="What we do">
      <h2 class="home-section-title">What we do</h2>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="9">
          <p class="lead-text">
            We write the software that turns a humanoid robot into a soccer player. Every match is a
            deadline: the robot has to see the ball, know where it stands on the pitch, keep its balance,
            decide what to do and agree on it with its teammates; all in real time, on board, with
            no external control.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" class="pillars-row">
        <v-col
          v-for="pillar in pillars"
          :key="pillar.title"
          cols="12"
          sm="6"
          lg="3"
          class="pillar-col"
        >
          <div class="pillar-card">
            <v-icon class="pillar-icon" :color="pillar.color" size="34">{{ pillar.icon }}</v-icon>
            <h3 class="pillar-title">{{ pillar.title }}</h3>
            <p class="pillar-text">{{ pillar.text }}</p>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Results -->
    <section class="home-section" aria-label="Results">
      <h2 class="home-section-title">Results</h2>

      <v-row justify="center" class="featured-row">
        <v-col
          v-for="result in featuredResults"
          :key="result.event"
          cols="12"
          md="6"
          class="featured-col"
        >
          <article class="featured-card">
            <div class="featured-photo">
              <img :src="result.photo" :alt="result.event" loading="lazy" />
            </div>
            <div class="featured-body">
              <div class="featured-medal">{{ result.medal }}</div>
              <div>
                <div class="featured-placement">{{ result.placement }}</div>
                <div class="featured-event">{{ result.event }}</div>
                <div class="featured-where">{{ result.where }}</div>
              </div>
            </div>
          </article>
        </v-col>
      </v-row>

      <v-row justify="center" class="results-row">
        <v-col
          v-for="result in results"
          :key="result.event"
          cols="12"
          md="6"
          class="result-col"
        >
          <div class="result-card">
            <div class="result-medal">{{ result.medal }}</div>
            <div class="result-body">
              <div class="result-placement">{{ result.placement }}</div>
              <div class="result-event">{{ result.event }}</div>
              <div class="result-where">{{ result.where }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
  </v-container>

  <!-- Instagram Reels Section -->
  <section class="instagram-section" aria-label="Instagram Updates">
    <v-container>
      <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 1rem;">
        Latest from Instagram
      </h2>

      <div style="text-align: center; margin-bottom: 0.5rem;">
        <a 
          href="https://www.instagram.com/spqrteam/"
          target="_blank"
          class="instagram-icon-link"
        >
          <img 
            src="/icons/icon-instagram.png" 
            alt="Follow us on Instagram"
            class="instagram-icon"
          />
        </a>
      </div>
      
      <v-row justify="center" class="instagram-reels-row">
        <v-col 
          v-for="(post, index) in instagramPosts" 
          :key="index"
          cols="12" 
          sm="6" 
          md="4"
          class="reel-col"
        >
          <div class="reel-card">
            <h3 class="reel-title">{{ post.name }}</h3>
            <div 
              class="reel-video-wrapper"
              @mouseenter="handleMouseEnter(index)"
              @mouseleave="handleMouseLeave(index)"
            >
              <!-- Cover Image -->
              <img
                v-if="post.coverSrc && !hoveredIndex[index]"
                :src="post.coverSrc"
                class="reel-cover"
                alt="Instagram reel cover"
              />
              
              <!-- Video -->
              <video
                v-if="post.videoSrc"
                :ref="el => videoRefs[index] = el"
                :src="post.videoSrc"
                class="reel-video"
                :class="{ 'video-hidden': !hoveredIndex[index] }"
                loop
                playsinline
              ></video>
              
              <a 
                :href="post.link" 
                target="_blank" 
                class="reel-overlay"
                :class="{ 'overlay-visible': hoveredIndex[index] }"
              >
                <span class="view-text">View on Instagram</span>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Press Section -->
  <section class="press-section" aria-label="Media Coverage">
    <v-container>
      <!-- TV Appearances Section -->
      <div class="tv-appearances-subsection">
        <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 2rem;">
          Latest TV Appearances
        </h2>
        
        <v-row justify="center" style="max-width: 1000px; margin: 0 auto; margin-bottom: 4rem;">
          <v-col 
            v-for="(video, index) in tvVideos" 
            :key="index"
            cols="12" 
            sm="6" 
            md="4"
          >
            <router-link 
              :to="{ path: '/press', query: { video: video.name } }"
              class="tv-card-link"
            >
              <v-card 
                class="tv-card"
                elevation="3"
              >
                <div class="tv-thumbnail-wrapper">
                  <video
                    :src="video.path"
                    class="tv-thumbnail"
                    muted
                    preload="metadata"
                  ></video>
                  <div class="tv-play-overlay">
                    <v-icon class="play-icon" size="60">mdi-play-circle</v-icon>
                  </div>
                </div>
                <v-card-text class="tv-card-content">
                  <div class="tv-source">{{ video.source }}</div>
                  <div class="tv-event">{{ video.event }}</div>
                  <div class="tv-date">{{ video.date }}</div>
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </div>

      <!-- Articles Section -->
      <div class="articles-subsection">
        <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 2rem;">
          Latest News
        </h2>
        
        <v-row justify="center" style="max-width: 1000px; margin: 0 auto;">
        <v-col 
          v-for="(article, index) in pressArticles" 
          :key="index"
          cols="12" 
          sm="6" 
          md="4"
        >
          <v-card 
            :href="article.link"
            target="_blank"
            class="press-card"
            elevation="3"
          >
            <div class="press-card-layout">
              <div class="press-preview">
                <img 
                  :src="`https://api.microlink.io/?url=${encodeURIComponent(article.link)}&screenshot=true&meta=false&embed=screenshot.url`"
                  :alt="`${article.source} preview`"
                  class="press-preview-img"
                  @error="handleImageError"
                />
              </div>
              <v-card-text class="press-card-content">
                <div class="press-date">{{ article.date }}</div>
                <div class="press-source">{{ article.source }}</div>
                <v-icon class="press-icon">mdi-open-in-new</v-icon>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
      </div>
    </v-container>
  </section>

  <!-- Sponsor & Partners Section -->
  <section class="sponsor-section" aria-label="Sponsors and Partners">
    <v-container>
      <div>
        <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 2rem; font-style: italic;">
          Our Sponsors & Partners
        </h2>
        
        <v-row justify="center" align="center" class="sponsors-row">
          <v-col
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            cols="12"
            sm="7"
            md="4"
            class="d-flex justify-center"
          >
            <a 
              :href="sponsor.link"
              target="_blank"
              class="sponsor-logo-wrapper"
            >
              <img
                :src="sponsor.logo"
                :alt="sponsor.name"
                class="sponsor-logo"
              />
            </a>
          </v-col>
        </v-row>
    </div>
    </v-container>
  </section>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'

import heroVideo from '/assets/home/hero.mp4'
import spqrLogo from '/logos/logo-text-white.webp'
import whrg2026Results from '/assets/home/whrg2026-results.webp'
import go2025Results from '/assets/home/go2025-results.webp'
import sapienzaLogo from '/assets/sapienza_logos/logo_sapienza_white.png'
import heroPoster from '/assets/home/hero-poster.webp'

import leftreel from '/assets/home/ig/igreel-whrg2026.mp4'
import leftcover from '/assets/home/ig/igreel-whrg2026-cover.webp'
import centercover from '/assets/home/ig/igreel-whrg2025-cover.webp'
import centerreel from '/assets/home/ig/igreel-whrg2025.mp4'
import rightreel from '/assets/home/ig/igreel-ukvisit2025.mp4'
import rightcover from '/assets/home/ig/igreel-ukvisit2025-cover.webp'

import boosterLogo from '/assets/sponsor/current/booster.webp'
import prismaLogo from '/assets/sponsor/current/prisma.webp'
import seewebLogo from '/assets/sponsor/current/seeweb.webp'

const stats = [
  { value: '1998', label: 'Competing since' },
  { value: '30', label: 'International competitions' },
  { value: '16', label: 'Team members' },
  // { value: '16', label: 'Publications' }
]

const pillars = [
  {
    title: 'Perception',
    text: 'Finding the ball, the lines and the other players from the robot\u2019s own cameras, frame after frame.',
    icon: 'mdi-eye-outline',
    color: '#F57C00'
  },
  {
    title: 'Localization',
    text: 'Knowing where the robot stands on a symmetric pitch, using only what it can see and feel.',
    icon: 'mdi-crosshairs-gps',
    color: '#1976D2'
  },
  {
    title: 'Motion',
    text: 'Walking, kicking and getting back up on two legs without losing balance.',
    icon: 'mdi-run-fast',
    color: '#822433'
  },
  {
    title: 'Team play',
    text: 'Deciding who goes for the ball and who covers, over an unreliable wireless link.',
    icon: 'mdi-account-group-outline',
    color: '#7B1FA2'
  }
]

// Taken from the event descriptions in assets/events/events.json
const featuredResults = [
  {
    medal: '\ud83e\udd48',
    placement: 'Second place',
    event: 'World Humanoid Robot Games 2026',
    where: 'Beijing, China',
    photo: whrg2026Results
  },
  {
    medal: '\ud83e\udd49',
    placement: 'Third place',
    event: 'RoboCup German Open 2025',
    where: 'Nuremberg, Germany',
    photo: go2025Results
  }
]

const results = [
  {
    medal: '\ud83c\udfc6',
    placement: 'Best Paper Award',
    event: 'RoboCup Symposium 2025',
    where: 'Self-supervised Feature Extraction for Enhanced Ball Detection on Soccer Robots'
  },
  {
    medal: '\ud83c\udfc6',
    placement: 'Best Paper Award',
    event: 'RoboCup Symposium 2023',
    where: 'Play Everywhere: A Temporal Logic based Game Environment Independent Approach for Playing'
  }
]

const instagramPosts = [
  {
    name: 'WHRG 2026',
    link: 'https://www.instagram.com/reel/Dcq7YCSsx1w/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==',
    videoSrc: leftreel,
    coverSrc: leftcover
  },
  {
    name: 'Maker Faire 2025',
    link: 'https://www.instagram.com/reel/DQJm6d4igGw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    videoSrc: centerreel,
    coverSrc: centercover
  },
  {
    name: 'WHRG 2025',
    link: 'https://www.instagram.com/reel/DNilL0cCyBG/?utm_source=ig_web_copy_link',
    videoSrc: rightreel,
    coverSrc: rightcover
  },
]

const sponsors = [
  {
    name: 'Booster',
    logo: boosterLogo,
    link: 'https://www.booster.tech/'
  },
  {
    name: 'Prisma',
    logo: prismaLogo,
    link: 'https://www.prismacompany.it/'
  },
  {
    name: 'Seeweb',
    logo: seewebLogo,
    link: 'https://www.seeweb.it/'
  }
]

const researchFields = [
  {
    title: 'Humanoid Robotics',
    description: 'Advanced research in bipedal locomotion, human-robot interaction, and anthropomorphic robot design.',
    icon: 'mdi-robot',
    color: '#822433'
  },
  {
    title: 'Multi-Agent Systems',
    description: 'Coordination and cooperation strategies for teams of autonomous robots in dynamic environments.',
    icon: 'mdi-network',
    color: '#1976D2'
  },
  {
    title: 'Computer Vision & Robot Perception',
    description: 'Real-time visual perception, object detection, scene understanding, sensor fusion, 3D perception, and environmental mapping for intelligent autonomous systems.',
    icon: 'mdi-camera-iris',
    color: '#F57C00'
  },
  {
    title: 'Edge Computing',
    description: 'Efficient on-board computation and distributed processing for real-time robot decision making.',
    icon: 'mdi-chip',
    color: '#7B1FA2'
  },
  {
    title: 'Deep Learning',
    description: 'Neural network architectures for robot learning, behavior optimization, and adaptive control.',
    icon: 'mdi-brain',
    color: '#C62828'
  },
  {
    title: 'Reinforcement Learning',
    description: 'Agent training through trial and error, reward-based learning, and policy optimization for autonomous decision-making.',
    icon: 'mdi-chart-line',
    color: '#388E3C'
  }
]

// SEO Configuration
useSeo({
  title: 'SPQR Team - RoboCup Research | Sapienza University of Rome',
  description: 'SPQR Team is the RoboCup research group at Sapienza University of Rome. Leading research in humanoid robotics, multi-agent systems, computer vision, deep learning, and reinforcement learning since 1998.',
  path: '/',
  canonical: 'https://spqr.diag.uniroma1.it/',
  ogTitle: 'SPQR Team - RoboCup Research | Sapienza University of Rome',
  ogDescription: 'Leading research in humanoid robotics, AI, and multi-agent systems since 1998. Part of Sapienza University of Rome\'s DIAG department.',
  ogUrl: 'https://spqr.diag.uniroma1.it/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  twitterTitle: 'SPQR Team - RoboCup Research | Sapienza University of Rome',
  twitterDescription: 'Leading research in humanoid robotics, AI, and multi-agent systems since 1998.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg'
})

const hoveredIndex = reactive({})
const videoRefs = ref([])
const pressArticles = ref([])
const tvVideos = ref([])

const handleMouseEnter = (index) => {
  hoveredIndex[index] = true
  const video = videoRefs.value[index]
  if (video) {
    video.muted = false
    video.play()
  }
}

const handleMouseLeave = (index) => {
  hoveredIndex[index] = false
  const video = videoRefs.value[index]
  if (video) {
    video.pause()
    video.currentTime = 0
    video.muted = true
  }
}

const handleImageError = (event) => {
  event.target.style.display = 'none'
}

const loadPressData = async () => {
  try {
    const response = await fetch(import.meta.env.BASE_URL + 'assets/press/press.json')
    const data = await response.json()
    
    // Get top 6 articles
    pressArticles.value = data.slice(0, 6)
  } catch (error) {
    console.error('Error loading press data:', error)
  }
}

const loadTVVideos = async () => {
  try {
    const response = await fetch(import.meta.env.BASE_URL + 'assets/press/tv.json')
    const data = await response.json()
    
    const videos = data.map(video => ({
      date: video.date,
      event: video.event,
      source: video.source,
      name: video.name,
      minute: video.minute || 0,
      second: video.second || 0,
      path: `${import.meta.env.BASE_URL}assets/press/${video.name}.mp4`
    }))
    
    // Sort by date (newest first) and get top 3
    tvVideos.value = videos.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'))
      const dateB = new Date(b.date.split('/').reverse().join('-'))
      return dateB - dateA
    }).slice(0, 3)
  } catch (error) {
    console.error('Error loading TV videos:', error)
  }
}

onMounted(() => {
  loadPressData()
  loadTVVideos()
})
</script>

<style scoped>
/* ---- Full screen video hero ---- */
.hero {
  position: relative;
  width: 100%;
  /* Fill exactly the space the app bar and the fixed footer leave free.
     settings.scss zooms the whole site per breakpoint, and viewport units are
     not scaled by zoom, so 100svh has to be divided by that factor to land on
     the real screen height. svh follows the mobile browser chrome, and
     flex-shrink keeps the page layout from squashing the hero. */
  height: calc(100svh / var(--site-zoom, 1) - var(--v-layout-top, 0px) - var(--v-layout-bottom, 0px));
  flex-shrink: 0;
  min-height: 460px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  /* 16:9 source: it fills a desktop screen as it is, and gets cropped to a
     central slice on a phone held upright */
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.3) 35%,
    rgba(0, 0, 0, 0.55) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

.hero-content {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 0 1.5rem;
}

.hero-sapienza {
  /* pinned near the top of the hero, right below the app bar, instead of
     travelling with the centred block */
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  /* vw units are not scaled by the site zoom either, so the width is divided by
     it to keep the mark the same share of the real screen at every breakpoint */
  width: calc(clamp(130px, 17vw, 225px) / var(--site-zoom, 1));
  height: auto;
  filter: drop-shadow(0 2px 14px rgba(0, 0, 0, 0.55));
}

.hero-title {
  margin: 0;
  line-height: 0;
}

.hero-logo {
  display: block;
  width: calc(clamp(240px, 42vw, 560px) / var(--site-zoom, 1));
  height: auto;
  margin: 0 auto;
  filter: drop-shadow(0 2px 22px rgba(0, 0, 0, 0.55));
}

.hero-subtitle {
  margin-top: 1.25rem;
  /* same treatment as .hero-since, one step larger */
  font-size: clamp(0.9rem, 1.9vw, 1.25rem);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
}

.hero-since {
  margin-top: 1.25rem;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.85;
  /* the flanking rules sit on the text's own centre line */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9em;
}

.hero-rule {
  width: 4.5em;
  height: 1px;
  background: currentColor;
}

.hero-scroll {
  position: absolute;
  bottom: 1.5rem;
  color: #fff;
  opacity: 0.8;
  text-decoration: none;
  animation: hero-bounce 2.4s ease-in-out infinite;
}

.hero-scroll:hover {
  opacity: 1;
}

@keyframes hero-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* Someone who asked for less motion gets a still frame and no bouncing arrow */
@media (prefers-reduced-motion: reduce) {
  .hero-scroll { animation: none; }
}

/* ---- Shared section rhythm ---- */
.home-section {
  max-width: 90rem;
  margin: 6rem auto;
  color: rgb(30, 30, 30);
}

.home-section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(30, 30, 30);
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.15rem;
  line-height: 1.8;
  text-align: center;
}

.lead-text a {
  color: #822433;
  text-decoration: none;
  font-weight: 500;
}

.lead-text a:hover {
  text-decoration: underline;
}

/* ---- Numbers ---- */
.stats-row {
  margin-top: 3rem;
}

.stat-col {
  text-align: center;
}

.stat-value {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #822433;
  line-height: 1.1;
}

.stat-label {
  margin-top: 0.35rem;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.7;
}

/* ---- What we do ---- */
.pillars-row {
  margin-top: 2.5rem;
}

.pillar-col {
  padding: 0.75rem;
}

.pillar-card {
  height: 100%;
  padding: 1.75rem 1.5rem;
  background: #f6f7f6;
  border-radius: 14px;
  border-top: 3px solid #822433;
}

.pillar-icon {
  margin-bottom: 0.75rem;
}

.pillar-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.pillar-text {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}

/* ---- Results ---- */
.featured-row {
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* narrower than the row below, so the two cards read as a highlight rather
     than as a banner */
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.featured-col {
  padding: 0.75rem;
}

.featured-card {
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  border-top: 4px solid #822433;
  background: linear-gradient(135deg, #ffffff 0%, #f6f7f6 100%);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.16);
}

.featured-photo {
  /* the two photos come in different shapes, this settles them on one. 3:2 is
     as short as they go before the trophy caption and the medals get clipped */
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.featured-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-body {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.3rem;
}

.featured-medal {
  font-size: 2.2rem;
  line-height: 1;
  flex-shrink: 0;
}

.featured-placement {
  font-size: 1.3rem;
  font-weight: 700;
  color: #822433;
  line-height: 1.2;
}

.featured-event {
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
}

.featured-where {
  font-size: 0.85rem;
  opacity: 0.7;
}

.results-row {
  margin-top: 1rem;
  /* same width as .featured-row so the two pairs of cards line up */
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.result-col {
  padding: 0.75rem;
}

.result-card {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f6f7f6 100%);
  border-left: 4px solid #822433;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.result-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.result-medal {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
}

.result-placement {
  font-weight: 600;
  color: #822433;
  line-height: 1.35;
}

.result-event {
  margin-top: 0.3rem;
  font-size: 0.95rem;
}

.result-where {
  font-size: 0.85rem;
  opacity: 0.7;
}

.research-fields-section {
  max-width: 90rem;
  margin: 4rem auto 4rem auto;
  padding: 3rem 2rem;
  background: #f6f7f6;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.research-fields-row {
  max-width: 1200px;
  margin: 0 auto;
}

.research-field-col {
  padding: 1rem;
}

.research-field-card {
  height: 100%;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-top: 4px solid transparent;
}

.research-field-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1) !important;
}

.research-field-card:nth-child(1):hover {
  border-top-color: #822433;
}

.research-field-card:nth-child(2):hover {
  border-top-color: #1976D2;
}

.research-field-card:nth-child(3):hover {
  border-top-color: #388E3C;
}

.research-field-card:nth-child(4):hover {
  border-top-color: #F57C00;
}

.research-field-card:nth-child(5):hover {
  border-top-color: #7B1FA2;
}

.research-field-card:nth-child(6):hover {
  border-top-color: #C62828;
}

.research-field-content {
  padding: 2rem 1.5rem !important;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 280px;
}

.field-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(130, 36, 51, 0.1) 0%, rgba(130, 36, 51, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.research-field-card:hover .field-icon-wrapper {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.field-icon {
  font-size: 2.5rem !important;
  transition: all 0.3s ease;
}

.research-field-card:hover .field-icon {
  transform: rotate(2deg);
}

.field-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: rgb(30, 30, 30);
  margin-bottom: 1rem;
  line-height: 1.3;
  min-height: 3rem;
  display: flex;
  align-items: center;
}

.field-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  margin: 0;
}

.instagram-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(255, 183, 77, 0.01) 5%, 
    rgba(255, 167, 38, 0.12) 50%, 
    rgba(255, 183, 77, 0.01) 95%, 
    rgba(255, 255, 255, 0) 100%
  );
}

.press-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(100, 150, 220, 0.01) 5%, 
    rgba(66, 165, 245, 0.12) 50%, 
    rgba(100, 150, 220, 0.01) 95%, 
    rgba(255, 255, 255, 0) 100%
  );
}

.instagram-icon-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.instagram-icon-link:hover {
  transform: translateY(-3px);
}

.instagram-icon {
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgb(219, 202, 167));
}

.instagram-icon:hover {
  filter: drop-shadow(0 6px 12px rgb(255, 255, 255));
}

.instagram-reels-row {
  max-width: 1000px;
  margin: 0 auto;
}

.reel-col {
  padding: 0.75rem;
}

.reel-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.reel-card:hover {
  transform: translateY(-5px);
}

.reel-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(30, 30, 30);
  margin-bottom: 1rem;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reel-video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.reel-video-wrapper:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transform: scale(1.02);
}

.reel-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
}

.reel-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.video-hidden {
  opacity: 0;
  pointer-events: none;
}

.reel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 40%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.5rem;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-visible {
  opacity: 1;
}

.view-text {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.press-card {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  border-left: 3px solid #822433;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

.press-card-layout {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.press-preview {
  width: 120px;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.press-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.press-card:hover .press-preview-img {
  opacity: 1;
}

.press-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 120px;
  width: calc(100% - 120px);
  height: 100%;
  background: linear-gradient(135deg, rgba(130, 36, 51, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.press-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px #202f5e44 !important;
  border-left-width: 4px;
}

.press-card-content {
  position: relative;
  z-index: 1;
  padding: 12px 16px !important;
  flex: 1;
}

.press-date {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.press-source {
  font-size: 1rem;
  font-weight: 700;
  color: #822433;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 0.3rem;
}

.press-icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: #822433;
  opacity: 0.6;
  transition: all 0.3s ease;
  font-size: 18px;
}

.press-card:hover .press-icon {
  opacity: 1;
  transform: translate(3px, -3px);
}

.sponsor-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(76, 175, 80, 0.01) 5%, 
    rgba(102, 187, 106, 0.12) 50%, 
    rgba(76, 175, 80, 0.06) 95%, 
    rgba(255, 255, 255, 0) 100%
  );
}

.sponsors-row {
  max-width: 1000px;
  margin: 0 auto;
}

.sponsor-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transition: transform 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.sponsor-logo-wrapper:hover {
  transform: translateY(-5px);
}

.sponsor-logo {
  max-width: 300px;
  max-height: 120px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: grayscale(20%);
  transition: all 0.3s ease;
}

.sponsor-logo:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}

/* TV Appearances Cards */
.tv-appearances-subsection {
  margin-bottom: 4rem;
}

.tv-card-link {
  text-decoration: none;
  display: block;
}

.tv-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border-left: 3px solid #822433;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.tv-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(32, 47, 94, 0.27) !important;
  border-left-width: 4px;
}

.tv-thumbnail-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
}

.tv-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tv-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tv-card:hover .tv-play-overlay {
  background: rgba(130, 36, 52, 0.338);
}

.play-icon {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
}

.tv-card:hover .play-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.7));
}

.tv-card-content {
  padding: 1rem !important;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.tv-source {
  font-size: 1.1rem;
  font-weight: 700;
  color: #822433;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}

.tv-event {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.4rem;
  font-style: italic;
}

.tv-date {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}
</style>