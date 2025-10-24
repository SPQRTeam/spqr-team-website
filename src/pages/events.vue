<template>
    <v-container>
        <h1>Events</h1>
        <!-- Add your team content here -->
    </v-container>
</template>

<script setup>

const events = [

    //* --- 2025 --- *//
    {
        name: 'Maker Faire 2025 - Rome, Italy',
        year: 2025,
        month: 'October',
        days: '17-19',
        description: 'The SPQR team participated in friendly tournament during the Maker Faire in Rome (Italy), 17-19 October 2025, with HTWK (Leipzig University), and Tech United (Eindhoven University). This was the first eurpean tournament with Booster Robotics robots!',
        cover: '',
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
        days: '',
        description: 'The SPQR Team competed in the first World Humanoid Robot Games held in Beijing in August 2025.',
        cover: '',
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
        days: '',
        description: 'The SPQR Team competed in the Champions Cup, achieving third place in the seeding round and finishing fourth overall. Additionally, the team earned third place in the KICKin Rollin Technical Challenge!',
        cover: '',
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
        cover: '',
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
        description: 'The SPQR team participated in friendly tournament during the Maker Faire in Rome (Italy), 25-27 October 2024, with HTWK (Leipzig University).',
        cover: '',
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
        days: '',
        description: 'The SPQR Team competed in the Champions Cup, achieving third place in the seeding round and finishing fifth overall. Additionally, the team earned third place in the Shared Autonomy Challenge!',
        cover: '',
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
        description: 'The SPQR team participated in a triangular friendly tournament during the Maker Faire in Rome (Italy), 20-22 October 2023, with NaoDevis (Dortmunt Univesity) and Hulks (Hamburg Univesity).',
        cover: '',
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
        days: '',
        description: 'The RoboCup 2023 took place in Bourdeax (France) from 4 to 10 July 2023. The SPQR team competed in the Champions Cup winning the seventh place and the quarter-finals. At the symposium, held in University of Bordeaux, the SPQR team won the Best Paper Award.',
        cover: '',
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
        description: 'The SPQR team participated in a friendly series of matches against Nao Devils team during the Maker Faire in Rome (Italy), 7-9 October 2022.',
        cover: '',
        links: [
            {
                site: 'https://makerfairerome.eu/it/',
                video: 'https://www.youtube.com/watch?v=HJP8uQ0UoJ8',
                results: '',
            },
        ],
    },

    {
        name: 'RoboCup 2022 - Bangkok, Thailand (Online)',
        year: 2022,
        month: 'July',
        days: '13-17',
        description: 'The RoboCup 2022 took place in Bangkok (Thailand) from 13 to 17 July 2022. The SPQR team competed in the Standard Platform League achieving  the eleventh place.',
        cover: '',
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
        description: 'The SPQR team participated in a triangular friendly tournament during the Maker Faire in Rome (Italy), 18-20 October 2019.',
        cover: '',
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
        cover: '',
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
        cover: '',
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
        cover: '',
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
        cover: '',
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
