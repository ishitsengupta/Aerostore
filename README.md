# AeroStore[NOT a Commercial Project]

Made by Ishit Sengupta 🚀

A modern, fully responsive React E-Commerce frontend featuring a clean, bright glassmorphism aesthetic. This project simulates a real-world shopping experience using the FakeStore API to fetch products, categories, and manage a global shopping cart.

# Features

Bright Glassmorphism UI: Frosted glass cards, blurred backgrounds, soft glows, and animated background blobs for a premium, airy feel.

Global Cart State: Full cart functionality (add, remove, adjust quantities, calculate totals) managed entirely via React's native Context API.

Dynamic Routing: Seamless navigation between the Home, Products, individual Product Details, and Cart pages using React Router v6.

Advanced Filtering: Search for specific products or filter them dynamically by categories fetched directly from the API.

Robust Error Handling: Custom loading spinners and error states for all API calls to ensure a smooth user experience.

Fully Responsive: Optimized for mobile, tablet, and desktop viewing.

# Tech Stack

Technology

Description

React.js (Vite)

Core framework, bootstrapped with Vite for lightning-fast HMR.

React Router DOM v6

For client-side routing and dynamic URL parameters.

Tailwind CSS v4

Utility-first CSS framework for rapid UI styling and responsiveness.

React Context API

Native global state management for the shopping cart.

FakeStore API

Mock backend providing REST endpoints for products and categories.

# Getting Started

Follow these steps to get the project running locally on your machine.

Prerequisites

Make sure you have Node.js installed on your computer.

Installation

Clone the repository (if you haven't already):

git clone <your-repo-url>
cd <your-project-folder>


Install dependencies:

npm install


Start the development server:

npm run dev


Open the app:
Click the localhost link provided in your terminal (usually http://localhost:5173) to view the app in your browser.

📂 Project Structure

src/
├── components/
│   ├── Button.jsx         # Reusable UI button variants
│   ├── ErrorMessage.jsx   # API failure fallback
│   ├── Footer.jsx         # Global page footer
│   ├── LoadingSpinner.jsx # API loading state
│   ├── Navbar.jsx         # Top navigation & cart badge
│   └── ProductCard.jsx    # Glassmorphism item display
├── context/
│   └── CartContext.jsx    # Global cart state management
├── pages/
│   ├── Cart.jsx           # Cart summary and totals
│   ├── Home.jsx           # Hero section & featured items
│   ├── ProductDetail.jsx  # Dynamic single-item view
│   └── Products.jsx       # Main store with search/filters
├── App.jsx                # Route definitions & layout wrapper
├── main.jsx               # Application entry point
└── index.css              # Tailwind imports & custom glass CSS


# API Reference

This project relies on the free FakeStore API.

GET /products - Fetches all items

GET /products?limit=8 - Fetches featured items for the homepage

GET /products/categories - Fetches available categories for the filter

GET /products/:id - Fetches a single product by its ID

Designed and built for modern web standards.