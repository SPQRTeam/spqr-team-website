<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/media/cover.png"
            alt="Media Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">MEDIA</h1>
            </div>
        </v-img>
    </div>

    <!-- Video Player Section -->
    <v-container v-if="tvVideos.length > 0 && selectedVideo" class="video-section">
        <h2 class="section-title">YouTube</h2>
        <div class="video-player-container">
            <div class="video-main">
                <div class="video-player-wrapper">
                    <iframe 
                        ref="videoPlayer"
                        :key="selectedVideo.videoId"
                        :src="getYouTubeEmbedUrl(selectedVideo)"
                        class="video-player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <div class="video-info">
                    <div class="video-info-header">
                        <div>
                            <h3 class="video-title">{{ selectedVideo.title }}</h3>
                        </div>
                        <v-btn
                            color="#822433"
                            variant="elevated"
                            :href="getYouTubeWatchUrl(selectedVideo)"
                            target="_blank"
                            class="skip-button"
                        >
                            <v-icon left>mdi-youtube</v-icon>
                            Watch on YouTube
                        </v-btn>
                    </div>
                </div>
            </div>
            <div class="video-list-sidebar">
                <h3 class="sidebar-title">All Videos</h3>
                <div class="video-list-scroll">
                    <div 
                        v-for="(video, index) in tvVideos" 
                        :key="index"
                        class="video-list-item"
                        :class="{ active: selectedVideo && selectedVideo.videoId === video.videoId }"
                        @click="selectVideo(video)"
                    >
                        <div class="video-list-item-content">
                            <div class="video-list-title">{{ video.title }}</div>
                        </div>
                        <v-icon class="video-list-icon">mdi-play-circle</v-icon>
                    </div>
                </div>
            </div>
        </div>
    </v-container>

    <!-- Instagram Section -->
    <v-container v-if="instagramPosts.length > 0" class="instagram-section">
        <h2 class="section-title">Instagram</h2>
        <div class="instagram-grid">
            <a 
                v-for="(post, index) in instagramPosts.slice(0, 9)" 
                :key="index"
                :href="post.link"
                target="_blank"
                class="instagram-item"
            >
                <div class="instagram-embed-wrapper">
                    <iframe 
                        :src="getInstagramEmbedUrl(post)"
                        class="instagram-embed"
                        frameborder="0"
                        scrolling="no"
                        allowtransparency="true"
                    >
                    </iframe>
                </div>
                <div class="instagram-overlay">
                    <v-icon class="instagram-icon">mdi-instagram</v-icon>
                </div>
            </a>
        </div>
    </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// TV Videos from CSV
const tvVideos = ref([])

// Video player reference
const videoPlayer = ref(null)

// Selected video state
const selectedVideo = ref(null)

// Instagram posts
const instagramPosts = ref([])

// Load TV videos from JSON
const loadTVVideos = async () => {
    try {
        const response = await fetch(import.meta.env.BASE_URL + 'assets/media/youtube.json')
        const data = await response.json()
        
        const videos = data.map(video => ({
            title: video.title,
            videoId: video.videoId
        }))
        
        tvVideos.value = videos
        
        // Check if there's a video query parameter
        const videoId = route.query.video
        if (videoId) {
            const foundVideo = tvVideos.value.find(v => v.videoId === videoId)
            if (foundVideo) {
                selectedVideo.value = foundVideo
                // Scroll to video section after a short delay
                setTimeout(() => {
                    const videoSection = document.querySelector('.video-section')
                    if (videoSection) {
                        videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                }, 300)
            } else if (tvVideos.value.length > 0) {
                selectedVideo.value = tvVideos.value[0]
            }
        } else if (tvVideos.value.length > 0) {
            // Initialize selected video with the first one if no query param
            selectedVideo.value = tvVideos.value[0]
        }
    } catch (error) {
        console.error('Error loading TV videos:', error)
    }
}

// Select a video
const selectVideo = (video) => {
    selectedVideo.value = video
}

// Get YouTube embed URL
const getYouTubeEmbedUrl = (video) => {
    const baseUrl = `https://www.youtube.com/embed/${video.videoId}`
    const params = new URLSearchParams({
        autoplay: '0',
        rel: '0',
        modestbranding: '1'
    })
    return `${baseUrl}?${params.toString()}`
}

// Get YouTube watch URL
const getYouTubeWatchUrl = (video) => {
    return `https://www.youtube.com/watch?v=${video.videoId}`
}

// Load Instagram posts from JSON
const loadInstagramPosts = async () => {
    try {
        const response = await fetch(import.meta.env.BASE_URL + 'assets/media/instagram.json')
        const data = await response.json()
        
        const posts = data.map(post => ({
            link: post.link,
            postId: extractPostId(post.link)
        }))
        
        instagramPosts.value = posts
    } catch (error) {
        console.error('Error loading Instagram posts:', error)
    }
}

// Extract post ID from Instagram URL
const extractPostId = (url) => {
    // Extract post ID from URLs like:
    // https://www.instagram.com/p/ABC123xyz/
    // https://www.instagram.com/reel/ABC123xyz/
    const match = url.match(/\/(p|reel)\/([^\/]+)/)
    return match ? match[2] : ''
}

// Get Instagram embed URL
const getInstagramEmbedUrl = (post) => {
    return `https://www.instagram.com/p/${post.postId}/embed/captioned/`
}

const pressArticles = ref([])

const articlesByYear = computed(() => {
    const grouped = {}
    pressArticles.value.forEach(article => {
        const year = article.year
        if (!grouped[year]) {
            grouped[year] = []
        }
        grouped[year].push(article)
    })
    return grouped
})

const sortedYears = computed(() => {
    return Object.keys(articlesByYear.value).sort((a, b) => b - a)
})

const handleImageError = (event) => {
    event.target.style.display = 'none'
}

const loadPressData = async () => {
    try {
        const response = await fetch(import.meta.env.BASE_URL + 'assets/press/press.json')
        const data = await response.json()
        
        const articles = data.map(article => {
            const dateStr = article.date
            // Extract year from date format DD/MM/YYYY
            const year = dateStr.split('/')[2]
            return { 
                date: dateStr, 
                source: article.source, 
                link: article.link,
                year: year
            }
        })
        
        pressArticles.value = articles
    } catch (error) {
        console.error('Error loading press data:', error)
    }
}

onMounted(() => {
    loadTVVideos()
    loadInstagramPosts()
    loadPressData()
})
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 40% !important;
}

