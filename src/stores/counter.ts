import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: <number>0, name: <string>"John Smith" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
