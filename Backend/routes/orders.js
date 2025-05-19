const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/seed', async (req, res) => {
  try {
    const sampleOrders = [
      // {
      //   products: [
      //     {
      //       productId: '682aef89396aafd6d49c05a1', // Phone
      //       quantity: 1,
      //       price: 1000
      //     },
      //     {
      //       productId: '682b4d4ebe5f51cd8ec295c6', // Mouse
      //       quantity: 2,
      //       price: 50
      //     }
      //   ],
      //   totalAmount: 1100,
      //   customerName: 'John Doe',
      //   status: 'shipped',
      //   orderDate: new Date('2024-12-15')
      // },
      // {
      //   products: [
      //     {
      //       productId: '682b2c562acb7106940b0c34', // AirPods
      //       quantity: 2,
      //       price: 200
      //     },
      //     {
      //       productId: '682b7a0bbe5f51cd8ec295d2', // Screen Glasses
      //       quantity: 1,
      //       price: 30
      //     }
      //   ],
      //   totalAmount: 430,
      //   customerName: 'Jane Smith',
      //   status: 'delivered',
      //   orderDate: new Date('2025-01-02')
      // },
      // {
      //   products: [
      //     {
      //       productId: '682b7afabe5f51cd8ec295d9', // Mac Mini M4
      //       quantity: 1,
      //       price: 650
      //     },
      //     {
      //       productId: '682b4e14be5f51cd8ec295ce', // Keyboard
      //       quantity: 1,
      //       price: 500
      //     }
      //   ],
      //   totalAmount: 1150,
      //   customerName: 'Alice',
      //   status: 'pending',
      //   orderDate: new Date()
      // },
      {
        products: [
          { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 3, price: 30 }     // Glasses
        ],
        totalAmount: 90,
        customerName: 'Robert Wilson',
        status: 'delivered',
        orderDate: new Date('2023-09-10')
      },
      {
        products: [
          { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 },   // AirPods
          { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 1, price: 50 }     // Mouse
        ],
        totalAmount: 250,
        customerName: 'Emily Davis',
        status: 'shipped',
        orderDate: new Date('2024-01-18')
      },
      {
        products: [
          { productId: '682b4e14be5f51cd8ec295ce', quantity: 2, price: 500 }    // Keyboard
        ],
        totalAmount: 1000,
        customerName: 'Tom Parker',
        status: 'pending',
        orderDate: new Date('2023-12-30')
      },
      {
        products: [
          { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 },   // AirPods
          { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 2, price: 30 }     // Glasses
        ],
        totalAmount: 260,
        customerName: 'Sara Connor',
        status: 'shipped',
        orderDate: new Date('2022-10-05')
      },
      {
        products: [
          { productId: '682aef89396aafd6d49c05a1', quantity: 2, price: 1000 }   // Phone
        ],
        totalAmount: 2000,
        customerName: 'Daniel Craig',
        status: 'delivered',
        orderDate: new Date('2024-02-20')
      },
      {
        products: [
          { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 5, price: 50 },    // Mouse
          { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 2, price: 30 }     // Glasses
        ],
        totalAmount: 310,
        customerName: 'Bruce Wayne',
        status: 'pending',
        orderDate: new Date('2023-05-27')
      },
      {
        products: [
          { productId: '682b7afabe5f51cd8ec295d9', quantity: 1, price: 650 },   // Mac Mini
          { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 }    // AirPods
        ],
        totalAmount: 850,
        customerName: 'Clark Kent',
        status: 'shipped',
        orderDate: new Date('2022-08-14')
      }
    ];

    await Order.insertMany(sampleOrders);
    res.status(201).json({ message: 'New Sample orders inserted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to insert sample orders' });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
