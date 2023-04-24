<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/authStore";
import { themeStore } from "@/stores/themeStore";
import { useTheme } from "~~/composable/useTheme";
import { useChannel } from "~/composable/broadCastChannel";

definePageMeta({
  middleware: ["auth"],
});
defineNuxtComponent({
  fetchKey: "user",
  data() {
    return {};
  },
});

const theme = useTheme();
const themes = themeStore();
const auth = authStore();
const broadCastChannel = useChannel();

function changeTheme(event: any) {
  let payload;
  if (event.target.checked) {
    payload = {
      type: "theme",
      value: "dark",
    };
  } else {
    payload = {
      type: "theme",
      value: "light",
    };
  }
  theme.setTheme(payload);
  broadCastChannel.send(payload);
}

const { user } = storeToRefs(auth);
</script>
<template>
  <div
    v-if="user"
    class="d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="text-center">User</h1>
    <div class="d-flex justify-content-center align-items-center mt-5 pt-5">
      {{ user?.email }}
    </div>
    <div class="form-check form-switch">
      <input
        v-model="themes.themeSwitch"
        class="form-check-input"
        role="switch"
        type="checkbox"
        @change="changeTheme"
      />
      <label class="form-check-label" for="flexSwitchCheckChecked"
        >Switch Theme</label
      >
    </div>
  </div>
</template>

<style lang="scss">
.form-check-input {
  height: 20px;
  width: 30px;
}
</style>
