<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="domId">
      {{ label }}
    </label>

    <input
      :id="domId"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      ref="field"
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
    />
  </div>
</template>

<script>
export default {
  name: "text-field",
  props: ["value", "label", "name"],
  inheritAttrs: false,
  computed: {
    domId() {
      return this.$attrs["id"] || this._uid;
    },
    inputListeners() {
      const vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function(event) {
            vm.$emit("input", event.target.value);
          }
        }
      );
    }
  }
};
</script>
