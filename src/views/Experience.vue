<template>
  <div>
    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
      role="alert"
    >
      <p class="font-bold">Experience</p>
      <p class="text-sm">Add at least 3 jobs with 3 highlights each</p>
    </div>

    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Title"
          :value="resume.jobTitle"
          @change="updateResume({ jobTitle: $event.target.value })"
        />
      </div>

      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Company"
          :value="resume.jobCompany"
          @change="updateResume({ jobCompany: $event.target.value })"
        />
      </div>

      <div class="mb-4 flex flex-wrap">
        <input
          class="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Start Date: mm/dd/yyyy"
          :value="resume.jobStartDate"
          @change="updateResume({ jobStartDate: $event.target.value })"
        />
        <input
          class="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="End Date: mm/dd/yyyy"
          :value="resume.jobEndDate"
          @change="updateResume({ jobEndDate: $event.target.value })"
        />
      </div>

      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Highlight"
          :value="resume.jobHighlight"
          @change="updateResume({ jobHighlight: $event.target.value })"
        />
      </div>
    </div>
    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/email"
    >
      Prev
    </router-link>
    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/"
    >
      Next
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Experience",
  methods: mapActions(["updateResume"]),
  computed: mapState({ resume: state => state.resume })
};
</script>
