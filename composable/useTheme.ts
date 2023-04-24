export const useTheme = () => {
  const config = useRuntimeConfig();

  const themeCookie = useCookie("theme");
  const themes = themeStore();

  function changeTheme(theme: string) {
    if (process.client && theme) {
      document
        ?.querySelector("body")
        ?.classList?.replace(
          document?.querySelector("body")?.classList[0] || config.defaultTheme,
          theme
        );
    }
  }

  function setTheme(payload: { value: string }) {
    themes.setTheme(payload.value);
    themeCookie.value = JSON.stringify({
      selectedTheme: payload.value,
      defaultTheme: config.defaultTheme,
    });
    changeTheme(payload.value);
  }

  function resetTheme() {
    themes.setTheme(config.defaultTheme);
    themeCookie.value = JSON.stringify({
      selectedTheme: config.defaultTheme,
      defaultTheme: config.defaultTheme,
    });
    changeTheme(config.defaultTheme);
  }

  return {
    setTheme,
    resetTheme,
  };
};
