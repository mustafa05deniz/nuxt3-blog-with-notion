<script setup lang="ts">
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/authStore";
import { useTheme } from "~~/composable/useTheme";
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
const auth = authStore();
function changeTheme(event: any) {
  if (event.target.checked) {
    theme.setTheme({
      selectedTheme: "dark",
    });
  } else {
    theme.setTheme({
      selectedTheme: "light",
    });
  }
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
      {{ user }}
    </div>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
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
