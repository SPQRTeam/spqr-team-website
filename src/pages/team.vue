<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/team/cover.png"
            alt="Team Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">TEAM</h1>
            </div>
        </v-img>
    </div>

    <div class="carousel-background-section">
        <div 
            class="carousel-background-blur"
            :style="{ backgroundImage: `url(${currentPhoto})` }"
        ></div>
        <div class="carousel-background-gradient"></div>
        
        <v-container>

            <v-carousel
                cycle
                :interval="5000"
                hide-delimiters
                show-arrows="hover"
                height="auto"
                class="team-carousel"
                @update:model-value="updateBackground"
            >
                <v-carousel-item
                    v-for="(photo, i) in team_photos"
                    :key="i"
                    class="carousel-item-wrapper"
                >
                    <div class="carousel-content">
                        <div class="photo-title">{{ photo.title }}</div>
                        <v-img
                            :src="photo.image"
                            :alt="photo.title"
                            class="team-photo"
                            aspect-ratio="16/9"
                            contain
                        ></v-img>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </div>

    <v-container>

        <!-- <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider> -->

        <div class="section-title">Members</div>

        <v-row class="members-grid" justify="center">
            <v-col cols="12" sm="6" md="6" lg="3" v-for="member in teamMembers" :key="member.name" class="member-col">
                <div class="member-card">
                    <v-img
                        :src="member.image"
                        :alt="member.name"
                        class="member-photo"
                        cover
                    ></v-img>
                    <div class="member-name">{{ member.name }}</div>
                    <div class="member-role">{{ member.role }}</div>
                </div>
            </v-col>
        </v-row>

        <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider>

        <div class="section-title">Past Members</div>

        <v-row class="past-members-section">
            <v-col cols="12" md="6" class="past-members-col">
                <h3 class="past-members-subtitle">Team Leaders</h3>
                <ul class="past-members-list">
                    <li v-for="leader in pastTeamLeaders" :key="leader.name">
                        {{ leader.name }}<span v-if="leader.years"> - {{ leader.years }}</span>
                    </li>
                </ul>
            </v-col>

            <v-col cols="12" md="6" class="past-members-col">
                <h3 class="past-members-subtitle">Students</h3>
                <v-row>
                    <v-col cols="12" lg="6">
                        <ul class="past-members-list">
                            <li v-for="student in pastStudentsColumn1" :key="student.name">
                                {{ student.name }}
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <ul class="past-members-list">
                            <li v-for="student in pastStudentsColumn2" :key="student.name">
                                {{ student.name }}
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'Team - SPQR Team | Sapienza University of Rome',
  description: 'Meet the SPQR Team members: researchers, PhD students, and collaborators working on RoboCup humanoid robotics and AI research at Sapienza University of Rome.',
  path: '/team/',
  canonical: 'https://spqr.diag.uniroma1.it/team/',
  ogTitle: 'Team - SPQR Team',
  ogDescription: 'Meet our research team working on RoboCup humanoid robotics and AI.',
  ogUrl: 'https://spqr.diag.uniroma1.it/team/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/team/cover.png',
  twitterTitle: 'Team - SPQR Team',
  twitterDescription: 'Meet our research team working on RoboCup humanoid robotics and AI.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/team/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/team/cover.png'
})

const baseUrl = import.meta.env.BASE_URL

const team_photos = ref([])

const loadTeamPhotos = async () => {
    try {
        const response = await fetch(baseUrl + 'assets/team/team_photos.json')
        const data = await response.json()
        
        team_photos.value = data.map(photo => ({
            image: baseUrl + 'assets/team/' + photo.image,
            title: photo.title
        }))
        
        // Set initial photo
        if (team_photos.value.length > 0) {
            currentPhoto.value = team_photos.value[0].image
        }
    } catch (error) {
        console.error('Error loading team photos:', error)
    }
}

const teamMembers = ref([])

const loadTeamMembers = async () => {
    try {
        const response = await fetch(baseUrl + 'assets/team/team.json')
        const data = await response.json()
        
        // Filter current members (those with images)
        teamMembers.value = data
            .filter(member => member.image)
            .map(member => ({
                name: member.name,
                role: member.role,
                image: baseUrl + 'assets/team/' + member.image
            }))
    } catch (error) {
        console.error('Error loading team members:', error)
    }
}

const pastTeamLeaders = ref([])
const pastStudentsColumn1 = ref([])
const pastStudentsColumn2 = ref([])

const loadPastMembers = async () => {
    try {
        const response = await fetch(baseUrl + 'assets/team/team.json')
        const data = await response.json()
        
        // Filter past members (those without images)
        const allPastMembers = data
            .filter(member => !member.image)
            .map(member => ({
                name: member.name,
                role: member.role,
                years: member.years || ''
            }))
        
        // Separate team leaders and students
        pastTeamLeaders.value = allPastMembers.filter(member => member.role === 'Team Leader')
        const students = allPastMembers.filter(member => member.role === 'Student')
        
        // Split students into two columns
        const halfPoint = Math.ceil(students.length / 2)
        pastStudentsColumn1.value = students.slice(0, halfPoint)
        pastStudentsColumn2.value = students.slice(halfPoint)
    } catch (error) {
        console.error('Error loading past members:', error)
    }
}

const currentPhoto = ref('')

const updateBackground = (index) => {
    currentPhoto.value = team_photos.value[index].image
}

onMounted(() => {
    loadTeamPhotos()
    loadTeamMembers()
    loadPastMembers()
})
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 30% !important;
}

.carousel-background-section {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    overflow: hidden;
}

.carousel-background-blur {
    position: absolute;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
    background-size: cover;
    background-position: center;
    filter: blur(25px);
    transform: scale(1.2);
    z-index: 0;
    transition: background-image 0.8s ease-in-out;
}

.carousel-background-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, transparent 0%, rgba(241, 244, 243, 0.2) 60%, rgba(241, 244, 243, 0.7) 90%, #f1f4f3 100%);
    z-index: 1;
}

.carousel-background-section .v-container {
    position: relative;
    z-index: 2;
}

.section-title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 4rem;
    color: rgb(30, 30, 30);
}

.team-carousel {
    max-width: 1500px;
    margin: 0 auto 2rem;
    border-radius: 10px;
    overflow: hidden;
}

.team-carousel :deep(.v-carousel-item) {
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-item-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100;
}

.carousel-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1500px;
    gap: 2rem;
}

.team-photo {
    border-radius: 10px;
    width: 100%;
}

.photo-title {
    text-align: center;
    font-weight: 500;
    font-size: clamp(1.7rem, 4vw, 2.5rem);
    color: rgb(255, 255, 255);
    width: 100%;
    flex-shrink: 0;
    margin-top: 2rem;
    padding: 0 1rem;
}

.members-grid {
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

.member-col {
    padding: 8px !important;
}

.member-card {
    text-align: center;
}

.member-photo {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.member-name {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(30, 30, 30);
}

.member-role {
    font-size: 1.1rem;
    font-style: italic;
    color: rgb(100, 100, 100);
    margin-top: 0.25rem;
}

.past-members-section {
    max-width: 1200px;
    margin: 2rem auto;
}

.past-members-col {
    padding: 1rem;
}

.past-members-subtitle {
    font-size: 1.8rem;
    font-weight: 600;
    color: rgb(30, 30, 30);
    margin-bottom: 1rem;
}

.past-members-list {
    list-style-type: disc;
    padding-left: 2rem;
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgb(50, 50, 50);
}

.past-members-list li {
    margin-bottom: 0.5rem;
}
</style>
