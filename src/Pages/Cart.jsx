import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrash, FaShieldAlt, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const navigate = useNavigate();

  // Helper function: Text price ko number me badalne ke liye (Jaise "₹534" -> 534)
  const cleanPrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[₹,]/g, ""));
  };

  // Calculations
  const totalPrice = cartItems.reduce((acc, item) => acc + cleanPrice(item.price) * item.qty, 0);
  const discount = cartItems.length > 0 ? 120 : 0;
  const finalPrice = totalPrice - discount;

  // MERN-READY CHECKOUT LOGIC
  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;

    // BACKEND INTEGRATION: Pehle check karenge ki user ke paas Token hai ya nahi
    const token = localStorage.getItem("token"); // Token backend se milega login ke baad

    if (!token) {
      toast.warning("Please login first to place your order!");
      navigate("/login");
      return;
    }

    // Agar token mil gaya, toh data checkout page par bhej do
    navigate("/checkout", {
      state: {
        isFromCart: true,
        items: cartItems,
        totalAmount: `₹${finalPrice.toLocaleString("en-IN")}`
      }
    });
  };

  return (
    <div className="cart-page py-5" style={{ background: "#f1f3f6", minHeight: "90vh" }}>
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
                <div className="cart-product-card mb-3 p-3 bg-white border" key={item.id} style={{ borderRadius: "2px" }}>
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
                      <p className="text-uppercase fw-bold text-muted small m-0" style={{ fontSize: "12px" }}>{item.category}</p>
                      <h5 className="my-1 fw-normal text-dark" style={{ fontSize: "16px" }}>{item.name}</h5>
                      
                      {/* RATING */}
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="bg-success text-white px-2 py-0 rounded small" style={{ fontSize: "11px" }}>
                          {item.rating || "4.1"} <FaStar className="ms-1" style={{ fontSize: "8px", marginTop: "-2px" }} />
                        </span>
                        <span className="text-muted small">({item.reviews || "2,340"})</span>
                      </div>

                      {/* PRICES */}
                      <div className="mb-2">
                        <span className="fw-bold text-dark fs-5 me-2">{item.price}</span>
                        {item.oldPrice && <span className="text-muted text-decoration-line-through me-2 small">{item.oldPrice}</span>}
                        {item.discount && <span className="text-success fw-bold small">{item.discount}</span>}
                      </div>

                      {/* QUANTITY SET */}
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-light border rounded-circle" onClick={() => decreaseQty(item.id)} disabled={item.qty <= 1}>
                          <FaMinus style={{ fontSize: "10px" }} />
                        </button>
                        <span className="px-3 py-1 border text-center bg-light fw-bold" style={{ minWidth: "40px", fontSize: "14px" }}>{item.qty}</span>
                        <button className="btn btn-sm btn-light border rounded-circle" onClick={() => increaseQty(item.id)}>
                          <FaPlus style={{ fontSize: "10px" }} />
                        </button>
                      </div>
                    </div>

                    {/* ACTIONS: REMOVE */}
                    <div className="col-md-3 text-md-end text-start mt-3 mt-md-0">
                      <button className="btn btn-link text-danger text-decoration-none fw-bold small p-0" onClick={() => removeFromCart(item.id)}>
                        <FaTrash className="me-2" style={{ fontSize: "13px", marginTop: "-3px" }} />
                        REMOVE
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE: SUMMARY */}
          <div className="col-lg-4">
            <div className="price-details-box bg-white border p-4 shadow-sm" style={{ borderRadius: "2px" }}>
              <h5 className="text-muted fw-bold text-uppercase border-bottom pb-3 mb-3" style={{ fontSize: "14px", letterSpacing: "0.5px" }}>Price Details</h5>

              <div className="d-flex justify-content-between mb-3 text-dark">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Discount</span>
                <span className="text-success">- ₹{discount}</span>
              </div>

              <div className="d-flex justify-content-between mb-3 border-bottom pb-3">
                <span>Delivery Charges</span>
                <span className="text-success">FREE</span>
              </div>

              <div className="d-flex justify-content-between fw-bold text-dark fs-5 mb-4 pt-2">
                <span>Total Amount</span>
                <span>₹{finalPrice.toLocaleString("en-IN")}</span>
              </div>

              {discount > 0 && (
                <div className="p-2 alert alert-success text-center fw-bold small mb-4" style={{ borderRadius: "2px" }}>
                  🎉 You will save ₹{discount} on this order
                </div>
              )}

              <button 
                className="btn w-100 py-3 fw-bold text-white text-uppercase" 
                style={{ background: "#fb641b", borderRadius: "2px", border: "none", fontSize: "16px" }} 
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>

              <div className="d-flex align-items-center justify-content-center gap-2 mt-4 text-muted small fw-bold">
                <FaShieldAlt style={{ fontSize: "18px" }} />
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