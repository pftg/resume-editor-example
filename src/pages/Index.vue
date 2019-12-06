<template>
  <q-page class="row">
    <div class="col-5 q-pa-md">

      <div class="q-pa-md q-mb-lg shadow-2 rounded-borders">
        <div class="text-weight-bold">Photo</div>
        <span>Upload your photo</span>
        <q-separator class="q-mt-md q-mb-md q-mb-xs" />
        <q-uploader />
      </div>

      <div class="q-pa-md q-mb-lg shadow-2 rounded-borders">
        <div class="text-weight-bold">Name</div>
        <span>Use your first and last name. No nicknames</span>
        <q-separator class="q-mt-md q-mb-md q-mb-xs" />
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

      <div class="q-pa-md q-mb-lg shadow-2 rounded-borders">
        <div class="text-weight-bold">Subtitle</div>
        <span>Two words what you want to do</span>
        <q-separator class="q-mt-md q-mb-md q-mb-xs" />
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

      <div class="q-pa-md q-mb-lg shadow-2 rounded-borders">
        <div class="text-weight-bold">Email</div>
        <span>professional email</span>
        <q-separator class="q-mt-md q-mb-md q-mb-xs" />
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

      <div class="q-pa-md q-mb-lg shadow-2 rounded-borders">
        <div class="text-weight-bold">Experience</div>
        <span>Add at least 3 jobs with 3 highlights each</span>
        <q-separator class="q-mt-md q-mb-md q-mb-xs" />
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
    <div class="col-7 q-pa-md">
      <div class="q-pt-md">
        <span class="text-weight-bold">{{ firstName }}</span>
        &nbsp;
        <span class="text-weight-bold">{{ lastName }}</span>
      </div>
      <div class="q-pt-md">
        <span class="text-weight-bold">{{ subtitle }}</span>
        &nbsp;
        <span class="text-weight-bold">{{ email }}</span>
      </div>
      <div class="q-pt-md">
        <span class="text-weight-bold">{{ title }}</span>
        &nbsp;
        <span class="text-weight-bold">{{ company }}</span>
        <div>{{ highlights }}</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      panel: 'name',
      firstName: '',
      lastName: '',
      subtitle: '',
      email: '',
      title: '',
      company: '',
      highlights: ''
    }
  }
}
</script>
