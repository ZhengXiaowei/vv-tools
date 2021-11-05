<template>
  <n-card v-if="records.length" title="操作记录" closable @click="onClear">
    <div ref="boxRef" class="record-box" @click.stop>
      <div class="record-box__item">
        <template v-for="record in records" :key="record.id">
          <n-p>
            <n-tag :type="record.type">{{ record.typeName }}</n-tag>
            已经将 {{ record.preName }} 重命名成 {{ record.name }}
          </n-p>
        </template>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import useAppStore from "@/store";

const RecordBox = defineComponent({
  name: "RecordBox",
  setup() {
    const appStore = useAppStore();
    const boxRef = ref<HTMLElement>();

    const records = computed(() => appStore.recordsGetter);

    watch(records, () => {
      if (boxRef.value) {
        const scrollTop = boxRef.value.scrollHeight;
        boxRef.value.scrollTop = scrollTop || 0;
      }
    });

    const onClear = () => {
      appStore.$reset();
    };

    return { boxRef, records, onClear };
  }
});

export default RecordBox;
</script>
