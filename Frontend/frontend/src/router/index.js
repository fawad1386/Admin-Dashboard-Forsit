import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../views/AdminLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import AddProduct from '../views/AddProduct.vue'
import Inventory from '../views/Inventory.vue'
import Revenue from '../views/Revenue.vue'

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'add-product', component: AddProduct },
      { path: 'inventory', component: Inventory },
      { path: 'revenue', component: Revenue },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})