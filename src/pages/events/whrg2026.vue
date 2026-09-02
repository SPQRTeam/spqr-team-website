<template>
    <div class="cover-section">
        <v-img
            class="cover-image"
            src="/assets/events/whrg2026/cover.webp"
            alt="The silver medals won at the World Humanoid Robot Games 2026"
            cover
        >
            <div class="cover-overlay">
                <h1 class="cover-title">WHRG 2026</h1>
            </div>
        </v-img>
    </div>

    <v-container>
        <header class="story-header">
            <p class="story-meta">Beijing, China &middot; 11&ndash;26 August 2026</p>
            <h2 class="story-title">World Humanoid Robot Games 2026</h2>
            <p class="story-standfirst">
                Come siamo arrivati in finale al National Speed Skating Oval, e cosa ci è
                costato.<br />
                <span class="lang-en">How we reached the final at the National Speed Skating Oval,
                and what it took.</span>
            </p>
            <p class="story-medal">🥈 Second place &middot; Large Division</p>
        </header>

        <article class="story">
            <template v-for="(block, index) in story" :key="index">
                <section class="story-block">
                    <div class="story-column">
                        <p class="story-lang">Italiano</p>
                        <h3 class="story-heading">{{ block.it.heading }}</h3>
                        <p v-for="(p, i) in block.it.paragraphs" :key="`it-${i}`" class="story-text">
                            {{ p }}
                        </p>
                    </div>
                    <div class="story-column">
                        <p class="story-lang">English</p>
                        <h3 class="story-heading">{{ block.en.heading }}</h3>
                        <p v-for="(p, i) in block.en.paragraphs" :key="`en-${i}`" class="story-text">
                            {{ p }}
                        </p>
                    </div>
                </section>

                <figure v-if="block.figures" class="story-figures">
                    <div
                        v-for="figure in block.figures"
                        :key="figure.src"
                        class="story-figure"
                        :class="{ 'story-figure--contain': figure.contain }"
                    >
                        <img :src="figure.src" :alt="figure.alt" loading="lazy" />
                        <figcaption>
                            {{ figure.it }}
                            <span class="lang-en">{{ figure.en }}</span>
                        </figcaption>
                    </div>
                </figure>
            </template>
        </article>

        <aside class="story-squad">
            <img
                class="squad-photo"
                :src="squadPhoto"
                alt="SPQR Team at the World Humanoid Robot Games 2026 in Beijing"
                loading="lazy"
            />
            <h3 class="squad-title">The team in Beijing</h3>
            <p class="squad-names">
                Michele Brienza &middot; Valerio Spagnoli &middot; Vincenzo Suriani &middot;
                John Marcelo &middot; Eugenio Bugli
            </p>
        </aside>
    </v-container>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo'

import pandaEye from '/assets/events/whrg2026/panda-eye-team.webp'
import teamsFlags from '/assets/events/whrg2026/teams-flags.webp'
import trainingCamp from '/assets/events/whrg2026/training-camp.webp'
import groupStandings from '/assets/events/whrg2026/group-a-standings.webp'
import celebration from '/assets/events/whrg2026/celebration.webp'
import teamFlag from '/assets/events/whrg2026/team-robocup-flag.webp'
import scoreboard from '/assets/events/whrg2026/stadium-scoreboard.webp'
// the same team photo the Team page carousel uses for this competition
import squadPhoto from '/assets/team/team-whrg2026.webp'

useSeo({
  title: 'World Humanoid Robot Games 2026 - SPQR Team | Silver in Beijing',
  description: 'The story of SPQR Team at the World Humanoid Robot Games 2026 in Beijing: second place in the Large Division with the new Booster T2 humanoids.',
  path: '/events/whrg2026/',
  canonical: 'https://spqr.diag.uniroma1.it/events/whrg2026/',
  ogTitle: 'World Humanoid Robot Games 2026 - SPQR Team',
  ogDescription: 'Silver medal in Beijing: how SPQR Team reached the final of the Large Division.',
  ogUrl: 'https://spqr.diag.uniroma1.it/events/whrg2026/',
  ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  twitterTitle: 'World Humanoid Robot Games 2026 - SPQR Team',
  twitterDescription: 'Silver medal in Beijing: how SPQR Team reached the final of the Large Division.',
  twitterUrl: 'https://spqr.diag.uniroma1.it/events/whrg2026/',
  twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg'
})

