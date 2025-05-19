<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)

const props = defineProps({
  chartData: Object
})

const chartRef = ref(null)
let chartInstance = null

function createChart(data) {
  if (!chartRef.value) {
    console.error('Canvas ref is not ready yet')
    return
  }

  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(chartRef.value.getContext('2d'), {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'top' },
        title: { display: true, text: 'Revenue Over Time' }
      }
    }
  })
}

onMounted(() => {
  if (props.chartData && props.chartData.datasets && props.chartData.datasets.length > 0) {
    createChart(props.chartData)
  }
})

watch(() => props.chartData, (newData) => {
  if (!newData || !newData.datasets || newData.datasets.length === 0) return;

  if (chartInstance) {
    chartInstance.data = newData
    chartInstance.update()
  } else {
    createChart(newData)
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<template>
  <canvas ref="chartRef" style="width: 100%; max-height: 300px;"></canvas>
</template>
