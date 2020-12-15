import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    alias: '/',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/Categories.vue')
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('@/views/Random.vue')
  },
  {
    path: '/:title',
    name: 'Details',
    props: true,
    component: () => import('@/views/Details.vue')
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: () => import('@/views/Sitemap.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
