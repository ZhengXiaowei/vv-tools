<template>
  <div class="upload-box" @click.stop="$emit('upload')">
    <n-icon size="60">
      <file-tray-full />
    </n-icon>
    <n-text class="main-text">点击选取需要进行重命名的文件夹</n-text>
    <n-p class="tip-text">可重命名图片、视频、文档</n-p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FileTrayFull } from "@vicons/ionicons5";

const UploadBox = defineComponent({
  name: "UploadBox",
  components: {
    FileTrayFull
  },
  setup() {}
});

export default UploadBox;
</script>
