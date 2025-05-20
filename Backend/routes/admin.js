const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const totalRevenueResult = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);
    const totalRevenue = totalRevenueResult[0]?.total || 0;

    const activeProducts = await Product.countDocuments();

    res.json({
      totalOrders,
      totalRevenue,
      activeProducts
    });
  } catch (error) {
    console.error('Error in dashboard-stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
