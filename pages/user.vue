<script setup lang="ts">
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/authStore";
definePageMeta({
  middleware: ["auth"],
});
defineNuxtComponent({
  fetchKey: "user",
  data() {
    return {};
  },
});
const auth = authStore();

const { user } = storeToRefs(auth);
</script>
<template>
  <div v-if="user">
    <h1 class="text-center">User</h1>
    <div class="d-flex justify-content-center align-items-center mt-5 pt-5">
      {{ user }}
    </div>
  </div>
</template>
