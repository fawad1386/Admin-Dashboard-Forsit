<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
   
    <div class="flex-1 flex flex-col overflow-hidden">
     
      <main class="flex-1 overflow-y-auto p-4 sm:p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</h3>
            <p class="mt-2 text-2xl sm:text-3xl font-bold">{{ totalOrders }}</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
            <p class="mt-2 text-2xl sm:text-3xl font-bold">${{ totalRevenue.toLocaleString() }}</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Active Products</h3>
            <p class="mt-2 text-2xl sm:text-3xl font-bold">{{ activeProducts }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8 info-cards">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">🛠️ Project Overview</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              This is a full-featured Admin Dashboard built using <strong>Vue 3</strong> and <strong>Tailwind CSS</strong> with a <strong>Node.js</strong> and <strong>MongoDB</strong> backend.This dashboard provides real-time metrics on orders, revenue, and products, featuring a persistent sidebar navigation and dark mode support.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="../assets/IMG_20250422_232422.jpg"
              alt="Profile picture"
              class="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
            />
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">Mohammad Fawad</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Full Stack JavaScript Developer</p>
              <ul class="text-sm text-gray-700 dark:text-gray-400 space-y-1">
                <li><strong>Email:</strong> <a href="mailto:mohammad.fawad.564@gmail.com" class="text-blue-500 hover:underline">mohammad.fawad.564@gmail.com</a></li>
                <li><strong>Phone:</strong> +92 348 0808794</li>
                <li><strong>GitHub:</strong> <a href="https://github.com/fawad1386" target="_blank" class="text-blue-500 hover:underline">github.com/mfawad564</a></li>
                <li><strong>Portfolio:</strong> <a href="https://fawadnaeem.netlify.app/" target="_blank" class="text-blue-500 hover:underline">fawadnaeem.netlify.app</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const totalOrders = ref(0)
const totalRevenue = ref(0)
const activeProducts = ref(0)
async function fetchDashboardData() {
  try {
    const res = await fetch('http://localhost:10000/api/admin')
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
  fetchDashboardData()
})
</script>
