import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaStar } from "react-icons/fa";

import photo1 from "../../src/assets/img/chil with toys.jpg";
import photo2 from "../../src/assets/img/baby camera.jpg";
import photo3 from "../../src/assets/img/Silicone Printed Bibs - Rainbow.jpg";
import photo4 from "../../src/assets/img/yellow sun.jpg";
import photo5 from "../../src/assets/img/Wooden Boys bed.jpg";
import photo6 from "../../src/assets/img/bottels.jpg";


const categories = [
  "SHOW ALL",
  "ACCESSORIZE",
  "BOTTLES",
  "EQUIPMENT",
  "SOFT TOYS",
  "TOYS & BOOKS",
];

// Pura 8 Products ka data Flipkart format mein
const products = [
  {
    id: 1,
    tag: "Bestseller",
    isSponsored: true,
    category: "SOFT TOYS",
    name: "Mr Bear Baby Toy for Kids Infants New Born Baby Plush Toys",
    price: "₹534",
    oldPrice: "₹2,599",
    discount: "79% off",
    rating: "4.1",
    reviews: "(69,590)",
    img: photo1,
  },
  {
    id: 2,
    tag: "",
    isSponsored: true,
    category: "TOYS & BOOKS",
    name: "Baby Camera Digital Toy and Kids Educational Mini Camera",
    price: "₹148",
    oldPrice: "₹999",
    discount: "85% off",
    rating: "4.2",
    reviews: "(1,290)",
    img: photo2,
  },
  {
    id: 3,
    tag: "",
    isSponsored: false,
    category: "ACCESSORIZE",
    name: "Light Baby Bib - Silicone Printed Waterproof Bibs for Babies",
    price: "₹372",
    oldPrice: "₹1,299",
    discount: "71% off",
    rating: "4.0",
    reviews: "(1,670)",
    img: photo3,
  },
  {
    id: 4,
    tag: "Bestseller",
    isSponsored: false,
    category: "TOYS & BOOKS",
    name: "Yellow Sun Toy Kids Playground Indoor/Outdoor Creative Toy",
    price: "₹258",
    oldPrice: "₹2,499",
    discount: "89% off",
    rating: "4.3",
    reviews: "(5,095)",
    img: photo4,
  },
  {
    id: 5,
    tag: "New",
    isSponsored: false,
    category: "EQUIPMENT",
    name: "Premium Wood Bed for Boys Toddler Luxury Wooden Bedroom Furniture",
    price: "₹3,200",
    oldPrice: "₹15,999",
    discount: "80% off",
    rating: "4.5",
    reviews: "(890)",
    img: photo5,
  },
  {
    id: 6,
    tag: "",
    isSponsored: false,
    category: "BOTTLES",
    name: "Candy Milk Bottle Premium Grade Anti-Colic Feed Bottles Pack of 1",
    price: "₹200",
    oldPrice: "₹999",
    discount: "80% off",
    rating: "4.1",
    reviews: "(2,340)",
    img: photo6,
  },
  {
    id: 7,
    tag: "",
    isSponsored: false,
    category: "BOTTLES",
    name: "Candy Milk Bottle Premium Grade Anti-Colic Feed Bottles Pack of 2",
    price: "₹200",
    oldPrice: "₹999",
    discount: "80% off",
    rating: "4.1",
    reviews: "(2,340)",
    img: photo6,
  },
  {
    id: 8,
    tag: "",
    isSponsored: false,
    category: "BOTTLES",
    name: "Candy Milk Bottle Premium Grade Anti-Colic Feed Bottles Pack of 3",
    price: "₹200",
    oldPrice: "₹999",
    discount: "80% off",
    rating: "4.1",
    reviews: "(2,340)",
    img: photo6,
  },
];

const LatestCollection = () => {
  const [showCategory, setShowCategory] = useState(false);

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
        <div className="d-lg-none">
          <div
            className="category-dropdown-header"
            onClick={() => setShowCategory(!showCategory)}
          >
            <h5 className="m-0 fw-bold flex-grow-1 text-center">Products</h5>
            <FaChevronDown
              className={`dropdown-arrow ${showCategory ? "rotate-arrow" : ""}`}
            />
          </div>
          {showCategory && (
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {categories.map((item, i) => (
                <Link
                  key={i}
                  to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-decoration-none"
                >
                  <button className="category-btn2">{item}</button>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="d-none d-lg-flex flex-wrap justify-content-center gap-3">
          {categories.map((item, i) => (
            <Link
              key={i}
              to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-decoration-none"
            >
              <button className="category-btn2">{item}</button>
            </Link>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID (Sare 8 products yahan render honge) */}
      <div className="row g-3">
        {products.map((item) => (
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
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
                  {item.isSponsored ? "Sponsored" : <span style={{visibility: "hidden"}}>Generic</span>}
                </div>

                {/* PRODUCT TITLE */}
                <h6 className="product-title-custom">{item.name}</h6>

                {/* GREEN RATING BADGE & REVIEWS COUNTER */}
                <div className="rating-review-row">
                  <span className="green-rating-badge">
                    {item.rating} <FaStar className="ms-1" style={{ fontSize: "9px" }} />
                  </span>
                  <span className="review-count-text">{item.reviews}</span>
                </div>

                {/* PRICE SET */}
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
  );
};

export default LatestCollection;