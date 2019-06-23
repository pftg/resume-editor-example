<template>
  <div class="card relative" v-focus data-cy="experience-item">
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

    <draggable
      :list="job.highlights"
      group="highlights"
      @start="drag = true"
      @end="drag = false"
      handle=".handle"
    >
      <div
        :key="index"
        class="flex items-center justify-between mb-4"
        v-for="(highlight, index) in job.highlights"
      >
        <svg
          class=" h-6 w-6 handle cursor-move"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
        <Highlight :highlight="highlight" class="w-full ml-3" />
        <button
          class="ml-3 h-6 w-6"
          @click="removeHighlight({ job, highlight })"
          data-cy="delete-highlight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"
            />
          </svg>
        </button>
      </div>
    </draggable>

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

    <button
      @click="removeJob(job)"
      ref="deleteJob"
      data-cy="delete-job"
      class="top-0 right-0 absolute h-8 w-8 -mr-4 -mt-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import VueMonthlyPicker from "vue-monthly-picker";
import Highlight from "@/components/Highlight";

import draggable from "vuedraggable";

export default {
  props: ["job"],
  components: { Highlight, VueMonthlyPicker, draggable },
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
