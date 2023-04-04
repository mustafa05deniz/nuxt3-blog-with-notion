import { authStore } from "@/stores/authStore";
export const useAuth = () => {
  const userTokenCookie = useCookie("user");
  const tokenCookie = useCookie("token");
  const auth = authStore();
  function login(payload: { email: string }) {
    const data = {
      idToken: "a",
      email: payload.email,
    };
    tokenCookie.value = data.idToken;
    userTokenCookie.value = JSON.stringify({
      email: data.email,
    });
    auth.login(data);
    useRouter().push("/");
  }
  function logout() {
    tokenCookie.value = null;
    userTokenCookie.value = null;
    auth.logOut();
    useRouter().push("/login");
  }
  function getUser() {
    return userTokenCookie.value;
  }
  return {
    login,
    logout,
    getUser,
  };
};
