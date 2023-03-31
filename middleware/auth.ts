export default defineNuxtRouteMiddleware(() => {
  const tokenCookie = useCookie("token");
  const token = tokenCookie.value;
  if (!token) {
    return navigateTo("/login");
  }
});
