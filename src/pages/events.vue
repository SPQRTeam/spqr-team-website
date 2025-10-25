<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            :style="{ height: '350px' }"            
            src="/assets/events/cover.png"
            alt="Events Header Cover"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">EVENTS</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <v-row class="events-grid" justify="center">
            <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                v-for="event in events" 
                :key="event.name"
                class="event-col"
            >
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <!-- Front of card -->
                        <div class="flip-card-front">
                            <v-img
                                :src="getImageUrl(event.cover)"
                                :alt="event.name"
                                class="event-cover"
                                aspect-ratio="1"
                                cover
                            >
                                <div class="event-overlay">
                                    <h3 class="event-title">{{ event.name }}</h3>
                                </div>
                            </v-img>
                        </div>
                        
                        <!-- Back of card -->
                        <div class="flip-card-back">
                            <div class="event-back-content">
                                <h3 class="event-back-title">{{ event.name }}</h3>
                                <p class="event-date">{{ event.month }} {{ event.days }}, {{ event.year }}</p>
                                <p class="event-description">{{ event.description }}</p>
                                <div class="event-links">
                                    <a 
                                        v-if="event.links[0].site" 
                                        :href="event.links[0].site" 
                                        target="_blank"
                                        class="event-link"
                                    >
                                        Website
                                    </a>
                                    <a 
                                        v-if="event.links[0].video" 
                                        :href="event.links[0].video" 
                                        target="_blank"
                                        class="event-link"
                                    >
                                        Video
                                    </a>
                                    <a 
                                        v-if="event.links[0].results" 
                                        :href="event.links[0].results" 
                                        target="_blank"
                                        class="event-link"
                                    >
                                        Results
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

const baseUrl = import.meta.env.BASE_URL

const getImageUrl = (path) => {
    return new URL(path.replace('@/', '../'), import.meta.url).href
}

