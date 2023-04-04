export const themeStore = defineStore("themeStore", {
  state: () => ({
    selectedTheme: "light",
  }),
  // optional getters
  getters: {
    getSelectedTheme: (state) => state.selectedTheme,
  },
  // optional actions
  actions: {
    setTheme(payload: any) {
      this.selectedTheme = payload;
    },
  },
});