.year-section {
    margin-bottom: 4rem;
}

.year-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: #822433;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid #822433;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
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

/* Video Player Section Styles */
.video-section {
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 1400px;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: #822433;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid #822433;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.video-player-container {
    display: flex;
    gap: 1.5rem;
    background: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.video-player-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    background: #000;
    border-radius: 8px;
    overflow: hidden;
}

.video-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.video-info {
    padding: 0.5rem 0;
}

.video-info-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
}

.video-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #822433;
    margin-bottom: 0.25rem;
}

.video-source {
    font-size: 1rem;
    color: #555;
    margin: 0 0 0.25rem 0;
    text-transform: uppercase;
    font-weight: 600;
}

.video-date {
    font-size: 0.95rem;
    color: #666;
    margin: 0;
}

.video-event {
    font-size: 0.9rem;
    color: #555;
    font-style: italic;
    margin: 0;
}

.skip-button {
    white-space: nowrap;
    flex-shrink: 0;
}

.video-list-sidebar {
    width: 320px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}

.sidebar-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #822433;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #822433;
}

.video-list-scroll {
    overflow-y: auto;
    max-height: 500px;
    padding-right: 0.5rem;
}

.video-list-scroll::-webkit-scrollbar {
    width: 6px;
}

.video-list-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.video-list-scroll::-webkit-scrollbar-thumb {
    background: #822433;
    border-radius: 3px;
}

.video-list-scroll::-webkit-scrollbar-thumb:hover {
    background: #6a1d2a;
}

.video-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    background: #f8f9fa;
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
}

.video-list-item:hover {
    background: #e9ecef;
    border-left-color: #822433;
    transform: translateX(3px);
}

.video-list-item.active {
    background: linear-gradient(135deg, rgba(130, 36, 51, 0.1) 0%, rgba(130, 36, 51, 0.05) 100%);
    border-left-color: #822433;
    border-left-width: 4px;
}

.video-list-item-content {
    flex: 1;
}

.video-list-title {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.3rem;
    line-height: 1.3;
}

.video-list-source {
    font-size: 0.85rem;
    font-weight: 600;
    color: #822433;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
}

.video-list-date {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.15rem;
}

.video-list-event {
    font-size: 0.75rem;
    color: #888;
    font-style: italic;
}

.video-list-icon {
    color: #822433;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

.video-list-item:hover .video-list-icon,
.video-list-item.active .video-list-icon {
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 960px) {
    .video-player-container {
        flex-direction: column;
    }
    
    .video-list-sidebar {
        width: 100%;
    }
    
    .video-list-scroll {
        max-height: 300px;
    }
}

@media (max-width: 600px) {
    .video-info-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .skip-button {
        width: 100%;
        margin-top: 0.75rem;
    }
}

/* Instagram Section Styles */
.instagram-section {
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 1400px;
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1rem 0;
}

.instagram-item {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* 1:1 aspect ratio */
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.instagram-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(130, 36, 51, 0.2);
}

.instagram-embed-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.instagram-embed {
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.instagram-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(130, 36, 51, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: none;
}

.instagram-item:hover .instagram-overlay {
    background: rgba(130, 36, 51, 0.1);
}

.instagram-icon {
    font-size: 3rem;
    color: #822433;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
}

.instagram-item:hover .instagram-icon {
    opacity: 0.9;
    transform: scale(1);
}

/* Instagram Responsive Design */
@media (max-width: 960px) {
    .instagram-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
}

@media (max-width: 600px) {
    .instagram-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
}
</style>