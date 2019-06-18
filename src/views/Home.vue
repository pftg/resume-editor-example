<template>
  <base-layout name="Photo" class="home" nextPath="/name">
    <template #header
      >Upload your photo</template
    >

    <div class="card">
      <div v-if="media.photo">
        <img alt="Photo" :src="media.photo" />
      </div>

      <input type="file" @change="onFileSelected" />
    </div>
  </base-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({ media: state => state.media }),
  methods: {
    onFileSelected(event) {
      this.media.photo = URL.createObjectURL(event.target.files[0]);
    }
  }
};
</script>
