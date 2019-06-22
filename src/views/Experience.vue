<template>
  <base-layout name="Experience" prevPath="/email" nextPath="/name">
    <template #header>
      Add at least 3 jobs with 3 highlights each
    </template>

    <draggable v-model="jobs" group="experience" animation="0" data-cy="experiences">
      <ExperienceItem
        :job="job"
        v-for="(job, index) in resume.jobs"
        :key="index"
        class="cursor-move"
      />
    </draggable>


    <template #footer>
      <div class="btn items-center justify-center flex" @click="addJob">
        Add Job
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ExperienceItem from "@/components/ExperienceItem";

import draggable from "vuedraggable";

export default {
  name: "Experience",
  components: { ExperienceItem, draggable },
  methods: mapActions(["updateResume", "addJob"]),
  computed: {
    ...mapState({ resume: state => state.resume }),
    jobs: {
      get() {
        return this.resume.jobs;
      },

      set(value) {
        this.updateResume({ jobs: value });
      }
    }
  }
};
</script>
