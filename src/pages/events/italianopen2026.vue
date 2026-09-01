<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/events/cover.webp"
            alt="Italian Open 2026 Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">ITALIAN OPEN 2026</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="9" class="info-section">
                <h2 class="section-title">The First Italian Open RoboCup Humanoid Soccer Tournament</h2>
                <p class="event-meta">
                    October 23&ndash;25, 2026 &middot; Maker Faire Rome &ndash; The European Edition
                    <span class="event-badge">Official RoboCup Regional Event</span>
                </p>

                <h3 class="subsection-title">One of robotics' toughest challenges</h3>
                <p class="info-text">
                    Fully autonomous humanoid robots will face off on the field with zero human
                    intervention &ndash; navigating complex real-time tasks from environmental perception
                    and decision-making to movement and team coordination.
                </p>

                <h3 class="subsection-title">A competition. A research lab. A global challenge.</h3>
                <p class="info-text">
                    The RoboCup Humanoid Soccer Tournament brings together leading universities, research
                    labs, and international organizations pushing the boundaries of humanoid robotics.
                    Every match is a proving ground for computer vision, bipedal locomotion, dynamic
                    balance, localization, and autonomous decision-making. The pitch becomes a real-world
                    testbed where hardware and software are pushed to their limits.
                </p>
                <p class="info-text">
                    Attendees at Maker Faire Rome will get a front-row seat to the action, while
                    researchers and competing teams connect at one of the year's premier events in
                    humanoid robotics.
                </p>

                <v-divider class="my-8" />

                <h3 class="subsection-title">Call for Humanoid Soccer Teams</h3>
                <p class="info-text">
                    Universities, laboratories, research centers, and international organizations are
                    invited to nominate their teams to participate in the tournament. The competition has
                    two categories: <strong>Middle Division</strong> and <strong>Large Division</strong>.
                    Applications are open until <strong>September 7, 2026</strong>.
                </p>

                <div class="cta-section">
                    <v-btn
                        href="https://makerfairerome.eu/en/call/call-for-humanoid-soccer-teams/"
                        target="_blank"
                        rel="noopener"
                        color="#822433"
                        size="large"
                        variant="elevated"
                        append-icon="mdi-open-in-new"
                    >
                        Register your team
                    </v-btn>
                    <p class="cta-note">
                        Applications and full details are handled on the Maker Faire Rome call page. You can
                        also
                        <a
                            href="https://makerfairerome.eu/en/call/call-for-humanoid-soccer-teams/call-for-humanoid-soccer-teams-regulations/"
                            target="_blank"
                            rel="noopener"
                        >read the regulations</a>
                        or go straight to the
                        <a href="https://makers.makerfairerome.eu/eng" target="_blank" rel="noopener">application form</a>.
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Italian Open 2026 - SPQR Team | RoboCup Competitions',
  description: 'The First Italian Open RoboCup Humanoid Soccer Tournament, 23-25 October 2026 at Maker Faire Rome. Official RoboCup Regional Event with Middle and Large divisions. Applications open until 7 September 2026.',
  path: '/events/italianopen2026/',
  canonical: 'https://spqr.diag.uniroma1.it/events/italianopen2026/',
  ogTitle: 'Italian Open 2026 - SPQR Team',
  ogDescription: 'The First Italian Open RoboCup Humanoid Soccer Tournament, 23-25 October 2026 at Maker Faire Rome. Applications open until 7 September 2026.',
  ogUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  twitterTitle: 'Italian Open 2026 - SPQR Team',
  twitterDescription: 'The First Italian Open RoboCup Humanoid Soccer Tournament, 23-25 October 2026 at Maker Faire Rome. Applications open until 7 September 2026.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg'
})
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 50% !important;
}

.info-section {
    margin: 4rem auto;
    color: #212121;
}

.section-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #822433;
}

.info-text {
    font-size: 1.1rem;
    line-height: 1.7;
}

.event-meta {
    font-size: 1.05rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
    opacity: 0.85;
}

.event-badge {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.15rem 0.6rem;
    border: 1px solid #822433;
    border-radius: 999px;
    font-size: 0.85rem;
    color: #822433;
    white-space: nowrap;
}

.subsection-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
}

.info-text + .info-text {
    margin-top: 1rem;
}

.cta-section {
    margin-top: 2.5rem;
    text-align: center;
}

.cta-note {
    margin-top: 1rem;
    font-size: 0.95rem;
    opacity: 0.8;
}

.cta-note a {
    color: #822433;
    font-weight: 500;
}
</style>
