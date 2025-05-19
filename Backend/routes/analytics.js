const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET /api/analytics
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();

    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

    // Group revenue by month using orderDate
    const revenueByMonth = {};

    orders.forEach(order => {
      const date = new Date(order.orderDate);
      const month = date.toLocaleString('default', { month: 'short' }); // 'Jan', 'Feb', etc.
      revenueByMonth[month] = (revenueByMonth[month] || 0) + order.totalAmount;
    });

    // Prepare chart data
    const labels = Object.keys(revenueByMonth);
    const data = labels.map(label => revenueByMonth[label]);

    res.json({
      totalOrders,
      totalRevenue,
      chartData: {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data,
            borderColor: '#3b82f6',
            fill: false,
          }
        ]
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching analytics' });
  }
});

module.exports = router;
