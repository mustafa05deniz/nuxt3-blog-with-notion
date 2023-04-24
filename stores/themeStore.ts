export const themeStore = defineStore("themeStore", {
  state: () => ({
    selectedTheme: "light",
    themeSwitch: false,
  }),
  // optional getters
  getters: {
    getSelectedTheme: (state) => state.selectedTheme,
  },
  // optional actions
  actions: {
    setTheme(payload: any) {
      this.selectedTheme = payload;
      this.themeSwitch = payload === "dark";
    },
  },
});
