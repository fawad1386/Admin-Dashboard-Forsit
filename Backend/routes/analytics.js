// routes/analytics.js (or wherever your analytics route is)

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
  try {
    const year = parseInt(req.query.year); // e.g. 2024
    let matchStage = {};

    if (!isNaN(year)) {
      const start = new Date(`${year}-01-01`);
      const end = new Date(`${year + 1}-01-01`);
      matchStage.orderDate = { $gte: start, $lt: end };
    }

    const orders = await Order.find(matchStage);

    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

    // Group revenue by month
    const monthlyRevenue = Array(12).fill(0); // index 0 = Jan

    orders.forEach(order => {
      const month = new Date(order.orderDate).getMonth(); // 0 - 11
      monthlyRevenue[month] += order.totalAmount;
    });

    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const chartData = {
      labels: monthLabels,
      datasets: [
        {
          label: 'Revenue',
          data: monthlyRevenue,
          borderColor: '#3b82f6',
          fill: false
        }
      ]
    };

    res.json({ totalOrders, totalRevenue, chartData });
  } catch (err) {
    console.error('Analytics Error:', err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
