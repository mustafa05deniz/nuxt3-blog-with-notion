<script setup lang="ts">
import { useAuth } from "~~/composable/useAuth";
const router = useRouter();
function checkActive(param: string) {
  return router.currentRoute.value.path.split("/")[1] === param;
}
const { logout } = useAuth();
const auth = authStore();

const { loggedIn } = storeToRefs(auth);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary"
    aria-label="Thirteenth navbar example"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample11"
        aria-controls="navbarsExample11"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarsExample11" class="collapse navbar-collapse d-lg-flex">
        <a class="navbar-brand col-lg-3 me-0" href="#">Nuxt3 UI Sync</a>
        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
          <li class="nav-item">
            <NuxtLink to="/">
              <div class="nav-link" :class="checkActive('') ? 'active' : ''">
                Home
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/user">
              <div
                class="nav-link"
                :class="checkActive('user') ? 'active' : ''"
              >
                User
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about">
              <div
                class="nav-link"
                :class="checkActive('about') ? 'active' : ''"
              >
                About
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="d-lg-flex col-lg-3 justify-content-lg-end">
          <NuxtLink v-if="!loggedIn" to="/login">
            <button class="btn btn-success">Login</button>
          </NuxtLink>
          <NuxtLink v-if="loggedIn">
            <button class="btn btn-danger" @click="logout()">Logout</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
