<template>
  <q-page class="row">
    <div class="col-5 q-pa-md">
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
    <div class="col-7 q-pa-md">
      <span>FirstName</span>
      &nbsp;
      <span>LastName</span>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
