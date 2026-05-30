import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // BACKEND INTEGRATION READY: Jab backend banega toh ye code active ho jayega
    try {
      console.log("Sending data to backend login API:", { email, password });
      
      /* const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      */

      // Abhi ke liye temporary success alert
      toast.success("UI Tested! Ready for Backend API Connection.");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");

    } catch (error) {
      toast.error("Something went wrong with backend server!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="row g-0">
          
          <div className="col-md-5 auth-sidebar d-none d-md-flex">
            <div>
              <h3>Login</h3>
              <p className="mt-3">Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="text-center">
              <span style={{ fontSize: "80px" }}>🛒</span>
            </div>
          </div>

          <div className="col-md-7">
            <div className="auth-form-container">
              <form onSubmit={handleLogin} className="d-flex flex-column gap-4">
                
                <div className="auth-input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter Email Address" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="auth-input-group">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter Password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <p className="text-muted small m-0">
                  By continuing, you agree to our Terms of Use and Privacy Policy.
                </p>

                <button type="submit" className="btn auth-btn-orange">
                  Login
                </button>

                <div className="text-center mt-3">
                  <span className="text-muted small">New to website? </span>
                  <Link to="/signup" className="auth-switch-text">Create an account</Link>
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