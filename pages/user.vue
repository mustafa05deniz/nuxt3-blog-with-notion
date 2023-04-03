<script setup lang="ts">
import { authStore } from "@/stores/authStore";
definePageMeta({
  middleware: ["auth"],
});
defineNuxtComponent({
  fetchKey: "user",
  data() {
    return {
      a: 6,
    };
  },
});
const auth = authStore();

const { loggedIn, user } = storeToRefs(auth);
watch(loggedIn, () => {
  console.log("some changed", loggedIn);
});
</script>
<template>
  <div>
    <h1 class="text-center">User</h1>
    <div class="d-flex justify-content-center align-items-center mt-5 pt-5">
      {{ user }}
    </div>
  </div>
</template>
