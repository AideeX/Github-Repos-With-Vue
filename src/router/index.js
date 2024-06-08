import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repo/:name',
      name: 'RepoView',
      component: () => import('../views/RepoView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // {
    //   path: '/games',
    //   name: 'GamesView',
    //   component: () => import('../views/GamesView.vue')
    // },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/error',
      name: 'ErrorBoundary',
      component: () => import('../components/ErrorBoundary.vue')
    }
  ]
})

export default router
