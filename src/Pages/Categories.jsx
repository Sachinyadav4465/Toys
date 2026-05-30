import React, { useState } from "react";
import { FaChevronDown, FaStar, FaShoppingCart, FaEye } from "react-icons/fa"; // Added icons for look & feel
import { Link } from "react-router-dom"; 

// FIX: Yahan brackets {} lagaye aur data ki jagah products import kiya taaki niche wala code chal sake
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
  const [showCategory, setShowCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState("SHOW ALL");

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setShowCategory(false);
  };

  // Ab yahan 'products' perfectly kaam karega kyunki upar sahi naam se import ho chuka hai
  const filteredProducts = activeCategory === "SHOW ALL"
    ? products
    : products.filter((item) => item.category === activeCategory);

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

                {/* 1. IMAGE WRAPPED WITH LINK */}
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

                  {/* 2. TITLE WRAPPED WITH LINK */}
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

              {/* NEW ACTION BUTTONS ADDED HERE */}
              <div className="p-3 pt-0 mt-auto">
                <div className="d-flex gap-2">
                  <Link 
                    to={`/product/${item.id}`} 
                    className="btn btn-outline-secondary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1"
                    style={{ fontSize: "12px", whiteSpace: "nowrap" }}
                  >
                    <FaEye /> Details
                  </Link>
                  <button 
                    onClick={() => console.log(`Product ${item.id} added to cart`)} // Redux ya Context logic yahan lagao
                    className="btn btn-warning btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold text-white"
                    style={{ fontSize: "12px", whiteSpace: "nowrap", backgroundColor: "#ff9f00", borderColor: "#ff9f00" }}
                  >
                    <FaShoppingCart /> Add
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