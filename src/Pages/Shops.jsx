import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // FIX 1: useNavigate ko import kiya
import { FaStar, FaShoppingCart } from "react-icons/fa"; 
import { toast } from "react-toastify";
import { products } from "../data/products"; 

const Shop = () => {
  const navigate = useNavigate(); 
  const [sortType, setSortType] = useState("");

  // Helper function: Price string se symbols hatakar pure number nikalne ke liye
  const cleanPrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.toString().replace(/[₹,]/g, ""));
  };

  // Copy & Sort Products
  let sortedProducts = [...products];
  if (sortType === "low") {
    sortedProducts.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
  } else if (sortType === "high") {
    sortedProducts.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
  }

  // --- ADD TO CART & NAVIGATE LOGIC ---
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCart.some((cartItem) => cartItem.id === item.id);
    
    if (!isItemInCart) {
      const updatedCart = [...existingCart, { ...item, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success(`${item.name} added to cart!`);
    } else {
      toast.info("Product already in your cart!");
    }
    
    // Aap chahein toh user ko direct /cart ya fir database route par bhej sakte hain
    navigate("/cart");
  };

  return (
    <div className="container py-5">
      <div className="row">
        
        {/* SIDEBAR FILTERS */}
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
              <div className="col-xl-4 col-lg-4 col-md-6 col-6" key={item.id}>
                <div className="product-card-new h-100 d-flex flex-column justify-content-between">
                  
                  <div>
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
                      <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                        <h6 className="product-title-custom" style={{ cursor: "pointer" }}>{item.name}</h6>
                      </Link>

                      {/* GREEN RATING BADGE */}
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
                      <div className="extra-save-tag mb-2">
                        Buy 2 items, save extra 5%
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="p-3 pt-0 mt-auto">
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => handleAddToCart(item)} // FIX 2: Dynamic single item save logic handle kiya
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

      </div>
    </div>
  );
};

export default Shop;