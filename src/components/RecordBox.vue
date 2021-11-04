<template>
  <n-card v-if="records.length" title="操作记录" closable @click="onClear">
    <div class="record-box" @click.stop>
      <div class="record-box__item">
        <template v-for="record in records" :key="record.id">
          <n-p>
            <n-tag :type="fileType[record.type]">图片</n-tag>
            已经将 {{ record.preName }} 重命名成 {{ record.name }}
          </n-p>
        </template>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import useAppStore from "@/store";

const RecordBox = defineComponent({
  name: "RecordBox",
  setup() {
    const appStore = useAppStore();

    const records = computed(() => appStore.records);

    const fileType: Record<string, string> = {
      image: "success",
      media: "warning",
      document: "info"
    };

    const onClear = () => {
      appStore.$reset();
    };

    return { fileType, records, onClear };
  }
});

export default RecordBox;
</script>
