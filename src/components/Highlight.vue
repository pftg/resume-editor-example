<template>
  <input
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Highlight"
    :value="highlight.text"
    data-cy-highlight
    @input="editHighlight({ highlight, value: $event.target.value })"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["highlight"],
  methods: {
    ...mapActions(["editHighlight"])
  }
};
</script>
