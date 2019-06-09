<template>
  <div>
    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
      role="alert"
    >
      <p class="font-bold">Experience</p>
      <p class="text-sm">Add at least 3 jobs with 3 highlights each</p>
    </div>

    <ExperienceItem :job="job" />

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
import ExperienceItem from "@/components/ExperienceItem";

export default {
  name: "Experience",
  components: { ExperienceItem },
  methods: mapActions(["updateResume"]),
  computed: {
    ...mapState({ resume: state => state.resume }),
    job() {
      return {
        title: this.resume.jobTitle,
        company: this.resume.jobCompany,
        startDate: this.resume.jobStartDate,
        endDate: this.resume.jobEndDate,
        highlight: this.resume.jobHighlight,
        position: 0
      };
    }
  }
};
</script>
