import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/home'),
    meta: {title: '首页'}
  },
  {
    path: '/editor/:pageId',
    component: () => import('@/lego/index.vue'),
    meta: {title: '登录'}
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: {title: '404'}
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
