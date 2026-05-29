import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrash, FaShieldAlt, FaMinus, FaPlus, FaStar } from "react-icons/fa";

// External CSS import


const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // Helper function to extract number safely from values like "₹2,599" or "₹534"
  const cleanPrice = (priceStr) => {
    if (!priceStr) return 0;
    // Strip everything except numbers and decimals
    return parseFloat(priceStr.replace(/[₹,]/g, ""));
  };

  // TOTAL PRICE CALCULATION
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + cleanPrice(item.price) * item.qty,
    0
  );

  // FIXED DISCOUNT (Change dynamically if needed)
  const discount = cartItems.length > 0 ? 120 : 0;

  // FINAL AMOUNT TO PAY
  const finalPrice = totalPrice - discount;

  return (
    <div className="cart-page py-5">
      <div className="container">
        <div className="row g-4">
          
          {/* LEFT SIDE: ITEMS LIST */}
          <div className="col-lg-8">
            {cartItems.length === 0 ? (
              <div className="empty-cart-box text-center p-5 bg-white border" style={{ borderRadius: "2px" }}>
                <h3 className="fw-bold mb-2">Your Cart Is Empty 🛒</h3>
                <p className="text-muted">Add products to continue shopping</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div className="cart-product-card mb-3" key={item.id}>
                  <div className="row align-items-center">
                    
                    {/* PRODUCT IMAGE */}
                    <div className="col-md-2 col-4 text-center">
                      <div className="cart-image-box border p-1" style={{ background: "#fff", height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="img-fluid"
                          style={{ maxHeight: "80px", objectFit: "contain" }}
                        />
                      </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="col-md-7 col-8">
                      <p className="cart-category-text m-0">{item.category}</p>
                      <h5 className="cart-product-title-custom my-1">{item.name}</h5>
                      
                      {/* GREEN RATING BADGE */}
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="green-rating-badge" style={{ padding: "1px 5px", fontSize: "11px" }}>
                          {item.rating || "4.1"} <FaStar className="ms-1" style={{ fontSize: "8px" }} />
                        </span>
                        <span className="text-muted small">({item.reviews || "2,340"})</span>
                      </div>

                      {/* PRICES & DISCOUNT */}
                      <div className="flipkart-price-container mb-0">
                        <span className="flipkart-new-price">{item.price}</span>
                        {item.oldPrice && (
                          <span className="flipkart-old-price">{item.oldPrice}</span>
                        )}
                        {item.discount && (
                          <span className="flipkart-discount-text">{item.discount}</span>
                        )}
                      </div>

                      {/* FLIPKART STYLE QUANTITY SET */}
                      <div className="qty-container-fk">
                        <button className="qty-btn-fk" onClick={() => decreaseQty(item.id)}>
                          <FaMinus />
                        </button>
                        <div className="qty-count-text">{item.qty}</div>
                        <button className="qty-btn-fk" onClick={() => increaseQty(item.id)}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    {/* ACTIONS: REMOVE BUTTON */}
                    <div className="col-md-3 text-md-end text-start mt-3 mt-md-0">
                      <button className="remove-btn-fk" onClick={() => removeFromCart(item.id)}>
                        <FaTrash className="me-2" style={{ fontSize: "13px", marginTop: "-3px" }} />
                        Remove
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE: PRICE CALCULATION SUMMARY */}
          <div className="col-lg-4">
            <div className="price-details-box">
              <h4 className="price-details-title">Price Details</h4>

              <div className="price-line-fk">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>

              <div className="price-line-fk">
                <span>Discount</span>
                <span className="text-success">- ₹{discount}</span>
              </div>

              <div className="price-line-fk">
                <span>Delivery Charges</span>
                <span className="text-success">FREE</span>
              </div>

              {/* TOTAL AMOUNT ROW */}
              <div className="price-line-fk total-amount-line">
                <span>Total Amount</span>
                <span>₹{finalPrice.toLocaleString("en-IN")}</span>
              </div>

              {/* SAVE GREEN BOX */}
              {discount > 0 && (
                <div className="save-msg-fk text-center">
                  🎉 You will save ₹{discount} on this order
                </div>
              )}

              {/* ACTION BUTTON */}
              <button className="place-order-btn-fk">Place Order</button>

              {/* SECURITY SHIELD */}
              <div className="secure-footer-fk">
                <FaShieldAlt className="text-muted" style={{ fontSize: "18px" }} />
                <span>Safe and Secure Payments</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;