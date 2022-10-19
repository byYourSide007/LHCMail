import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

// 懒加载在加载阶段的显示
const success = require("@/assets/img/lazyload/success.jpg");

createApp(App).use(store).use(router).use(VueLazyload,{
  preLoad: 1.3,
  loading : success,
}).mount('#app')

//事件总线方式，不能用于vue3
// Vue.prototype.$bus = new Vue();

// //引入mitt
// import mitt from "mitt";
// const mitter  = mitt()
// //加入全局变量中
// app.config.globalProperties.mitter = mitter;