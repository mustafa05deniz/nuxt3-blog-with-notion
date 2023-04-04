export default defineNuxtPlugin(() => {
  if (process.server) {
    const tokenCookie = useCookie("token");
    const userTokenCookie = useCookie("user");
    const auth = authStore();
    if (tokenCookie.value) {
      auth.login(userTokenCookie.value);
    }
  }
});
