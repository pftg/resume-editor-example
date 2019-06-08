<template>
  <div class="mb-8">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="rounded-lg md:w-56"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Preview",
  computed: {
    ...mapState(["resume"]),
    resume_email_uri() {
      return `mailto://${this.$store.state.resume.email}`;
    }
  }
};
</script>
