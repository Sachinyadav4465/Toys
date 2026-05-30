import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa"; 
import { products } from "../data/products"; 
import  toastify from "react-toastify/dist/ReactToastify.css";


const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-muted">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="product-details-box shadow-sm" style={{ background: "#fff", padding: "25px", borderRadius: "8px" }}>
        <div className="row g-4">
          
          <div className="col-lg-5 text-center">
            <div className="position-relative border p-3 mb-3 d-flex align-items-center justify-content-center" style={{ borderRadius: "4px", minHeight: "420px", background: "#fff" }}>
              {product.tag && (
                <span className="flipkart-bestseller-badge" style={{ position: "absolute", top: "15px", left: "15px", zIndex: 10 }}>
                  {product.tag}
                </span>
              )}
              <img
                src={product.img}
                alt={product.name}
                className="img-fluid details-img"
                style={{ maxHeight: "380px", objectFit: "contain" }}
              />
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn fk-btn fk-cart-btn flex-fill py-3 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2"
                style={{ background: "#ff9f00", color: "#fff", border: "none", fontSize: "16px", borderRadius: "2px" }}
                onClick={() => {
                  addToCart(product);
                  toast.success("Product Added To Cart");
                }}
              >
                <FaShoppingCart /> Add To Cart
              </button>

              <button 
                className="btn fk-btn fk-buy-btn flex-fill py-3 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2"
                style={{ background: "#fb641b", color: "#fff", border: "none", fontSize: "16px", borderRadius: "2px" }}
                onClick={() => navigate("/checkout", { state: { product } })}
              >
                <FaBolt /> Buy Now
              </button>
            </div>
          </div>

          <div className="col-lg-7">
            <p className="text-uppercase fw-bold text-muted small m-0" style={{ letterSpacing: "0.5px" }}>
              {product.category}
            </p>

            <h1 className="details-title-custom mt-1" style={{ fontSize: "22px", fontWeight: "400", color: "#212121" }}>
              {product.name}
            </h1>

            <div className="details-rating-row d-flex align-items-center gap-2 my-2">
              <span className="details-green-badge bg-success text-white px-2 py-1 rounded small d-inline-flex align-items-center" style={{ fontSize: "12px", fontWeight: "600" }}>
                {product.rating} <FaStar className="ms-1" style={{ fontSize: "10px" }} />
              </span>
              <span className="details-reviews-text text-muted small fw-bold">{product.reviews}</span>
            </div>

            <div className="details-price-container d-flex align-items-center gap-3 my-3">
              <span className="details-new-price text-dark fw-bold" style={{ fontSize: "28px" }}>{product.price}</span>
              {product.oldPrice && (
                <span className="details-old-price text-muted text-decoration-line-through" style={{ fontSize: "16px" }}>{product.oldPrice}</span>
              )}
              {product.discount && (
                <span className="details-discount text-success fw-bold" style={{ fontSize: "16px" }}>{product.discount}</span>
              )}
            </div>

            <hr />

            <h5 className="fw-bold" style={{ fontSize: "16px", color: "#212121" }}>Product Description</h5>
            <p className="text-secondary" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              {product.description}
            </p>

            <div className="feature-box mt-4 p-3 border rounded" style={{ background: "#f9f9f9" }}>
              <h5 className="offers-heading fw-bold text-dark mb-3" style={{ fontSize: "16px" }}>Available Offers</h5>
              <ul className="flipkart-offers-list list-unstyled d-flex flex-column gap-2" style={{ fontSize: "14px", color: "#212121" }}>
                <li className="d-flex align-items-start gap-2">
                  <span className="text-success mt-1" style={{ fontSize: "12px" }}>🏷️</span>
                  <div>
                    <span className="fw-bold">Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card. <span className="text-primary fw-bold" style={{ cursor: "pointer" }}>T&C</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span className="text-success mt-1" style={{ fontSize: "12px" }}>🏷️</span>
                  <div>
                    <span className="fw-bold">Partner Offer</span> Buy 2 items, save extra 5% off on baby care products.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;