<template>
  <div class="app-container">
    <n-collapse-transition :show="showNav">
      <n-page-header
        :title="routeName"
        :subtitle="routeEnName"
        @back="onBack"
      />
    </n-collapse-transition>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        appear
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        @before-leave="onBeforeLeave"
        @after-enter="onEntered"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useTransition from "@/composable/useTransition";

const route = useRoute();
const router = useRouter();
const { onBeforeEnter, onEnter, onLeave } = useTransition();

const showNav = ref(false);

const subPage = computed(() => route.path !== "/");
const routeName = computed(() => {
  const { name } = route.meta;
  return name || "";
});

const routeEnName = computed(() => {
  const { enName } = route.meta;
  return enName || "";
});

const onBack = () => {
  router.back();
};

const onBeforeLeave = (el: Element) => {
  showNav.value = false;
};

const onEntered = () => {
  if (subPage.value) showNav.value = true;
  else showNav.value = false;
};
</script>
