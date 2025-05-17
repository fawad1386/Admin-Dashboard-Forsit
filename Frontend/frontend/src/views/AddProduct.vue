<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Add Product</h1>
    <form @submit.prevent="addProduct">
      <input v-model="product.name" placeholder="Name" class="mb-2 p-2 border w-full" />
      <input v-model="product.description" placeholder="Description" class="mb-2 p-2 border w-full" />
      <input v-model.number="product.price" type="number" placeholder="Price" class="mb-2 p-2 border w-full" />
      <input v-model.number="product.stock" type="number" placeholder="Initial Stock" class="mb-2 p-2 border w-full" />
      <input v-model="product.imageUrl" placeholder="Image URL" class="mb-4 p-2 border w-full" />
      <button class="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const product = ref({
  name: "",
  description: "",
  price: 0,
  stock: 0,
  imageUrl: ""
})

const addProduct = async () => {
  await axios.post("http://localhost:5000/api/products", product.value)
  alert("Product added!")
  product.value = { name: "", description: "", price: 0, stock: 0, imageUrl: "" }
}
</script>
