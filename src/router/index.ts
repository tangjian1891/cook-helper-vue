import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/views/Index.vue"),
    },
    {
      path: "/season",
      name: "season",
      component: () => import("@/views/season.vue"),
    },
    {
      path: "/season-detail",
      name: "season-detail",
      component: () => import("@/views/season-detail.vue"),
    },
  ],
});

export { router };
