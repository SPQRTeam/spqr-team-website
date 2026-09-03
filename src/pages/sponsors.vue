<template>
  <div class="page-header">
    <h1 class="page-title">Sponsors</h1>
    <p class="page-subtitle">The partners supporting our research</p>
    <div class="roman-divider" />
  </div>

  <v-container class="support-section">
    <div class="support-card">
      <v-icon class="support-icon" size="42">mdi-email-heart-outline</v-icon>
      <h2 class="support-title">Want to support the team?</h2>
      <p class="support-text">
        Sponsorships keep our robots on the pitch: write to this email and we will get back to
        you with the plan that fits your goals best.
      </p>
      <a class="support-email" href="mailto:spqr@diag.uniroma1.it">
        <v-icon size="22">mdi-email-outline</v-icon>
        <span class="support-email-address">spqr@diag.uniroma1.it</span>
      </a>

      <v-carousel
        class="sponsor-carousel"
        cycle
        height="auto"
        hide-delimiters
        :interval="5000"
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="item in carouselItems"
          :key="item.src"
          class="carousel-item-wrapper"
        >
          <div class="carousel-content">
            <v-img
              :alt="item.alt"
              aspect-ratio="1"
              class="sponsor-photo"
              cover
              :src="item.src"
            />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>

  <v-container class="stats-section">
    <div class="section-heading">
      <p class="eyebrow">Instagram stats</p>
      <h2 class="section-title">Performance snapshot for sponsors</h2>
      <p class="section-subtitle">
        Instagram insights for the last 30 days, showing how far the content travels beyond
        our own audience.
      </p>
    </div>

    <v-row class="stat-card-row" dense>
      <v-col
        v-for="card in statsCards"
        :key="card.title"
        cols="12"
        md="4"
        sm="6"
      >
        <div class="stat-card">
          <h3 class="stat-card__title">{{ card.title }}</h3>
          <div class="stat-card__value">{{ card.value }}</div>
          <div class="stat-card__hint">{{ card.hint }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-container class="py-8 content-wrapper">
    <div class="plans-heading">
      <p class="eyebrow plans-eyebrow">Sponsorship plans</p>
      <h2 class="plans-title">Pick the coverage that fits your goals</h2>
      <p class="plans-subtitle">
        Instagram presence plus branding on the robot jersey and team t-shirts, scaled from competition-only to year-round visibility.
      </p>
      <p class="plans-subtitle">
      Each plan can be customized with additional benefits like event booths, exclusive content, or co-branded campaigns. Contact us to discuss the best fit for you.
      </p>
    </div>

    <v-row class="sponsor-row" dense align="stretch">
      <v-col
        v-for="(sponsor, index) in sponsorsFormatted"
        :key="`sponsor-${index}`"
        cols="12"
        md="6"
      >
        <div class="sponsor-card">
          <div class="card-title">
            {{ sponsor.title }}
          </div>
          <div class="card-content">
            <ul class="sponsor-points">
              <li v-for="(point, idx) in sponsor.bullets" :key="idx">{{ point }}</li>
            </ul>
            <div class="price-chip">
              <v-icon start size="small">mdi-currency-eur</v-icon>
              <span class="price-text">{{ sponsor.price }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container> -->
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
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Sponsors - SPQR Team',
    twitterDescription: 'Our sponsors and partners supporting robotics research.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/sponsors/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })

  const carouselItems = [
    { src: '/assets/sponsor/images/sponsor_1.webp', alt: 'Sponsor 1' },
    { src: '/assets/sponsor/images/sponsor_2.webp', alt: 'Sponsor 2' },
    { src: '/assets/sponsor/images/sponsor_3.webp', alt: 'Sponsor 3' },
    { src: '/assets/sponsor/images/sponsor_4.webp', alt: 'Sponsor 4' },
    { src: '/assets/sponsor/images/sponsor_5.webp', alt: 'Sponsor 5' },
    { src: '/assets/sponsor/images/sponsor_6.webp', alt: 'Sponsor 6' },
    { src: '/assets/sponsor/images/sponsor_7.webp', alt: 'Sponsor 7' },
    { src: '/assets/sponsor/images/sponsor_8.webp', alt: 'Sponsor 8' },
  ]

  const statsCards = [
    { title: 'Views', value: '269,778', hint: '87.3% from non-followers' },
    { title: 'Top reel', value: '75,700', hint: 'Views on a single reel, 26 Aug' },
    { title: 'Content interactions', value: '5,793', hint: 'Reels 44.3%, posts 38.6%' },
    { title: 'Accounts engaged', value: '2,124', hint: 'Unique accounts' },
    { title: 'Profile visits', value: '3,781', hint: '62 taps on the external link' },
    { title: 'Followers', value: '1,803', hint: 'Total' },
  ]

</script>

<style scoped>
.support-section {
  max-width: 1200px;
  margin: 2.5rem auto 2rem;
  padding: 0 1rem;
}

.support-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border-top: 4px solid #822433;
  background: linear-gradient(135deg, #ffffff 0%, #f6f7f6 100%);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
}

.support-icon {
  color: #822433;
  margin-bottom: 0.9rem;
}

.support-title {
  font-size: 1.9rem;
  font-weight: 800;
  color: #0b0b0f;
  margin: 0 0 0.5rem;
}

.support-text {
  max-width: 640px;
  margin: 0 0 1.5rem;
  color: #4b4b4b;
  line-height: 1.6;
}

.support-email {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0.9rem 1.9rem;
  border-radius: 999px;
  background: #822433;
  color: #ffffff;
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(130, 36, 51, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.support-email:hover {
  background: #9a2b3d;
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(130, 36, 51, 0.45);
}

.support-email-address {
  word-break: break-word;
}

.sponsor-carousel {
  width: 100%;
  margin: 2rem auto 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.sponsor-carousel :deep(.v-carousel-item) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-carousel :deep(.v-window__container) {
  display: flex;
  justify-content: center;
}

.sponsor-carousel :deep(.v-carousel-item__content) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.carousel-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding: 1.5rem;
  margin: 0 auto;
}

.sponsor-photo {
  display: block;
  width: min(70vw, 520px);
  height: min(70vw, 520px);
  margin: 0 auto;
  border-radius: 12px;
  background: transparent;
  box-shadow: none;
}

.sponsor-photo :deep(img) {
  object-fit: cover;
  object-position: center;
}

.content-wrapper {
  max-width: 1200px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.plans-heading {
  margin-bottom: 1.5rem;
}

.plans-eyebrow {
  margin: 0 0 0.35rem;
  color: #006778;
  font-size: 0.9rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  font-weight: 700;
}

.plans-title {
  margin: 0 0 0.35rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #0b0b0f;
}

.plans-subtitle {
  margin: 0;
  color: #4b4b4b;
  line-height: 1.6;
}

.stats-section {
  max-width: 1200px;
  margin: 2rem auto 3rem;
  padding: 0 1rem;
}

.section-heading {
  text-align: left;
  margin-bottom: 1.5rem;
}

.eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  color: #006778;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 0.35rem;
  color: #0b0b0f;
}

.section-subtitle {
  margin: 0;
  color: #4b4b4b;
  line-height: 1.5;
}

.sponsor-row {
  row-gap: 20px;
}

.stat-card-row {
  row-gap: 16px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.stat-card__title {
  font-size: 0.95rem;
  color: #0b0b0f;
  font-weight: 750;
  margin: 0 0 0.3rem;
}

.stat-card__value {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0b0b0f;
  margin-bottom: 0.1rem;
}

.stat-card__hint {
  color: #3f4a52;
  font-size: 0.95rem;
}

.sponsor-card {
  background-color: #ffffff;
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sponsor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #822433;
  line-height: 1.3;
  padding: 1.25rem 1.25rem 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.card-content {
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sponsor-points {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
  display: grid;
  gap: 0.35rem;
  color: #303437;
  line-height: 1.55;
}

.price-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 103, 120, 0.1);
  border-left: 3px solid rgb(0, 103, 120);
  border-radius: 8px;
  font-weight: 700;
  color: #004f5a;
  align-self: flex-start;
  margin-top: auto;
}

.price-text {
  letter-spacing: 0.02rem;
}
</style>
