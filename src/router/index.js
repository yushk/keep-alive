import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/pageA',
    children: [
      {
        path: '/pageA',
        component: () => import('@/components/pageA'),
        name: 'pageA',
        meta: { keepAlive: true, title: 'pageA' }
      }
    ]
  },
  {
    path: '/pageB',
    component: Layout,
    children: [
      {
        path: '/pageB',
        component: () => import('@/components/pageB'),
        name: 'pageB',
        meta: { keepAlive: true, title: 'pageB' }
      }
    ]
  },

]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
