<template>
  <div class="p-4">
    <!-- Search and Sort Controls -->
    <div class="mb-4 flex flex-wrap gap-4 items-center">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search product..."
        class="border p-2 rounded"
        @input="fetchProducts"
      />
      <select v-model="sortOption" @change="fetchProducts" class="border p-2 rounded">
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
    </div>

    <!-- Products Table -->
    <table class="w-full border text-left">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2">Image</th>
          <th class="p-2">Name</th>
          <th class="p-2">Price</th>
          <th class="p-2">Stock</th>
          <th class="p-2">Alert</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td class="p-2">
            <img :src="getImageUrl(product.image)" alt="" class="w-10 h-10 object-cover" />
          </td>
          <td class="p-2">{{ product.name }}</td>

          <!-- Editable fields -->
          <td class="p-2">
            <div v-if="editingProduct?._id === product._id">
              <input v-model="editingProduct.price" type="number" class="border p-1 rounded w-20" />
            </div>
            <div v-else>
              ${{ product.price }}
            </div>
          </td>

          <td class="p-2">
            <div v-if="editingProduct?._id === product._id">
              <input v-model="editingProduct.stock" type="number" class="border p-1 rounded w-20" />
            </div>
            <div v-else>
              {{ product.stock }}
            </div>
          </td>

          <!-- Low Stock Alert -->
          <td class="p-2">
            <span v-if="product.stock < 5" class="text-red-600 font-semibold">Low Stock</span>
            <span v-else class="text-green-600">OK</span>
          </td>

          <!-- Action Buttons -->
          <td class="p-2 flex gap-2">
            <button
              v-if="editingProduct?._id === product._id"
              @click="saveUpdate(product._id)"
              class="bg-green-500 text-white px-2 py-1 rounded"
            >
              Save
            </button>
            <button
              v-if="editingProduct?._id === product._id"
              @click="cancelEdit"
              class="bg-gray-400 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
            <button
              v-else
              @click="startEdit(product)"
              class="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              @click="deleteProduct(product._id)"
              class="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const searchTerm = ref('')
const sortOption = ref('')
const editingProduct = ref(null)

const fetchProducts = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/products', {
      params: {
        search: searchTerm.value,
        sort: sortOption.value,
      },
    })
    products.value = data
  } catch (err) {
    console.error('Error fetching products:', err)
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
    await axios.put(`http://localhost:5000/api/products/${id}`, {
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
    await axios.delete(`http://localhost:5000/api/products/${id}`)
    await fetchProducts()
  } catch (err) {
    console.error('Delete failed:', err)
  }
}

onMounted(fetchProducts)
</script>
