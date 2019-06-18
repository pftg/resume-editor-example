<template>
  <div
    class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
    role="alert"
  >
    <p class="font-bold">{{ name }}</p>
    <p class="text-sm">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "page-details",
  props: ["name"]
};
</script>
