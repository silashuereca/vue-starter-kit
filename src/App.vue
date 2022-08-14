<template>
  <AppLayoutWrapper>
    <router-view />
  </AppLayoutWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayoutWrapper from "./layouts/AppLayoutWrapper.vue";

export default defineComponent({
  components: {
    AppLayoutWrapper,
  },
});
</script>
