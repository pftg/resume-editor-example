<template>
  <base-layout name="Name" prevPath="/" nextPath="/subtitle">
    <template #header>
      Use your first and last name. No nicknames
    </template>
    <div class="card">
      <text-field
        placeholder="Paul"
        label="First Name"
        id="first-name"
        name="firstName"
        v-model="resume.firstName"
        @input="updateResume({ firstName: $event })"
      ></text-field>

      <text-field
        placeholder="Keen"
        label="Last Name"
        id="last-name"
        v-model="resume.lastName"
        @input="updateResume({ lastName: $event })"
      ></text-field>
    </div>
  </base-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Name",
  methods: {
    ...mapActions(["updateResume"])
  },
  computed: mapState({ resume: state => state.resume })
};
</script>
