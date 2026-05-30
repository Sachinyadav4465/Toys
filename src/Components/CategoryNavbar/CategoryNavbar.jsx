import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  "SHOW ALL",
  "ACCESSORIZE",
  "BOTTLES",
  "EQUIPMENT",
  "SOFT TOYS",
  "TOYS & BOOKS",
];

const CategoryNavbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("SHOW ALL");
  const location = useLocation();

  // URL ke change hote hi active category automatic select ho jayegi
  useEffect(() => {
    const currentPath = location.pathname.split("/").pop(); // URL se last part nikalega
    
    if (location.pathname === "/" || currentPath === "show-all") {
      setSelectedCategory("SHOW ALL");
    } else {
      const matched = categories.find(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === currentPath
      );
      if (matched) setSelectedCategory(matched);
    }
  }, [location]);

  return (
    <div className="category-navbar-bg bg-light py-3 border-bottom shadow-sm">
      <div className="container">
        
        {/* Mobile Dropdown View */}
        <div className="d-lg-none">
          <div
            className="category-dropdown-header d-flex align-items-center justify-content-between p-2 border rounded bg-white"
            style={{ cursor: "pointer" }}
            onClick={() => setShowCategory(!showCategory)}
          >
            <h5 className="m-0 fw-bold flex-grow-1 text-center">
              Category: {selectedCategory}
            </h5>
            <FaChevronDown
              className={`dropdown-arrow ${showCategory ? "rotate-arrow" : ""}`}
            />
          </div>
          
          {showCategory && (
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              {categories.map((item, i) => {
                const path = item === "SHOW ALL" ? "/" : `/category/${item.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <Link
                    key={i}
                    to={path}
                    className="text-decoration-none"
                    onClick={() => setShowCategory(false)}
                  >
                    <button 
                      className={`category-btn2 btn btn-outline-secondary btn-sm ${selectedCategory === item ? "active-category" : ""}`}
                    >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="d-none d-lg-flex flex-wrap justify-content-center gap-3">
          {categories.map((item, i) => {
            const path = item === "SHOW ALL" ? "/" : `/category/${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={i}
                to={path}
                className="text-decoration-none"
              >
                <button 
                  className={`category-btn2 btn btn-outline-primary ${selectedCategory === item ? "active-category" : ""}`}
                >
                  {item}
                </button>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default CategoryNavbar;