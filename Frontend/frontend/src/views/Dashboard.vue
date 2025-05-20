<template>
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <!-- Sidebar -->
        <aside class="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
            <div class="p-6 text-2xl font-bold border-b border-gray-200 dark:border-gray-700">
                Forsit Co
            </div>
            <nav class="flex-1 px-4 py-6 space-y-2">
                <router-link to="/" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <i class="fas fa-home mr-2"></i> Home
                </router-link>
                <router-link to="/add-product"
                    class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <i class="fas fa-box mr-2"></i> Products
                </router-link>
                <router-link to="/revenue"
                    class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <i class="fas fa-chart-line mr-2"></i> Analytics
                </router-link>
            </nav>
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                <button @click="toggleDarkMode"
                    class="w-full py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    Toggle Dark Mode
                </button>
            </div>
        </aside>

        <!-- Main content -->
        <div class="flex-1 flex flex-col">
            <!-- Top navbar -->
            <header class="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
                <h2 class="text-xl font-semibold">Dashboard</h2>
                <div class="flex items-center space-x-4">
                    <span class="hidden md:block space-2">Welcome, <strong>Fawad</strong></span>
                    <img src="https://i.pravatar.cc/40" alt="User avatar" class="w-10 h-10 rounded-full" />
                </div>
            </header>

            <!-- Content -->
            <main class="flex-1 overflow-y-auto p-6">
                <!-- Summary Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</h3>
                        <p class="mt-2 text-3xl font-bold">{{ totalOrders }}</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
                        <p class="mt-2 text-3xl font-bold">${{ totalRevenue.toLocaleString() }}</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Active Products</h3>
                        <p class="mt-2 text-3xl font-bold">{{ activeProducts }}</p>
                    </div>
                </div>

                <!-- Info Cards Section -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

                    <!-- Project Info Card -->
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition mt-8">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">🛠️ Project Overview
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            This is a full-featured Admin Dashboard built using <strong>Vue 3</strong> and
                            <strong>Tailwind CSS</strong> with a <strong>Node.js</strong> and <strong>MongoDB</strong>
                            backend. It provides real-time metrics for total orders, revenue, and active products
                            through dynamic API integration. Built with performance, simplicity, and dark mode in mind.
                        </p>
                    </div>

                    <!-- About Me Card -->
                    <div
                        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <img src="../assets/IMG_20250422_232422.jpg" alt="Profile picture"
                            class="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600" />
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">Mohammad Fawad</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Full Stack JavaScript Developer</p>
                            <ul class="text-sm text-gray-700 dark:text-gray-400 space-y-1">
                                <li><strong>Email:</strong><a href="mailto:mohammad.fawad.564@gmail.com">
                                        mohammad.fawad.564@gmail.com</a> </li>
                                <li><strong>Phone:</strong> +92 348 0808794</li>
                                <li><strong>GitHub:</strong> <a href="https://github.com/fawad1386" target="_blank"
                                        class="text-blue-500 hover:underline">github.com/mfawad564</a></li>
                                <li><strong>Portfolio:</strong> <a href="https://fawadnaeem.netlify.app/"
                                        target="_blank" class="text-blue-500 hover:underline">fawadnaeem.netlify.app</a>
                                </li>
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

const darkMode = ref(false)
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

// Simulated API calls
async function fetchDashboardData() {
    try {
        const res = await fetch('http://localhost:5000/api/admin')
        if (!res.ok) throw new Error('Failed to fetch dashboard data')

        const data = await res.json()  // ✅ parse JSON correctly

        // ✅ update reactive refs correctly
        totalOrders.value = data.totalOrders
        totalRevenue.value = data.totalRevenue
        activeProducts.value = data.activeProducts
    } catch (error) {
        console.error('Error loading dashboard data:', error)
    }
}




onMounted(() => {
    // Load dark mode preference
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') {
        darkMode.value = true
        document.documentElement.classList.add('dark')
    }

    // Load dashboard data
    fetchDashboardData()
})
</script>
