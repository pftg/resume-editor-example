<template>
  <div>
    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
      role="alert"
    >
      <p class="font-bold">Experience</p>
      <p class="text-sm">Add at least 3 jobs with 3 highlights each</p>
    </div>

    <ExperienceItem
      :job="job"
      v-for="(job, index) in resume.jobs"
      :key="index"
    />

    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/email"
    >
      Prev
    </router-link>

    <div
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="addJob"
    >
      Add Job
    </div>

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
