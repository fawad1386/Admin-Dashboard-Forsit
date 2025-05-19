<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Add Product</h1>
    <form @submit.prevent="addProduct">
      <input v-model="product.name" placeholder="Name" class="mb-2 p-2 border w-full" />
      <input v-model="product.description" placeholder="Description" class="mb-2 p-2 border w-full" />
      <input v-model.number="product.price" type="number" placeholder="Price" class="mb-2 p-2 border w-full" />
      <input v-model.number="product.stock" type="number" placeholder="Initial Stock" class="mb-2 p-2 border w-full" />
      <input v-model="product.imageUrl" placeholder="Image URL" class="mb-2 p-2 border w-full" />

      <!-- Category Selector -->
      <select v-model="product.category" class="mb-2 p-2 border w-full">
        <option value="">Select Category</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        <option value="__new">+ Add New Category</option>
      </select>

      <!-- Optional New Category Input -->
      <input
        v-if="product.category === '__new'"
        v-model="newCategory"
        placeholder="Enter new category"
        class="mb-4 p-2 border w-full"
      />

      <button class="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref([])
const newCategory = ref("")

const product = ref({
  name: "",
  description: "",
  price: 0,
  stock: 0,
  imageUrl: "",
  category: ""
})

const fetchCategories = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/products/categories")
    categories.value = data
  } catch (err) {
    console.error("Failed to fetch categories:", err)
  }
}

const addProduct = async () => {
  const payload = { ...product.value }

  if (payload.category === '__new' && newCategory.value.trim()) {
    payload.category = newCategory.value.trim()
  }

  try {
    await axios.post("http://localhost:5000/api/products", payload)
    alert("Product added!")
    product.value = { name: "", description: "", price: 0, stock: 0, imageUrl: "", category: "" }
    newCategory.value = ""
  } catch (err) {
    console.error("Add product failed:", err)
  }
}

onMounted(fetchCategories)
</script>
