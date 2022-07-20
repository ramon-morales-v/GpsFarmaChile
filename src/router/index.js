import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'

import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import('../views/IngresoView.vue')
  },
  {
    path: '/farmacias',
    name: 'farmacias',
    component: () => import('../views/FarmaciasView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/turno',
    name: 'turno',
    component: () => import('../views/TurnoView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('../views/InicioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/inicio')
    return;
  }

  next();
})

export default router
