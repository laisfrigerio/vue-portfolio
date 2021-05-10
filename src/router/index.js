import { createRouter, createWebHistory } from 'vue-router'
import Education from '@/views/Education'
import Home from '@/views/Home'
import Projects from '@/views/Projects'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/educacao',
    name: 'Education',
    component: Education
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
