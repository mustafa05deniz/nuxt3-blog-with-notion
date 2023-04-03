export default defineNuxtPlugin(() => {
  if (process.server) {
    const tokenCookie = useCookie("token");
    const userTokenCookie = useCookie("user");
    const auth = authStore();
    console.log("mustafa", tokenCookie.value);
    if (tokenCookie.value) {
      auth.login(userTokenCookie.value);
    }
  }
});
