<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Title"
        :value="job.title"
        @input="editJob({ job, title: $event.target.value })"
        data-cy="job-title"
      />
    </div>

    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Company"
        :value="job.company"
        @input="editJob({ job, company: $event.target.value })"
      />
    </div>

    <div class="mb-4 flex flex-wrap">
      <vue-monthly-picker
        v-model="job.startDate"
        @change="editJob({ job, startDate: $event.target.value })"
      >
      </vue-monthly-picker>

      <vue-monthly-picker
        v-model="job.endDate"
        @change="editJob({ job, endDate: $event.target.value })"
      >
      </vue-monthly-picker>
    </div>

    <div :key="index" class="mb-4" v-for="(highlight, index) in job.highlights">
      <Highlight :highlight="highlight" />
      <button @click="removeHighlight({ job, highlight })">Delete</button>
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

    <button @click="removeJob(job)">Delete Job</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import VueMonthlyPicker from "vue-monthly-picker";
import Highlight from "@/components/Highlight";

export default {
  props: ["job"],
  components: { Highlight, VueMonthlyPicker },
  methods: {
    ...mapActions([
      "updateResume",
      "addHighlight",
      "removeHighlight",
      "editJob",
      "removeJob"
    ]),
    doneAdd(event) {
      this.addHighlight({ job: this.job, text: event.target.value });
      event.target.value = "";
    }
  }
};
</script>
