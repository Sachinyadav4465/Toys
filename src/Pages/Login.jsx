import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Mail, Lock, ShoppingCart, ArrowRight } from "lucide-react"; // Modern Icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Sending data to backend login API:", { email, password });
      
      /* const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      */

      toast.success("Welcome back! Login Successful.");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");

    } catch (error) {
      toast.error("Something went wrong with the server!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="row g-0 h-100">
          
          {/* Left Sidebar - Dynamic Gradient & Pattern */}
          <div className="col-md-5 auth-sidebar d-none d-md-flex flex-column justify-content-between p-5 text-white">
            <div>
              <div className="brand-logo mb-4">
                <ShoppingCart className="me-2" size={28} />
                <span>E-Shop</span>
              </div>
              <h2 className="fw-bold display-6">Welcome Back!</h2>
              <p className="text-white-50 mt-3 fs-6">
                Discover a curated collection of products tailored just for you. Log in to access your orders, wishlist, and personalized offers.
              </p>
            </div>
            <div className="footer-note text-white-50 small">
              © 2026 E-Shop Inc. All rights reserved.
            </div>
          </div>

          {/* Right Section - Minimal & Clean Form */}
          <div className="col-md-7 d-flex align-items-center">
            <div className="auth-form-container p-4 p-sm-5 w-100">
              <div className="form-header mb-4">
                <h3 className="fw-bold text-dark">Sign In</h3>
                <p className="text-muted small">Please enter your credentials to access your account.</p>
              </div>

              <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                
                {/* Email Input */}
                <div className="form-group custom-input-group">
                  <label className="form-label small text-muted fw-semibold">Email Address</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input 
                      type="email" 
                      className="form-control custom-input" 
                      placeholder="name@company.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="form-group custom-input-group">
                  <div className="d-flex justify-content-between align-items-center">
                    <label className="form-label small text-muted fw-semibold">Password</label>
                    <a href="#forgot" className="small-link text-decoration-none">Forgot?</a>
                  </div>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type="password" 
                      className="form-control custom-input" 
                      placeholder="••••••••" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Terms and conditions */}
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label text-muted small" htmlFor="rememberMe">
                    Keep me logged in
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-login-action w-100 py-2.5 mt-2 fw-semibold d-flex align-items-center justify-content-center gap-2">
                  Sign In <ArrowRight size={18} />
                </button>

                {/* Redirect Link */}
                <div className="text-center mt-4">
                  <span className="text-muted small">Don't have an account? </span>
                  <Link to="/signup" className="auth-switch-link text-decoration-none fw-semibold">
                    Create an account
                  </Link>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;