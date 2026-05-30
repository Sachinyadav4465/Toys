import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Phone, Mail, Lock, ShoppingBag, ArrowRight } from "lucide-react"; // Premium Icons

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Sending registration data to backend:", formData);

      /*
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      */

      toast.success("Account created successfully! Please login.");
      navigate("/login");

    } catch (error) {
      toast.error("Failed to connect to backend server!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="row g-0 h-100">
          
          {/* Left Sidebar - Dynamic Gradient Matching Login */}
          <div className="col-md-5 auth-sidebar d-none d-md-flex flex-column justify-content-between p-5 text-white">
            <div>
              <div className="brand-logo mb-4">
                <ShoppingBag className="me-2" size={28} />
                <span>E-Shop</span>
              </div>
              <h2 className="fw-bold display-6">Join Us Today!</h2>
              <p className="text-white-50 mt-3 fs-6">
                Create an account with your details to get started on your ultimate shopping journey. Unlock rewards and trace your orders seamlessly.
              </p>
            </div>
            <div className="footer-note text-white-50 small">
              © 2026 E-Shop Inc. All rights reserved.
            </div>
          </div>

          {/* Right Section - Modern Sign Up Form */}
          <div className="col-md-7 d-flex align-items-center">
            <div className="auth-form-container p-4 p-sm-5 w-100">
              <div className="form-header mb-4">
                <h3 className="fw-bold text-dark">Create Account</h3>
                <p className="text-muted small">Fill up your credentials to create a new secure profile.</p>
              </div>

              <form onSubmit={handleSignup} className="d-flex flex-column gap-3">
                
                {/* Full Name Input */}
                <div className="form-group custom-input-group">
                  <label className="form-label small text-muted fw-semibold">Full Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Mobile Number Input */}
                <div className="form-group custom-input-group">
                  <label className="form-label small text-muted fw-semibold">Mobile Number</label>
                  <div className="input-wrapper">
                    <Phone className="input-icon" size={18} />
                    <input 
                      type="tel" 
                      className="form-control custom-input" 
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email Address Input */}
                <div className="form-group custom-input-group">
                  <label className="form-label small text-muted fw-semibold">Email Address</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input 
                      type="email" 
                      className="form-control custom-input" 
                      placeholder="name@company.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="form-group custom-input-group">
                  <label className="form-label small text-muted fw-semibold">Password</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type="password" 
                      className="form-control custom-input" 
                      placeholder="Minimum 8 characters" 
                      required 
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <button type="submit" className="btn btn-login-action w-100 py-2.5 mt-3 fw-semibold d-flex align-items-center justify-content-center gap-2">
                  Create Account <ArrowRight size={18} />
                </button>

                {/* Redirecting Link */}
                <div className="text-center mt-3">
                  <span className="text-muted small">Already have an account? </span>
                  <Link to="/login" className="auth-switch-link text-decoration-none fw-semibold">
                    Login here
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

export default Signup;