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

    <v-app-bar-title>SPQR Team</v-app-bar-title>

    <template v-slot:append>
        <template v-if="!mobile">
            <v-btn>Team</v-btn>
            <v-btn>Events</v-btn>
            <v-btn>Research</v-btn>
            <v-btn>Code Releases</v-btn>
            <v-btn>Media</v-btn>
            <v-btn>Students</v-btn>
            <v-btn>Sponsors</v-btn>
            <v-btn>Contacts</v-btn>
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
                :key="item"
                :title="item"
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
    'Team',
    'Events',
    'Research',
    'Code Releases',
    'Media',
    'Students',
    'Sponsors',
    'Contacts'
]
</script>