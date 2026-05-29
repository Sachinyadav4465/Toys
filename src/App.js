import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Categories from './Pages/Categories'
import Blogs from './Pages/Blogs'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import CategoryPage from './Pages/CategoryPage'
import Shop from './Pages/Shops'
const App = () => {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/blogs"
          element={<Blogs />}
        />

        {/* Product Details Route */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/shops" element={<Shop />} />
      </Routes>

    </Router>

  )
}

export default App