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
import Checkout from './Pages/Checkout'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
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
       <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </Router>

  )
}

export default App