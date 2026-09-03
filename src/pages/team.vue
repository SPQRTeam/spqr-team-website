<template>
  <section class="team-hero">
    <div class="page-header">
      <h1 class="page-title">Team</h1>
      <p class="page-subtitle">The people behind SPQR</p>
      <div class="roman-divider" />
    </div>

    <!-- The title sits outside the carousel: v-carousel-item wraps its slot
         in a v-img, whose overflow would clip a title wider than the photo -->
    <h2 class="photo-title">{{ currentTitle }}</h2>

    <div class="carousel-frame">
      <v-carousel
        class="team-carousel"
        cycle
        height="100%"
        hide-delimiters
        :interval="5000"
        show-arrows="hover"
        @update:model-value="updateTitle"
      >
        <v-carousel-item
          v-for="(photo, i) in team_photos"
          :key="i"
          :alt="photo.title"
          contain
          :src="photo.image"
        />
      </v-carousel>
    </div>
  </section>

  <v-container>

    <!-- <v-divider thickness="5" color="black" opacity="0.5" style="margin-top: 2rem"></v-divider> -->

    <h2 class="section-title">Members</h2>

    <v-row class="members-grid" justify="center">
      <v-col
        v-for="member in teamMembers"
        :key="member.name"
        class="member-col"
        cols="12"
        lg="3"
        md="6"
        sm="6"
      >
        <div class="member-card">
          <v-img
            :alt="member.name"
            aspect-ratio="2/3"
            class="member-photo"
            cover
            :src="member.image"
          />
          <div class="member-name">{{ member.name }}</div>
          <div class="member-role">{{ member.role }}</div>
        </div>
      </v-col>
    </v-row>

    <v-divider color="black" opacity="0.5" style="margin-top: 2rem" thickness="5" />

    <h2 class="section-title">Past Members</h2>

    <v-row class="past-members-section">
      <v-col class="past-members-col" cols="12" md="6">
        <h3 class="past-members-subtitle">Team Leaders</h3>
        <ul class="past-members-list">
          <li v-for="leader in pastTeamLeaders" :key="leader.name">
            {{ leader.name }}<span v-if="leader.years"> - {{ leader.years }}</span>
          </li>
        </ul>
      </v-col>

      <v-col class="past-members-col" cols="12" md="6">
        <h3 class="past-members-subtitle">Students</h3>
        <v-row>
          <v-col cols="12" lg="6">
            <ul class="past-members-list">
              <li v-for="student in pastStudentsColumn1" :key="student.name">
                {{ student.name }}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" lg="6">
            <ul class="past-members-list">
              <li v-for="student in pastStudentsColumn2" :key="student.name">
                {{ student.name }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useSeo } from '@/composables/useSeo'

  // SEO Configuration
  useSeo({
    title: 'Team - SPQR Team | Sapienza University of Rome',
    description: 'Meet the SPQR Team members: researchers, PhD students, and collaborators working on RoboCup humanoid robotics and AI research at Sapienza University of Rome.',
    path: '/team/',
    canonical: 'https://spqr.diag.uniroma1.it/team/',
    ogTitle: 'Team - SPQR Team',
    ogDescription: 'Meet our research team working on RoboCup humanoid robotics and AI.',
    ogUrl: 'https://spqr.diag.uniroma1.it/team/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/team/cover.jpg',
    twitterTitle: 'Team - SPQR Team',
    twitterDescription: 'Meet our research team working on RoboCup humanoid robotics and AI.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/team/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/team/cover.jpg',
  })

  const baseUrl = import.meta.env.BASE_URL

  const team_photos = ref([])

  async function loadTeamPhotos () {
    try {
      const response = await fetch(baseUrl + 'assets/team/team_photos.json')
      const data = await response.json()

      team_photos.value = data.map(photo => ({
        image: baseUrl + 'assets/team/' + photo.image,
        title: photo.title,
      }))

      // Set initial photo
      if (team_photos.value.length > 0) {
        currentTitle.value = team_photos.value[0].title
      }
    } catch (error) {
      console.error('Error loading team photos:', error)
    }
  }

  const teamMembers = ref([])

  async function loadTeamMembers () {
    try {
      const response = await fetch(baseUrl + 'assets/team/team.json')
      const data = await response.json()

      // Filter current members (those with images)
      teamMembers.value = data
        .filter(member => member.image)
        .map(member => ({
          name: member.name,
          role: member.role,
          image: baseUrl + 'assets/team/' + member.image,
        }))
    } catch (error) {
      console.error('Error loading team members:', error)
    }
  }

  const pastTeamLeaders = ref([])
  const pastStudentsColumn1 = ref([])
  const pastStudentsColumn2 = ref([])

  async function loadPastMembers () {
    try {
      const response = await fetch(baseUrl + 'assets/team/team.json')
      const data = await response.json()

      // Filter past members (those without images)
      const allPastMembers = data
        .filter(member => !member.image)
        .map(member => ({
          name: member.name,
          role: member.role,
          years: member.years || '',
        }))

      // Separate team leaders and students
      pastTeamLeaders.value = allPastMembers.filter(member => member.role === 'Team Leader')
      const students = allPastMembers.filter(member => member.role === 'Student')

      // Split students into two columns
      const halfPoint = Math.ceil(students.length / 2)
      pastStudentsColumn1.value = students.slice(0, halfPoint)
      pastStudentsColumn2.value = students.slice(halfPoint)
    } catch (error) {
      console.error('Error loading past members:', error)
    }
  }

  const currentTitle = ref('')

  function updateTitle (index) {
    currentTitle.value = team_photos.value[index].title
  }

  onMounted(() => {
    loadTeamPhotos()
    loadTeamMembers()
    loadPastMembers()
  })
