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
      <ValidationObserver v-slot="{invalid, errors}">
        {{ errors }}
        <div class="mb-4" v-if="invalid">
          <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
          <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
        </div>

        <div class="mb-4 flex flex-wrap">
          <div>
            <ValidationProvider
              name="Start Date"
              ref="startDateProvider"
              v-slot="{ errors }"
              :immediate="true"
            >
              <vue-monthly-picker v-model="startDate" />
            </ValidationProvider>
          </div>

          <div>
            <ValidationProvider
              name="End Date"
              rules="after:startDate"
              v-slot="{ errors }"
              :immediate="true"
            >
              <vue-monthly-picker v-model="endDate" />
            </ValidationProvider>
          </div>
        </div>

      </ValidationObserver>
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
import { ValidationProvider, ValidationObserver } from "vee-validate";
import moment from "moment"

import VueMonthlyPicker from "vue-monthly-picker";
import Highlight from "@/components/Highlight";

export default {
  props: ["job"],
  components: { Highlight, VueMonthlyPicker, ValidationProvider, ValidationObserver },
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
        return moment(String(this.job.startDate));
      },
      set(value) {
        this.editJob({ job: this.job, startDate: value });
      }
    },
    endDate: {
      get() {
        return moment(String(this.job.endDate));
      },
      set(value) {
        this.editJob({ job: this.job, endDate: value });
      }
    }
  }
};
</script>
