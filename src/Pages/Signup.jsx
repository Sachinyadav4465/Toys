import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Signup = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // BACKEND INTEGRATION READY: Jab backend banega toh ye code active ho jayega
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

      // Abhi ke liye temporary success alert
      toast.success("UI Tested! Form Data Captured. Ready for Backend API.");
      navigate("/login");

    } catch (error) {
      toast.error("Failed to connect to backend server!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="row g-0">
          
          <div className="col-md-5 auth-sidebar d-none d-md-flex" style={{ background: "#1e3a8a" }}>
            <div>
              <h3>Looks like you're new here!</h3>
              <p className="mt-3">Sign up with your details to get started on your shopping journey.</p>
            </div>
            <div className="text-center">
              <span style={{ fontSize: "80px" }}>🛍️</span>
            </div>
          </div>

          <div className="col-md-7">
            <div className="auth-form-container" style={{ padding: "40px" }}>
              <form onSubmit={handleSignup} className="d-flex flex-column gap-3">
                
                <div className="auth-input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Full Name" 
                    required 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="auth-input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Mobile Number" 
                    required 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="auth-input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter Email Address" 
                    required 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="auth-input-group">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Create Password" 
                    required 
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn auth-btn-orange mt-2">
                  CONTINUE
                </button>

                <div className="text-center mt-3">
                  <span className="text-muted small">Already have an account? </span>
                  <Link to="/login" className="auth-switch-text">Login here</Link>
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