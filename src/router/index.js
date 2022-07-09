import { createRouter, createWebHistory } from 'vue-router'

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
    // meta : {keepAlive : true},
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
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('@/views/details/Details')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Register')
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: () => import('@/views/purchase/Purchase')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/purchase/Purchase')

    // component: () => import('@/views/profile/childProfile/ProfileOrder')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //
  // linkActiveClass : 'active'
})

export default router
