<script setup lang="ts" >
import { posts } from "~~/composable/posts";
const { getData,postList } = posts();
await useLazyAsyncData(async() => {
  if (process.server) {
    await getData()
  }
});
</script>
<template>
  <div>

    <div v-if="postList && postList.length"  class="d-flex flex-column ">
      <div class="bg-white my-2 d-flex" v-for="post of postList" :key="post.id">
        <div>
          <img width="200" height="150" :src="post.image"/>
        </div>
        <div class="ps-3">
          <div class="d-flex justify-content-between">
            <div class="display-6 ">{{post.title }}</div>
            <small class="p-2">{{post.publishDate}}</small>
          </div>
          <p class="text-muted">{{post.description}}</p>
        </div>
      </div>
    </div>

  </div>
</template>
