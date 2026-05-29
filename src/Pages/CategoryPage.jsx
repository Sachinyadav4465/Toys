import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { products } from "../data/products";


const CategoryPage = () => {
  const { categoryName } = useParams();

  // SHOW ALL OR FILTER CATEGORY
  const filteredProducts =
    categoryName === "show-all"
      ? products
      : products.filter(
          (item) =>
            item.category.toLowerCase().replace(/\s+/g, "-") === categoryName
        );

  return (
    <div className="container py-5">
      {/* CATEGORY TITLE */}
      <h2 className="text-center fw-bold mb-5 text-uppercase">
        {categoryName.replace(/-/g, " ")}
      </h2>

      {/* PRODUCTS GRID */}
      <div className="row g-3">
        {filteredProducts.map((item) => (
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
            key={item.id}
          >
            <div className="product-card-new">
              
              {/* BESTSELLER / NEW TAG */}
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

                {/* GREEN RATING BADGE & REVIEWS COUNTER */}
                <div className="rating-review-row">
                  <span className="green-rating-badge">
                    {item.rating || "4.0"}{" "}
                    <FaStar className="ms-1" style={{ fontSize: "9px" }} />
                  </span>
                  <span className="review-count-text">
                    {item.reviews || "(0)"}
                  </span>
                </div>

                {/* PERFECT FLIPKART PRICE SET */}
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

export default CategoryPage;