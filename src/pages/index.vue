<template>
  <v-container>
    <v-img
      :style="{ 'max-height': '250px', 'margin-top': '2rem' }"
      src="/assets/home/cover.png"
      alt="SPQR Team Cover"
    ></v-img>

    <div 
      style="
        max-width: 90rem;
        margin: auto; 
        margin-top: 4rem;
        color: rgb(30, 30, 30);
        text-align: center;
      "
    >
      <p style="font-size: 23px; font-weight: 500;">
        SPQR Team is the RoboCup research group of the <a href="http://www.diag.uniroma1.it/" target="_blank" style="color: #822433; text-decoration: none;">Department of Computer, Control, and Management Engineering Antonio Ruberti</a> 
        at <a href="https://www.uniroma1.it/it/" target="_blank" style="color: #822433; text-decoration: none;">Sapienza University of Rome</a>, involved in RoboCup competitions since 1998.
      </p>
    </div>

    <!-- Research Fields Section -->
    <div class="research-fields-section">
      <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 2rem;">
        Our Research Fields
      </h2>
      
      <v-row justify="center" class="research-fields-row">
        <v-col
          v-for="field in researchFields"
          :key="field.title"
          cols="12"
          sm="6"
          md="4"
          class="research-field-col"
        >
          <v-card class="research-field-card" elevation="4">
            <v-card-text class="research-field-content">
              <div class="field-icon-wrapper">
                <v-icon class="field-icon" :color="field.color">{{ field.icon }}</v-icon>
              </div>
              <h3 class="field-title">{{ field.title }}</h3>
              <p class="field-description">{{ field.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>


  <!-- Instagram Reels Section -->
  <div class="instagram-section">
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
  </div>

  <!-- Press Section -->
  <div class="press-section">
    <v-container>
      <div>
        <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 2rem;">
          Latest Press Coverage
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
  </div>

  <!-- Sponsor & Partners Section -->
  <div class="sponsor-section">
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
  </div>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import leftreel from '/assets/home/ig/igreel-mf2025.mp4'
import centerreel from '/assets/home/ig/igreel-whrg2025.mp4'
import rightreel from '/assets/home/ig/igreel-ukvisit2025.mp4'
import leftcover from '/assets/home/ig/igreel-mf2025-cover.png'
import centercover from '/assets/home/ig/igreel-whrg2025-cover.png'
import rightcover from '/assets/home/ig/igreel-ukvisit2025-cover.png'
import boosterLogo from '/assets/sponsor/current/booster.png'
import prismaLogo from '/assets/sponsor/current/prisma.png'
import seewebLogo from '/assets/sponsor/current/seeweb.png'

const instagramPosts = [
  {
    name: 'Maker Faire 2025',
    link: 'https://www.instagram.com/reel/DQJm6d4igGw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    videoSrc: leftreel,
    coverSrc: leftcover
  },
  {
    name: 'World Humanoid Robot Games 2025',
    link: 'https://www.instagram.com/reel/DNilL0cCyBG/?utm_source=ig_web_copy_link',
    videoSrc: centerreel,
    coverSrc: centercover
  },
  {
    name: 'UK Foreign Secretary Visit',
    link: 'https://www.instagram.com/reel/DIRNGR5twDn/?utm_source=ig_web_copy_link',
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

const hoveredIndex = reactive({})
const videoRefs = ref([])
const pressArticles = ref([])

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
    const response = await fetch(import.meta.env.BASE_URL + 'assets/press/press.csv')
    const csvText = await response.text()
    const lines = csvText.split('\n').slice(1) // Skip header
    
    const articles = lines
      .filter(line => line.trim())
      .map(line => {
        const [date, source, link] = line.split(',')
        return { date: date.trim(), source: source.trim(), link: link.trim() }
      })
      .slice(0, 6) // Get top 6
    
    pressArticles.value = articles
  } catch (error) {
    console.error('Error loading press data:', error)
  }
}

onMounted(() => {
  loadPressData()
})
</script>

<style scoped>
.research-fields-section {
  max-width: 90rem;
  margin: 4rem auto 2rem auto;
  padding: 0 1rem;
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
  padding: 3rem 0;
  background: radial-gradient(ellipse at center, rgba(180, 130, 213, 0.1) 0%, rgba(189, 18, 18, 0.127) 10%, rgba(211, 176, 127, 0.111) 40%, #f1f4f3 100%);
  margin-top: 4rem;
}

.press-section {
  padding: 3rem 0;
  background: radial-gradient(ellipse at center, rgba(100, 150, 220, 0.12) 0%, rgba(50, 120, 200, 0.08) 30%, rgba(80, 140, 210, 0.05) 60%, transparent 100%);
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
  font-size: 1.2rem;
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
  padding: 3rem 0;
  background: linear-gradient(180deg, rgba(17, 124, 62, 0.03) 0%, rgba(105, 208, 74, 0.08) 10%, rgba(130, 124, 36, 0.03) 100%);
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
</style>