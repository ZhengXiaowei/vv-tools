/*
 * @Author       : 晓晓晓晓丶vv
 * @Date         : 2021-11-04 19:27:33
 * @LastEditTime : 2021-11-04 20:30:10
 * @LastEditors  : 晓晓晓晓丶vv
 * @Description  : 组件注册入口
 */

import { App } from "vue";
import { createPinia } from "pinia";
import { create, NButton, NCard, NIcon, NP, NTag, NText } from "naive-ui";

const naive = create({
  components: [NButton, NText, NIcon, NP, NCard, NTag]
});

const componentRegister = (app: App<Element>) => {
  return app.use(naive).use(createPinia());
};

export default componentRegister;
