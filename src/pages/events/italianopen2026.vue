<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/events/cover.png"
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
                <h2 class="section-title">RoboCup Italian Open 2026 – Humanoid Soccer Workshop and Games</h2>
                <p class="info-text">
                    Building on the success of the RoboCup Tournament 2025, we are pleased to announce the next
                    edition of this initiative: the <strong>RoboCup Italian Open 2026 – Humanoid Soccer Workshop
                    and Games</strong>. The event is planned to take place from <strong>23 to 25 October 2026</strong>
                    at <strong>Maker Faire Rome – The European Edition</strong>. The 2026 edition will host HSL
                    Middle and Large divisions, bringing up to <strong>10 teams</strong> in the competition. With
                    the support of the RoboCup community, the Italian Open aims to strengthen the presence of
                    RoboCup in Italy and Europe. <em>(pending approval)</em>
                </p>

                <v-divider class="my-8" />

                <div class="text-center updates-section">
                    <h3 class="info-title">The link with updates will be available soon</h3>
                    <p class="info-subtitle">Stay updated!</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Italian Open 2026 - SPQR Team | RoboCup Competitions',
  description: 'RoboCup Italian Open 2026 - Humanoid Soccer Workshop and Games, 23-25 October 2026 at Maker Faire Rome. The link with updates will be available soon.',
  path: '/events/italianopen2026/',
  canonical: 'https://spqr.diag.uniroma1.it/events/italianopen2026/',
  ogTitle: 'Italian Open 2026 - SPQR Team',
  ogDescription: 'RoboCup Italian Open 2026 - Humanoid Soccer Workshop and Games, 23-25 October 2026 at Maker Faire Rome.',
  ogUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png',
  twitterTitle: 'Italian Open 2026 - SPQR Team',
  twitterDescription: 'RoboCup Italian Open 2026 - Humanoid Soccer Workshop and Games, 23-25 October 2026 at Maker Faire Rome.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png'
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

.updates-section {
    margin-top: 1rem;
}

.info-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.info-subtitle {
    font-size: 1.1rem;
    opacity: 0.8;
}
</style>
