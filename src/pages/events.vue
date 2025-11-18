<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/events/cover.png"
            alt="Events Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">EVENTS</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <v-row class="events-grid" justify="center">
            <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                v-for="event in events" 
                :key="event.name"
                class="event-col"
            >
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <!-- Front of card -->
                        <div class="flip-card-front">
                            <v-img
                                :src="getImageUrl(event.cover)"
                                :alt="event.name"
                                class="event-cover"
                                aspect-ratio="1"
                                cover
                            >
                                <div class="event-overlay">
                                    <h3 class="event-title">{{ event.name }}</h3>
                                </div>
                            </v-img>
                        </div>
                        
                        <!-- Back of card -->
                        <div class="flip-card-back">
                            <div class="event-back-content">
                                <h3 class="event-back-title">{{ event.name }}</h3>
                                <p class="event-date">{{ event.month }} {{ event.days }}, {{ event.year }}</p>
                                <p class="event-description">{{ event.description }}</p>
                                <div class="event-links">
                                    <a 
                                        v-if="event.links[0].site" 
                                        :href="event.links[0].site" 
                                        target="_blank"
                                        class="event-link"
                                    >
                                        Website
                                    </a>
                                    <a 
                                        v-if="event.links[0].video" 
                                        :href="event.links[0].video" 
                                        target="_blank"
                                        class="event-link"
                                    >
                                        Video
                                    </a>
                                    <a 
                                        v-if="event.links[0].results" 
                                        :href="event.links[0].results" 
                                        target="_blank"
                                        class="event-link"
                                    >
                                        Results
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'Events - SPQR Team | RoboCup Competitions',
  description: 'SPQR Team events, RoboCup competitions, robotics tournaments, and public demonstrations. Follow our participation in international robotics challenges.',
  path: '/events/',
  canonical: 'https://spqr.diag.uniroma1.it/events/',
  ogTitle: 'Events - SPQR Team',
  ogDescription: 'RoboCup competitions and robotics events.',
  ogUrl: 'https://spqr.diag.uniroma1.it/events/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png',
  twitterTitle: 'Events - SPQR Team',
  twitterDescription: 'RoboCup competitions and robotics events.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/events/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png'
})

const baseUrl = import.meta.env.BASE_URL

const getImageUrl = (path) => {
    return new URL(path.replace('@/', '../'), import.meta.url).href
}

const events = ref([])

const loadEvents = async () => {
    try {
        const response = await fetch(baseUrl + 'assets/events/events.json')
        const data = await response.json()
        
        events.value = data.map(event => ({
            name: event.name,
            year: event.year,
            month: event.month,
            days: event.days,
            description: event.description,
            cover: baseUrl + 'assets/events/' + event.cover,
            links: [
                {
                    site: event.site || '',
                    video: event.video || '',
                    results: event.results || '',
                }
            ]
        }))
    } catch (error) {
        console.error('Error loading events:', error)
    }
}

onMounted(() => {
    loadEvents()
})


</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 50% !important;
}

.events-grid {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 2rem 0;
}

.event-col {
    padding: 1rem;
}

/* Flip card container */
.flip-card {
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.9s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
}

.flip-card-front {
    background-color: #bbb;
}

.flip-card-back {
    background-color: #822433;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

/* Front card styling */
.event-cover {
    width: 100%;
    height: 100%;
}

.event-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.event-title {
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    line-height: 1.3;
}

/* Back card styling */
.event-back-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.event-back-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

.event-date {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.event-description {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}

.event-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.event-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s;
}

.event-link:hover {
    background-color: white;
    color: #822433;
}

@media (max-width: 600px) {
    .event-title {
        font-size: 1.2rem;
    }
    
    .event-back-title {
        font-size: 1.1rem;
    }
    
    .event-description {
        font-size: 0.85rem;
        -webkit-line-clamp: 5;
    }
}
</style>