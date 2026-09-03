<template>
  <v-app-bar
    color="#822433"
    :elevation="6"
  >
    <template #prepend>
      <v-app-bar-nav-icon
        v-if="mobile"
        @click="drawer = !drawer"
      />
    </template>

    <v-app-bar-title>
      <router-link class="logo-link" to="/">
        <v-img
          alt="SPQR Team Logo"
          contain
          max-height="30"
          max-width="200"
          src="/logos/logo-text.png"
        />
      </router-link>
    </v-app-bar-title>

    <template #append>
      <template v-if="!mobile">
        <v-btn to="/team">Team</v-btn>
        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              :active="eventsActive"
              append-icon="mdi-menu-down"
            >Events</v-btn>
          </template>
          <v-list bg-color="#822433">
            <v-list-item
              v-for="item in eventsItems"
              :key="item.path"
              link
              :title="item.title"
              :to="item.path"
            />
          </v-list>
        </v-menu>
        <v-btn to="/press">Press</v-btn>
        <v-btn to="/media">Media</v-btn>
        <v-btn to="/publications">Publications</v-btn>
        <v-btn to="/datasets">Datasets</v-btn>
        <v-btn to="/codebase">Codebase</v-btn>
        <v-btn to="/students">Students</v-btn>
        <v-btn to="/sponsors">Sponsors</v-btn>
        <v-btn to="/contacts">Contacts</v-btn>
      </template>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <template v-for="item in menuItems" :key="item.title">
        <v-list-group v-if="item.children" value="events">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="item.title" />
          </template>
          <v-list-item
            v-for="child in item.children"
            :key="child.path"
            link
            :title="child.title"
            :to="child.path"
          />
        </v-list-group>
        <v-list-item
          v-else
          link
          :title="item.title"
          :to="item.path"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()
  const route = useRoute()
  const drawer = ref(false)

  const eventsItems = [
    { title: 'All events', path: '/events' },
    { title: 'Italian Open 2026', path: '/events/italianopen2026' },
  ]

  // The Events button only opens the menu, so it needs to light up by itself
  const eventsActive = computed(() => route.path.startsWith('/events'))

  const menuItems = [
    { title: 'Team', path: '/team' },
    { title: 'Events', children: eventsItems },
    { title: 'Press', path: '/press' },
    { title: 'Media', path: '/media' },
    { title: 'Publications', path: '/publications' },
    { title: 'Datasets', path: '/datasets' },
    { title: 'Codebase', path: '/codebase' },
    { title: 'Students', path: '/students' },
    { title: 'Sponsors', path: '/sponsors' },
    { title: 'Contacts', path: '/contacts' },
  ]
</script>

<style scoped>
.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s;
}

.logo-link:hover {
    opacity: 0.85;
}
</style>
