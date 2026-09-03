<template>

  <!-- Work in Progress Banner -->
  <!-- <v-banner
        lines="one"
        class="wip-banner"
        color="warning"
        icon="mdi-alert-circle"
        sticky
    >
        <template v-slot:text>
            <span class="wip-text">🚧 Work in Progress - This page is currently under construction 🚧</span>
        </template>
    </v-banner> -->

  <div class="page-header">
    <h1 class="page-title">Students</h1>
    <p class="page-subtitle">Thesis and project opportunities</p>
    <div class="roman-divider" />
  </div>

  <v-container class="py-8 content-wrapper">
    <!-- Theses Section -->
    <section v-if="theses.length > 0" class="mb-12">
      <h2 class="section-title">Theses</h2>
      <v-row>
        <v-col
          v-for="(project, index) in theses"
          :key="`thesis-${index}`"
          cols="12"
        >
          <div class="project-card">
            <h3 class="card-title">
              {{ project.title }}
            </h3>

            <div class="card-content">
              <p class="project-description">{{ project.description }}</p>

              <!-- Resources -->
              <div v-if="project.resources && project.resources.length > 0" class="mb-4">
                <h4 class="section-subtitle">Resources:</h4>
                <ul class="resource-list">
                  <li v-for="(resource, idx) in project.resources" :key="`thesis-res-${index}-${idx}`" class="resource-item">
                    <span class="resource-name">{{ resource.Name }}</span>
                    <div class="resource-links">
                      <v-btn
                        v-for="(url, label) in Object.fromEntries(Object.entries(resource).filter(([key]) => key !== 'Name'))"
                        :key="`thesis-chip-${index}-${idx}-${label}`"
                        class="mr-2"
                        color="rgb(0, 103, 120)"
                        :href="url"
                        size="small"
                        target="_blank"
                        variant="outlined"
                      >
                        <v-icon size="small" start>mdi-link</v-icon>
                        {{ label }}
                      </v-btn>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Contacts -->
              <div v-if="project.contacts && project.contacts.length > 0">
                <h4 class="section-subtitle">Contacts:</h4>
                <div class="contacts-horizontal">
                  <div v-for="(contact, idx) in project.contacts" :key="`thesis-contact-${index}-${idx}`" class="contact-item-inline">
                    <div class="contact-info">
                      <v-icon class="mr-1" size="small" style="color: rgb(0, 103, 120);">mdi-account</v-icon>
                      <span class="contact-name-inline">{{ contact.name }}</span>
                      <span class="contact-separator">-</span>
                      <v-icon class="mr-1" size="small" style="color: rgb(0, 103, 120)">mdi-email</v-icon>
                      <a :href="`mailto:${contact.email}`">
                        {{ contact.email }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Projects Section -->
    <section v-if="projects.length > 0">
      <h2 class="section-title">Projects</h2>
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="`project-${index}`"
          cols="12"
        >
          <div class="project-card">
            <h3 class="card-title">
              {{ project.title }}
            </h3>

            <div class="card-content">
              <p class="project-description">{{ project.description }}</p>

              <!-- Resources -->
              <div v-if="project.resources && project.resources.length > 0" class="mb-4">
                <h4 class="section-subtitle">Resources:</h4>
                <ul class="resource-list">
                  <li v-for="(resource, idx) in project.resources" :key="`project-res-${index}-${idx}`" class="resource-item">
                    <span class="resource-name">{{ resource.Name }}</span>
                    <div class="resource-links">
                      <v-btn
                        v-for="(url, label) in Object.fromEntries(Object.entries(resource).filter(([key]) => key !== 'Name'))"
                        :key="`project-chip-${index}-${idx}-${label}`"
                        class="mr-2"
                        color="rgb(0, 103, 120)"
                        :href="url"
                        size="small"
                        target="_blank"
                        variant="outlined"
                      >
                        <v-icon size="small" start>mdi-link</v-icon>
                        {{ label }}
                      </v-btn>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Contacts -->
              <div v-if="project.contacts && project.contacts.length > 0">
                <h4 class="section-subtitle">Contacts:</h4>
                <div class="contacts-horizontal">
                  <div v-for="(contact, idx) in project.contacts" :key="`project-contact-${index}-${idx}`" class="contact-item-inline">
                    <div class="contact-info">
                      <v-icon class="mr-1" size="small" style="color: rgb(0, 103, 120)">mdi-account</v-icon>
                      <span class="contact-name-inline">{{ contact.name }}</span>
                      <span class="contact-separator">-</span>
                      <v-icon class="mr-1" size="small" style="color: rgb(0, 103, 120)">mdi-email</v-icon>
                      <a :href="`mailto:${contact.email}`">
                        {{ contact.email }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script setup>
  import { computed } from 'vue'
  import { useSeo } from '@/composables/useSeo'
  import projectsData from '/public/assets/students/projects.json'

  // SEO Configuration
  useSeo({
    title: 'Students - SPQR Team | Thesis and Projects',
    description: 'Student opportunities at SPQR Team: bachelor and master thesis projects, research internships in robotics, AI, computer vision, and RoboCup at Sapienza University.',
    path: '/students/',
    canonical: 'https://spqr.diag.uniroma1.it/students/',
    ogTitle: 'Students - SPQR Team',
    ogDescription: 'Thesis projects and research opportunities in robotics and AI.',
    ogUrl: 'https://spqr.diag.uniroma1.it/students/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Students - SPQR Team',
    twitterDescription: 'Thesis projects and research opportunities in robotics and AI.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/students/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })

  // Import projects data directly
  const allProjects = projectsData

  // Separate theses and projects based on target field
  const theses = computed(() => {
    return allProjects.filter(project => project.target === 'Thesis')
  })

  const projects = computed(() => {
    return allProjects.filter(project => project.target === 'Project')
  })
</script>

<style scoped>
.wip-banner {
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.wip-banner :deep(.v-banner__content) {
    justify-content: center;
}

.wip-text {
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
}

.content-wrapper {
    max-width: 1200px;
    margin: auto;
}

.section-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.125rem;
    color: #822433;
    border-bottom: 3px solid #822433;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
}

.project-card {
    background-color: #f1f4f3;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #822433;
    line-height: 1.4;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin: 0;
}

.card-content {
    padding: 1.5rem;
    flex-grow: 1;
}

.project-description {
    text-align: justify;
    line-height: 1.6;
    color: #424242;
    margin-bottom: 1.5rem;
}

.section-subtitle {
    font-size: 1.1rem;
    font-weight: 600;
    color: #822433;
    margin-bottom: 0.75rem;
}

.resource-list {
    list-style: disc;
    padding-left: 1.5rem;
    margin: 0;
}

.resource-item {
    margin-bottom: 0.75rem;
    line-height: 1.8;
    color: black;
}

.resource-name {
    font-weight: 600;
    color: #424242;
    margin-right: 8px;
}

.resource-links {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
}

.contacts-horizontal {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
}

.contact-item-inline {
    display: inline-flex;
}

.contact-info {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.5rem 1rem;
    background-color: rgba(0, 103, 120, 0.03);
    border-radius: 8px;
    border-left: 3px solid rgb(0, 103, 120);
}

.contact-name-inline {
    font-weight: 600;
    color: #424242;
}

.contact-separator {
    color: #888;
    margin: 0 4px;
}

.contact-info a {
    color: rgb(0, 103, 120);
    text-decoration: none;
    transition: color 0.2s ease;
}

.contact-info a:hover {
    color: #822433;
    text-decoration: underline;
}

.resource-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 0.5rem;
}

.contact-item {
    margin-bottom: 1rem;
    padding: 0.75rem;
    background-color: rgba(0, 103, 120, 0.03);
    border-radius: 8px;
    border-left: 3px solid rgb(0, 103, 120);
}

.contact-name {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #424242;
    margin-bottom: 0.25rem;
}

.contact-email {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
}

.contact-email a {
    color: rgb(0, 103, 120);
    text-decoration: none;
    transition: color 0.2s ease;
}

.contact-email a:hover {
    color: #822433;
    text-decoration: underline;
}
</style>