const story = [
    {
        it: {
            heading: 'Partenza, con un obiettivo preciso',
            paragraphs: [
                'Siamo partiti l’11 agosto 2026 con un unico grande obiettivo: qualificarci per giocare sul campo del National Speed Skating Oval di Pechino. Era la nostra seconda volta in questa competizione e, almeno sul piano logistico, sapevamo già cosa aspettarci: un vantaggio non da poco, quando ti trovi dall’altra parte del mondo con delle casse piene di robot.',
                'Al campo di allenamento del Panda Eye ci siamo trovati subito davanti a tre Booster T2, gli umanoidi usciti proprio nell’estate 2026 per la Large Division della Humanoid Soccer League. Robot nuovi di zecca, che nessuno aveva ancora visto giocare davvero. Abbiamo condiviso l’area di test con altri cinque team internazionali di ottimo livello: il Team Brazil, nato dall’unione delle squadre RoboCup brasiliane, i KURA dagli Emirati Arabi, i messicani dei PUMAS, i malesiani di Robotedge e i thailandesi di BART LAB.',
                'Eravamo in meno di quasi tutti gli altri. Diverse squadre potevano contare su staff molto più numerosi, e nei primi giorni si è sentito. Ci siamo riorganizzati in fretta, dividendoci i compiti in modo diverso da come avevamo previsto, e siamo riusciti a portare i robot pronti alla prima partita.',
                'C’è stata però una partita che non compariva su nessun tabellone. Prima ancora che cominciassero le qualificazioni abbiamo giocato la prima amichevole della competizione: cinque contro cinque, robot umanoidi di dimensioni umane, tutti completamente autonomi. Non era mai successo prima nella storia. E l’abbiamo vinta.'
            ]
        },
        en: {
            heading: 'Leaving with one clear goal',
            paragraphs: [
                'We left on 11 August 2026 with a single ambition: to qualify and play on the pitch of the National Speed Skating Oval in Beijing. It was our second time at this competition and, logistically at least, we knew what was coming. That counts for a lot when you are on the other side of the world with crates full of robots.',
                'At the Panda Eye training camp we found ourselves working straight away with three Booster T2, the humanoids released in the summer of 2026 for the Large Division of the Humanoid Soccer League. Brand new machines that nobody had really seen play yet. We shared the test area with five other strong international teams: Team Brazil, formed by joining the Brazilian RoboCup teams, KURA from the United Arab Emirates, PUMAS from Mexico, Robotedge from Malaysia and BART LAB from Thailand.',
                'We were fewer than almost everyone else. Several teams had far larger staff, and in the first days we felt it. We reorganised quickly, splitting the work differently from what we had planned, and we got the robots ready in time for the first match.',
                'There was one match, though, that appeared on no schedule. Before the qualification round had even started, we played the first friendly of the competition: five against five, human-sized humanoid robots, every one of them fully autonomous. It had never happened before in history. And we won it.'
            ]
        },
        figures: [
            {
                src: pandaEye,
                alt: 'SPQR Team and the Booster T2 robots at the Panda Eye training camp',
                it: 'Il campo di allenamento del Panda Eye, poco prima della storica amichevole.',
                en: 'The Panda Eye training camp, shortly before that historic friendly.'
            },
            {
                src: trainingCamp,
                alt: 'Teams and robots on the pitch right after the first 5-a-side humanoid match in history',
                it: 'Pochi minuti dopo il fischio finale: la prima partita cinque contro cinque della storia con umanoidi di dimensioni umane, vinta da noi.',
                en: 'A few minutes after the final whistle of the first ever five-a-side match with human-sized humanoids, which we won.'
            }
        ]
    },
    {
        it: {
            heading: 'Il girone: otto gol e primo posto',
            paragraphs: [
                'La fase di qualificazione è cominciata nel migliore dei modi. All’esordio abbiamo battuto il Team Brazil 3 a 0, e poche ore dopo abbiamo chiuso 5 a 1 contro BART LAB. Otto reti fatte, primo posto nel girone, e soprattutto l’accesso diretto al tabellone principale nello stadio.',
                'Quel primo posto valeva più dei numeri. Ci ha permesso di presentarci alle fasi finali da soli, con il nostro software e i nostri robot, mentre altre formazioni hanno dovuto unire le forze in joint team per proseguire: è stato il caso di BART LAB con il Brasile e dei PUMAS con KURA.'
            ]
        },
        en: {
            heading: 'The group stage: eight goals and first place',
            paragraphs: [
                'The qualification round could hardly have started better. We beat Team Brazil 3–0 in our opener and, a few hours later, closed out a 5–1 win against BART LAB. Eight goals scored, first place in the group, and above all direct access to the main bracket inside the stadium.',
                'That first place was worth more than the numbers suggest. It let us go into the finals on our own, with our own software and our own robots, while other teams had to join forces to continue: BART LAB paired up with Brazil, and PUMAS with KURA.'
            ]
        },
        figures: [
            {
                src: groupStandings,
                alt: 'Group A standings of the Large Division qualification round',
                contain: true,
                it: 'La classifica del Gruppo A a fine qualificazioni.',
                en: 'The Group A table at the end of the qualification round.'
            },
            {
                src: teamsFlags,
                alt: 'The six international teams with their flags at the training camp',
                it: 'I sei team che hanno condiviso l’area di test: Brasile, Emirati Arabi, Messico, Malesia, Thailandia e Italia.',
                en: 'The six teams sharing the test area: Brazil, the UAE, Mexico, Malaysia, Thailand and Italy.'
            }
        ]
    },
    {
        it: {
            heading: 'Quarti e semifinale',
            paragraphs: [
                'La fase a eliminazione diretta si è rivelata subito più dura. Ai quarti abbiamo superato i Blaze per 3 a 2, in una partita complessa e molto fisica, di quelle che si decidono su pochi episodi. Ci ha fatto sudare, ma è servita: da lì abbiamo capito cosa correggere nella nostra strategia.',
                'In semifinale è venuto fuori il nostro gioco migliore. Contro i D.D. Fantasy è finita 9 a 1, ed è stata la partita in cui tutto quello su cui avevamo lavorato nei mesi precedenti ha funzionato come doveva.'
            ]
        },
        en: {
            heading: 'Quarter-final and semi-final',
            paragraphs: [
                'The knockout stage got hard immediately. In the quarter-final we edged past Blaze 3–2, in a complicated and very physical match, the kind decided by a handful of moments. It made us sweat, but it paid off: that game showed us exactly what to fix in our strategy.',
                'The semi-final was our best football of the tournament. Against D.D. Fantasy it finished 9–1, and it was the match where everything we had worked on for months finally behaved the way it was supposed to.'
            ]
        },
        figures: [
            {
                src: celebration,
                alt: 'SPQR Team celebrating inside the stadium',
                it: 'Dentro lo stadio, dopo la semifinale.',
                en: 'Inside the stadium, after the semi-final.'
            }
        ]
    },
    {
        it: {
            heading: 'La finale, e il ritorno a Roma',
            paragraphs: [
                'Quasi senza rendercene conto ci siamo ritrovati in finale, per la prima volta, contro i padroni di casa e campioni in carica: i Tsinghua Hephaestus. È stata una sfida durissima e una sconfitta onorevole, contro una delle realtà accademiche più forti al mondo in questo campo.',
                'Siamo tornati a Roma con una medaglia d’argento di cui siamo molto orgogliosi. Gestire robot umanoidi completamente autonomi a questi livelli richiede un lavoro enorme, e arrivare fino all’ultima partita, unici europei rimasti, vale parecchio. Ci siamo anche divertiti, e questo non guasta.'
            ]
        },
        en: {
            heading: 'The final, and the way home',
            paragraphs: [
                'Almost before we realised it, we were in the final for the first time, against the hosts and reigning champions: Tsinghua Hephaestus. It was a brutally hard match and an honourable defeat, against one of the strongest academic groups in the world in this field.',
                'We came back to Rome with a silver medal we are very proud of. Running fully autonomous humanoid robots at this level takes an enormous amount of work, and reaching the last match as the only European team left counts for a great deal. We also had a lot of fun along the way, which never hurts.'
            ]
        },
        figures: [
            {
                src: teamFlag,
                alt: 'SPQR Team with the robots and the RoboCup flag',
                it: 'Durante la premiazione a fine torneo.',
                en: 'During the awards ceremony at the end of the tournament'
            },
            {
                src: scoreboard,
                alt: 'The stadium screen showing SPQR Team',
                it: 'Il nostro nome sul tabellone del National Speed Skating Oval.',
                en: 'Our name on the National Speed Skating Oval scoreboard.'
            }
        ]
    }
]
</script>

