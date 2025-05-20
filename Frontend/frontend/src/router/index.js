import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add-product',
      name: 'add-product',
      component: () => import('../views/AddProduct.vue'),
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/Inventory.vue'),
    },
    {
      path: '/revenue',
      name: 'revenue',
      component: () => import('../views/Revenue.vue'),
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
    },
  ],
})

export default router
