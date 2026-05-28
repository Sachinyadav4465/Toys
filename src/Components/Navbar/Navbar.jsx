import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">

      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand custom-logo" to="/">
          <h2>
            <span>PLAY</span>GROW
          </h2>
          <p>BABY EQUIPMENT</p>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto gap-lg-4 text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">CATEGORIES</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">SHOP</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs">BLOG</Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex flex-column flex-lg-row gap-3 text-center mt-3 mt-lg-0">

            {/* Wishlist (optional - remove if not used) */}
            {/* <Link className="text-dark text-decoration-none" to="/wishlist">
              ♡ Wishlist
            </Link> */}

            {/* Cart Icon */}
            <Link to="/cart" className="position-relative text-dark">

              <i className="bi bi-cart fs-4"></i>

              {/* Cart Count Badge */}
              <span
                className="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                {cartItems?.length || 0}
              </span>

            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;