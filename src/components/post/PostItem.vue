<script setup lang="ts">
import { defineProps } from "vue"
import type { IPost } from "../../types/PostType"

type PostItemProps = {
  post: IPost
};

const props = defineProps<PostItemProps>();

</script>

<template>
    <div class="bg-white shadow-sm border border-gray-200 rounded-lg
                  mb-5 p-2">
      <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
      <h4 class="text-md font-bold my-2">
        {{props.post.title}}
      </h4>
      <RouterLink :to="{ name: 'post_details', params: { slug: props.post.slug }}">
        <button class="p-1 bg-green-500 text-white rounded-md">Read</button>
      </RouterLink>
    </div>
</template>
