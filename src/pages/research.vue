<template>
    <v-container>
        <h1>Research</h1>
        <!-- Add your team content here -->
    </v-container>
</template>

<script setup>

const papers = [

    {
        title: 'LLCoach: Generating Robot Soccer Behaviors using Multi-Role Large Language Models',
        year: 2024,
        authors: 'M. Brienza, E. Musumeci, V. Suriani, D. Affinita, A. Pennisi, D. Nardi, D. D. Bloisi',
        abstract: 'The deployment of robots into human scenarios necessitates advanced planning strategies, particularly when we ask robots to operate in dynamic, unstructured environments. RoboCup offers the chance to deploy robots in one of those scenarios, a human-shaped game represented by a soccer match. In such scenarios, robots must operate using predefined behaviors that can fail in unpredictable conditions. This paper introduces a novel application of Large Language Models (LLMs) to address the challenge of generating actionable plans in such settings, specifically within the context of the RoboCup Standard Platform League (SPL) competitions where robots are required to autonomously execute soccer strategies that emerge from the interactions of individual agents. In particular, we propose a multi-role approach leveraging the capabilities of LLMs to generate and refine plans for a robotic soccer team. The potential of the proposed method is demonstrated through an experimental evaluation, which has been carried out by simulating multiple matches where robots with the AI-generated plans play against robots running human built code.',
        cover: '',
        extras: '',
        links: [
            {
                link: 'https://www.researchgate.net/publication/381736894_LLCoach_Generating_Robot_Soccer_Plans_using_Multi-Role_Large_Language_Models',
                site: 'https://sites.google.com/diag.uniroma1.it/llcoach/',
            },
        ],
    },


    {
        title: 'Structural Pruning for Multi-Object Detection on NAO Robots',
        year: 2023,
        authors: 'G. Specchi, V. Suriani, M. Brienza, F. Laus, F. Maiorana, A. Pennisi, D. Nardi, D. D. Bloisi',
        abstract: 'In this paper, we propose a real-time multi-class detection system for the NAO V6 robot in the context of RoboCup SPL (Stan- dard Platform League) using state-of-the-art structural pruning tech- niques on neural networks derived from YOLOv7-tiny. Our approach combines structural pruning and fine-tuning, to obtain a pruned network that maintains high accuracy while reducing the number of parameters and the computational complexity of the network. The system is capa- ble of detecting various objects, including the ball, goalposts, and other robots, using the cameras of the robot. The goal has been to guarantee high speed and accuracy trade-offs suitable for the limited computa- tional resources of the NAO robot. Moreover, we demonstrate that our system can run in real-time on the NAO robot with a frame rate of 32 frames per second on 224 ×224 input images, which is sufficient for soccer competitions. Our results show that our pruned networks achieve comparable accuracy to the original network while significantly reducing the computational complexity and memory requirements. We release our annotated dataset, which consists of over 4000 images of various objects in the RoboCup SPL soccer field.',
        cover: '',
        extras: '',
        links: [
            {
                link: 'https://www.researchgate.net/publication/375380980_Structural_Pruning_for_Real-Time_Multi-Object_Detection_on_NAO_Robots',
                site: 'https://sites.google.com/diag.uniroma1.it/spqr-multi-object-ssd-pruning',
            },
        ],
    },

    {
        title: 'Play Everywhere: A Temporal Logic based Game Environment Independent Approach for Playing',
        year: 2023,
        authors: 'V.Suriani, E. Musumeci, D. Nardi, D. D. Bloisi',
        abstract: 'Robots playing soccer often rely on hard-coded behaviors that struggle to generalize when the game environment change. In this paper, we propose a temporal logic based approach that allows robots’ behaviors and goals to adapt to the semantics of the environment. In particular, we present a hierarchical representation of soccer in which the robot selects the level of operation based on the perceived semantic characteristics of the environment, thus modifying dynamically the set of rules and goals to apply. The proposed approach enables the robot to op- erate in unstructured environments, just as it happens when humans go from soccer played on an official field to soccer played on a street. Three different use cases set in different scenarios are presented to demonstrate the effectiveness of the proposed approach.',
        cover: '',
        extras: 'RoboCup Symposium Best Paper Award 2023',
        links: [
            {
                link: 'https://arxiv.org/abs/2405.12628',
                site: 'https://sites.google.com/diag.uniroma1.it/play-everywhere',
            },
        ],
    },

    {
        title: 'MARIO: Modular and Extensible Architecture for Computing Visual Statistics in RoboCup SPL',
        year: 2022,
        authors: 'D. D. Bloisi, A. Pennisi, C. Zampino, F. Biancospino, F. Laus, G. Di Stefano, M. Brienza, R. Romano',
        abstract: 'This technical report describes a modular and extensible architecture for computing visual statistics in RoboCup SPL (MARIO), presented dur- ing the SPL Open Research Challenge at RoboCup 2022, held in Bangkok (Thailand). MARIO is an open-source, ready-to-use software application whose final goal is to contribute to the growth of the RoboCup SPL com- munity. MARIO comes with a GUI that integrates multiple machine learning and computer vision based functions, including automatic cam- era calibration, background subtraction, homography computation, player + ball tracking and localization, NAO robot pose estimation and fall de- tection. MARIO has been ranked no. 1 in the Open Research Challenge.',
        cover: '',
        extras: '',
        links: [
            {
                link: 'https://arxiv.org/abs/2209.09987',
                site: 'https://sites.google.com/unibas.it/wolves/robocup/robocup-2022/mario',
            },
        ],
    },
]



</script>
