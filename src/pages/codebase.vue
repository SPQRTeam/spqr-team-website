<template>
  <div class="page-header">
    <h1 class="page-title">Codebase</h1>
    <p class="page-subtitle">The software behind our robots</p>
    <div class="roman-divider" />
  </div>

  <v-container class="py-8">

    <h2 class="section-title">Codebase @ Booster Robots</h2>

    <v-row class="mb-8" justify="center">
      <v-col
        v-for="repo in booster_repositories"
        :key="repo.name"
        cols="12"
        lg="4"
        md="4"
        sm="6"
        xl="3"
      >
        <v-card
          class="repo-card booster-card"
          elevation="3"
          hover
          :href="repo.link"
          :style="{
            backgroundImage: `linear-gradient(to bottom, #f1f4f3 0%, #fafafa 40%, transparent 75%), url(${repo.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
          target="_blank"
        >
          <v-card-text class="d-flex flex-column align-center justify-center text-center pa-6">
            <v-icon class="mb-4" color="#822433" size="60">mdi-github</v-icon>
            <h3 class="repo-name">{{ repo.name }}</h3>
            <p class="repo-description">{{ repo.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider color="black" opacity="0.5" style="margin-top: 2rem" thickness="5" />

    <!-- NAO Repositories Section -->
    <h2 class="section-title">Codebase @ Nao Robots</h2>

    <v-row class="nao-grid" justify="center">
      <v-col
        v-for="repo in nao_repositories"
        :key="repo.name"
        class="d-flex justify-center"
        cols="12"
        md="5"
        sm="6"
      >
        <v-card
          class="repo-card nao-card"
          :disabled="!repo.link"
          elevation="3"
          hover
          :href="repo.link"
          target="_blank"
        >
          <v-card-text class="d-flex flex-column align-center justify-center text-center pa-4">
            <v-icon class="mb-4" color="#822433" size="60">mdi-github</v-icon>
            <h3 class="repo-name">{{ repo.name }}</h3>
            <p class="repo-description">{{ repo.description }}</p>
            <v-chip v-if="!repo.link" class="mt-2" color="warning" size="small">
              Coming Soon
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useSeo } from '@/composables/useSeo'

  // SEO Configuration
  useSeo({
    title: 'Codebase - SPQR Team | Open Source Robotics',
    description: 'SPQR Team open source code repositories: RoboCup software, robotics frameworks, computer vision libraries, and AI tools developed at Sapienza University.',
    path: '/codebase/',
    canonical: 'https://spqr.diag.uniroma1.it/codebase/',
    ogTitle: 'Codebase - SPQR Team',
    ogDescription: 'Open source robotics software and tools.',
    ogUrl: 'https://spqr.diag.uniroma1.it/codebase/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Codebase - SPQR Team',
    twitterDescription: 'Open source robotics software and tools.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/codebase/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })

  const baseUrl = import.meta.env.BASE_URL

  const repositories = ref([])

  async function loadRepositories () {
    try {
      const response = await fetch(baseUrl + 'assets/codebase/codebase.json')
      const data = await response.json()

      repositories.value = data.map(repo => ({
        name: repo.name,
        description: repo.description,
        link: repo.link || '',
        cover: repo.cover ? baseUrl + 'assets/codebase/' + repo.cover : '',
        platform: repo.platform,
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
