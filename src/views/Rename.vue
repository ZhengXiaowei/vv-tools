<template>
  <div class="home">
    <upload-box @choose="doAction" @upload="doUpload" />
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
import useAppStore from "@/store";

const Home = defineComponent({
  components: {
    UploadBox,
    RecordBox
  },
  setup() {
    const appStore = useAppStore();

    const doAction = () => {
      remote.dialog
        .showOpenDialog({ properties: ["openDirectory"] })
        .then((file) => {
          if (file.filePaths.length) {
            appStore.$reset();
            appStore.setFilePath(file.filePaths[0]);
          }
        });
    };

    const doUpload = () => {
      useRename(appStore.currentPath);
    };

    return { doAction, doUpload };
  }
});

export default Home;
</script>
