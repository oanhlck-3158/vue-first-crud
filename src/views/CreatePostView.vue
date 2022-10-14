<template>
  <div>
    <div v-if="!submitted">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          required
          v-model="post.title"
          name="title"
        />
        <textarea v-model="post.content"></textarea>
        <button @click="savePost">Submit</button>
      </div>
    </div>

    <div v-else>
      <h4>Submit Successfully</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PostDataService from "../services/PostDataService";
import type {Post} from "../types/PostType";

export default defineComponent({
  name: "create-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        slug: "",
        content: ""
      } as Post,
      submitted: false,
    }
  },
  methods: {
    async savePost() {
      try {
        await PostDataService.create(this.post)
        this.submitted = true;
      }catch (e) {

      }
    }
  }
});
</script>

<style>
</style>
