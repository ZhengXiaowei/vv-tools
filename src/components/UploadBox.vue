<template>
  <div class="upload-box" @click.stop="$emit('choose')">
    <n-icon size="60">
      <file-tray-full />
    </n-icon>
    <n-text class="main-text">点击选取需要进行重命名的文件夹</n-text>
    <n-p class="tip-text">可批量重命名图片、视频、文档</n-p>
  </div>

  <div class="tool-box" v-if="path">
    <n-p class="path-string">
      <n-text class="main-text">当前路径:</n-text>
      <n-text class="count-text">{{ path }}</n-text>
    </n-p>
    <div class="form-box">
      <div class="form-box__item">
        <n-text class="main-text">替换规则:</n-text>
        <n-input
          v-model:value="regForm.regText"
          class="count-text"
          :placeholder="defaultReg"
        />
      </div>
      <div class="form-box__item">
        <n-text class="main-text">替换为:</n-text>
        <n-input
          v-model:value="regForm.replaceText"
          class="count-text"
          placeholder="默认为空字符串"
        />
      </div>
    </div>
    <div class="upload-wrap">
      <n-button class="upload-btn" @click.stop="$emit('upload')">上传</n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from "vue";
import { FileTrayFull } from "@vicons/ionicons5";
import useAppStore from "@/store";

const UploadBox = defineComponent({
  name: "UploadBox",
  components: {
    FileTrayFull
  },
  setup() {
    const appStore = useAppStore();

    const path = computed(() => appStore.currentPath);
    const defaultReg = computed(() => appStore.replaceReg);

    const regForm = reactive({
      regText: "",
      replaceText: ""
    });

    watch(
      () => regForm.regText,
      (val) => {
        appStore.setReplaceReg(val);
      }
    );

    watch(
      () => regForm.replaceText,
      (val) => {
        appStore.setReplaceStr(val);
      }
    );

    return { path, defaultReg, regForm };
  }
});

export default UploadBox;
</script>
