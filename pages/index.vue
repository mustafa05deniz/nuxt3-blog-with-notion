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
      <div class="p-3 bg-white my-2" v-for="post of postList" :key="post.id">
       <h1> {{post.properties.title.rich_text[0].plain_text}}</h1>
        <p v-if="post && post.properties && post.properties.description && post.properties.description.rich_text[0] && post.properties.description.rich_text[0].plain_text">
          {{post.properties.description.rich_text[0].plain_text}}
        </p>
      </div>
    </div>
  </div>
</template>
