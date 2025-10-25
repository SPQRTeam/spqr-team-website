<template>
    <v-app-bar 
        :elevation="6"
        color="#822433"
    >
    <template v-slot:prepend>
        <v-app-bar-nav-icon 
            v-if="mobile"
            @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
        <router-link to="/" class="logo-link">
            <v-img
                src="/logos/logo-text.png"
                alt="SPQR Team Logo"
                max-height="30"
                max-width="200"
                contain
            ></v-img>
        </router-link>
    </v-app-bar-title>

    <template v-slot:append>
        <template v-if="!mobile">
            <v-btn to="/team">Team</v-btn>
            <v-btn to="/events">Events</v-btn>
            <v-btn to="/press">Press</v-btn>
            <v-btn to="/publications">publications</v-btn>
            <v-btn to="/code-releases">Code Releases</v-btn>
            <v-btn to="/media">Media</v-btn>
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
            <v-list-item 
                v-for="item in menuItems" 
                :key="item.title"
                :title="item.title"
                :to="item.path"
                link
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const drawer = ref(false)

const menuItems = [
    { title: 'Team', path: '/team' },
    { title: 'Events', path: '/events' },
    { title: 'Press', path: '/press' },
    { title: 'publications', path: '/publications' },
    { title: 'Code Releases', path: '/code-releases' },
    { title: 'Media', path: '/media' },
    { title: 'Students', path: '/students' },
    { title: 'Sponsors', path: '/sponsors' },
    { title: 'Contacts', path: '/contacts' }
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