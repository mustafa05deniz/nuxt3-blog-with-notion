<script lang="ts" setup>
import { useAuth } from "~~/composable/useAuth";

const router = useRouter();

function checkActive(param: string) {
  return router.currentRoute.value.path.split("/")[1] === param;
}

const { logout } = useAuth();
const { send } = useChannel();
const auth = authStore();

function logOut() {
  const channelData = {
    type: "auth",
    subType: "logout",
    value: null,
  };
  send(channelData);
  logout();
}

const { loggedIn } = storeToRefs(auth);
</script>
<template>
  <nav
    aria-label="Thirteenth navbar example"
    class="navbar navbar-expand-lg bg-body-tertiary"
  >
    <div class="container-fluid">
      <button
        aria-controls="navbarsExample11"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbarsExample11"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarsExample11" class="collapse navbar-collapse d-lg-flex">
        <a class="navbar-brand col-lg-3 me-0" href="#">Nuxt3 UI Sync</a>
        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
          <li class="nav-item">
            <NuxtLink to="/">
              <div :class="checkActive('') ? 'active' : ''" class="nav-link">
                Home
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/user">
              <div
                :class="checkActive('user') ? 'active' : ''"
                class="nav-link"
              >
                User
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about">
              <div
                :class="checkActive('about') ? 'active' : ''"
                class="nav-link"
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
            <button class="btn btn-danger" @click="logOut()">Logout</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