<style scoped>
.cover-image :deep(img) {
    /* centres the band on the medal in the foreground */
    object-position: center 50% !important;
}

/* ---- Header ---- */
.story-header {
    max-width: 760px;
    margin: 4rem auto 3rem;
    text-align: center;
    color: rgb(30, 30, 30);
}

.story-meta {
    font-size: 0.8rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    opacity: 0.6;
}

.story-title {
    margin-top: 0.5rem;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;
    color: #822433;
}

.story-standfirst {
    margin-top: 1.25rem;
    font-size: 1.15rem;
    line-height: 1.7;
    opacity: 0.85;
}

.story-medal {
    margin-top: 1.5rem;
    display: inline-block;
    padding: 0.4rem 1.1rem;
    border: 1px solid #822433;
    border-radius: 999px;
    font-weight: 600;
    color: #822433;
}

/* ---- Two language columns ---- */
.story {
    max-width: 1200px;
    margin: 0 auto 5rem;
    color: rgb(30, 30, 30);
}

.story-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin: 3rem 0;
}

.story-lang {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0.45;
    margin-bottom: 0.5rem;
}

.story-heading {
    font-size: 1.35rem;
    font-weight: 600;
    color: #822433;
    margin-bottom: 0.75rem;
}

.story-text {
    font-size: 1.02rem;
    line-height: 1.75;
}

