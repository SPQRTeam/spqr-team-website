<template>

    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/contacts/cover.webp"
            alt="Contacts Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">CONTACTS</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <!-- Email and address -->
        <section class="contact-section" aria-label="Get in touch">
            <h2 class="section-title">Get in touch</h2>
            <p class="section-lead">
                Write to us about joining the team, collaborating on research, sponsoring the robots
                or simply coming to see them play.
            </p>

            <v-row justify="center" class="reach-row">
                <v-col cols="12" md="6" class="reach-col">
                    <a class="reach-card" :href="`mailto:${spqr_team.email}`">
                        <v-icon class="reach-icon" size="34">mdi-email-outline</v-icon>
                        <div class="reach-label">Email</div>
                        <div class="reach-value">{{ spqr_team.email }}</div>
                        <div class="reach-action">Write to us<v-icon size="16">mdi-arrow-right</v-icon></div>
                    </a>
                </v-col>

                <v-col cols="12" md="6" class="reach-col">
                    <a
                        class="reach-card"
                        :href="spqr_team.mapLink"
                        target="_blank"
                        rel="noopener"
                    >
                        <v-icon class="reach-icon" size="34">mdi-map-marker-outline</v-icon>
                        <div class="reach-label">Where to find us</div>
                        <div class="reach-value">
                            {{ spqr_team.department }}<br />
                            {{ spqr_team.university }}<br />
                            {{ spqr_team.street }}
                        </div>
                        <div class="reach-action">Open in Maps<v-icon size="16">mdi-arrow-right</v-icon></div>
                    </a>
                </v-col>
            </v-row>
        </section>

        <!-- Social -->
        <section class="contact-section" aria-label="Follow us">
            <h2 class="section-title">Follow us</h2>

            <v-row justify="center" class="social-row">
                <v-col
                    v-for="channel in socials"
                    :key="channel.name"
                    cols="12"
                    sm="4"
                    class="social-col"
                >
                    <a
                        class="social-card"
                        :href="channel.href"
                        target="_blank"
                        rel="noopener"
                    >
                        <v-icon class="social-icon" size="40">{{ channel.icon }}</v-icon>
                        <div class="social-name">{{ channel.name }}</div>
                        <div class="social-handle">{{ channel.handle }}</div>
                    </a>
                </v-col>
            </v-row>
        </section>

        <!-- People -->
        <section class="contact-section" aria-label="Team contacts">
            <h2 class="section-title">Team contacts</h2>

            <v-row justify="center" class="people-row">
                <v-col
                    v-for="person in people"
                    :key="person.email"
                    cols="12"
                    sm="6"
                    md="4"
                    class="person-col"
                >
                    <div class="person-card">
                        <img class="person-photo" :src="person.photo" :alt="person.name" loading="lazy" />
                        <div class="person-name">{{ person.name }}</div>
                        <div class="person-role">{{ person.role }}</div>
                        <a class="person-email" :href="`mailto:${person.email}`">
                            <v-icon size="16">mdi-email-outline</v-icon>
                            {{ person.email }}
                        </a>
                    </div>
                </v-col>
            </v-row>
        </section>
    </v-container>
</template>
<script setup>
import { useSeo } from '@/composables/useSeo'

import nardiPhoto from '/assets/team/Nardi.webp'
import iocchiPhoto from '/assets/team/Iocchi.webp'
import surianiPhoto from '/assets/team/Suriani.webp'

// SEO Configuration
useSeo({
  title: 'Contacts - SPQR Team | Get in Touch',
  description: 'Contact SPQR Team at Sapienza University of Rome. Email, address, and information to reach our RoboCup research group.',
  path: '/contacts/',
  canonical: 'https://spqr.diag.uniroma1.it/contacts/',
  ogTitle: 'Contacts - SPQR Team',
  ogDescription: 'Get in touch with SPQR Team.',
  ogUrl: 'https://spqr.diag.uniroma1.it/contacts/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  twitterTitle: 'Contacts - SPQR Team',
  twitterDescription: 'Get in touch with SPQR Team.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/contacts/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg'
})

