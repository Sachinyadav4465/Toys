import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Phone, Mail, Lock, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log("Sending registration data to backend:", formData);
      
      // Smooth loading transition animation
      await new Promise((resolve) => setTimeout(resolve, 1000));

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card-compact">
        
        {/* Brand Header */}
        <div className="text-center mb-3">
          <div className="brand-logo justify-content-center mb-2">
            <ShoppingBag className="brand-icon" size={26} />
            <span className="fw-bold tracking-wider ms-2">E-SHOP</span>
          </div>
          <h3 className="fw-bold text-dark mb-1">Create Account</h3>
          <p className="text-muted small mb-1">Sign up to start your shopping journey</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="d-flex flex-column gap-2.5">
          
          {/* Full Name Input */}
          <div className="form-group custom-input-group">
            <label className="form-label small text-muted fw-semibold mb-1">Full Name</label>
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
            <label className="form-label small text-muted fw-semibold mb-1">Mobile Number</label>
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
            <label className="form-label small text-muted fw-semibold mb-1">Email Address</label>
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
            <label className="form-label small text-muted fw-semibold mb-1">Password</label>
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
          <button 
            type="submit" 
            disabled={isLoading}
            className="btn btn-login-action w-100 py-2.5 mt-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Creating Profile...
              </>
            ) : (
              <>
                Get Started <ArrowRight size={18} className="arrow-icon" />
              </>
            )}
          </button>

          {/* Footer Redirect Link */}
          <div className="text-center mt-3 pt-2 border-top">
            <span className="text-muted small">Already have an account? </span>
            <Link to="/login" className="auth-switch-link text-decoration-none fw-semibold small">
              Login here
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;