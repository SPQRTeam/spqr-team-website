<template>

  <div class="page-header">
    <h1 class="page-title">Publications</h1>
    <p class="page-subtitle">Our research papers</p>
    <div class="roman-divider" />
  </div>

  <v-container>
    <v-row
      v-for="(paper, index) in papers"
      :key="index"
      class="paper-row mb-8"
    >
      <!-- Left side: Cover image -->
      <v-col class="d-flex justify-center align-start" cols="12" md="4">
        <v-img
          :alt="paper.title"
          class="paper-cover elevation-3"
          max-width="340"
          :src="paper.cover"
        />
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
              class="mr-2 mb-2"
              color="rgb(0, 103, 120)"
              :href="linkObj.link"
              size="small"
              target="_blank"
              variant="outlined"
            >
              <v-icon start>mdi-file-document</v-icon>
              Paper
            </v-btn>
            <v-btn
              v-if="linkObj.site"
              class="mr-2 mb-2"
              color="rgb(0, 103, 120)"
              :href="linkObj.site"
              size="small"
              target="_blank"
              variant="outlined"
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
      <v-col v-if="index < papers.length - 1" cols="12">
        <v-divider class="my-4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useSeo } from '@/composables/useSeo'

  // SEO Configuration
  useSeo({
    title: 'Publications - SPQR Team | Sapienza University',
    description: 'Research publications and scientific papers from SPQR Team on humanoid robotics, RoboCup, multi-agent systems, computer vision, and artificial intelligence.',
    path: '/publications/',
    canonical: 'https://spqr.diag.uniroma1.it/publications/',
    ogTitle: 'Publications - SPQR Team',
    ogDescription: 'Research publications on humanoid robotics, RoboCup, and AI.',
    ogUrl: 'https://spqr.diag.uniroma1.it/publications/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Publications - SPQR Team',
    twitterDescription: 'Research publications on humanoid robotics, RoboCup, and AI.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/publications/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })

  const baseUrl = import.meta.env.BASE_URL

  const papers = ref([])

  async function loadPublications () {
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
          },
        ],
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
