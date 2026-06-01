import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Mail, Lock, ShoppingCart, ArrowRight, Loader2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Smooth loading transition
      toast.success("Welcome back! Login Successful.");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with the server!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card-compact">
        
        {/* Brand Header */}
        <div className="text-center mb-4">
          <div className="brand-logo justify-content-center mb-2">
            <ShoppingCart className="brand-icon" size={26} />
            <span className="fw-bold tracking-wider ms-2">E-SHOP</span>
          </div>
          <h3 className="fw-bold text-dark mb-1">Welcome Back</h3>
          <p className="text-muted small">Enter your credentials to access your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
          
          {/* Email Input */}
          <div className="form-group custom-input-group">
            <label className="form-label small text-muted fw-semibold mb-1">Email Address</label>
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
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label small text-muted fw-semibold mb-0">Password</label>
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

          {/* Remember Me */}
          <div className="form-check custom-checkbox my-1">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label text-muted small" htmlFor="rememberMe">
              Keep me logged in
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="btn btn-login-action w-100 py-2.5 mt-1 fw-semibold d-flex align-items-center justify-content-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Processing...
              </>
            ) : (
              <>
                Sign In <ArrowRight size={18} className="arrow-icon" />
              </>
            )}
          </button>

          {/* Footer Redirect */}
          <div className="text-center mt-3 pt-2 border-top">
            <span className="text-muted small">Don't have an account? </span>
            <Link to="/signup" className="auth-switch-link text-decoration-none fw-semibold small">
              Create one
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;