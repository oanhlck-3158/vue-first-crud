<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="30"
      height="30"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <div class="body-wrapper">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  box-shadow: 0 2px 3px -2px hsla(160, 100%, 37%, 0.2);
  padding-bottom: 10px;
}
.wrapper {
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
}

.body-wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
