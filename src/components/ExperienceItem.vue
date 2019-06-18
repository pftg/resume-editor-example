<template>
  <div class="card" v-focus>
    <div class="mb-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Title"
        ref="title"
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
        ref="newHighlight"
        @change="doneAdd"
      />
    </div>

    <button @click="removeJob(job)" ref="deleteJob">Delete Job</button>
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

      // Make visible the most bottom part
      this.$refs.deleteJob.focus();
      // and them back to new Title
      this.$refs.newHighlight.focus();
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el, binding, vnode) {
        // Make visible the most bottom part in order to show whole card visible
        vnode.context.$refs.deleteJob.focus();
        // and them back to new Title
        vnode.context.$refs.title.focus();
      }
    }
  }
};
</script>
