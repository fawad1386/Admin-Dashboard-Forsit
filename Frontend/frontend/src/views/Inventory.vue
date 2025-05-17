<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Inventory</h1>
    <input v-model="search" class="mb-4 p-2 border" placeholder="Search products..." />

    <table class="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in filteredProducts" :key="p._id">
          <td>{{ p.name }}</td>
          <td>{{ p.stock }}</td>
          <td>
            <input type="number" v-model.number="p.stock" class="w-16 p-1 border" />
            <button @click="updateProduct(p)" class="ml-2 px-2 py-1 bg-blue-500 text-white rounded">Save</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const products = ref([])
const search = ref("")

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:5000/api/products")
  products.value = res.data
}

const updateProduct = async (product) => {
  await axios.put(`http://localhost:5000/api/products/${product._id}`, { stock: product.stock })
  alert("Stock updated!")
}

const filteredProducts = computed(() =>
  products.value.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()))
)

onMounted(fetchProducts)
</script>
