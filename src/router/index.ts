/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-10-08 14:36:56
 * @LastEditors: ${author}
 * @LastEditTime: 2023-10-08 17:05:59
 */
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
  ]
})

export default router
