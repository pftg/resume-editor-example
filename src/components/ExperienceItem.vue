<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Title"
        :value="job.title"
        @change="editJob({ job, title: $event.target.value })"
        data-cy="job-title"
      />
    </div>

    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Company"
        :value="job.company"
        @change="editJob({ job, company: $event.target.value })"
      />
    </div>

    <div class="mb-4 flex flex-wrap">
      <input
        class="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Start Date: mm/dd/yyyy"
        :value="job.startDate"
        @change="editJob({ job, startDate: $event.target.value })"
      />
      <input
        class="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="End Date: mm/dd/yyyy"
        :value="job.endDate"
        @change="editJob({ job, endDate: $event.target.value })"
      />
    </div>

    <div :key="index" class="mb-4" v-for="(highlight, index) in job.highlights">
      <Highlight :highlight="highlight" />
      <button @click="removeHighlight(highlight)">Delete</button>
    </div>

    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        data-cy-new-highlight
        placeholder="New Highlight"
        @change="doneAdd"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Highlight from "@/components/Highlight";

export default {
  props: ["job"],
  components: { Highlight },
  methods: {
    ...mapActions([
      "updateResume",
      "addHighlight",
      "removeHighlight",
      "editJob"
    ]),
    doneAdd(event) {
      this.addHighlight(event.target.value);
      event.target.value = "";
    }
  }
};
</script>
