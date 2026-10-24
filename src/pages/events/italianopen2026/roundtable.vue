<template>
  <div class="page-header">
    <h1 class="page-title">Humanoid Robot Soccer: What we expect next</h1>
    <p class="page-subtitle">Round Table &middot; Italian Open 2026 &middot; Maker Faire Rome</p>
    <div class="roman-divider" />
  </div>

  <v-container>
    <v-row justify="center">
      <v-col class="info-section" cols="12" lg="9" md="11">
        <router-link class="back-link" to="/events/italianopen2026">
          <v-icon icon="mdi-arrow-left" size="18" /> Back to Italian Open 2026
        </router-link>

        <div class="event-facts">
          <span class="fact"><v-icon icon="mdi-calendar" size="20" /> Sunday, October 25, 2026</span>
          <span class="fact"><v-icon icon="mdi-clock-outline" size="20" /> 1 hour</span>
          <span class="fact"><v-icon icon="mdi-map-marker" size="20" /> Maker Faire Rome</span>
        </div>

        <p class="info-text">
          A meeting with the team leaders to discuss the future directions of robot soccer:
          what has changed with the new humanoid robots, and the new perspectives they open up.
        </p>

        <h2 class="section-title">Moderator</h2>
        <div class="moderator-card">
          <v-avatar class="person-photo" color="#822433" size="110">
            <v-img v-if="moderator.photo" :alt="moderator.name" cover :src="moderator.photo" />
            <v-icon v-else color="white" icon="mdi-account" size="60" />
          </v-avatar>
          <div class="person-body">
            <span class="person-name">{{ moderator.name }}</span>
            <span class="person-affiliation">{{ moderator.affiliation }}</span>
          </div>
        </div>

        <h2 class="section-title">Panelists</h2>
        <v-row justify="center">
          <v-col
            v-for="person in panelists"
            :key="person.name"
            cols="12"
            md="4"
            sm="6"
          >
            <div class="panelist-card">
              <v-avatar class="person-photo" color="#822433" size="110">
                <v-img v-if="person.photo" :alt="person.name" cover :src="person.photo" />
                <v-icon v-else color="white" icon="mdi-account" size="60" />
              </v-avatar>
              <span class="person-name">{{ person.name }}</span>
              <span v-if="person.role" class="role-badge">{{ person.role }}</span>
              <span class="person-affiliation">{{ person.affiliation }}</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useSeo } from '@/composables/useSeo'

  const moderator = { name: 'Prof. Vincenzo Suriani', affiliation: 'Sapienza University of Rome', photo: '/assets/italianopen/Suriani.jpeg' }

  const panelists = [
    { name: 'Prof. Alessandra Rossi', affiliation: 'University of Naples Federico II', role: 'RoboCup Trustee', photo: '/assets/italianopen/Rossi.jpeg' },
    { name: 'Prof. Luca Iocchi', affiliation: 'Sapienza University of Rome', photo: '/assets/italianopen/Iocchi.jpeg' },
    { name: 'Prof. Domenico Daniele Bloisi', affiliation: 'UNINT – International University of Rome', role: 'National Coordinator RoboCup Italy', photo: '/assets/italianopen/Bloisi.jpeg' },
  ]

  useSeo({
    title: 'Humanoid Robot Soccer: What we expect next - Round Table - SPQR Team',
    description: 'Round table "Humanoid Robot Soccer: What we expect next" at the Italian Open 2026, Maker Faire Rome, Sunday October 25, 2026. Moderated by Prof. Vincenzo Suriani.',
    path: '/events/italianopen2026/roundtable/',
    canonical: 'https://spqr.diag.uniroma1.it/events/italianopen2026/roundtable/',
    ogTitle: 'Humanoid Robot Soccer: What we expect next - Round Table',
    ogDescription: 'Round table at the Italian Open 2026, Maker Faire Rome, Sunday October 25, 2026.',
    ogUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/roundtable/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Humanoid Robot Soccer: What we expect next - Round Table',
    twitterDescription: 'Round table at the Italian Open 2026, Maker Faire Rome, Sunday October 25, 2026.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/roundtable/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })
</script>

<style scoped>
.info-section {
    margin: 4rem auto;
    color: #212121;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    color: #822433;
    font-weight: 500;
    text-decoration: none;
}

.back-link:hover {
    text-decoration: underline;
}

.event-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.fact {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(130, 36, 51, 0.08);
    color: #822433;
    font-weight: 600;
}

.info-text {
    font-size: 1.1rem;
    line-height: 1.7;
}

.section-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 3rem 0 1.25rem;
    color: #822433;
    text-align: center;
}

.moderator-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    max-width: 32rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(130, 36, 51, 0.1), rgba(130, 36, 51, 0.03));
    border: 1px solid rgba(130, 36, 51, 0.2);
}

.panelist-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1.75rem 1.25rem;
    border-top: 4px solid #822433;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
}

.panelist-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(130, 36, 51, 0.18);
}

.person-photo {
    flex-shrink: 0;
    border: 4px solid #fff;
    box-shadow: 0 0 0 2px #822433;
}

.panelist-card .person-photo {
    margin-bottom: 1rem;
}

.panelist-card .role-badge {
    align-self: center;
    margin-top: 0.4rem;
}

.person-body {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
}

.role-badge {
    align-self: flex-start;
    padding: 0.1rem 0.6rem;
    border-radius: 999px;
    background: #822433;
    color: #fff;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.person-name {
    margin-top: 0.3rem;
    font-size: 1.15rem;
    font-weight: 700;
}

.person-affiliation {
    font-size: 0.95rem;
    opacity: 0.75;
}

@media (max-width: 600px) {
    .moderator-card {
        flex-direction: column;
        text-align: center;
    }

    .role-badge {
        align-self: center;
    }
}
</style>
