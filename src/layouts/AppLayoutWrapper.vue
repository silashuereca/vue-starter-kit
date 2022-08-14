<template>
  <component :is="state.layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, shallowRef, watch, reactive } from "vue";
import { useRoute } from "vue-router";

import AppLayoutDefault from "./AppLayoutDefault.vue";
export default defineComponent({
  name: "AppLayoutWrapper",
  setup() {
    const route = useRoute();
    const state = reactive({
      layout: null,
    });

    watch(
      () => route,
      (route) => {
        //if route name doesn't exist then don't proceed as it will cause the route to fire twice which causes a flash of two different layouts
        if (route.name) return;
        try {
          state.layout = shallowRef(AppLayoutDefault);
        } catch {
          state.layout = shallowRef(AppLayoutDefault);
        }
        console.log("Route Change", route);
      },
      {
        immediate: true,
        deep: true,
      }
    );

    return {
      state,
    };
  },
});
</script>
