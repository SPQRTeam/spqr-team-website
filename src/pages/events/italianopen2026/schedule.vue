<template>
  <div class="page-header">
    <h1 class="page-title">Schedule &amp; Results</h1>
    <p class="page-subtitle">Italian Open 2026 &middot; Maker Faire Rome</p>
    <div class="roman-divider" />
  </div>

  <v-container>
    <v-row justify="center">
      <v-col class="info-section" cols="12" lg="9" md="11">
        <router-link class="back-link" to="/events/italianopen2026">
          <v-icon icon="mdi-arrow-left" size="18" /> Back to Italian Open 2026
        </router-link>

        <div class="event-facts">
          <span class="fact"><v-icon icon="mdi-calendar" size="20" /> October 23&ndash;25, 2026</span>
          <span class="fact"><v-icon icon="mdi-door-open" size="20" /> Public access 10:00&ndash;19:00</span>
          <span class="fact"><v-icon icon="mdi-map-marker" size="20" /> Maker Faire Rome</span>
        </div>

        <h2 class="section-title">Schedule</h2>
        <v-tabs v-model="activeDay" align-tabs="center" color="#822433" grow>
          <v-tab v-for="(day, i) in days" :key="day.date" :value="i">
            <span class="tab-day">{{ day.label }}</span>
            <span class="tab-date">{{ formatDate(day.date) }}</span>
          </v-tab>
        </v-tabs>

        <v-window v-model="activeDay" class="mt-4">
          <v-window-item v-for="(day, i) in days" :key="day.date" :value="i">
            <ul class="timeline">
              <li
                v-for="item in day.items"
                :key="item.time + item.title"
                :class="['slot', 'slot-' + item.type, { 'slot-spqr': isSpqr(item) }]"
              >
                <span class="slot-time">{{ item.time }}</span>

                <div v-if="item.type === 'game'" class="slot-body">
                  <span class="slot-eyebrow">
                    <span :class="['division-chip', 'division-' + item.division.toLowerCase()]">{{ item.division }}</span>
                    {{ item.stage === item.title ? item.title : item.stage + ' · ' + item.title }}
                    <span v-if="item.format"> · {{ item.format }}</span>
                  </span>
                  <div class="match">
                    <span class="match-team home">{{ item.home }}</span>
                    <span class="match-score">{{ item.score ? item.score[0] + ' – ' + item.score[1] : 'vs' }}</span>
                    <span class="match-team away">{{ item.away }}</span>
                  </div>
                  <span class="slot-refs">Referees: {{ item.refs }}</span>
                </div>

                <div v-else class="slot-body">
                  <span class="slot-title">
                    <v-icon :icon="itemIcons[item.type]" size="20" /> {{ item.title }}
                  </span>
                </div>
              </li>
            </ul>
          </v-window-item>
        </v-window>

        <h2 class="section-title">Standings</h2>
        <v-row>
          <v-col v-for="group in standings" :key="group.name" cols="12">
            <h4 class="division-title">{{ group.division }} Division &middot; {{ group.name }}</h4>
            <v-table class="standings-table" density="compact">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th class="num">P</th>
                  <th class="num">W</th>
                  <th class="num">D</th>
                  <th class="num">L</th>
                  <th class="num">GF</th>
                  <th class="num">GA</th>
                  <th class="num">GD</th>
                  <th class="num">Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in group.rows" :key="row.team" :class="{ 'row-spqr': row.team === 'SPQR Team' }">
                  <td>{{ i + 1 }}</td>
                  <td class="team-cell">{{ row.team }}</td>
                  <td class="num">{{ row.played }}</td>
                  <td class="num">{{ row.won }}</td>
                  <td class="num">{{ row.drawn }}</td>
                  <td class="num">{{ row.lost }}</td>
                  <td class="num">{{ row.gf }}</td>
                  <td class="num">{{ row.ga }}</td>
                  <td class="num">{{ row.gf - row.ga }}</td>
                  <td class="num pts">{{ row.points }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <p class="format-note">
          <strong>Middle Division:</strong> group winners go straight to the semifinals; runners-up
          and bottom teams play the relegation games for the remaining semifinal spots.
          <strong>Large Division:</strong> double round-robin, then the top two play the final.
          Schedule may change during the event.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useSeo } from '@/composables/useSeo'

  const baseUrl = import.meta.env.BASE_URL

  const itemIcons = {
    break: 'mdi-silverware-fork-knife',
    ceremony: 'mdi-trophy-outline',
    meeting: 'mdi-account-group-outline',
  }

  const days = ref([])
  const groups = ref([])
  const activeDay = ref(0)

  function formatDate (iso) {
    return new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  }

  function isSpqr (item) {
    return item.home === 'SPQR Team' || item.away === 'SPQR Team'
  }

  const standings = computed(() => {
    const games = days.value.flatMap(day => day.items).filter(item => item.type === 'game' && item.score)

    return groups.value.map(group => {
      const table = Object.fromEntries(group.teams.map(team => [
        team,
        { team, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 },
      ]))

      for (const game of games.filter(g => g.stage === group.name)) {
        const [homeGoals, awayGoals] = game.score
        const home = table[game.home]
        const away = table[game.away]
        if (!home || !away) continue

        home.played++
        away.played++
        home.gf += homeGoals
        home.ga += awayGoals
        away.gf += awayGoals
        away.ga += homeGoals

        if (homeGoals > awayGoals) {
          home.won++
          away.lost++
          home.points += 3
        } else if (homeGoals < awayGoals) {
          away.won++
          home.lost++
          away.points += 3
        } else {
          home.drawn++
          away.drawn++
          home.points++
          away.points++
        }
      }

      const rows = Object.values(table).toSorted((a, b) =>
        b.points - a.points || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf,
      )

      return { ...group, rows }
    })
  })

  async function loadSchedule () {
    try {
      const response = await fetch(baseUrl + 'assets/italianopen/schedule.json')
      const data = await response.json()

      days.value = data.days
      groups.value = data.groups

      // During the event, open the current day by default
      const today = new Date().toISOString().slice(0, 10)
      const todayIndex = data.days.findIndex(day => day.date === today)
      if (todayIndex !== -1) activeDay.value = todayIndex
    } catch (error) {
      console.error('Error loading Italian Open schedule:', error)
    }
  }

  onMounted(loadSchedule)

  useSeo({
    title: 'Schedule & Results - Italian Open 2026 - SPQR Team',
    description: 'Match schedule, results and standings of the Italian Open 2026 RoboCup Humanoid Soccer Tournament, October 23-25, 2026 at Maker Faire Rome.',
    path: '/events/italianopen2026/schedule/',
    canonical: 'https://spqr.diag.uniroma1.it/events/italianopen2026/schedule/',
    ogTitle: 'Schedule & Results - Italian Open 2026',
    ogDescription: 'Match schedule, results and standings of the Italian Open 2026, Maker Faire Rome, October 23-25, 2026.',
    ogUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/schedule/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Schedule & Results - Italian Open 2026',
    twitterDescription: 'Match schedule, results and standings of the Italian Open 2026, Maker Faire Rome, October 23-25, 2026.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/events/italianopen2026/schedule/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })
</script>

<style scoped>
.info-section {
    margin: 4rem auto;
    color: #212121;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    color: #822433;
    font-weight: 500;
    text-decoration: none;
}

.back-link:hover {
    text-decoration: underline;
}

.event-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.fact {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(130, 36, 51, 0.08);
    color: #822433;
    font-weight: 600;
}

.section-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 3rem 0 1.25rem;
    color: #822433;
    text-align: center;
}

.tab-day {
    font-weight: 700;
}

.tab-date {
    margin-left: 0.4rem;
    opacity: 0.7;
}

.timeline {
    list-style: none;
    padding: 0;
}

.slot {
    display: flex;
    gap: 1.25rem;
    padding: 1rem 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.slot-time {
    flex-shrink: 0;
    width: 3.5rem;
    font-size: 1.05rem;
    font-weight: 700;
    color: #822433;
    font-variant-numeric: tabular-nums;
}

.slot-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.3rem;
    min-width: 0;
}

.slot-spqr {
    border-left: 4px solid #822433;
    border-radius: 4px;
    background: rgba(130, 36, 51, 0.06);
}

.slot-break,
.slot-meeting,
.slot-ceremony {
    background: rgba(0, 0, 0, 0.025);
}

.slot-title {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.05rem;
    font-weight: 600;
}

.slot-ceremony .slot-title {
    color: #822433;
}

.slot-eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0.8;
}

