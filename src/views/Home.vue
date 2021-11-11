<template>
  <div class="home-wrap">
    <n-grid :x-gap="20" :y-gap="20" :cols="3">
      <n-grid-item @click="onRoute('/rename')">
        <n-card class="home-wrap__item">
          <n-icon size="35">
            <file-tray-stacked />
          </n-icon>
          <div class="title-box">
            <n-p class="main-title"> 文件重命名 </n-p>
            <n-text class="en-title"> / Rename </n-text>
          </div>
        </n-card>
      </n-grid-item>
      <n-grid-item @click="onRoute('/compressor')">
        <n-card class="home-wrap__item">
          <n-icon size="35">
            <images />
          </n-icon>
          <div class="title-box">
            <n-p class="main-title"> 图片压缩 </n-p>
            <n-text class="en-title"> / Compressor </n-text>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { FileTrayStacked, Images } from "@vicons/ionicons5";

const Home = defineComponent({
  components: {
    FileTrayStacked,
    Images
  },
  setup() {
    const router = useRouter();

    const onRoute = (path: string) => {
      router.push(path);
    };

    return {
      onRoute
    };
  }
});

export default Home;
</script>
