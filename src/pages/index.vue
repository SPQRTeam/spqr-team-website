<template>
  <v-container>
    <v-img
      :style="{ 'max-height': '250px' }"
      src="@/assets/home/cover.png"
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
        SPQR Team is the RoboCup team of the <a href="http://www.diag.uniroma1.it/" target="_blank" style="color: #822433; text-decoration: none;">Department of Computer, Control, and Management Engineering Antonio Ruberti</a> 
        at <a href="https://www.uniroma1.it/it/" target="_blank" style="color: #822433; text-decoration: none;">Sapienza University of Rome</a>, involved in RoboCup competitions since 1998.
      </p>
    </div>

  </v-container>

  <!-- Instagram Reels Section -->
  <div class="instagram-section">
    <v-container>
      <h2 style="text-align: center; font-size: 2.5rem; font-weight: 600; color: rgb(30, 30, 30); margin-bottom: 1rem;">
        Latest from Instagram
      </h2>
      
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

</template>

<script setup>
import { ref, reactive } from 'vue'
import leftreel from '@/assets/home/ig/igreel-mf2025.mp4'
import centerreel from '@/assets/home/ig/igreel-whrg2025.mp4'
import rightreel from '@/assets/home/ig/igreel-ukvisit2025.mp4'
import leftcover from '@/assets/home/ig/igreel-mf2025-cover.png'
import centercover from '@/assets/home/ig/igreel-whrg2025-cover.png'
import rightcover from '@/assets/home/ig/igreel-ukvisit2025-cover.png'

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

// Track which video is being hovered
const hoveredIndex = reactive({})
const videoRefs = ref([])

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
</script>



<style scoped>
.instagram-section {
  padding: 3rem 0;
  background: radial-gradient(ellipse at center, rgba(131, 58, 180, 0.1) 0%, rgba(253, 29, 29, 0.15) 10%, rgba(252, 176, 69, 0.03) 80%, #f1f4f3 100%);
  margin-top: 4rem;
  margin-bottom: 4rem;
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
</style>