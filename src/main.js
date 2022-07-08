import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




createApp(App).use(store).use(router).mount('#app')

//事件总线方式，不能用于vue3
// Vue.prototype.$bus = new Vue();

// //引入mitt
// import mitt from "mitt";
// const mitter  = mitt()
// //加入全局变量中
// app.config.globalProperties.mitter = mitter;