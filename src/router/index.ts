import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("../views/PostsView.vue"),
    },
    {
      path: "/post/:slug",
      name: "post_details",
      component: () => import("../views/PostDetailsView.vue"),
    },
    {
      path: "/post/new",
      name: "post_new",
      component: () => import("../views/CreatePostView.vue"),
    }
  ],
});

export default router;
