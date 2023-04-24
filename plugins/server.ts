export default defineNuxtPlugin(() => {
  const themeCookie: { value: { selectedTheme: string } } = useCookie("theme");
  useHead({
    bodyAttrs: {
      class: themeCookie.value.selectedTheme,
    },
  });
  const { setTheme } = useTheme();
  if (themeCookie.value) {
    setTheme({ value: themeCookie.value.selectedTheme });
  }
  if (process.server) {
    const tokenCookie = useCookie("token");
    const userTokenCookie = useCookie("user");
    const auth = authStore();
    if (tokenCookie.value) {
      auth.login(userTokenCookie.value);
    }
  }
});
