# Admin Dashboard

A full-featured Admin Dashboard built using **Vue 3** and **Tailwind CSS** for the frontend, with a **Node.js** and **MongoDB** backend. This dashboard provides real-time metrics on orders, revenue, and products, featuring a persistent sidebar navigation and dark mode support.

![Admin Dashboard Preview] 
<img width="1677" alt="Screenshot 2025-05-20 at 6 23 15 PM" src="https://github.com/user-attachments/assets/df78e46e-6324-4235-8d39-980d2b04a02f" />


## Features

- **Responsive Design**: Fully responsive Admin Dashboard UI built with Vue 3 and Tailwind CSS
- **Interactive Navigation**: Persistent sidebar with active route highlighting
- **Theme Support**: Dark Mode toggle with local storage persistence
- **Real-time Metrics**: Dashboard cards showing total orders, revenue, and active products
- **Project Overview**: Detailed card explaining the project technology stack
- **About Me Section**: Profile information with contact details
- **Backend Integration**: API integration with Node.js, Express, and MongoDB
- **Clean Architecture**: Modular component-based structure for easy maintenance

## Demo

[View Live Demo](https://admin-dashboard-fawad.netlify.app/)

## Technologies Used

### Frontend
- Vue 3 with Composition API
- Tailwind CSS for styling
- Vue Router for navigation
- Vite as build tool
- Axios for API requests
- Chart.js for Charts and comparisons

### Backend
- Node.js runtime
- Express.js framework
- MongoDB database
- Mongoose ODM

## Setup Instructions

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- MongoDB instance (local or cloud e.g. MongoDB Atlas)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admin-dashboard.git
   cd admin-dashboard/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the frontend folder:
   ```env
   VITE_API_BASE_URL=http://localhost:10000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser at `http://localhost:3000` (or as indicated by Vite)

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd ../backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/admin-dashboard
   PORT=10000
   ```

4. Start the backend server:
   ```bash
   npm start
   # or
   yarn start
   ```

The backend server will run on `http://localhost:10000`

## Running the Project

Make sure both frontend and backend servers are running concurrently. The frontend will consume the backend API endpoints to fetch and display real-time dashboard data.

## Project Structure

```
admin-dashboard/
├── backend/              # Node.js + Express + MongoDB backend
│   ├── controllers/      # API logic
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── app.js            # Express app setup
│   └── server.js         # Server startup
├── frontend/             # Vue 3 + Tailwind CSS frontend
│   ├── src/
│   │   ├── components/   # Reusable Vue components
│   │   ├── views/        # Page-level components (Dashboard, About, etc.)
│   │   ├── router/       # Vue Router setup
│   │   └── App.vue       # Main app component
│   ├── index.html
│   └── vite.config.js
└── README.md
```

## Navigating the Dashboard

### Sidebar Navigation
The sidebar on the left allows you to switch between different sections of the dashboard (e.g., Home, Products, Analytics). It stays fixed while content updates dynamically.

### Dashboard Overview
Shows three summary cards for Total Orders, Total Revenue, and Active Products. Data is fetched live from the backend API.

### Project Overview
A detailed card explaining the project technology stack and goals.

### About Me Section
Displays your profile picture, name, role, and contact information including email, phone, GitHub, and portfolio links.

### Dark Mode
Toggle the dark mode button at the bottom of the sidebar to switch themes. Your preference is saved locally.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

**Mohammad Fawad**  
Email: mohammad.fawad.564@gmail.com  
GitHub: [github.com/fawad1386](https://github.com/fawad1386)  
Portfolio: [fawadnaeem.netlify.app](https://fawadnaeem.netlify.app)
