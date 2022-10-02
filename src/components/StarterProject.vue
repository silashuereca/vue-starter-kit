<template>
  <div>
    <p v-text="message" />
    <p v-text="doubleValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCounterStore } from "../stores/counter";
export default defineComponent({
  setup() {
    const store: any = useCounterStore();
    const message: string = "Vue Starter Project";

    setInterval(() => {
      store.increment();
    }, 1000);
    return {
      message,
      doubleValue: computed(() => store.doubleCount),
    };
  },
});
</script>

<style scoped>
p {
  font-size: 40px;
}
</style>
