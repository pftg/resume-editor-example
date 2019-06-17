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

    <div>
      <p class="text-red-500 text-xs italic js-start_date-error" v-if="errors.has('startDate')">
        {{ errors.first("startDate") }}
      </p>

      <p class="text-red-500 text-xs italic js-end_date-error" v-if="errors.has('endDate')">
        {{ errors.first("endDate") }}
      </p>

    </div>
    <div class="mb-4 flex flex-wrap">

      <div>
        <ValidationProvider rules="date_format:yyyy/MM" v-slot="{ errors }" vid="startDate">
          <input v-model="startDate" type="text">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div>
        <ValidationProvider rules="date_format:yyyy/MM|after:startDate" v-slot="{ errors }">
          <input v-model="endDate" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div>
        <ValidationProvider rules="date_format:yyyy/MM|after:startDate" v-slot="{ errors }">
          <vue-monthly-picker v-model="endDate" ref="endDate" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
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
import { ValidationProvider } from "vee-validate";

import VueMonthlyPicker from "vue-monthly-picker";
import Highlight from "@/components/Highlight";

export default {
  props: ["job"],
  components: { Highlight, VueMonthlyPicker, ValidationProvider },
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
  },
  computed: {
    startDate: {
      get() {
        return this.job.startDate;
      },
      set(value) {
        this.editJob({ job: this.job, startDate: value });
      }
    },
    endDate: {
      get() {
        return this.job.endDate;
      },
      set(value) {
        this.editJob({ job: this.job, endDate: value });
      }
    }
  }
};
</script>
