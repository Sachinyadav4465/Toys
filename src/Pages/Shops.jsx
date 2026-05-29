import React, { useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";



const Shop = () => {
  const [sortType, setSortType] = useState("");

  // Copy Products
  let sortedProducts = [...products];

  // Helper function: '₹534' ya '₹3,200' se strings hatakar pure number nikalne ke liye
  const cleanPrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[₹,]/g, ""));
  };

  // LOW TO HIGH SORTING
  if (sortType === "low") {
    sortedProducts.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
  }

  // HIGH TO LOW SORTING
  if (sortType === "high") {
    sortedProducts.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
  }

  return (
    <div className="container py-5">
      <div className="row">
        
        {/* SIDEBAR FILTERS (Flipkart Clean Sidebar Look) */}
        <div className="col-lg-3 mb-4">
          <div className="hero-category-box p-3" style={{ background: "#fff", border: "1px solid #e0e0e0" }}>
            <h5 className="fw-bold mb-3 pb-2 text-dark" style={{ borderBottom: "1px solid #f0f0f0", fontSize: "18px" }}>
              Filters
            </h5>

            {/* SORT DROPDOWN */}
            <div className="mb-2">
              <label className="fw-bold mb-2 text-muted small text-uppercase" style={{ letterSpacing: "0.5px" }}>
                Sort By Price
              </label>
              <select
                className="form-select"
                style={{ borderRadius: "2px", fontSize: "14px", cursor: "pointer" }}
                onChange={(e) => setSortType(e.target.value)}
                value={sortType}
              >
                <option value="">Popularity (Default)</option>
                <option value="low">Price -- Low to High</option>
                <option value="high">Price -- High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="col-lg-9">
          <div className="row g-3">
            {sortedProducts.map((item) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-6"
                key={item.id}
              >
                <div className="product-card-new">
                  
                  {/* BESTSELLER / NEW BADGE */}
                  {item.tag && (
                    <span className="flipkart-bestseller-badge">{item.tag}</span>
                  )}

                  {/* IMAGE SECTION */}
                  <Link to={`/product/${item.id}`} className="text-decoration-none">
                    <div className="product-img-box text-center p-2">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid product-img-new"
                        style={{ maxHeight: "180px", objectFit: "contain" }}
                      />
                    </div>
                  </Link>

                  {/* CONTENT AREA */}
                  <div className="p-3 pt-1">
                    
                    {/* SPONSORED TEXT */}
                    <div className="product-category-text">
                      {item.isSponsored ? "Sponsored" : <span style={{ visibility: "hidden" }}>Generic</span>}
                    </div>

                    {/* PRODUCT TITLE */}
                    <h6 className="product-title-custom">{item.name}</h6>

                    {/* GREEN RATING BADGE & REVIEWS */}
                    <div className="rating-review-row">
                      <span className="green-rating-badge">
                        {item.rating || "4.0"}{" "}
                        <FaStar className="ms-1" style={{ fontSize: "9px" }} />
                      </span>
                      <span className="review-count-text">
                        {item.reviews || "(0)"}
                      </span>
                    </div>

                    {/* FLIPKART PRICE SET */}
                    <div className="flipkart-price-container">
                      <span className="flipkart-new-price">{item.price}</span>
                      {item.oldPrice && (
                        <span className="flipkart-old-price">{item.oldPrice}</span>
                      )}
                      {item.discount && (
                        <span className="flipkart-discount-text">{item.discount}</span>
                      )}
                    </div>

                    {/* EXTRA SAVE OFFER TAG */}
                    <div className="extra-save-tag">
                      Buy 2 items, save extra 5%
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;