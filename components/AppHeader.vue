<script lang="ts" setup>
const router = useRouter();
function checkActive(param: string) {
  return router.currentRoute.value.path.split("/")[1] === param;
}
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
        <a class="navbar-brand col-lg-3 me-0" href="#">Nuxt3 Notion Blog</a>
        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
          <li class="nav-item">
            <NuxtLink to="/">
              <div :class="checkActive('') ? 'active' : ''" class="nav-link">
                Home
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/">
              <div :class="checkActive('') ? 'active' : ''" class="nav-link">
                Posts
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>