import React from "react";

import img1 from "../../assets/img/baby camera.jpg";
import img2 from "../../assets/img/bottels.jpg";
import img3 from "../../assets/img/chil with toys.jpg";

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
  return (
    <div className="container py-4">

      {/* Top Section */}
      <div className="row g-4">

        {/* Categories */}
        <div className="col-12 col-lg-3">

          <div className="category-box p-4">

            <h5 className="fw-bold mb-4">
              Categories
            </h5>

            <select className="form-select category-dropdown">

              <option>Select Category</option>

              {categories.map((item, index) => (
                <option key={index}>
                  {item}
                </option>
              ))}

            </select>

          </div>

        </div>

        {/* Banner */}
        <div className="col-12 col-lg-9">

          <div className="banner-section">

            <div className="banner-content">

              <p className="small-text">
                NEW COLLECTION
              </p>

              <h1 className="fw-bold mt-4">
                MEET TEDDY <br /> THE BEAR
              </h1>

              <button className="btn btn-warning px-4 py-2 mt-3">
                READ MORE
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Cards */}
      <div className="row mt-4 g-4">

        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>

            <div className="bottom-card position-relative overflow-hidden">

              <img
                src={card.img}
                alt=""
                className="img-fluid card-img"
              />

              <div className="overlay-text">

                <h5 className="fw-bold">
                  {card.title}
                </h5>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Hero;