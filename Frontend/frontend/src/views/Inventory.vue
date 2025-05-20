<template>
  <div class="p-4 dark:bg-gray-900 dark:text-white min-h-screen">
    <div class="mb-4 flex flex-wrap gap-4 items-center">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search product..."
        class="border p-2 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        @input="fetchProducts"
      />
      <select v-model="sortOption" @change="fetchProducts"
        class="border p-2 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white">
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
      <select v-model="categoryFilter" @change="fetchProducts"
        class="border p-2 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white">
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border text-left dark:border-gray-700 min-w-[700px] sm:min-w-full">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-800">
            <th class="p-2">Image</th>
            <th class="p-2">Name</th>
            <th class="p-2">Price</th>
            <th class="p-2">Stock</th>
            <th class="p-2">Alert</th>
            <th class="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id" class="dark:border-gray-700 border-t">
            <td class="p-2">
              <img :src="product.imageUrl" alt="" class="w-10 h-10 object-cover rounded" />
            </td>
            <td class="p-2 break-words">{{ product.name }}</td>

            <td class="p-2">
              <div v-if="editingProduct?._id === product._id">
                <input v-model="editingProduct.price" type="number"
                  class="border p-1 rounded w-20 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
              </div>
              <div v-else>
                ${{ product.price }}
              </div>
            </td>

            <td class="p-2">
              <div v-if="editingProduct?._id === product._id">
                <input v-model="editingProduct.stock" type="number"
                  class="border p-1 rounded w-20 dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
              </div>
              <div v-else>
                {{ product.stock }}
              </div>
            </td>

            <td class="p-2">
              <span v-if="product.stock < 5" class="text-red-600 font-semibold">Low Stock</span>
              <span v-else class="text-green-600 dark:text-green-400">OK</span>
            </td>

            <td class="p-2">
              <div class="flex flex-col sm:flex-row gap-2">
                <button
                  v-if="editingProduct?._id === product._id"
                  @click="saveUpdate(product._id)"
                  class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  v-if="editingProduct?._id === product._id"
                  @click="cancelEdit"
                  class="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  v-else
                  @click="startEdit(product)"
                  class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  @click="deleteProduct(product._id)"
                  class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const searchTerm = ref('')
const sortOption = ref('')
const editingProduct = ref(null)
const categoryFilter = ref('')
const categories = ref([])

const fetchProducts = async () => {
  try {
    const { data } = await axios.get('https://admin-dashboard-forsit.onrender.com/api/products', {
      params: {
        search: searchTerm.value,
        sort: sortOption.value,
        category: categoryFilter.value,
      },
    })
    products.value = data
  } catch (err) {
    console.error('Error fetching products:', err)
  }
}

const fetchCategories = async () => {
  try {
    const { data } = await axios.get('https://admin-dashboard-forsit.onrender.com/api/products/categories')
    categories.value = data
  } catch (err) {
    console.error('Error fetching categories:', err)
  }
}

const getImageUrl = (filename) => `/uploads/${filename}`

const startEdit = (product) => {
  editingProduct.value = { ...product }
}

const cancelEdit = () => {
  editingProduct.value = null
}

const saveUpdate = async (id) => {
  try {
    const { price, stock } = editingProduct.value
    await axios.put(`https://admin-dashboard-forsit.onrender.com/api/products/${id}`, {
      price,
      stock,
    })
    await fetchProducts()
    editingProduct.value = null
  } catch (err) {
    console.error('Update failed:', err)
  }
}

const deleteProduct = async (id) => {
  if (!confirm('Are you sure you want to delete this product?')) return

  try {
    await axios.delete(`https://admin-dashboard-forsit.onrender.com/api/products/${id}`)
    await fetchProducts()
  } catch (err) {
    console.error('Delete failed:', err)
  }
}

onMounted(() => {
  fetchCategories()
  fetchProducts()
})
</script>
