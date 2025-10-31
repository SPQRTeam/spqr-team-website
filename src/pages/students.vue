<template>

    <!-- Work in Progress Banner -->
    <v-banner
        lines="one"
        class="wip-banner"
        color="warning"
        icon="mdi-alert-circle"
        sticky
    >
        <template v-slot:text>
            <span class="wip-text">🚧 Work in Progress - This page is currently under construction 🚧</span>
        </template>
    </v-banner>

    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/students/cover.jpg"
            alt="Students Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">STUDENTS</h1>
            </div>
        </v-img>
    </div>

    <v-container class="py-8 content-wrapper">
        <!-- Theses Section -->
        <section v-if="theses.length > 0" class="mb-12">
            <h2 class="section-title text-h3 font-weight-bold mb-6">Theses</h2>
            <v-row>
                <v-col
                    v-for="(project, index) in theses"
                    :key="`thesis-${index}`"
                    cols="12"
                >
                    <div class="project-card">
                        <div class="card-title">
                            {{ project.title }}
                        </div>
                        
                        <div class="card-content">
                            <p class="project-description">{{ project.description }}</p>
                            
                            <!-- Resources -->
                            <div v-if="project.resources && project.resources.length > 0" class="mb-4">
                                <h4 class="section-subtitle">Resources:</h4>
                                <div class="resource-links-vertical">
                                    <div v-for="(resourceGroup, idx) in project.resources" :key="`thesis-res-${index}-${idx}`" class="resource-group">
                                        <v-btn
                                            v-for="(url, label) in resourceGroup"
                                            :key="`thesis-chip-${index}-${idx}-${label}`"
                                            :href="url"
                                            target="_blank"
                                            color="rgb(0, 103, 120)"
                                            variant="outlined"
                                            class="mr-2"
                                            size="small"
                                        >
                                            <v-icon start size="small">mdi-link</v-icon>
                                            {{ label }}
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Contacts -->
                            <div v-if="project.contacts && project.contacts.length > 0">
                                <h4 class="section-subtitle">Contacts:</h4>
                                <div class="contacts-horizontal">
                                    <div v-for="(contact, idx) in project.contacts" :key="`thesis-contact-${index}-${idx}`" class="contact-item-inline">
                                        <div class="contact-info">
                                            <v-icon size="small" class="mr-1">mdi-account</v-icon>
                                            <span class="contact-name-inline">{{ contact.name }}</span>
                                            <span class="contact-separator">-</span>
                                            <v-icon size="small" class="mr-1">mdi-email</v-icon>
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
            <h2 class="section-title text-h3 font-weight-bold mb-6">Projects</h2>
            <v-row>
                <v-col
                    v-for="(project, index) in projects"
                    :key="`project-${index}`"
                    cols="12"
                >
                    <div class="project-card">
                        <div class="card-title">
                            {{ project.title }}
                        </div>
                        
                        <div class="card-content">
                            <p class="project-description">{{ project.description }}</p>
                            
                            <!-- Resources -->
                            <div v-if="project.resources && project.resources.length > 0" class="mb-4">
                                <h4 class="section-subtitle">Resources:</h4>
                                <div class="resource-links-vertical">
                                    <div v-for="(resourceGroup, idx) in project.resources" :key="`project-res-${index}-${idx}`" class="resource-group">
                                        <v-btn
                                            v-for="(url, label) in resourceGroup"
                                            :key="`project-chip-${index}-${idx}-${label}`"
                                            :href="url"
                                            target="_blank"
                                            color="rgb(0, 103, 120)"
                                            variant="outlined"
                                            class="mr-2"
                                            size="small"
                                        >
                                            <v-icon start size="small">mdi-link</v-icon>
                                            {{ label }}
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Contacts -->
                            <div v-if="project.contacts && project.contacts.length > 0">
                                <h4 class="section-subtitle">Contacts:</h4>
                                <div class="contacts-horizontal">
                                    <div v-for="(contact, idx) in project.contacts" :key="`project-contact-${index}-${idx}`" class="contact-item-inline">
                                        <div class="contact-info">
                                            <v-icon size="small" class="mr-1">mdi-account</v-icon>
                                            <span class="contact-name-inline">{{ contact.name }}</span>
                                            <span class="contact-separator">-</span>
                                            <v-icon size="small" class="mr-1">mdi-email</v-icon>
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
import { computed } from 'vue';
import projectsData from '/public/assets/students/projects.json';

// Import projects data directly
const allProjects = projectsData;

// Separate theses and projects based on target field
const theses = computed(() => {
    return allProjects.filter(project => project.target === 'Thesis');
});

const projects = computed(() => {
    return allProjects.filter(project => project.target === 'Project');
});
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 40% !important;
}

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
    color: #822433;
    border-bottom: 3px solid #822433;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
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

.resource-links-vertical {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.resource-group {
    display: flex;
    align-items: center;
    gap: 8px;
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

@media (max-width: 960px) {
    .cover-title {
        font-size: 2rem;
    }
}
</style>
