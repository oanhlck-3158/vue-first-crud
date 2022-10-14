<template>
  <main>
    <PostItem>
      <template #heading>Documentation</template>
    </PostItem>
  </main>
</template>

<script lang="ts">
import PostDataService from "@/services/PostDataService";
import {defineComponent} from "vue";
import PostItem from "../components/post/PostItem.vue";
import type {Post} from "../types/PostType"

export default defineComponent({
  name: "posts-list",
  components: {
    PostItem,
  },
  data() {
    return {
      posts: [] as Post[]
    };
  },
  methods: {
    getPosts() {
      try {
        const res = PostDataService.getAll();
      }catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getPosts();
  }
})
</script>
