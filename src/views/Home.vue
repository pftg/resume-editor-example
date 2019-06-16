<template>
  <div class="home">
    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
      role="alert"
    >
      <p class="font-bold">Photo</p>
      <p class="text-sm">Upload your photo</p>
    </div>

    <div v-if="media.photo">
      <img alt="Photo" :src="media.photo" />
    </div>

    <input type="file" @change="onFileSelected" />

    <router-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/name"
    >
      Start
    </router-link>
  </div>
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
