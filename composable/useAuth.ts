export const useAuth = () => {
  // login
  function login() {
    const data = {
      idToken: "a",
    };
    const userTokenCookie = useCookie("token");
    userTokenCookie.value = data.idToken;
    useRouter().push("/");
  }

  // register
  function register() {
    const data = {
      idToken: "a",
    };
    // use cookie
    const userTokenCookie = useCookie("token");
    userTokenCookie.value = data.idToken;
    useRouter().push("/");
  }

  return {
    login,
    register,
  };
};
