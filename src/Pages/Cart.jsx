import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-section py-5">
      <div className="container">

        <h2 className="cart-title text-center mb-4">
          🛒 Your Cart
        </h2>

        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-8">

            {cartItems.length === 0 ? (
              <div className="empty-cart text-center">
                <h4>Your cart is empty</h4>
                <p>Start shopping now 🚀</p>
              </div>
            ) : (

              cartItems.map((item) => (

                <div className="cart-card mb-3" key={item.id}>

                  <div className="cart-img">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="cart-body">

                    <h5>{item.name}</h5>

                    <p className="price">₹ {item.price}</p>

                    {/* QTY BUTTONS */}
                    <div className="qty-box">

                      <button onClick={() => decreaseQty(item.id)}>
                        -
                      </button>

                      <span>{item.qty}</span>

                      <button onClick={() => increaseQty(item.id)}>
                        +
                      </button>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">

            <div className="checkout-card">

              <h4>Price Details</h4>

              <hr />

              <div className="price-row">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="price-row">
                <span>Total Price</span>
                <span>₹ {totalPrice}</span>
              </div>

              <hr />

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;