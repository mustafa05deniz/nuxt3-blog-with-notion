export const authStore = defineStore("authStore", {
  state: () => ({
    loggedIn: false,
    user: null,
  }),
  // optional getters
  getters: {
    getLoggedIn: (state) => state.loggedIn,
  },
  // optional actions
  actions: {
    login(payload: any) {
      // `this` is the store instance
      this.loggedIn = true;
      this.user = payload;
    },
    logOut() {
      this.loggedIn = false;
    },
  },
});
