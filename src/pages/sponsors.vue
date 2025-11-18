<template>
    <v-container>
        <h1>Sponsor</h1>
        <!-- Add your team content here -->
    </v-container>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo'

// SEO Configuration
useSeo({
  title: 'Sponsors - SPQR Team | Partners and Support',
  description: 'SPQR Team sponsors and partners supporting our RoboCup research and robotics development at Sapienza University of Rome.',
  path: '/sponsors/',
  canonical: 'https://spqr.diag.uniroma1.it/sponsors/',
  ogTitle: 'Sponsors - SPQR Team',
  ogDescription: 'Our sponsors and partners supporting robotics research.',
  ogUrl: 'https://spqr.diag.uniroma1.it/sponsors/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png',
  twitterTitle: 'Sponsors - SPQR Team',
  twitterDescription: 'Our sponsors and partners supporting robotics research.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/sponsors/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.png'
})
</script>