.division-chip {
    display: inline-block;
    margin-right: 0.4rem;
    padding: 0.05rem 0.5rem;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 700;
    color: #fff;
}

.division-middle {
    background: #5c6b7a;
}

.division-large {
    background: #822433;
}

.match {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 0.75rem;
}

.match-team {
    font-size: 1.1rem;
    font-weight: 600;
    overflow-wrap: anywhere;
}

.match-team.home {
    text-align: right;
}

.match-score {
    min-width: 4rem;
    padding: 0.15rem 0.6rem;
    border-radius: 6px;
    background: rgba(130, 36, 51, 0.1);
    color: #822433;
    font-weight: 700;
    text-align: center;
    font-variant-numeric: tabular-nums;
}

.slot-refs {
    font-size: 0.85rem;
    opacity: 0.65;
    text-align: center;
}

.division-title {
    font-size: 1rem;
    font-weight: 600;
    color: #822433;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #822433;
}

.standings-table .num {
    text-align: center;
    font-variant-numeric: tabular-nums;
}

.standings-table .team-cell {
    font-weight: 600;
}

.standings-table .pts {
    font-weight: 700;
}

.row-spqr td {
    background: rgba(130, 36, 51, 0.08);
    color: #822433;
}

.format-note {
    margin-top: 2rem;
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.8;
}

@media (max-width: 600px) {
    .slot {
        flex-direction: column;
        gap: 0.4rem;
    }

    .match-team {
        font-size: 1rem;
    }
}
</style>
