<template>
  <div>
    <page-details :name="name">
      <slot name="header"></slot>
    </page-details>

    <slot></slot>

    <div>
      <router-link
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :to="prevPath"
        v-if="prevPath"
      >
        Prev
      </router-link>
      <slot name="footer"></slot>
      <router-link
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :to="nextPath"
        v-if="nextPath"
      >
        Next
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-layout",
  props: ["name", "prevPath", "nextPath"]
};
</script>
