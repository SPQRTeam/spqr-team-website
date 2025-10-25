<template>
  <v-footer
    app
    height="60"
    class="d-flex justify-center align-center footer-shadow"
    elevation="2"
  >
    <div class="d-flex align-center justify-space-between w-100 px-4">
      <div class="d-flex align-center">
        <a
          class="d-inline-block mr-4 social-link"
          :href="sapienzaLink"
          rel="noopener noreferrer"
          target="_blank"
          title="Sapienza Università di Roma"
        >
          <v-img
            :src="currentLogo"
            :width="logoWidth"
            contain
            alt="Sapienza"
          />
        </a>

        <div class="text-body-3 text-disabled">
          {{ (new Date()).getFullYear() }} 
          — 
          <span class="d-none d-md-inline-block">Università degli Studi di Roma "La Sapienza" — </span>
          <a
            class="text-decoration-none on-surface"
            rel="noopener noreferrer"
            target="_blank"
          >
            SPQR Team
          </a>
        </div>
      </div>

      <div class="d-flex align-center">
        <a
          v-for="item in socialItems"
          :key="item.title"
          class="d-inline-block ml-3 social-icon-footer"
          :href="item.href"
          rel="noopener noreferrer"
          target="_blank"
          :title="item.title"
        >
          <v-icon :icon="item.icon" size="40" color="white"></v-icon>
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script setup>
  import { computed } from 'vue';
  import { useDisplay } from 'vuetify';

  const display = useDisplay();
  const logoSapienza = new URL('@/assets/sapienza_logos/logo_sapienza_white.png', import.meta.url).href;
  const logoSapienzaSmall = new URL('@/assets/sapienza_logos/logo_sapienza_white_small.png', import.meta.url).href;
  
  const currentLogo = computed(() => {
    return display.smAndDown.value ? logoSapienzaSmall : logoSapienza;
  });
  
  const logoWidth = computed(() => {
    return display.smAndDown.value ? 45 : 150;
  });

  const sapienzaLink = 'https://www.uniroma1.it/it/pagina-strutturale/home';

  const socialItems = [
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/spqrteam/',
      icon: 'mdi-instagram',
    },
    {
      title: 'YouTube',
      href: 'https://www.youtube.com/user/SPQRTeamItaly',
      icon: 'mdi-youtube',
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/spqr-team',
      icon: 'mdi-linkedin',
    }
  ]
</script>

<style scoped lang="css">
  .footer-shadow{
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2)
  }

  .social-icon-footer {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .social-icon-footer:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
</style>