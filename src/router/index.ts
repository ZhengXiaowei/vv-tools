import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Rename from "@/views/Rename.vue";
import ImageCompressor from "@/views/ImageCompressor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      enName: "home"
    }
  },
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
