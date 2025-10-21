<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            :style="{ height: '350px' }"
            src="@/assets/team/cover.png"
            alt="Team Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">TEAM</h1>
            </div>
        </v-img>
    </div>

    <v-container>
    
        <div class="section-title">Team picture RoboCup 2025 - Salvador (Brazil)</div>

        <v-img
        class="team-photo"
        :style="{ height: '800px', width: '1000px', margin: 'auto', borderRadius: '10px' }"
        src="@/assets/team/team-2025.jpg"
        alt="SPQR Team Cover"
        cover
        ></v-img>

        <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider>

        <div class="section-title">Members</div>

        <v-row class="members-grid" justify="center">
            <v-col cols="6" sm="3" md="2" v-for="member in row_1" :key="member.name" class="member-col">
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
            <v-col cols="6" sm="3" md="2" v-for="member in row_2" :key="member.name" class="member-col">
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
            <v-col cols="6" sm="3" md="2" v-for="member in row_3" :key="member.name" class="member-col">
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
            <v-col cols="6" sm="3" md="2" v-for="member in row_4" :key="member.name" class="member-col">
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
const row_1 = [
    {
        name: 'Prof. Daniele Nardi',
        image: new URL('@/assets/team/Nardi.jpg', import.meta.url).href
    },
    {
        name: 'Prof. Luca Iocchi',
        image: new URL('@/assets/team/Iocchi.jpg', import.meta.url).href
    },
    {
        name: 'Dr. Vincenzo Suriani - Team Leader',
        image: new URL('@/assets/team/Suriani.jpg', import.meta.url).href
    },
    {
        name: 'Prof. Domenico Bloisi',
        image: new URL('@/assets/team/Bloisi.jpg', import.meta.url).href
    }
]

const row_2 = [
    {
        name: 'Daniele Affinita',
        image: new URL('@/assets/team/DanieleAffinita.jpg', import.meta.url).href
    },
    {
        name: 'Flavio Maiorana',
        image: new URL('@/assets/team/FlavioMaiorana.jpg', import.meta.url).href
    },
    {
        name: 'Flavio Volpi',
        image: new URL('@/assets/team/FlavioVolpi.jpg', import.meta.url).href
    },
    {
        name: 'Francesco Petri',
        image: new URL('@/assets/team/FrancescoPetri.jpg', import.meta.url).href
    }
]

const row_3 = [
    {
        name: 'Valerio Spagnoli',
        image: new URL('@/assets/team/ValerioSpagnoli.jpg', import.meta.url).href
    },
    {
        name: 'Michele Brienza',
        image: new URL('@/assets/team/MicheleBrienza.jpg', import.meta.url).href
    },
    {
        name: 'Eugenio Bugli',
        image: new URL('@/assets/team/EugenioBugli.jpg', import.meta.url).href
    },
    {
        name: 'Filippo Ansalone',
        image: new URL('@/assets/team/FilippoAnsalone.jpg', import.meta.url).href
    }
]

const row_4 = [
    {
        name: 'Can Lin',
        image: new URL('@/assets/team/CanLin.jpg', import.meta.url).href
    },
    {
        name: 'Jacopo Tedeschi',
        image: new URL('@/assets/team/JacopoTedeschi.jpg', import.meta.url).href
    },
    {
        name: 'Damniano Imola',
        image: new URL('@/assets/team/DamianoImola.jpg', import.meta.url).href
    }
]
</script>

<style scoped>
.cover-section {
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    width: 100vw;
}

.cover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.cover-title {
    color: white;
    font-size: 10rem;
    font-weight: bold;
    text-shadow: 2px 2px 100px rgba(0, 0, 0, 0.8);
}

.cover-image :deep(img) {
    object-position: center 30%;
}


.section-title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 3rem;
    color: rgb(30, 30, 30);
}

.team-photo :deep(img) {
    object-fit: cover;
    object-position: center 40%;
}

.members-grid {
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 1800px;
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
    font-size: 1.2rem;
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
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgb(50, 50, 50);
}

.past-members-list li {
    margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
    .cover-title {
        font-size: 2.5rem;
    }
}
</style>
