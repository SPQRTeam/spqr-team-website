<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            :style="{ height: '350px' }"
            src="/assets/team/cover.png"
            alt="Team Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">TEAM</h1>
            </div>
        </v-img>
    </div>

    <div class="carousel-background-section">
        <div 
            class="carousel-background-blur"
            :style="{ backgroundImage: `url(${currentPhoto})` }"
        ></div>
        <div class="carousel-background-gradient"></div>
        
        <v-container>
            <!-- <div class="section-title">Teams</div> -->

            <v-carousel
                cycle
                :interval="5000"
                hide-delimiter-background
                show-arrows="hover"
                height="1000"
                class="team-carousel"
                @update:model-value="updateBackground"
            >
                <v-carousel-item
                    v-for="(photo, i) in team_photos"
                    :key="i"
                >
                <div class="photo-title">{{ photo.title }}</div>
                <v-img
                :src="photo.image"
                :alt="photo.title"
                class="team-photo"
                height="800"
                contain
                ></v-img>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </div>

    <v-container>

        <!-- <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider> -->

        <div class="section-title">Members</div>

        <v-row class="members-grid" justify="center">
            <v-col cols="6" sm="3" md="3" lg="2" xl="2" v-for="member in row_1" :key="member.name" class="member-col">
                <div class="member-card">
                    <v-img
                        :src="member.image"
                        :alt="member.name"
                        class="member-photo"
                        aspect-ratio="1"
                        cover
                    ></v-img>
                    <div class="member-name">{{ member.name }}</div>
                </div>
            </v-col>
        </v-row>

        <v-row class="members-grid" justify="center">
            <v-col cols="6" sm="3" md="3" lg="2" xl="2" v-for="member in row_2" :key="member.name" class="member-col">
                <div class="member-card">
                    <v-img
                        :src="member.image"
                        :alt="member.name"
                        class="member-photo"
                        aspect-ratio="0"
                        cover
                    ></v-img>
                    <div class="member-name">{{ member.name }}</div>
                </div>
            </v-col>
        </v-row>

        <v-row class="members-grid" justify="center">
            <v-col cols="6" sm="3" md="3" lg="2" xl="2" v-for="member in row_3" :key="member.name" class="member-col">
                <div class="member-card">
                    <v-img
                        :src="member.image"
                        :alt="member.name"
                        class="member-photo"
                        aspect-ratio="0"
                        cover
                    ></v-img>
                    <div class="member-name">{{ member.name }}</div>
                </div>
            </v-col>
        </v-row>

        <v-row class="members-grid" justify="center">
            <v-col cols="6" sm="3" md="3" lg="2" xl="2" v-for="member in row_4" :key="member.name" class="member-col">
                <div class="member-card">
                    <v-img
                        :src="member.image"
                        :alt="member.name"
                        class="member-photo"
                        aspect-ratio="0"
                        cover
                    ></v-img>
                    <div class="member-name">{{ member.name }}</div>
                </div>
            </v-col>
        </v-row>

        <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider>

        <div class="section-title">Past Members</div>

        <v-row class="past-members-section">
            <v-col cols="12" md="6" class="past-members-col">
                <h3 class="past-members-subtitle">Team Leaders</h3>
                <ul class="past-members-list">
                    <li>Emanuele Antonioni - 2021-2022</li>
                    <li>Francesco Riccio - 2013-2015</li>
                    <li>Federico Patota - 2014-2015</li>
                    <li>Guglielmo Gemignani - 2012-2013</li>
                    <li>Fabio Previtali - 2009-2010, 2012-2013</li>
                    <li>Luca Marchetti - 2006-2007, 2009-2010</li>
                    <li>Matteo Leonetti - 2007-2009</li>
                </ul>
            </v-col>

            <v-col cols="12" md="6" class="past-members-col">
                <h3 class="past-members-subtitle">Students</h3>
                <v-row>
                    <v-col cols="12" lg="6">
                        <ul class="past-members-list">
                            <li>Graziano Specchi</li>
                            <li>Emanuele Musumeci</li>
                            <li>Amila Sikalo</li>
                            <li>Rosanna Greco</li>
                            <li>Elisa Foderaro</li>
                            <li>Fabian Fonseca</li>
                            <li>David Esteban</li>
                            <li>Akshay Dhonthi</li>
                            <li>Eleonora Chiarantano</li>
                            <li>Tommaso Carlini</li>
                            <li>Dario Albani</li>
                            <li>Emanuele Borzi</li>
                            <li>Francesco Bella</li>
                            <li>Matteo Cecchini</li>
                            <li>Daniele De Simone</li>
                            <li>Riccardo Cardelli</li>
                            <li>Tiziano Manoni</li>
                            <li>Vittorio Morrone</li>
                        </ul>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <ul class="past-members-list">
                            <li>Chiara Picardi</li>
                            <li>Lorenzo Tognalini</li>
                            <li>Gabriel Ulici</li>
                            <li>Martina Deturres</li>
                            <li>Valentina Negro Maggio</li>
                            <li>Federica Fieno</li>
                            <li>Mauro Giampieri</li>
                            <li>Enrico Mingo</li>
                            <li>Armando Nania</li>
                            <li>Marco Paolelli</li>
                            <li>Valerio Ortensi</li>
                            <li>Ali Youssef</li>
                            <li>Mirko Malacario</li>
                            <li>Ricardo Dodds</li>
                            <li>Leonardo Brizi</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const team_photos = [
    {
        image: baseUrl + 'assets/team/team-mf2025.jpg',
        title: 'Maker Faire 2025 - Rome, Italy'
    },
    {
        image: baseUrl + 'assets/team/team-whrg2025.jpg',
        title: 'World Humanoid Robot Games 2025 - Beijing, China'
    },
    {
        image: baseUrl + 'assets/team/team-rc2025.jpg',
        title: 'RoboCup 2025 - Salvador, Brazil'
    },
    {
        image: baseUrl + 'assets/team/team-go2025.png',
        title: 'RoboCup German Open 2025 - Nuremberg, Germany'
    },
    {
        image: baseUrl + 'assets/team/team-rc2024.png',
        title: 'RoboCup 2024 - Eindhoven, Netherlands'
    },
    {
        image: baseUrl + 'assets/team/team-rc2023.jpeg',
        title: 'RoboCup 2023 - Bordeaux, France'
    },
    {
        image: baseUrl + 'assets/team/team-rc2022.jpg',
        title: 'RoboCup 2022 - Bangkok, Thailand'
    },
]

