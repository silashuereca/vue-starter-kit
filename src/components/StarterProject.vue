<template>
  <div>
    <p v-text="message" />
    <p v-text="doubleValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { createPinia, setActivePinia } from "pinia";
import { useCounterStore } from "../stores/counter";
export default defineComponent({
  setup() {
    const pinia = createPinia();
    setActivePinia(pinia); //if I don't set this then the component test will fail (this needs further investigation as I shouldn't have to do this here since the instance has already been initiated in main.ts)
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
