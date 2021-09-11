import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import DesktopDashboard from '@/pages/DesktopDashboard.vue'

import { desktopDashboardData } from "./data";


const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/',
    component: DesktopDashboard,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
    props: { ...desktopDashboardData },
  },
  {
    path: '/index/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/about/',
    component: About,
    meta: {
      title: 'About',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
