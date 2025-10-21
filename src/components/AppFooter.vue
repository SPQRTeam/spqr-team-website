<template>
  <v-footer
    app
    height="60"
    class="d-flex justify-center align-center footer-shadow"
    elevation="2"
  >
    <div class="d-flex align-center">
      <a
        v-for="item in items"
        :key="item.title"
        class="d-inline-block mr-4 social-link"
        :href="item.href"
        rel="noopener noreferrer"
        target="_blank"
        :title="item.title"
      >
        <v-img
          :src="currentLogo"
          :width="logoWidth"
          contain
          :alt="item.title"
        />
      </a>

      <div class="text-body-3 text-disabled">
        {{ (new Date()).getFullYear() }} 
        — 
        <span class="d-none d-sm-inline-block">Università degli Studi di Roma "La Sapienza" — </span>
        <a
          class="text-decoration-none on-surface"
          href="https://vuetifyjs.com/about/licensing/"
          rel="noopener noreferrer"
          target="_blank"
        >
          SPQR Team
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

  const items = [
    {
      title: 'Sapienza',
      href: 'https://www.uniroma1.it/it/pagina-strutturale/home',
      icon: logoSapienza,
    }
  ]
</script>

<style scoped lang="css">
  .footer-shadow{
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2)
  }
</style>