const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get('/', async (req, res) => {
  try {
    const { search, sort, category } = req.query;

    let query = {};
    if (search) {
      query.name = { $regex: search, $options: 'i' }; 
    }

    if (category) {
      query.category = category;
    }

    let sortOption = {};
    if (sort === 'price') {
      sortOption.price = 1; 
    } else if (sort === '-price') {
      sortOption.price = -1; 
    } else if (sort === 'stock') {
      sortOption.stock = 1;
    } else if (sort === '-stock') {
      sortOption.stock = -1;
    }

    const products = await Product.find(query).sort(sortOption);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await Product.distinct('category')
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router;