</script>

<style scoped>
/* Header, photo title and photo together fill exactly the space the app bar and
   the fixed footer leave free, so the whole carousel is on screen without
   scrolling. settings.scss zooms the site per breakpoint and viewport units are
   not scaled by that zoom, hence the division. */
.team-hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100svh / var(--site-zoom, 1) - var(--v-layout-top, 0px) - var(--v-layout-bottom, 0px));
    flex-shrink: 0;
    margin-bottom: 2rem;
}

.team-hero .page-header {
    flex-shrink: 0;
}

.carousel-frame {
    /* Whatever height the header and the title leave over */
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem 1rem;
}

.team-carousel {
    /* The largest 16:9 box that fits both the free height and the frame width.
       Every team photo is 16:9, so it holds them edge to edge with no bars: the
       height comes from the frame, the width follows the ratio, and the
       max-height caps the box on screens where the width runs out first (vw
       ignores the site zoom the same way svh does, and the extra rem of slack
       covers the scrollbar). */
    flex: 0 0 auto;
    max-height: calc(min(1500px, 100vw / var(--site-zoom, 1) - 4rem) * 9 / 16);
    aspect-ratio: 16 / 9;
    width: auto;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
}

.photo-title {
    text-align: center;
    font-weight: 500;
    color: rgb(30, 30, 30);
    flex-shrink: 0;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    /* The title spans the whole section, not just the photo column, so that long
       event names keep fitting. */
    width: 100%;
    /* Always a single line. The longest title measures 17.5em, so dividing the
       available width by 19 leaves it room to fit whatever the viewport is,
       while 2.5rem keeps it from growing past its intended size on desktop. */
    white-space: nowrap;
    font-size: min(2.5rem, calc((100vw - 2rem) / 19));
}

.section-title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 4rem;
    color: rgb(30, 30, 30);
}

.members-grid {
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 1400px;
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

.member-role {
    font-size: 1.1rem;
    font-style: italic;
    color: rgb(100, 100, 100);
    margin-top: 0.25rem;
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
