<script setup lang="ts">
import PostItem from "../components/post/PostItem.vue";
import type {IPost} from "../types/PostType";
import PostDataService from "../services/PostDataService";
import { onMounted, reactive } from "vue";

const postsState: {posts: IPost[]} = reactive({
  posts: []
});

const getPosts = async () => {
  postsState.posts = await PostDataService.getAll();
}

onMounted(() => {
  getPosts();
});

</script>

<template>
  <RouterLink to="/post/new">
    <button class="bg-lime-100 p-1 my-2 rounded-md transition
                  hover:bg-inherit hover:delay-75"
    >Create</button>
  </RouterLink>

  <div class="grid grid-cols-3 gap-4">
    <PostItem v-for="post in postsState.posts" :key="post.id" :post="post" />
  </div>
</template>
