<template>

  <div class="page-header">
    <h1 class="page-title">Join the Team</h1>
    <p class="page-subtitle">Tell us who you are and what you would like to build</p>
    <div class="roman-divider" />
  </div>

  <v-container class="py-8 content-wrapper">
    <section aria-label="How to apply" class="intro">
      <p>
        Whether you want to compete in RoboCup, use the robots for an exam project or write
        your bachelor or master thesis, fill in the form below. Your answers are sent directly
        to the team, and we will get back to you by email.
      </p>
    </section>

    <v-form ref="form" class="application-form" @submit.prevent="submit">
      <v-card class="form-card" flat theme="light">
        <v-card-text class="pa-6 pa-md-8">
          <h2 class="section-subtitle">About you</h2>

          <v-text-field
            v-model="application.fullName"
            autocomplete="name"
            class="mb-2"
            color="#822433"
            label="Name and surname"
            :rules="[required]"
            variant="outlined"
          />

          <v-text-field
            v-model="application.degree"
            class="mb-2"
            color="#822433"
            label="Degree course you are following"
            :rules="[required]"
            variant="outlined"
          />

          <v-text-field
            v-model="application.department"
            class="mb-2"
            color="#822433"
            label="Department"
            :rules="[required]"
            variant="outlined"
          />

          <v-text-field
            v-model="application.email"
            autocomplete="email"
            class="mb-2"
            color="#822433"
            label="University Email"
            placeholder="University Email"
            :rules="[required]"
            type="email"
            variant="outlined"
          />

          <v-select
            v-model="application.level"
            class="mb-2"
            color="#822433"
            :items="levelOptions"
            label="Degree level you are currently enrolled in"
            :rules="[required]"
            variant="outlined"
          />

          <h2 class="section-subtitle">Your goals with the project</h2>

          <v-input
            class="mb-4"
            :model-value="application.usage"
            :rules="[requiredList]"
          >
            <div class="usage-group">
              <p class="usage-label">How do you want to use the project?</p>
              <v-checkbox
                v-for="option in usageOptions"
                :key="option"
                v-model="application.usage"
                color="#822433"
                density="comfortable"
                hide-details
                :label="option"
                :value="option"
              />
            </div>
          </v-input>

          <h2 class="section-subtitle">Your background</h2>

          <v-textarea
            v-model="application.interests"
            auto-grow
            class="mb-2"
            color="#822433"
            label="Your interests in the field and why you want to join"
            rows="4"
            :rules="[required]"
            variant="outlined"
          />

          <v-textarea
            v-model="application.completedProjects"
            auto-grow
            class="mb-2"
            color="#822433"
            label="Projects you have already completed or are currently working on (optional)"
            rows="3"
            variant="outlined"
          />

          <v-text-field
            v-model="application.github"
            class="mb-2"
            color="#822433"
            label="GitHub profile link"
            placeholder="https://github.com/your-username"
            :rules="[required, githubLink]"
            type="url"
            variant="outlined"
          />

          <v-text-field
            v-model="application.linkedin"
            class="mb-4"
            color="#822433"
            label="LinkedIn profile link (optional)"
            placeholder="https://www.linkedin.com/in/your-username"
            :rules="[linkedinLink]"
            type="url"
            variant="outlined"
          />

          <h2 class="section-subtitle">Questions for the team</h2>

          <v-textarea
            v-model="application.questions"
            auto-grow
            class="mb-4"
            color="#822433"
            label="Your questions (optional)"
            rows="3"
            variant="outlined"
          />

          <v-alert
            v-if="status.message"
            class="mb-4"
            :color="status.type"
            :text="status.message"
            variant="tonal"
          />

          <div class="text-right">
            <v-btn
              color="#822433"
              :loading="sending"
              size="large"
              type="submit"
              variant="flat"
            >
              Send application
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>