const events = [

    //* --- 2025 --- *//
    {
        name: 'Maker Faire 2025 - Rome, Italy',
        year: 2025,
        month: 'October',
        days: '17-19',
        description: 'The SPQR team hosted a friendly tournament during the Maker Faire in Rome (Italy), with HTWK (Leipzig University), and Tech United (Eindhoven University). The first eurpean tournament with Booster Robotics robots!',
        cover: baseUrl + 'assets/events/cover-mf2025.png',
        links: [
            {
                site: 'https://makerfairerome.eu/it/',
                video: '',
                results: '',
            },
        ],
    },

    {
        name: 'World Humanoid Robot Games - Beijing, China',
        year: 2025,
        month: 'August',
        days: '13-17',
        description: 'The SPQR Team competed in the first World Humanoid Robot Games held in Beijing in August 2025.',
        cover: baseUrl + 'assets/events/cover-whrg2025.jpg',
        links: [
            {
                site: '',
                video: '',
                results: '',
            },
        ],
    },

    {
        name: 'RoboCup 2025 - Salvador de Bahia, Brasil',
        year: 2025,
        month: 'July',
        days: '15-21',
        description: 'The SPQR Team competed in the Champions Cup, achieving third place in the seeding round and finishing fourth overall. Additionally, the team earned third place in the KICKin Rollin Technical Challenge!',
        cover: baseUrl + 'assets/events/cover-rc2025.jpg',
        links: [
            {
                site: 'https://2025.robocup.org/',
                video: '',
                results: 'https://spl.robocup.org/results-2025/',
            },
        ],
    },

    {
        name: 'RoboCup German Open 2025 - Nuremberg, Germany',
        year: 2025,
        month: 'March',
        days: '10-14',
        description: 'The SPQR Team competed in the RoboCup German Open 2025, achieving third place!',
        cover: baseUrl + 'assets/events/cover-go2025.png',
        links: [
            {
                site: 'https://2025.robocup.org/',
                video: '',
                results: 'https://spl.robocup.org/results-2025/',
            },
        ],
    },

    //* --- 2024 --- *//
    {
        name: 'Maker Faire 2024 - Rome, Italy',
        year: 2024,
        month: 'October',
        days: '25-27',
        description: 'The SPQR team hosted a friendly tournament during the Maker Faire in Rome (Italy), 25-27 October 2024, with HTWK (Leipzig University).',
        cover: baseUrl + 'assets/events/cover-mf2024.png',
        links: [
            {
                site: 'https://makerfairerome.eu/it/',
                video: '',
                results: '',
            },
        ],
    },
    
    {
        name: 'RoboCup 2024 - Eindhoven, Netherlands',
        year: 2024,
        month: 'July',
        days: '17-21',
        description: 'The SPQR Team competed in the Champions Cup, achieving third place in the seeding round and finishing fifth overall. Additionally, the team earned third place in the Shared Autonomy Challenge!',
        cover: baseUrl + 'assets/events/cover-rc2024.png',
        links: [
            {
                site: 'https://2024.robocup.org/',
                video: 'https://www.youtube.com/watch?v=lAl1qg1B2WM',
                results: 'https://spl.robocup.org/results-2024/',
            },
        ],
    },

    //* --- 2023 --- *//
    {
        name: 'Maker Faire 2023 - Rome, Italy',
        year: 2023,
        month: 'October',
        days: '20-22', 
        description: 'The SPQR team hosted in a triangular friendly tournament during the Maker Faire in Rome (Italy), 20-22 October 2023, with NaoDevis (Dortmunt Univesity) and Hulks (Hamburg Univesity).',
        cover: baseUrl + 'assets/events/cover-mf2024.png',
        links: [
            {
                site: 'https://makerfairerome.eu/it/',
                video: '',
                results: '',
            },
        ],
    },

    {
        name: 'RoboCup 2023 - Bordeaux, France',
        year: 2023,
        month: 'July',
        days: '4-10',
        description: 'The RoboCup 2023 took place in Bourdeax (France). The SPQR team competed in the Champions Cup winning the seventh place and the quarter-finals. We also won the Best Paper Award!',
        cover: baseUrl + 'assets/events/cover-rc2023.png',
        links: [
            {
                site: 'https://2023.robocup.org/en/home/',
                video: 'https://www.youtube.com/watch?v=DXEUjxQSiG0',
                results: 'https://spl.robocup.org/results-2023/',
            },
        ],
    },

    //* --- 2022 --- *//
    {
        name: 'Maker Faire 2022 - Rome, Italy',
        year: 2022,
        month: 'October',
        days: '7-9',
        description: 'The SPQR team hosted in a friendly series of matches against Nao Devils team during the Maker Faire in Rome (Italy), 7-9 October 2022.',
        cover: baseUrl + 'assets/events/cover-mf2022.png',
        links: [
            {
                site: 'https://makerfairerome.eu/it/',
                video: 'https://www.youtube.com/watch?v=HJP8uQ0UoJ8',
                results: '',
            },
        ],
    },

    {
        name: 'RoboCup 2022 - Bangkok, Thailand',
        year: 2022,
        month: 'July',
        days: '13-17',
        description: 'The RoboCup 2022 took place in Bangkok (Thailand) from 13 to 17 July 2022. The SPQR team competed in the Standard Platform League achieving  the eleventh place.',
        cover: baseUrl + 'assets/events/cover-rc2022.png',
        links: [
            {
                site: 'https://2022.robocup.org/',
                video: 'https://www.youtube.com/watch?v=s92LMa1njy4',
                results: 'https://spl.robocup.org/results-2022/',
            },
        ],
    },

    //* --- 2019 --- *//
    {
        name: 'Maker Faire 2019 - Rome, Italy',
        year: 2019,
        month: 'October',
        days: '18-20',
        description: 'The SPQR team hosted a triangular friendly tournament during the Maker Faire in Rome (Italy), 18-20 October 2019.',
        cover: baseUrl + 'assets/events/cover-mf2019.png',
        links: [
            {
                site: 'https://makerfairerome.eu/it/',
                video: '',
                results: '',
            },
        ],
    },

    {
        name: 'RoboCup 2019 - Sydney, Australia',
        year: 2019,
        month: 'July',
        days: '2-8',
        description: 'The RoboCup 2019 was held in Sydney (Australia), 2-8 July 2019. SPQR Team reconfirmed itself in the Champions Cup including the best 12 teams in the world.',
        cover: baseUrl + 'assets/events/cover-rc2019.png',
        links: [
            {
                site: 'https://2019.robocup.org/',
                video: '',
                results: 'https://spl.robocup.org/results-2019/',
            },
        ],
    },

    //* --- 2018 ---*//
    {
        name: 'RoboCup 2018 - Montereal, Canada',
        year: 2018,
        month: 'June',
        days: '18-22',
        description: 'The RoboCup 2018 was held in Montreal (Canada), 18-22 June 2018. SPQR Team achieved the semifinals in the penalty kick competition and entered the Champions Cup including the best 12 teams in the world.',
        cover: baseUrl + 'assets/events/cover-rc2018.png',
        links: [
            {
                site: 'https://2018.robocup.org/',
                video: '',
                results: 'https://spl.robocup.org/results-2018/',
            },
        ],
    },

    //* --- 2017 ---*//
    {
        name: 'RoboCup German Open 2017 - Magdeburg, Germany',
        year: 2017,
        month: 'March',
        days: '5-7',
        description: 'The RoboCup German Open 2017 was held in Magdeburg (Germany), 5-7 May 2017. SPQR Team achieved the 2nd Place in the Challenge Shield.',
        cover: baseUrl + 'assets/events/cover-go2017.png',
        links: [
            {
                site: 'https://robocup.de/',
                video: '',
                results: 'https://spl.robocup.org/results-2017/',
            },
        ],
    },

    //* --- 2016 ---*//
    {
        name: 'RoboCup 2016 - Leipzig, Germany',
        year: 2016,
        month: 'July',
        days: '1-5',
        description: 'The RoboCup 2016 was held in Leipzig (Germany), 1-5 July 2016.',
        cover: baseUrl + 'assets/events/cover-rc2016.png',
        links: [
            {
                site: 'https://2016.robocup.org/web/index-2.html',
                video: '',
                results: 'https://spl.robocup.org/history/results-2016/',
            },
        ],
    },
]


</script>

<style scoped>
.cover-image :deep(img) {
    object-position: center 50% !important;
}

.events-grid {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 2rem 0;
}

.event-col {
    padding: 1rem;
}

/* Flip card container */
.flip-card {
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.9s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
}

.flip-card-front {
    background-color: #bbb;
}

.flip-card-back {
    background-color: #822433;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

/* Front card styling */
.event-cover {
    width: 100%;
    height: 100%;
}

.event-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.event-title {
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    line-height: 1.3;
}

/* Back card styling */
.event-back-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.event-back-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

.event-date {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.event-description {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}

.event-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.event-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s;
}

.event-link:hover {
    background-color: white;
    color: #822433;
}

@media (max-width: 600px) {
    .event-title {
        font-size: 1.2rem;
    }
    
    .event-back-title {
        font-size: 1.1rem;
    }
    
    .event-description {
        font-size: 0.85rem;
        -webkit-line-clamp: 5;
    }
}
</style>