const spqr_team = {
    email: 'spqr@diag.uniroma1.it',
    department: 'Dipartimento di Ingegneria Informatica, Automatica e Gestionale "A. Ruberti"',
    university: 'Sapienza Università di Roma',
    street: 'Via Ariosto 25, 00185 Roma RM, Italy',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Via%20Ariosto%2025%2C%2000185%20Roma%20RM'
}

const socials = [
    {
        name: 'Instagram',
        handle: '@spqrteam',
        href: 'https://www.instagram.com/spqrteam/',
        icon: 'mdi-instagram'
    },
    {
        name: 'YouTube',
        handle: 'SPQRTeamItaly',
        href: 'https://www.youtube.com/user/SPQRTeamItaly',
        icon: 'mdi-youtube'
    },
    {
        name: 'LinkedIn',
        handle: 'SPQR Team',
        href: 'https://www.linkedin.com/company/spqr-team',
        icon: 'mdi-linkedin'
    }
]

const people = [
    {
        name: 'Prof. Daniele Nardi',
        email: 'nardi@diag.uniroma1.it',
        role: 'Team Advisor',
        photo: nardiPhoto
    },
    {
        name: 'Prof. Luca Iocchi',
        email: 'iocchi@diag.uniroma1.it',
        role: 'Team Advisor',
        photo: iocchiPhoto
    },
    {
        name: 'Dr. Vincenzo Suriani',
        email: 'suriani@diag.uniroma1.it',
        role: 'Team Leader',
        photo: surianiPhoto
    }
]
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 55% !important;
}

.contact-section {
    max-width: 1100px;
    margin: 5rem auto;
    color: rgb(30, 30, 30);
}

.section-title {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 2.5rem;
    color: rgb(30, 30, 30);
}

.section-lead {
    max-width: 640px;
    margin: 0 auto 2.5rem;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.7;
    opacity: 0.8;
}

/* ---- Email and address ---- */
.reach-col,
.social-col,
.person-col {
    padding: 0.75rem;
}

.reach-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem;
    border-radius: 16px;
    border-top: 4px solid #822433;
    background: linear-gradient(135deg, #ffffff 0%, #f6f7f6 100%);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
    color: inherit;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.reach-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.14);
}

.reach-icon {
    color: #822433;
    margin-bottom: 0.75rem;
}

.reach-label {
    font-size: 0.8rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.6;
    margin-bottom: 0.5rem;
}

.reach-value {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.6;
}

.reach-action {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    /* pinned to the bottom so both cards line their action up */
    margin-top: auto;
    padding-top: 1.25rem;
    font-weight: 600;
    color: #822433;
}

.reach-card:hover .reach-action :deep(.v-icon) {
    transform: translateX(4px);
    transition: transform 0.3s ease;
}

/* ---- Social ---- */
.social-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1.75rem 1rem;
    border-radius: 16px;
    background: #f6f7f6;
    color: inherit;
    text-decoration: none;
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.social-card:hover {
    transform: translateY(-4px);
    background: #822433;
    color: #ffffff;
    box-shadow: 0 10px 26px rgba(130, 36, 51, 0.3);
}

.social-icon {
    color: #822433;
    margin-bottom: 0.6rem;
    transition: color 0.3s ease;
}

.social-card:hover .social-icon {
    color: #ffffff;
}

.social-name {
    font-size: 1.15rem;
    font-weight: 600;
}

.social-handle {
    font-size: 0.9rem;
    opacity: 0.7;
}

/* ---- People ---- */
.person-card {
    height: 100%;
    padding: 2rem 1.5rem;
    text-align: center;
    border-radius: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #f6f7f6 100%);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.person-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.14);
}

.person-photo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #822433;
}

.person-name {
    font-size: 1.15rem;
    font-weight: 600;
}

.person-role {
    font-size: 0.95rem;
    font-style: italic;
    opacity: 0.7;
    margin-bottom: 1rem;
}

.person-email {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.9rem;
    color: #822433;
    text-decoration: none;
    word-break: break-all;
}

.person-email:hover {
    text-decoration: underline;
}
</style>