<script setup>
  import { nextTick, reactive, ref } from 'vue'
  import { useSeo } from '@/composables/useSeo'

  // SEO Configuration
  useSeo({
    title: 'Join the Team - SPQR Team | Apply',
    description: 'Join SPQR Team at Sapienza University of Rome. Apply for RoboCup competition work, exam projects, or bachelor and master theses in robotics and AI.',
    path: '/join/',
    canonical: 'https://spqr.diag.uniroma1.it/join/',
    ogTitle: 'Join the Team - SPQR Team',
    ogDescription: 'Apply to join SPQR Team for RoboCup, exam projects or theses.',
    ogUrl: 'https://spqr.diag.uniroma1.it/join/',
    ogImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
    twitterTitle: 'Join the Team - SPQR Team',
    twitterDescription: 'Apply to join SPQR Team for RoboCup, exam projects or theses.',
    twitterUrl: 'https://spqr.diag.uniroma1.it/join/',
    twitterImage: 'https://spqr.diag.uniroma1.it/assets/home/cover.jpg',
  })

  // Web3Forms sends each submission to the email address tied to this access key.
  // Create the key at https://web3forms.com with the team address (spqr@diag.uniroma1.it).
  const WEB3FORMS_ACCESS_KEY = '181316e5-7331-4515-8159-afab97a9a06b'
  const SUBMIT_URL = 'https://api.web3forms.com/submit'

  const levelOptions = ['Bachelor\'s', 'Master\'s', 'PhD']

  const usageOptions = [
    'Exam Project (Master Students)',
    'Master Thesis',
    'Bachelor Thesis',
    'Contribute to the project',
  ]

  const form = ref(null)
  const sending = ref(false)
  const status = reactive({ type: '', message: '' })

  const application = reactive({
    fullName: '',
    degree: '',
    department: '',
    email: '',
    level: null,
    usage: [],
    interests: '',
    completedProjects: '',
    github: '',
    linkedin: '',
    questions: '',
  })

  const required = value => !!value || 'This field is required'
  const requiredList = value => (value && value.length > 0) || 'Select at least one option'
  function githubLink (value) {
    return /^https?:\/\/(www\.)?github\.com\/.+/i.test(value || '')
      || 'Enter a valid GitHub link'
  }

  function linkedinLink (value) {
    return !value
      || /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(value)
      || 'Enter a valid LinkedIn link'
  }

  async function resetForm () {
    Object.assign(application, {
      fullName: '',
      degree: '',
      department: '',
      email: '',
      level: null,
      usage: [],
      interests: '',
      completedProjects: '',
      github: '',
      linkedin: '',
      questions: '',
    })
    // Clearing the fields triggers validation on every input, so wait for it to run before clearing the errors
    await nextTick()
    form.value?.resetValidation()
  }

  async function submit () {
    const { valid } = await form.value.validate()
    if (!valid) {
      return
    }

    sending.value = true
    status.message = ''

    const payload = {
      'access_key': WEB3FORMS_ACCESS_KEY,
      'subject': `Join the Team application: ${application.fullName}`,
      'from_name': 'SPQR Team website',
      'Name and surname': application.fullName,
      'Degree course': application.degree,
      'Department': application.department,
      'Email': application.email,
      'replyto': application.email,
      'Level': application.level,
      'Use of the project': application.usage.join(', '),
      'Interests and motivation': application.interests,
      'Completed or ongoing projects': application.completedProjects || '-',
      'GitHub link': application.github,
      'LinkedIn link': application.linkedin || '-',
      'Questions for the team': application.questions || '-',
    }

    try {
      const response = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed')
      }

      status.type = 'success'
      status.message = 'Thank you! Your application has been sent to the team.'
      await resetForm()
    } catch (error) {
      console.error(error)
      status.type = 'error'
      status.message = 'Something went wrong while sending your application. Please try again or write to spqr@diag.uniroma1.it.'
    } finally {
      sending.value = false
    }
  }
</script>

<style scoped>
.content-wrapper {
    max-width: 900px;
    margin: auto;
}

.intro {
    text-align: center;
    margin-bottom: 2rem;
    color: #424242;
    line-height: 1.7;
}

.usage-label {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0.5rem;
}

.form-card {
    background: #f1f4f3;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}

.section-subtitle {
    font-size: 1.1rem;
    font-weight: 600;
    color: #822433;
    margin: 0.5rem 0 1rem;
}
</style>
