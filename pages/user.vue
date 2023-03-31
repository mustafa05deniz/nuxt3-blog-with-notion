<script setup lang="ts">
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
const user = useCookie<{ name: string }>("token");
</script>
<template>
  <div>
    <h1 class="text-center">User</h1>
    <div class="d-flex justify-content-center align-items-center mt-5 pt-5">
      {{ user }}
    </div>
  </div>
</template>
