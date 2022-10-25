<script setup lang="ts">
import PostDataService from '@/services/PostDataService';
import type { IPost } from '@/types/PostType';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug;

const postState: {post: IPost, isLoading: boolean} = reactive({
  post: {} as IPost,
  isLoading: true
})

const getPost = async () => {
  postState.post = await PostDataService.get(slug as string);
  postState.isLoading = false;
  console.log(postState.post);
};

onMounted(() => {
  getPost();
});
</script>
<template>
  <div>
    <div v-if="postState.isLoading">
      Loading...
    </div>
    <div v-else>
      <h3 class="text-lg">{{postState.post.title}}</h3>
      <p>{{postState.post.content}}</p>
    </div>
  </div>
</template>
