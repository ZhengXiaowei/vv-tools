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
import anime from "animejs";

const route = useRoute();
const router = useRouter();

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

const onBeforeEnter = (el: Element) => {
  const ele = el as HTMLElement;
  ele.style.transform = "translateX(-100%)";
};

const onBeforeLeave = (el: Element) => {
  showNav.value = false;
};

const onEnter = (el: Element, done: () => void) => {
  anime({
    targets: el,
    translateX: [
      {
        value: "-100%"
      },
      {
        value: 0,
        duration: 800
      }
    ],
    easing: "easeOutElastic(1, .8)",
    complete: () => {
      done();
    }
  });
};

const onEntered = () => {
  if (subPage.value) showNav.value = true;
  else showNav.value = false;
};

const onLeave = (el: Element, done: () => void) => {
  anime({
    targets: el,
    translateX: [
      {
        value: 0
      },
      {
        value: "-100%",
        duration: 800
      }
    ],
    easing: "easeOutElastic(1, .8)",
    complete: () => {
      done();
    }
  });
};
</script>
