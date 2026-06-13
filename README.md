# ShoppyGlobe - E-Commerce Application

## GitHub Repository

Repository Link:
https://github.com/rish-cute/ShoppyGlobe

---

## Project Overview

ShoppyGlobe is a React-based e-commerce application developed using Vite. The application allows users to browse products, view detailed product information, search products, manage a shopping cart, and complete a checkout process.

The project uses React Router for navigation, Redux Toolkit for state management, custom hooks for data fetching, and responsive CSS for styling.

---

## Features

### Product Management

* Display products fetched from DummyJSON API
* View detailed product information
* Product search functionality
* Dynamic product detail routes

### Shopping Cart

* Add products to cart
* Remove products from cart
* Increase quantity
* Decrease quantity
* Quantity cannot go below 1
* Cart data persists using Local Storage

### Checkout

* Customer information form
* Order summary
* Total price calculation
* Place Order functionality
* Cart clears after successful order placement
* Automatic redirect to Home page

### Routing

* Home Page
* Product Detail Page
* Cart Page
* Checkout Page
* Not Found (404) Page

### Performance Optimization

* Code Splitting
* React Lazy Loading
* Suspense
* Lazy Loaded Images

### Responsive Design

* Desktop Layout
* Tablet Layout
* Mobile Layout

---

## Technologies Used

* React
* Vite
* React Router DOM
* Redux Toolkit
* React Redux
* JavaScript (ES6+)
* CSS3

---

## Project Structure

```text
src/
│
├── components/
│   ├── Cart/
│   ├── CartItem/
│   ├── Footer/
│   ├── Header/
│   ├── ProductItem/
│   └── ProductList/
│
├── hooks/
│   └── useProducts.js
│
├── pages/
│   ├── Cart/
│   ├── Checkout/
│   ├── Home/
│   ├── NotFound/
│   └── ProductDetail/
│
├── redux/
│   ├── cartSlice.js
│   ├── searchSlice.js
│   └── store.js
│
├── routes/
│   └── router.jsx
│
├── styles/
│   ├── Cart.css
│   ├── CartItem.css
│   ├── Checkout.css
│   ├── Common.css
│   ├── Header.css
│   ├── ProductDetail.css
│   ├── ProductItem.css
│   ├── ProductList.css
│   └── Responsive.css
│
├── index.css
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rish-cute/ShoppyGlobe.git
```

Navigate to project folder:

```bash
cd ShoppyGlobe
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Major Development Milestones

* Product Listing Implementation
* Product Detail Page
* Redux Cart Management
* Search Functionality
* Checkout Workflow
* Cart Persistence using Local Storage
* Responsive Design
* Loading and Error Handling
* Empty Cart Experience
* UI Improvements and Styling
* Footer Component
* Product Count Display
* Performance Optimizations

---

## API Used

DummyJSON Products API

```text
https://dummyjson.com/products
```

---

## Author

R.Naga Rishika 
