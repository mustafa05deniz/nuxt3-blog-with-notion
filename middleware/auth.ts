export default defineNuxtRouteMiddleware(() => {
  const userTokenCookie = useCookie("token");
  const token = userTokenCookie.value;
  if (!token) {
    return navigateTo("/login");
  }
});
