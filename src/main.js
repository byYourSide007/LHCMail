import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



createApp(App).use(store).use(router).mount('#app')


// //引入mitt
// import mitt from "mitt";
// const mitter  = mitt()
// //加入全局变量中
// app.config.globalProperties.mitter = mitter;