.story-text + .story-text {
    margin-top: 1rem;
}

/* ---- Photos, on their own centred column ---- */
.story-figures {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    /* no cap of their own: the photos may grow to the full width of the two
       text columns above them */
    margin: 3.5rem auto;
}

.story-figure {
    flex: 1 1 380px;
    max-width: 100%;
}

.story-figure img {
    display: block;
    width: 100%;
    /* one shape for every photo, so two side by side always line up */
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
}

/* the standings screenshot is a document: fit it whole rather than crop it */
.story-figure--contain img {
    object-fit: contain;
    background: #ffffff;
}

.story-figure figcaption {
    margin-top: 0.6rem;
    font-size: 0.85rem;
    line-height: 1.5;
    text-align: center;
    opacity: 0.7;
}

.lang-en {
    display: block;
    font-style: italic;
    opacity: 0.75;
}

/* ---- Squad ---- */
.story-squad {
    max-width: 760px;
    margin: 0 auto 5rem;
    overflow: hidden;
    padding: 0 0 2rem;
    text-align: center;
    /* the app runs on Vuetify's dark theme, so text has to be set explicitly or
       it comes out white on this light card */
    color: rgb(30, 30, 30);
    border-top: 4px solid #822433;
    border-radius: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #f6f7f6 100%);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
}

.squad-photo {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    margin-bottom: 1.5rem;
}

.squad-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #822433;
    margin-bottom: 0.5rem;
}

.squad-names {
    font-size: 1.02rem;
    line-height: 1.8;
}

@media (max-width: 900px) {
    .story-block {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .story-column + .story-column {
        padding-top: 1.5rem;
        border-top: 1px solid rgba(130, 36, 51, 0.2);
    }
}
</style>
