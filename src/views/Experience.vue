<template>
  <base-layout name="Experience" prevPath="/email" nextPath="/name">
    <template #header>
      Add at least 3 jobs with 3 highlights each
    </template>

    <ExperienceItem
      :job="job"
      v-for="(job, index) in resume.jobs"
      :key="index"
    />

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

export default {
  name: "Experience",
  components: { ExperienceItem },
  methods: mapActions(["updateResume", "addJob"]),
  computed: {
    ...mapState({ resume: state => state.resume })
  }
};
</script>
