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
      // {
      //   products: [
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 3, price: 30 }     // Glasses
      //   ],
      //   totalAmount: 90,
      //   customerName: 'Robert Wilson',
      //   status: 'delivered',
      //   orderDate: new Date('2023-09-10')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 },   // AirPods
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 1, price: 50 }     // Mouse
      //   ],
      //   totalAmount: 250,
      //   customerName: 'Emily Davis',
      //   status: 'shipped',
      //   orderDate: new Date('2024-01-18')
      // },
      // {
      //   products: [
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 2, price: 500 }    // Keyboard
      //   ],
      //   totalAmount: 1000,
      //   customerName: 'Tom Parker',
      //   status: 'pending',
      //   orderDate: new Date('2023-12-30')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 },   // AirPods
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 2, price: 30 }     // Glasses
      //   ],
      //   totalAmount: 260,
      //   customerName: 'Sara Connor',
      //   status: 'shipped',
      //   orderDate: new Date('2022-10-05')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 2, price: 1000 }   // Phone
      //   ],
      //   totalAmount: 2000,
      //   customerName: 'Daniel Craig',
      //   status: 'delivered',
      //   orderDate: new Date('2024-02-20')
      // },
      // {
      //   products: [
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 5, price: 50 },    // Mouse
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 2, price: 30 }     // Glasses
      //   ],
      //   totalAmount: 310,
      //   customerName: 'Bruce Wayne',
      //   status: 'pending',
      //   orderDate: new Date('2023-05-27')
      // },
      // {
      //   products: [
      //     { productId: '682b7afabe5f51cd8ec295d9', quantity: 1, price: 650 },   // Mac Mini
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 }    // AirPods
      //   ],
      //   totalAmount: 850,
      //   customerName: 'Clark Kent',
      //   status: 'shipped',
      //   orderDate: new Date('2022-08-14')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 },
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 2, price: 50 }
      //   ],
      //   totalAmount: 300,
      //   customerName: 'Mason Lee',
      //   status: 'pending',
      //   orderDate: new Date('2022-01-10')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 2, price: 1000 }
      //   ],
      //   totalAmount: 2000,
      //   customerName: 'Luna Adams',
      //   status: 'shipped',
      //   orderDate: new Date('2022-02-14')
      // },
      // {
      //   products: [
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 3, price: 30 }
      //   ],
      //   totalAmount: 90,
      //   customerName: 'Noah Turner',
      //   status: 'delivered',
      //   orderDate: new Date('2022-03-05')
      // },
      // {
      //   products: [
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 1, price: 500 }
      //   ],
      //   totalAmount: 500,
      //   customerName: 'Olivia Brown',
      //   status: 'pending',
      //   orderDate: new Date('2022-04-22')
      // },
      // {
      //   products: [
      //     { productId: '682b7afabe5f51cd8ec295d9', quantity: 1, price: 650 }
      //   ],
      //   totalAmount: 650,
      //   customerName: 'Ethan Wilson',
      //   status: 'shipped',
      //   orderDate: new Date('2022-05-17')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 2, price: 200 },
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 1, price: 50 }
      //   ],
      //   totalAmount: 450,
      //   customerName: 'Sophia Clark',
      //   status: 'delivered',
      //   orderDate: new Date('2022-06-06')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 1, price: 1000 },
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 2, price: 500 }
      //   ],
      //   totalAmount: 2000,
      //   customerName: 'Logan Hall',
      //   status: 'pending',
      //   orderDate: new Date('2022-07-01')
      // },
      // {
      //   products: [
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 4, price: 30 }
      //   ],
      //   totalAmount: 120,
      //   customerName: 'Isabella Scott',
      //   status: 'shipped',
      //   orderDate: new Date('2022-08-09')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 3, price: 200 }
      //   ],
      //   totalAmount: 600,
      //   customerName: 'Benjamin Young',
      //   status: 'delivered',
      //   orderDate: new Date('2022-09-18')
      // },
      // {
      //   products: [
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 5, price: 50 }
      //   ],
      //   totalAmount: 250,
      //   customerName: 'Mia King',
      //   status: 'pending',
      //   orderDate: new Date('2022-10-24')
      // },
      // {
      //   products: [
      //     { productId: '682b7afabe5f51cd8ec295d9', quantity: 2, price: 650 }
      //   ],
      //   totalAmount: 1300,
      //   customerName: 'Aiden Wright',
      //   status: 'shipped',
      //   orderDate: new Date('2022-11-12')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 1, price: 1000 }
      //   ],
      //   totalAmount: 1000,
      //   customerName: 'Ella Hill',
      //   status: 'delivered',
      //   orderDate: new Date('2022-12-28')
      // },
      // {
      //   products: [
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 3, price: 500 }
      //   ],
      //   totalAmount: 1500,
      //   customerName: 'James Green',
      //   status: 'pending',
      //   orderDate: new Date('2023-01-19')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 }
      //   ],
      //   totalAmount: 200,
      //   customerName: 'Harper Adams',
      //   status: 'shipped',
      //   orderDate: new Date('2023-02-05')
      // },
      // {
      //   products: [
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 2, price: 30 },
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 3, price: 50 }
      //   ],
      //   totalAmount: 210,
      //   customerName: 'Henry Barnes',
      //   status: 'delivered',
      //   orderDate: new Date('2023-03-14')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 1, price: 1000 }
      //   ],
      //   totalAmount: 1000,
      //   customerName: 'Amelia Reed',
      //   status: 'pending',
      //   orderDate: new Date('2023-04-23')
      // },
      // {
      //   products: [
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 1, price: 500 },
      //     { productId: '682b2c562acb7106940b0c34', quantity: 2, price: 200 }
      //   ],
      //   totalAmount: 900,
      //   customerName: 'Jack Evans',
      //   status: 'shipped',
      //   orderDate: new Date('2023-05-03')
      // },
      // {
      //   products: [
      //     { productId: '682b7afabe5f51cd8ec295d9', quantity: 1, price: 650 }
      //   ],
      //   totalAmount: 650,
      //   customerName: 'Lily Bennett',
      //   status: 'delivered',
      //   orderDate: new Date('2023-06-11')
      // },
      // {
      //   products: [
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 2, price: 50 }
      //   ],
      //   totalAmount: 100,
      //   customerName: 'Leo Perry',
      //   status: 'pending',
      //   orderDate: new Date('2023-07-21')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 4, price: 200 }
      //   ],
      //   totalAmount: 800,
      //   customerName: 'Zoe Russell',
      //   status: 'shipped',
      //   orderDate: new Date('2023-08-08')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 1, price: 1000 },
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 1, price: 30 }
      //   ],
      //   totalAmount: 1030,
      //   customerName: 'Daniel Cook',
      //   status: 'delivered',
      //   orderDate: new Date('2023-09-13')
      // },
      // {
      //   products: [
      //     { productId: '682b7afabe5f51cd8ec295d9', quantity: 1, price: 650 }
      //   ],
      //   totalAmount: 650,
      //   customerName: 'Grace Carter',
      //   status: 'pending',
      //   orderDate: new Date('2023-10-30')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 },
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 1, price: 500 }
      //   ],
      //   totalAmount: 700,
      //   customerName: 'Matthew Murphy',
      //   status: 'shipped',
      //   orderDate: new Date('2023-11-07')
      // },
      // {
      //   products: [
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 6, price: 50 }
      //   ],
      //   totalAmount: 300,
      //   customerName: 'Natalie Gray',
      //   status: 'delivered',
      //   orderDate: new Date('2023-12-15')
      // },
      // {
      //   products: [
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 1, price: 30 }
      //   ],
      //   totalAmount: 30,
      //   customerName: 'Wyatt Hughes',
      //   status: 'pending',
      //   orderDate: new Date('2024-01-06')
      // },
      // {
      //   products: [
      //     { productId: '682aef89396aafd6d49c05a1', quantity: 2, price: 1000 }
      //   ],
      //   totalAmount: 2000,
      //   customerName: 'Victoria Moore',
      //   status: 'shipped',
      //   orderDate: new Date('2024-02-11')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 }
      //   ],
      //   totalAmount: 200,
      //   customerName: 'Lincoln Bell',
      //   status: 'delivered',
      //   orderDate: new Date('2024-03-19')
      // },
      // {
      //   products: [
      //     { productId: '682b4e14be5f51cd8ec295ce', quantity: 2, price: 500 }
      //   ],
      //   totalAmount: 1000,
      //   customerName: 'Aubrey Peterson',
      //   status: 'pending',
      //   orderDate: new Date('2024-04-24')
      // },
      // {
      //   products: [
      //     { productId: '682b7afabe5f51cd8ec295d9', quantity: 1, price: 650 }
      //   ],
      //   totalAmount: 650,
      //   customerName: 'Easton Foster',
      //   status: 'shipped',
      //   orderDate: new Date('2024-05-17')
      // },
      // {
      //   products: [
      //     { productId: '682b4d4ebe5f51cd8ec295c6', quantity: 3, price: 50 }
      //   ],
      //   totalAmount: 150,
      //   customerName: 'Samantha Ward',
      //   status: 'delivered',
      //   orderDate: new Date('2024-06-20')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 2, price: 200 }
      //   ],
      //   totalAmount: 400,
      //   customerName: 'Julian Cox',
      //   status: 'pending',
      //   orderDate: new Date('2024-07-03')
      // },
      // {
      //   products: [
      //     { productId: '682b7a0bbe5f51cd8ec295d2', quantity: 4, price: 30 }
      //   ],
      //   totalAmount: 120,
      //   customerName: 'Peyton Simmons',
      //   status: 'shipped',
      //   orderDate: new Date('2024-08-29')
      // },
      // {
      //   products: [
      //     { productId: '682b2c562acb7106940b0c34', quantity: 1, price: 200 }
      //   ],
      //   totalAmount: 200,
      //   customerName: 'Jason Ellis',
      //   status: 'delivered',
      //   orderDate: new Date('2024-09-12')
      // }
      {
        products: [
          { productId: '682b8f202e7464c894744183', quantity: 1, price: 25 }, // Smart LED Bulb
          { productId: '682b8f4a2e7464c894744185', quantity: 1, price: 120 } // Noise Cancelling Headphones
        ],
        totalAmount: 145,
        customerName: 'Emma Brown',
        status: 'pending',
        orderDate: new Date('2023-08-08')
      },
      {
        products: [
          { productId: '682b8f952e7464c894744187', quantity: 2, price: 40 }, // Mini Laptop Stand
          { productId: '682b904a2e7464c89474418f', quantity: 1, price: 45 }  // Retro Game Console
        ],
        totalAmount: 125,
        customerName: 'Liam Wilson',
        status: 'shipped',
        orderDate: new Date('2023-09-12')
      },
      {
        products: [
          { productId: '682b8ff42e7464c89474418b', quantity: 1, price: 60 }, // Digital Brain Trainer
          { productId: '682b901c2e7464c89474418d', quantity: 4, price: 7 }   // Eco-Friendly Dish Soap
        ],
        totalAmount: 88,
        customerName: 'Sophia Johnson',
        status: 'delivered',
        orderDate: new Date('2023-10-21')
      },
      {
        products: [
          { productId: '682b90722e7464c894744191', quantity: 3, price: 35 }  // Portable Power Bank
        ],
        totalAmount: 105,
        customerName: 'Mason Davis',
        status: 'pending',
        orderDate: new Date('2023-11-30')
      },
      {
        products: [
          { productId: '682b909e2e7464c894744193', quantity: 2, price: 15 }, // Productivity Journal
          { productId: '682b8fca2e7464c894744189', quantity: 1, price: 18 }  // Natural Beard Oil
        ],
        totalAmount: 48,
        customerName: 'Olivia Martinez',
        status: 'shipped',
        orderDate: new Date('2023-12-05')
      },
      {
        products: [
          { productId: '682b8f4a2e7464c894744185', quantity: 1, price: 120 }, // Noise Cancelling Headphones
          { productId: '682b8f202e7464c894744183', quantity: 3, price: 25 }  // Smart LED Bulb
        ],
        totalAmount: 195,
        customerName: 'Noah Garcia',
        status: 'delivered',
        orderDate: new Date('2024-01-17')
      },
      {
        products: [
          { productId: '682b8fca2e7464c894744189', quantity: 5, price: 18 }   // Natural Beard Oil
        ],
        totalAmount: 90,
        customerName: 'Ava Rodriguez',
        status: 'pending',
        orderDate: new Date('2024-02-22')
      },
      {
        products: [
          { productId: '682b909e2e7464c894744193', quantity: 1, price: 15 },  // Productivity Journal
          { productId: '682b90722e7464c894744191', quantity: 2, price: 35 }   // Portable Power Bank
        ],
        totalAmount: 85,
        customerName: 'William Lee',
        status: 'shipped',
        orderDate: new Date('2024-03-19')
      },
      {
        products: [
          { productId: '682b8f952e7464c894744187', quantity: 1, price: 40 },  // Mini Laptop Stand
          { productId: '682b8ff42e7464c89474418b', quantity: 1, price: 60 }   // Digital Brain Trainer
        ],
        totalAmount: 100,
        customerName: 'Isabella Walker',
        status: 'delivered',
        orderDate: new Date('2024-04-25')
      },
      {
        products: [
          { productId: '682b901c2e7464c89474418d', quantity: 3, price: 7 }    // Eco-Friendly Dish Soap
        ],
        totalAmount: 21,
        customerName: 'James Hall',
        status: 'pending',
        orderDate: new Date('2024-05-10')
      },
      {
        products: [
          { productId: '682b8f202e7464c894744183', quantity: 2, price: 25 },  // Smart LED Bulb
          { productId: '682b8f4a2e7464c894744185', quantity: 1, price: 120 }  // Noise Cancelling Headphones
        ],
        totalAmount: 170,
        customerName: 'Mia Allen',
        status: 'shipped',
        orderDate: new Date('2024-06-14')
      },
      {
        products: [
          { productId: '682b909e2e7464c894744193', quantity: 3, price: 15 },  // Productivity Journal
          { productId: '682b8fca2e7464c894744189', quantity: 2, price: 18 }   // Natural Beard Oil
        ],
        totalAmount: 81,
        customerName: 'Benjamin Young',
        status: 'delivered',
        orderDate: new Date('2024-07-29')
      },
      {
        products: [
          { productId: '682b90722e7464c894744191', quantity: 1, price: 35 },  // Portable Power Bank
          { productId: '682b904a2e7464c89474418f', quantity: 1, price: 45 }   // Retro Game Console
        ],
        totalAmount: 80,
        customerName: 'Charlotte Hernandez',
        status: 'pending',
        orderDate: new Date('2024-08-11')
      },
      {
        products: [
          { productId: '682b8ff42e7464c89474418b', quantity: 1, price: 60 },  // Digital Brain Trainer
          { productId: '682b8f952e7464c894744187', quantity: 2, price: 40 }   // Mini Laptop Stand
        ],
        totalAmount: 140,
        customerName: 'Elijah King',
        status: 'shipped',
        orderDate: new Date('2025-04-01')
      },
      {
        products: [
          { productId: '682b8f4a2e7464c894744185', quantity: 1, price: 120 }, // Noise Cancelling Headphones
          { productId: '682b901c2e7464c89474418d', quantity: 10, price: 7 }   // Eco-Friendly Dish Soap
        ],
        totalAmount: 190,
        customerName: 'Amelia Wright',
        status: 'delivered',
        orderDate: new Date('2025-05-15')
      }

    ];

    await Order.insertMany(sampleOrders);
    res.status(201).json({ message: 'New 15 Sample orders inserted successfully!' });
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
