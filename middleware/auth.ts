import { authStore } from "@/stores/authStore";
export default defineNuxtRouteMiddleware(() => {
  const auth = authStore();

  if (!auth.$state.loggedIn) {
    return navigateTo("/login");
  }
});
