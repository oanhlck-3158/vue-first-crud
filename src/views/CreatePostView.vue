<script setup lang="ts">
import PostDataService from '@/services/PostDataService';
import type { IPost } from '@/types/PostType';
import { reactive } from 'vue';

export interface ICreatePost {
  title: string;
  content: string;
  thumbnail: string;
  isPublic: boolean;
}

const postState: { formData: ICreatePost, submitted: Boolean, errorMessage: String } = reactive({
  formData: {} as IPost,
  submitted: false,
  errorMessage: ""
});

const handleClickSubmit = async () => {
  if (postState.formData.title && postState.formData.content){
    await PostDataService.create(postState.formData);

    postState.submitted = true;
    postState.errorMessage = "";
  }else {
    postState.errorMessage = "Please fill out the information completely";
  }
}
</script>

<template>
  <div>
    <p class="text-red-400">{{postState.errorMessage}}</p>
    <div v-if="!postState.submitted">
      <div class="grid grid-rows-1 w-1/2 gap-1 rounded-lg">
        <label>Title:</label>
        <input
          type="text"
          required
          v-model="postState.formData.title"
          name="title"
          class="p-1 border-gray-200 border rounded-lg outline-0"
        />

        <label>Content:</label>
        <textarea
          required
          v-model="postState.formData.content"
          name="content"
          class="p-1 border-gray-200 border rounded-lg outline-0">
        </textarea>

        <div class="flex items-center">
          <label class="mr-2">Public:</label>
          <input type="checkbox" v-model="postState.formData.isPublic" />
        </div>
        <button
          @click="handleClickSubmit"
          class="p-2 bg-green-500 text-white"
          >
          Submit
        </button>
      </div>
    </div>

    <div v-else>
      <h4>Created Successfully</h4>
    </div>
  </div>
</template>
