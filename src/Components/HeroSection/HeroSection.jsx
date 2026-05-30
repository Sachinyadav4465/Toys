import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import img1 from "../../assets/img/baby camera.jpg";
import img2 from "../../assets/img/bottels.jpg";
import img3 from "../../assets/img/chil with toys.jpg";

// Aapki banner image jo background mein lagegi
import bannerImg from "../../assets/img/Banner-2.jpg"; 



const categories = [
  "Cribs",
  "Accessories",
  "Baby Equipment",
  "Bags",
  "Bottles",
  "Carriages",
  "Equipment",
  "New",
  "Other",
  "Soft Toys",
  "Specials",
  "Toys",
  "Toys & Books",
];

const cards = [
  { title: "BEST DEALS", img: img1 },
  { title: "PRODUCTS", img: img2 },
  { title: "ON SALE", img: img3 },
];

const Hero = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="container py-4">
      {/* Top Section */}
      <div className="row g-4">
        
        {/* Categories Sidebar */}
        <div className="col-12 col-lg-3">
          <div className="hero-category-box p-3">
            
            {/* Header: Clickable on all screens */}
            <div
              className="hero-category-header d-flex justify-content-between align-items-center"
              onClick={() => setShowCategory(!showCategory)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="fw-bold m-0" style={{ fontSize: "16px", color: "#212121" }}>
                All Categories
              </h5>
              <FaChevronDown
                className={`arrow-icon ${showCategory ? "rotate-arrow" : ""}`}
              />
            </div>

            {/* List: Desktop aur mobile dono par default band rahega */}
            <div className={`category-list flex-column gap-1 mt-3 ${showCategory ? "d-flex" : "d-none"}`}>
              {categories.map((item, index) => (
                <button key={index} className="hero-category-btn">
                  {item}
                </button>
              ))}
            </div>

          </div>
        </div> {/* Sidebar Column Perfect Close Here */}

        {/* Main Banner */}
        <div className="col-12 col-lg-9">
          <div 
            className="banner-section"
            style={{ 
              backgroundImage: `url(${bannerImg})`,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            <div className="banner-content">
              <p className="text-muted fw-bold small mb-2" style={{ letterSpacing: "1px" }}>
                💓Meet you soon Beta💓
              </p>
              <h1 className="fw-bold display-5 text-dark" style={{ lineHeight: "1.2" }}>
                JUHI 💓💓💓💓 <br /> I love you my wife
              </h1>
              <button className="btn btn-warning px-4 py-2 mt-3 fw-bold text-white" style={{ background: "#fb641b", border: "none", borderRadius: "2px", textTransform: "uppercase" }}>
                READ MORE
              </button>
            </div>
          </div>
        </div> {/* Banner Column Perfect Close Here */}

      </div> {/* Top Row Close */}

      {/* Bottom Triple Cards */}
      <div className="row mt-4 g-3">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="hero-bottom-card">
              
              {/* Text Left */}
              <div className="hero-overlay-text">
                <h5 className="fw-bold m-0">{card.title}</h5>
                <small className="text-primary fw-bold" style={{ cursor: "pointer", fontSize: "13px" }}>
                  Shop Now
                </small>
              </div>

              {/* Image Right */}
              <img
                src={card.img}
                alt={card.title}
                className="hero-card-img"
              />

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;