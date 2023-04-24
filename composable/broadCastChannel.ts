import { tryOnMounted, useBroadcastChannel } from "@vueuse/core";
import { useTheme } from "~/composable/useTheme";

export const useChannel = () => {
  const { post, channel } = useBroadcastChannel({
    name: "nuxt3-demo-channel",
  });
  const { setTheme } = useTheme();

  const { login, logout } = useAuth();

  function send(payload: any) {
    post(payload);
  }

  tryOnMounted(() => {
    channel?.value?.addEventListener(
      "message",
      (e: MessageEvent) => {
        switch (e.data.type) {
          case "theme":
            setTheme(e.data);
            break;
          case "auth":
            if (e.data.subType === "login") {
              login(e.data.value);
            } else {
              logout();
            }
            break;
        }
      },
      { passive: true }
    );
  });

  return {
    send,
  };
};
