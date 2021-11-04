import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Rename from "@/views/Rename.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Rename",
    component: Rename
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
