<template>
  <div class="home">
    <upload-box @upload="doAction" />
    <div class="record-container">
      <record-box />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { remote } from "electron";

import UploadBox from "@/components/UploadBox.vue";
import RecordBox from "@/components/RecordBox.vue";

import useRename from "@/composable/useRename";

const Home = defineComponent({
  components: {
    UploadBox,
    RecordBox
  },
  setup() {
    const doAction = () => {
      remote.dialog
        .showOpenDialog({ properties: ["openDirectory"] })
        .then((file) => {
          if (file.filePaths.length)
            // 有文件 只读取第一层
            useRename(file.filePaths[0]);
        });
    };

    return { doAction };
  }
});

export default Home;
</script>
