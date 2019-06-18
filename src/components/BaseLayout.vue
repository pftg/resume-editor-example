<template>
  <div>
    <page-details :name="name">
      <slot name="header"></slot>
    </page-details>

    <slot></slot>

    <div class="flex justify-around sticky bottom-0">
      <router-link
        class="btn -circle"
        :to="prevPath"
        v-if="prevPath"
        data-cy="nav-prev"
        >&lt;
      </router-link>
      <div class="btn -circle -disabled" v-else>&lt;</div>
      <slot name="footer"></slot>
      <router-link
        class="btn -circle"
        :to="nextPath"
        v-if="nextPath"
        data-cy="nav-next"
      >
        &gt;
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
