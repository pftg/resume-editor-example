<template>
  <div id="preview" class="mb-8" data-cy-preview-block>
    <div class="md:flex">
      <div class="md:flex-shrink-0" v-if="media.photo">
        <img
          class="rounded-lg md:w-56"
          :src="media.photo"
          alt="Woman paying for a purchase"
        />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          {{ resume.firstName }}
          {{ resume.lastName }}
        </div>
        <span
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900"
        >
          {{ resume.subtitle }}
          <span v-if="resume.email && resume.subtitle"> | </span>
          <span v-if="resume.email">
            <a class="hover:underline" :href="resume_email_uri">{{
              resume.email
            }}</a>
          </span>
        </span>
        <p class="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>

        <div v-for="(job, index) in resume.jobs" :key="index">
          <div class="mt-2">
            <div class="uppercase tracking-wide text-sm font-bold">
              {{ job.title }}<span v-if="job.title && job.company"> | </span
              >{{ job.company }}
            </div>
            <div
              class="block mt-1 leading-tight font-semibold text-gray-900"
              v-if="job.startDate"
            >
              {{ job.startDate | formatDate }} -
              <span v-if="job.endDate">{{ job.endDate | formatDate }}</span
              ><span v-if="!job.endDate">Now</span>
            </div>
            <div class="mt-2 text-gray-600">
              <ul class="list-disc">
                <li v-for="(highlight, index) in job.highlights" :key="index">
                  {{ highlight.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Preview",
  computed: {
    ...mapState(["resume", "media"]),
    resume_email_uri() {
      return `mailto://${this.$store.state.resume.email}`;
    }
  }
};
</script>
