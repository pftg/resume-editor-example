<template>
  <div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="first-name"
        >
          First Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first-name"
          type="text"
          placeholder="Paul"
          :value="firstName"
          @change="firstName = $event.target.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="last-name"
        >
          Last Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last-name"
          type="text"
          placeholder="Keen"
          :value="lastName"
          @change="lastName = $event.target.value"
        />
      </div>
    </div>
    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/subtitle"
    >
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Name",
  computed: {
    firstName: {
      get() {
        return this.$store.state.resume.firstName;
      },
      set(value) {
        this.$store.commit("updateResume", { firstName: value });
      }
    },
    lastName: {
      get() {
        return this.$store.state.resume.lastName;
      },
      set(value) {
        this.$store.commit("updateResume", { lastName: value });
      }
    }
  }
};
</script>
