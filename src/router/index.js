import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/home/Home.vue'

const routes = [
  {
    path: '',

    //如果设置name属性，则无法找到该路由
    // name: 'home',

    redirect : '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/categorg/Category')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/Cart')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/profile')
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //
  // linkActiveClass : 'active'
})

export default router
