<template>

    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/publications/cover.png"
            alt="Publications Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">PUBLICATIONS</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <v-row 
            v-for="(paper, index) in papers" 
            :key="index"
            class="paper-row mb-8"
        >
            <!-- Left side: Cover image -->
            <v-col cols="12" md="4" class="d-flex justify-center align-start">
                <v-img
                    :src="paper.cover"
                    :alt="paper.title"
                    max-width="340"
                    class="paper-cover elevation-3"
                ></v-img>
            </v-col>

            <!-- Right side: Title, extras, links, and abstract -->
            <v-col cols="12" md="8">
                <!-- Title -->
                <h2 class="paper-title mb-2">{{ paper.title }}</h2>
                
                <!-- Year -->
                <p class="text-subtitle-1 text-grey mb-2">{{ paper.year }}</p>
                
                <!-- Authors -->
                <p class="text-body-2 text-grey-darken-1 mb-3">{{ paper.authors }}</p>
                
                <!-- Extra info (awards, etc.) -->
                <div v-if="paper.extras" class="paper-extras mb-3">
                    <strong>{{ paper.extras }}</strong>
                </div>
                
                <!-- Links -->
                <div class="paper-links mb-4">
                    <template v-for="(linkObj, linkIndex) in paper.links" :key="linkIndex">
                        <v-btn
                            :href="linkObj.link"
                            target="_blank"
                            color="rgb(0, 103, 120)"
                            variant="outlined"
                            class="mr-2 mb-2"
                            size="small"
                        >
                            <v-icon start>mdi-file-document</v-icon>
                            Paper
                        </v-btn>
                        <v-btn
                            v-if="linkObj.site"
                            :href="linkObj.site"
                            target="_blank"
                            color="rgb(0, 103, 120)"
                            variant="outlined"
                            class="mr-2 mb-2"
                            size="small"
                        >
                            <v-icon start>mdi-web</v-icon>
                            Website
                        </v-btn>
                    </template>
                </div>
                
                <!-- Abstract -->
                <p class="paper-abstract text-justify">
                    {{ paper.abstract }}
                </p>
            </v-col>

            <!-- Divider between papers -->
            <v-col cols="12" v-if="index < papers.length - 1">
                <v-divider class="my-4"></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const papers = ref([])

const loadPublications = async () => {
    try {
        const response = await fetch(baseUrl + 'assets/publications/publications.json')
        const data = await response.json()
        
        papers.value = data.map(paper => ({
            title: paper.title,
            year: paper.year,
            authors: paper.authors,
            abstract: paper.abstract,
            cover: baseUrl + 'assets/publications/' + paper.cover,
            extras: paper.extras || '',
            links: [
                {
                    link: paper.paperLink || '',
                    site: paper.siteLink || '',
                }
            ]
        }))
    } catch (error) {
        console.error('Error loading publications:', error)
    }
}

onMounted(() => {
    loadPublications()
})
</script>

<style scoped>

.cover-image :deep(img) {
    object-position: center 20% !important;
}

.paper-row {
    margin-bottom: 0rem;
    margin-top: 2rem
}

.paper-cover {
    border-radius: 8px;
    margin: auto;
}

.paper-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #822433;
    line-height: 1.4;
}

.paper-extras {
    font-size: 1.1rem;
    font-weight: 700;
    color: #d37e2f;
    padding: 8px 12px;
    background-color: #fff7eb;
    border-radius: 4px;
    display: inline-block;
}

.paper-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.paper-abstract {
    text-align: justify;
    line-height: 1.6;
    color: #424242;
}

</style>