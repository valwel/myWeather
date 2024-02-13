import { defineStore } from "pinia";

export const modeStore = defineStore("mode", {
  state: () => {
    return {
      isDark: true,
    };
  },
  actions: {
    changeMode() {
      this.isDark = !this.isDark;
    },
  },
  getters: {
    getMode(state) {
      return state.isDark;
    },
  },
});
