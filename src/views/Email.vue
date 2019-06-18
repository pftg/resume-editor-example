<template>
  <base-layout name="Email" prevPath="/subtitle" nextPath="/experience">
    <template #header>
      professional email
    </template>

    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <p class="text-red-500 text-xs italic" v-if="emailError">
          {{ errors.first("email") }}
        </p>

        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
          id="email"
          type="email"
          placeholder="paul.keen@jetthoughts.com"
          :class="{ error: emailError }"
          :value="resume.email"
          v-validate.immediate="'email'"
          data-vv-as="email"
          name="email"
          @input="updateResume({ email: $event.target.value })"
        />
      </div>
    </div>
  </base-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Email",
  methods: mapActions(["updateResume"]),
  computed: {
    ...mapState({ resume: state => state.resume }),
    emailError() {
      return this.errors.has("email");
    }
  }
};
</script>

<style lang="scss">
.error {
  @apply text-red-500 border-red-500;
}
</style>
