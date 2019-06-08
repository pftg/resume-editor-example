<template>
  <div>
    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
      role="alert"
    >
      <p class="font-bold">Name</p>
      <p class="text-sm">Use your first and last name. No nicknames</p>
    </div>

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
          :value="resume.firstName"
          @change="updateResume({ firstName: $event.target.value })"
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
          :value="resume.lastName"
          @change="updateResume({ lastName: $event.target.value })"
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
import { mapActions, mapState } from 'vuex'

export default {
  name: "Name",
  methods: mapActions(["updateResume"]),
  computed: mapState({ resume: state => state.resume })
};
</script>
