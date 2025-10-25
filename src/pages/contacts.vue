<template>

    <div class="cover-section">
        <v-img
            class="cover-image"
            :style="{ height: '350px' }"            
            src="/spqr-team-website/assets/contacts/cover.jpg"
            alt="Contacts Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">CONTACTS</h1>
            </div>
        </v-img>
    </div>

    <v-container class="py-8">
        <!-- Team Contacts Section -->
        <v-row justify="center" class="mb-8">
            <v-col cols="12" md="8">
                <v-card elevation="4" class="pa-6" color="#f1f4f3">
                    <h2 class="section-title">Get in Touch</h2>
                    
                    <!-- Email -->
                    <div class="contact-item mb-4">
                        <v-icon icon="mdi-email" class="mr-3" color="#822433"></v-icon>
                        <a :href="'mailto:' + spqr_team.email" style="font-size: 16px; font-weight: 500;">{{ spqr_team.email }}</a>
                    </div>
                    
                    <!-- Address -->
                    <div class="contact-item mb-6">
                        <v-icon icon="mdi-map-marker" class="mr-3" color="#822433"></v-icon>
                        <span style="font-size: 16px; font-weight: 500;">{{ spqr_team.address }}</span>
                    </div>
                    
                    <!-- Social Media Buttons -->
                    <div class="text-center">
                        <h3 class="text-h6 mb-4">Follow Us</h3>
                        <div class="social-icons">
                            <a 
                                :href="spqr_team.instagram"
                                target="_blank"
                                class="social-icon-link"
                            >
                                <v-img 
                                    src="/icons/icon-instagram.png" 
                                    alt="Instagram" 
                                    width="48" 
                                    height="48"
                                />
                            </a>
                            
                            <a 
                                :href="spqr_team.youtube"
                                target="_blank"
                                class="social-icon-link"
                            >
                                <v-img 
                                    src="/icons/icon-youtube.png" 
                                    alt="YouTube" 
                                    width="48" 
                                    height="48"
                                />
                            </a>
                            
                            <a 
                                :href="spqr_team.linkedin"
                                target="_blank"
                                class="social-icon-link"
                            >
                                <v-img 
                                    src="/icons/icon-linkedin.png" 
                                    alt="LinkedIn" 
                                    width="48" 
                                    height="48"
                                />
                            </a>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- People Contacts Section -->
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h2 class="section-title">Team Contacts</h2>
                <v-row>
                    <v-col 
                        v-for="person in people" 
                        :key="person.email"
                        cols="12"
                        md="4"
                    >
                        <v-card elevation="4" class="pa-4 h-100" color="#f1f4f3">
                            <v-card-title class="text-h6 text-center">
                                {{ person.name }}
                            </v-card-title>
                            <v-card-subtitle class="text-center mb-3">
                                {{ person.role }}
                            </v-card-subtitle>
                            <v-card-text class="text-center">
                                <v-btn
                                    :href="'mailto:' + person.email"
                                    variant="text"
                                    color="#822433"
                                    block
                                >
                                    <v-icon left>mdi-email</v-icon>
                                    {{ person.email }}
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

const spqr_team = {
    email: 'spqr@diag.uniroma1.it',
    instagram: 'https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fspqrteam%2F&sa=D&sntz=1&usg=AOvVaw2H8vnDtVHcdRKibXAXPbuN',
    youtube: 'https://www.youtube.com/user/SPQRTeamItaly',
    linkedin: 'https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fspqr-team&sa=D&sntz=1&usg=AOvVaw29P24eOTENZt6URkauXoIZ',
    address: 'Dipartimento di Ingegneria Informatica, Automatica e Gestionale "A. Ruberti", Sapienza Università di Roma, Via Ariosto 25, 00185 Roma RM, Italy'
}

const people = [
    {
        name: 'Prof. Daniele Nardi',
        email: 'nardi@diag.uniroma1.it',
        role: 'Team Advisor'
    },
    {
        name: 'Prof. Luca Iocchi',
        email: 'iocchi@diag.uniroma1.it',
        role: 'Team Advisor'
    },
    {
        name: 'Vincenzo Suriani',
        email: 'suriani@diag.uniroma1.it',
        role: 'Team Leader'
    }
]
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 55% !important;
}

.section-title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 2.5rem;
    color: rgb(30, 30, 30);
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.contact-item a,
.contact-item span {
    flex: 1;
}

.contact-item a {
    text-decoration: none;
    color: inherit;
}

.contact-item a:hover {
    text-decoration: underline;
}

.social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
}

.social-icon-link {
    display: inline-block;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.social-icon-link:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

.h-100 {
    height: 100%;
}
</style>
