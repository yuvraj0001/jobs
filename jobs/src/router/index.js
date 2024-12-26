import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import JobDetails from '@/views/JobDetails.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/job/:id',
      name: 'jobDetail',
      component: JobDetails,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router

