<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            :style="{ height: '350px' }"            
            src="@/assets/press/cover.png"
            alt="Press Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">PRESS</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <div style="margin-top: 4rem; margin-bottom: 4rem;">
            <div v-for="year in sortedYears" :key="year" class="year-section">
                <h2 class="year-title">{{ year }}</h2>
                <v-row justify="center" style="max-width: 1400px; margin: 0 auto;">
                    <v-col 
                        v-for="(article, index) in articlesByYear[year]" 
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
        </div>
    </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

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
        const response = await fetch('/spqr-team-website/press.csv')
        const csvText = await response.text()
        const lines = csvText.split('\n').slice(1) // Skip header
        
        const articles = lines
            .filter(line => line.trim())
            .map(line => {
                const [date, source, link] = line.split(',')
                const dateStr = date.trim()
                // Extract year from date format DD/MM/YYYY
                const year = dateStr.split('/')[2]
                return { 
                    date: dateStr, 
                    source: source.trim(), 
                    link: link.trim(),
                    year: year
                }
            })
        
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
.cover-image :deep(img) {
    object-position: center 90% !important;
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
</style>