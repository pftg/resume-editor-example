<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="paul.keen@jetthoughts.com"
        :value="email"
        @change="email = $event.target.value"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "Email",
  computed: {
    email: {
      get() {
        return this.$store.state.resume.email;
      },
      set(value) {
        this.$store.commit("updateResume", { email: value });
      }
    }
  }
};
</script>
