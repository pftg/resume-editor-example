<template>
  <div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Founder"
          :value="subtitle"
          @change="subtitle = $event.target.value"
        />
      </div>
    </div>

    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/name"
    >
      Prev
    </router-link>

    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/email"
    >
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Subtitle",
  computed: {
    subtitle: {
      get() {
        return this.$store.state.resume.subtitle;
      },
      set(value) {
        this.$store.commit("updateResume", { subtitle: value });
      }
    }
  }
};
</script>