const row_1 = [
    {
        name: 'Prof. Daniele Nardi',
        image: baseUrl + 'assets/team/Nardi.jpg'
    },
    {
        name: 'Prof. Luca Iocchi',
        image: baseUrl + 'assets/team/Iocchi.jpg'
    },
    {
        name: 'Dr. Vincenzo Suriani - Team Leader',
        image: baseUrl + 'assets/team/Suriani.jpg'
    },
    {
        name: 'Prof. Domenico Bloisi',
        image: baseUrl + 'assets/team/Bloisi.jpg'
    }
]

const row_2 = [
    {
        name: 'Daniele Affinita',
        image: baseUrl + 'assets/team/DanieleAffinita.jpg'
    },
    {
        name: 'Flavio Maiorana',
        image: baseUrl + 'assets/team/FlavioMaiorana.jpg'
    },
    {
        name: 'Flavio Volpi',
        image: baseUrl + 'assets/team/FlavioVolpi.jpg'
    },
    {
        name: 'Francesco Petri',
        image: baseUrl + 'assets/team/FrancescoPetri.jpg'
    }
]

const row_3 = [
    {
        name: 'Valerio Spagnoli',
        image: baseUrl + 'assets/team/ValerioSpagnoli.jpg'
    },
    {
        name: 'Michele Brienza',
        image: baseUrl + 'assets/team/MicheleBrienza.jpg'
    },
    {
        name: 'Eugenio Bugli',
        image: baseUrl + 'assets/team/EugenioBugli.jpg'
    },
    {
        name: 'Filippo Ansalone',
        image: baseUrl + 'assets/team/FilippoAnsalone.jpg'
    }
]

const row_4 = [
    {
        name: 'Can Lin',
        image: baseUrl + 'assets/team/CanLin.jpg'
    },
    {
        name: 'Jacopo Tedeschi',
        image: baseUrl + 'assets/team/JacopoTedeschi.jpg'
    },
    {
        name: 'Damniano Imola',
        image: baseUrl + 'assets/team/DamianoImola.jpg'
    }
]

const currentPhoto = ref(team_photos[0].image)

const updateBackground = (index) => {
    currentPhoto.value = team_photos[index].image
}
</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 30% !important;
}

.carousel-background-section {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    overflow: hidden;
}

.carousel-background-blur {
    position: absolute;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
    background-size: cover;
    background-position: center;
    filter: blur(25px);
    transform: scale(1.2);
    z-index: 0;
    transition: background-image 0.8s ease-in-out;
}

.carousel-background-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, transparent 0%, rgba(241, 244, 243, 0.2) 60%, rgba(241, 244, 243, 0.7) 90%, #f1f4f3 100%);
    z-index: 1;
}

.carousel-background-section .v-container {
    position: relative;
    z-index: 2;
}

.section-title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 4rem;
    color: rgb(30, 30, 30);
}

.team-carousel {
    max-width: 1500px;
    margin: 0 auto 2rem;
    border-radius: 10px;
    overflow: hidden;
}

.team-carousel :deep(.v-carousel-item) {
    align-items: center;
    justify-content: center;
}

.team-photo {
    border-radius: 10px;
    width: 100%;
}

.photo-title {
    text-align: center;
    padding: 1rem;
    font-weight: 500;
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
}

.members-grid {
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
}

.member-col {
    padding: 8px !important;
}

.member-card {
    text-align: center;
}

.member-photo {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.member-name {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(30, 30, 30);
}

.past-members-section {
    max-width: 1200px;
    margin: 2rem auto;
}

.past-members-col {
    padding: 1rem;
}

.past-members-subtitle {
    font-size: 1.8rem;
    font-weight: 600;
    color: rgb(30, 30, 30);
    margin-bottom: 1rem;
}

.past-members-list {
    list-style-type: disc;
    padding-left: 2rem;
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgb(50, 50, 50);
}

.past-members-list li {
    margin-bottom: 0.5rem;
}
</style>
