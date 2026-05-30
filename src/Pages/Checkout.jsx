import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isFromCart = location.state?.isFromCart;
  const cartItems = location.state?.items;
  const totalAmount = location.state?.totalAmount;
  const singleProduct = location.state?.product;

  const [address, setAddress] = useState({ name: "", phone: "", pincode: "", fullAddress: "" });

  if (!cartItems && !singleProduct) {
    return (
      <div className="container py-5 text-center">
        <h3 className="fw-bold mb-3">🛒 No items found for checkout!</h3>
        <button className="btn btn-primary" onClick={() => navigate("/")}>Go to Shop</button>
      </div>
    );
  }

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    
    // MERN-READY LOGIC: Jab backend banega toh ye object database me pass hoga
    const orderData = {
      address,
      items: isFromCart ? cartItems : [{ id: singleProduct.id, name: singleProduct.name, price: singleProduct.price, qty: 1, img: singleProduct.img }],
      totalAmount: isFromCart ? totalAmount : singleProduct?.price,
      paymentMethod: "COD"
    };

    console.log("Sending order data to backend database:", orderData);

    /*
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    });
    */

    toast.success("🎉 Order Successful! UI and Data Flow Tested.");
    navigate("/"); 
  };

  return (
    <div className="container py-5" style={{ background: "#f1f3f6", minHeight: "100vh" }}>
      <h2 className="mb-4 fw-bold">Checkout & Payment</h2>
      
      {/* FORM WRAPPER: Saare elements ko form ke andar wrap kiya taaki validation chale */}
      <form onSubmit={handlePaymentSubmit}>
        <div className="row g-4">
          
          {/* LEFT SIDE: ADDRESS & METHOD */}
          <div className="col-lg-7">
            <div className="card p-4 shadow-sm mb-4 bg-white border-0" style={{ borderRadius: "2px" }}>
              <h4 className="fw-bold text-primary mb-4">1. DELIVERY ADDRESS</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Full Name" required value={address.name} onChange={(e) => setAddress({...address, name: e.target.value})} />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="10-digit Mobile Number" required value={address.phone} onChange={(e) => setAddress({...address, phone: e.target.value})} />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Pincode" required value={address.pincode} onChange={(e) => setAddress({...address, pincode: e.target.value})} />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="3" placeholder="Full Address (House No, Building, Street, Area)" required value={address.fullAddress} onChange={(e) => setAddress({...address, fullAddress: e.target.value})}></textarea>
                </div>
              </div>
            </div>

            <div className="card p-4 shadow-sm bg-white border-0" style={{ borderRadius: "2px" }}>
              <h4 className="fw-bold text-primary mb-3">2. PAYMENT METHOD</h4>
              <div className="p-3 border rounded mb-2 bg-light">
                <input type="radio" name="payment" id="cod" defaultChecked />
                <label htmlFor="cod" className="ms-2 fw-bold" style={{ cursor: "pointer" }}>Cash on Delivery (COD)</label>
              </div>
              <div className="p-3 border rounded mb-2 text-muted">
                <input type="radio" name="payment" id="online" disabled />
                <label htmlFor="online" className="ms-2">Online Payment (UPI/Card) - Temporarily Unavailable</label>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SUMMARY & CONFIRM */}
          <div className="col-lg-5">
            <div className="card p-4 shadow-sm bg-white border-0 position-sticky" style={{ top: "20px", borderRadius: "2px" }}>
              <h4 className="fw-bold mb-3 text-muted">ORDER SUMMARY</h4>
              <hr />
              
              <div className="mb-3 pb-2 border-bottom" style={{ maxHeight: "300px", overflowY: "auto" }}>
                {isFromCart ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="d-flex gap-3 align-items-center mb-3">
                      <img src={item.img} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                      <div className="flex-grow-1">
                        <h6 className="m-0 fw-bold text-truncate" style={{ maxWidth: "200px" }}>{item.name}</h6>
                        <small className="text-muted">Qty: {item.qty} | Price: {item.price}</small>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="d-flex gap-3 align-items-center">
                    <img src={singleProduct?.img} alt={singleProduct?.name} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <div>
                      <h6 className="m-0 fw-bold text-truncate" style={{ maxWidth: "200px" }}>{singleProduct?.name}</h6>
                      <small className="text-muted">Qty: 1 | Price: {singleProduct?.price}</small>
                    </div>
                  </div>
                )}
              </div>

              <div className="d-flex justify-content-between fw-bold mb-4" style={{ fontSize: "18px" }}>
                <span>Total Payable:</span>
                <span className="text-success" style={{ fontSize: "20px" }}>{isFromCart ? totalAmount : singleProduct?.price}</span>
              </div>

              {/* Submit type button inside the main form */}
              <button 
                type="submit"
                className="btn w-100 py-3 fw-bold text-white text-uppercase" 
                style={{ background: "#fb641b", borderRadius: "2px", border: "none", fontSize: "16px" }} 
              >
                Confirm Order
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Checkout;