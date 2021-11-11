/*
 * @Author       : 晓晓晓晓丶vv
 * @Date         : 2021-11-04 19:27:33
 * @LastEditTime : 2021-11-11 20:28:00
 * @LastEditors  : 晓晓晓晓丶vv
 * @Description  : 组件注册入口
 */

import { App } from "vue";
import { createPinia } from "pinia";
import {
  create,
  NButton,
  NCard,
  NCollapseTransition,
  NGrid,
  NGridItem,
  NIcon,
  NInput,
  NP,
  NPageHeader,
  NTag,
  NText
} from "naive-ui";

const naive = create({
  components: [
    NPageHeader,
    NGrid,
    NGridItem,
    NButton,
    NText,
    NIcon,
    NP,
    NCard,
    NTag,
    NInput,
    NCollapseTransition
  ]
});

const componentRegister = (app: App<Element>) => {
  return app.use(naive).use(createPinia());
};

export default componentRegister;
