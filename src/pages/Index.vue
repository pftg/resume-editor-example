<template>
  <q-page class="row">
    <div class="col-5 q-pa-md">

      <div class="q-pa-md q-mb-lg shadow-2 rounded-borders">
        <div>
          <div class="text-weight-bold">Photo</div>
          <span>Upload your photo</span>
          <q-separator class="q-mt-md q-mb-md" />
          <q-uploader />
        </div>

        <div>
          <div class="text-weight-bold">Name</div>
          <span>Use your first and last name. No nicknames</span>
          <q-separator class="q-mt-md q-mb-md" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="firstName"
              label="First Name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="lastName"
              label="Last Name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </div>

        <div>
          <div class="text-weight-bold">Subtitle</div>
          <span>Two words what you want to do</span>
          <q-separator class="q-mt-md q-mb-md" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="subtitle"
              label="Subtitle"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </div>

        <div>
          <div class="text-weight-bold">Email</div>
          <span>professional email</span>
          <q-separator class="q-mt-md q-mb-md" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="email"
              label="paul.keen@jetthoughts.com"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </div>

        <div>
          <div class="text-weight-bold">Experience</div>
          <span>Add at least 3 jobs with 3 highlights each</span>
          <q-separator class="q-mt-md q-mb-md" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="title"
              label="Title"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="company"
              label="Company"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="highlights"
              label="New Highlights"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </div>
      </div>

    </div>
    <div class="col-7 q-pa-md">
      <div>
        <h4 class="q-my-sm text-h4">
          <span class="q-mr-sm">{{ firstName }}</span>
          <span>{{ lastName }}</span>
        </h4>
        <div class="text-subtitle1">{{ subtitle }}</div>
        <div>
          <span class="text-weight-bold text-subtitle1 q-mr-sm">Email:</span>
          <span class="text-body2">{{ email }}</span>
        </div>
      </div>

      <div>
        <q-separator class="q-mt-md q-mb-md" />
        <h6 class="text-h6 q-mb-sm q-mt-none">Education:</h6>
        <span class="text-subtitle1">{{ title }}</span>
        <span class="text-subtitle1 q-mx-sm">at</span>
        <span class="text-subtitle1">{{ company }}</span>
        <div class="text-body2">{{ highlights }}</div>
      </div>

      <div>
        <q-separator class="q-mt-md q-mb-md" />
        <h6 class="text-h6 q-mb-sm q-mt-none">Experience:</h6>
        <span class="text-subtitle1">{{ title }}</span>
        <span class="text-subtitle1 q-mx-sm">at</span>
        <span class="text-subtitle1">{{ company }}</span>
        <div class="text-body2">{{ highlights }}</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      panel: 'name',
      firstName: 'John',
      lastName: 'Wayne',
      subtitle: 'React Developer',
      email: 'john.wayne@email.com',
      title: 'Software engineer',
      company: 'Jetthoughts',
      highlights: 'In order to write an engaging, results-driven resume, you should state not only what you did, but what you achieved by what you did, framing it in terms of numbers.'
    }
  }
}
</script>
