<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <button
      class="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded shadow md:hidden"
      @click="showSidebar = !showSidebar"
    >
      <i class="fas fa-bars"></i>
    </button>
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-transform duration-300 ease-in-out',
        showSidebar ? 'translate-x-0' : '-translate-x-full',
        'md:static md:translate-x-0 md:flex'
      ]"
    >
    <div> &nbsp;</div>
      <div class="p-6 text-2xl font-bold border-b border-gray-200 dark:border-gray-700">
        Forsit Co
      </div>
      <nav class="flex-1 px-4 py-6 space-y-2">
        <router-link to="/" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <i class="fas fa-home mr-2"></i> Home
        </router-link>
       <router-link to="/add-product" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <i class="fas fa-plus-square mr-2"></i>Add Products
        </router-link>

        <router-link to="/inventory" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <i class="fas fa-warehouse mr-2"></i>Inventory
        </router-link>

        <router-link to="/revenue" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <i class="fas fa-chart-line mr-2"></i> Analytics
        </router-link>
      </nav>
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          @click="toggleDarkMode"
          class="w-full py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Toggle Dark Mode
        </button>
      </div>
    </aside>
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center px-4 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h2 class="text-lg sm:text-xl font-semibold">Dashboard</h2>
        <div class="flex items-center gap-3">
          <span class="hidden sm:block">Welcome, <strong>Fawad</strong></span>
          <img src="../assets/IMG_9371.JPG" alt="User avatar" class="w-10 h-10 rounded-full" />
        </div>
      </header>
      <main class="flex-1 overflow-y-auto p-4 sm:p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const darkMode = ref(false)
const showSidebar = ref(false)

const totalOrders = ref(0)
const totalRevenue = ref(0)
const activeProducts = ref(0)

function toggleDarkMode() {
  darkMode.value = !darkMode.value
  const htmlEl = document.documentElement
  if (darkMode.value) {
    htmlEl.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    htmlEl.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

async function fetchDashboardData() {
  try {
    const res = await fetch('https://admin-dashboard-forsit.onrender.com/api/admin')
    if (!res.ok) throw new Error('Failed to fetch dashboard data')
    const data = await res.json()
    totalOrders.value = data.totalOrders
    totalRevenue.value = data.totalRevenue
    activeProducts.value = data.activeProducts
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  }
}

onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved === 'true') {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }
  fetchDashboardData()
})
</script>