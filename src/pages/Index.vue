<template>
  <q-page class="row">
    <div class="col-5 q-pa-md">

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">

        <q-tab-panel name="photo">
          <div class="text-weight-bold">Photo</div>
          <span>Upload your photo</span>
          <q-separator class="q-mt-md q-mb-md q-mb-xs" />
        </q-tab-panel>

        <q-tab-panel name="name">
          <div class="text-weight-bold">Name</div>
          <span>Use your first and last name. No nicknames</span>
          <q-separator class="q-mt-md q-mb-md q-mb-xs" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="text"
              label="First Name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              filled
              v-model="text"
              label="Last Name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="subtitle">
          <div class="text-weight-bold">Subtitle</div>
          <span>Two words what you want to do</span>
          <q-separator class="q-mt-md q-mb-md q-mb-xs" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="text"
              label="Subtitle"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="email">
          <div class="text-weight-bold">Email</div>
          <span>professional email</span>
          <q-separator class="q-mt-md q-mb-md q-mb-xs" />
          <q-form class="q-gutter-md overflow-hidden">
            <q-input
              filled
              v-model="text"
              label="paul.keen@jetthoughts.com"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="email">
          <div class="text-weight-bold">Experience</div>
          <span>Add at least 3 jobs with 3 highlights each</span>
          <q-separator class="q-mt-md q-mb-md q-mb-xs" />
        </q-tab-panel>

      </q-tab-panels>

    </div>
    <div class="col-7 q-pa-md">
      <span>FirstName</span>
      &nbsp;
      <span>LastName</span>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      panel: 'name'
    }
  }
}
</script>
