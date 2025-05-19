<template>
  <div class="p-6">
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="bg-white shadow rounded p-4">
        <h2 class="text-xl font-semibold">Total Orders</h2>
        <p class="text-3xl mt-2">{{ summary.totalOrders }}</p>
      </div>
      <div class="bg-white shadow rounded p-4">
        <h2 class="text-xl font-semibold">Total Revenue</h2>
        <p class="text-3xl mt-2">${{ summary.totalRevenue }}</p>
      </div>
    </div>

    <div class="bg-white p-4 shadow rounded" v-if="chartData.datasets && chartData.datasets.length">
      <h2 class="text-lg font-semibold mb-4">Revenue Trends</h2>
      <LineChart :chart-data="chartData" />
    </div>
    <div v-else class="text-center text-gray-500">No revenue chart data available.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import LineChart from '@/components/LineChart.vue'

const summary = ref({ totalOrders: 0, totalRevenue: 0 })
const chartData = ref({ labels: [], datasets: [] })

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/analytics')

    summary.value.totalOrders = res.data.totalOrders
    summary.value.totalRevenue = res.data.totalRevenue
    chartData.value = res.data.chartData || { labels: [], datasets: [] }
  } catch (error) {
    console.error('Error loading analytics:', error)
  }
})
</script>
