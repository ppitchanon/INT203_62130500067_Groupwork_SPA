import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Regis from '../views/Regis.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Regis
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Regis
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
