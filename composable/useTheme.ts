import { themeStore } from "@/stores/themeStore";
export const useTheme = () => {
  const config = useRuntimeConfig();

  const themeCookie = useCookie("theme");
  const theme = themeStore();

  function changeTheme(theme: string) {
    if (process.client) {
      document
        ?.querySelector("body")
        ?.classList?.replace(
          document?.querySelector("body")?.classList[0] || config.defaultTheme,
          theme
        );
    }
  }
  function setTheme(payload: { selectedTheme: string }) {
    theme.setTheme(payload.selectedTheme);
    themeCookie.value = JSON.stringify({
      selectedTheme: payload.selectedTheme,
      defaultTheme: config.defaultTheme,
    });
    changeTheme(payload.selectedTheme);
  }
  function resetTheme() {
    theme.setTheme(config.defaultTheme);
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
