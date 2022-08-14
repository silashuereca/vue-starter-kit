<template>
  <div> {{ message }} </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const message: string = "Hello, Home Page";
    return {
      message,
    };
  },
});
</script>
