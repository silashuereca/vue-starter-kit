<template>
  <div>
    <p v-text="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const message: string = "Vue Starter Project";
    return {
      message,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
