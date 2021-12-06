import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Rename from "@/views/Rename.vue";
import ImageCompressor from "@/views/ImageCompressor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/rename",
    name: "Rename",
    component: Rename,
    meta: {
      name: "文件重命名",
      enName: "Rename"
    }
  },
  {
    path: "/compressor",
    name: "Compressor",
    component: ImageCompressor,
    meta: {
      name: "图片压缩",
      enName: "Compressor"
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
