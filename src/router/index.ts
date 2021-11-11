import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Rename from "@/views/Rename.vue";
import ImageCompressor from "@/views/ImageCompressor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Rename",
    component: Rename
  },
  {
    path: "/compressor",
    name: "Compressor",
    component: ImageCompressor
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
