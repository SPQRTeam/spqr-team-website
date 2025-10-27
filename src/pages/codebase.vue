<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/codebase/cover.jpg"
            alt="Codebase Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">CODEBASE</h1>
            </div>
        </v-img>
    </div>

    <v-container class="py-8">
        
        <div class="section-title">Codebase @ Booster Robots</div>

        <v-row justify="center" class="mb-8">
            <v-col
                v-for="repo in booster_repositories"
                :key="repo.name"
                cols="12"
                sm="6"
                md="4"
                lg="4"
                xl="3"
            >
                <v-card
                    :href="repo.link"
                    target="_blank"
                    class="repo-card booster-card"
                    elevation="3"
                    hover
                    :style="{
                        backgroundImage: `linear-gradient(to bottom, #f1f4f3 0%, #fafafa 40%, transparent 75%), url(${repo.cover})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
                >
                    <v-card-text class="d-flex flex-column align-center justify-center text-center pa-6">
                        <v-icon size="60" color="#822433" class="mb-4">mdi-github</v-icon>
                        <h3 class="repo-name">{{ repo.name }}</h3>
                        <p class="repo-description">{{ repo.description }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider>

        <!-- NAO Repositories Section -->
        <div class="section-title">Codebase @ Nao Robots</div>
        
        <v-row justify="center" class="nao-grid">
            <v-col
                v-for="repo in nao_repositories"
                :key="repo.name"
                cols="12"
                sm="6"
                md="5"
                class="d-flex justify-center"
            >
                <v-card
                    :href="repo.link"
                    target="_blank"
                    class="repo-card nao-card"
                    elevation="3"
                    hover
                    :disabled="!repo.link"
                >
                    <v-card-text class="d-flex flex-column align-center justify-center text-center pa-4">
                        <v-icon size="60" color="#822433" class="mb-4">mdi-github</v-icon>
                        <h3 class="repo-name">{{ repo.name }}</h3>
                        <p class="repo-description">{{ repo.description }}</p>
                        <v-chip v-if="!repo.link" color="warning" size="small" class="mt-2">
                            Coming Soon
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const repositories = ref([])

const loadRepositories = async () => {
    try {
        const response = await fetch(baseUrl + 'assets/codebase/codebase.json')
        const data = await response.json()
        
        repositories.value = data.map(repo => ({
            name: repo.name,
            description: repo.description,
            link: repo.link || '',
            cover: repo.cover ? baseUrl + 'assets/codebase/' + repo.cover : '',
            platform: repo.platform
        }))
    } catch (error) {
        console.error('Error loading repositories:', error)
    }
}

const booster_repositories = computed(() => {
    return repositories.value.filter(repo => repo.platform === 'Booster')
})

const nao_repositories = computed(() => {
    return repositories.value.filter(repo => repo.platform === 'Nao')
})

onMounted(() => {
    loadRepositories()
})


</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 60% !important;
}

.section-title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 3rem;
    color: rgb(30, 30, 30);
}

.repo-card {
    text-decoration: none;
    background-color: #f1f4f3;
    border-bottom: 20px solid #822433;
    border-radius: 10px 10px 0px 0px;
    color: black;
    transition: transform 0.3s ease-in-out;
}

.repo-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px #1b1f2d98 !important;
}

.booster-card {
    aspect-ratio: 1;
    min-height: 280px;
}

.nao-grid {
    max-width: 1000px;
    margin: 0 auto;
    row-gap: 5px !important;
    column-gap: 5px !important;
}

.nao-card {
    width: 100%;
    max-width: 400px;
}

.repo-card.v-card--disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.repo-card.v-card--disabled:hover {
    transform: none;
}

.repo-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.repo-description {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
}
</style>