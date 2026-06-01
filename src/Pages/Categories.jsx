import React, { useState } from "react";
import { FaChevronDown, FaStar, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify"; // Toast notifications user alert ke liye

import { products } from "../data/products"; 

const categories = [
  "SHOW ALL",
  "ACCESSORIZE",
  "BOTTLES",
  "EQUIPMENT",
  "SOFT TOYS",
  "TOYS & BOOKS",
];

const LatestCollection = () => {
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState("SHOW ALL");

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setShowCategory(false);
  };

  const filteredProducts = activeCategory === "SHOW ALL"
    ? products
    : products.filter((item) => item.category === activeCategory);

  // --- NEW UPDATE: ADD TO CART FUNCTION ---
  const handleAddToCart = (item) => {
    // 1. Pehle se saved cart items nikaalo (agar pehle kuch add kiya ho)
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // 2. Check karo item pehle se cart me hai ya nahi
    const isItemInCart = existingCart.some((cartItem) => cartItem.id === item.id);
    
    if (!isItemInCart) {
      // 3. Agar nahi hai, toh array me push karo quantity: 1 ke saath
      const updatedCart = [...existingCart, { ...item, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success(`${item.name} added to cart!`);
    } else {
      toast.info("Product already in your cart!");
    }

    // 4. Ab direct Cart page par bhejdo jahan data show hoga
    navigate("/cart");
  };

  return (
    <div className="container py-5">
      {/* TITLE */}
      <div className="text-center mb-5">
        <p className="small text-uppercase text-warning fw-bold mb-2">
          Trending Products
        </p>
        <h2 className="fw-bold">Latest Collection</h2>
      </div>

      {/* CATEGORY SECTION */}
      <div className="category-wrapper mb-5">
        {/* Mobile View */}
        <div className="d-lg-none">
          <div
            className="category-dropdown-header d-flex align-items-center justify-content-between p-2 border bg-white rounded"
            style={{ cursor: "pointer" }}
            onClick={() => setShowCategory(!showCategory)}
          >
            <h5 className="m-0 fw-bold flex-grow-1 text-center">
              Category: {activeCategory}
            </h5>
            <FaChevronDown
              className={`dropdown-arrow ${showCategory ? "rotate-arrow" : ""}`}
            />
          </div>
          {showCategory && (
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {categories.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleCategoryClick(item)}
                  className={`category-btn2 ${activeCategory === item ? "active-category" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="d-none d-lg-flex flex-wrap justify-content-center gap-3">
          {categories.map((item, i) => (
            <button
              key={i}
              onClick={() => handleCategoryClick(item)}
              className={`category-btn2 ${activeCategory === item ? "active-category" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="row g-3">
        {filteredProducts.map((item) => (
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
            key={item.id}
          >
            <div className="product-card-new h-100 d-flex flex-column justify-content-between">
              <div>
                {item.tag && (
                  <span className="flipkart-bestseller-badge">{item.tag}</span>
                )}

                {/* IMAGE LINK */}
                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="product-img-box text-center p-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid product-img-new"
                      style={{ maxHeight: "180px", objectFit: "cover" }}
                    />
                  </div>
                </Link>

                <div className="p-3 pt-1">
                  <div className="product-category-text">
                    {item.isSponsored ? "Sponsored" : <span style={{ visibility: "hidden" }}>Generic</span>}
                  </div>

                  {/* TITLE LINK */}
                  <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                    <h6 className="product-title-custom" style={{ cursor: "pointer" }}>
                      {item.name}
                    </h6>
                  </Link>

                  <div className="rating-review-row">
                    <span className="green-rating-badge">
                      {item.rating} <FaStar className="ms-1" style={{ fontSize: "9px" }} />
                    </span>
                    <span className="review-count-text">{item.reviews}</span>
                  </div>

                  <div className="flipkart-price-container">
                    <span className="flipkart-new-price">{item.price}</span>
                    {item.oldPrice && (
                      <span className="flipkart-old-price">{item.oldPrice}</span>
                    )}
                    {item.discount && (
                      <span className="flipkart-discount-text">{item.discount}</span>
                    )}
                  </div>

                  <div className="extra-save-tag mb-2">
                    Buy 2 items, save extra 5%
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="p-3 pt-0 mt-auto">
                <div className="d-flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(item)} // Naye logic function ko trigger kiya
                    className="btn btn-warning btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold text-white"
                    style={{ fontSize: "12px", whiteSpace: "nowrap", backgroundColor: "#ff9f00", borderColor: "#ff9f00" }}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;