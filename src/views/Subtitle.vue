<template>
  <base-layout name="Subtitle" prevPath="/name" nextPath="/email">
    <template #header
      >Two words what you want to do</template
    >

    <div class="card">
      <text-field
        label="Subtitle"
        id="subtitle"
        placeholder="Founder"
        :value="resume.subtitle"
        @input="updateResume({ subtitle: $event })"
      />
    </div>
  </base-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Subtitle",
  methods: mapActions(["updateResume"]),
  computed: mapState({ resume: state => state.resume })
};
</script>
