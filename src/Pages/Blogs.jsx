// Blogs.jsx

import React from "react";


const blogData = [
  {
    id: 1,
    date: "12",
    month: "JUN",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop",
    title:
      "Incorporate the playspace for your kids within your living space",
    desc:
      "Premium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc.",
  },

  {
    id: 2,
    date: "17",
    month: "JUN",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    title:
      "Nurturing and growing a healthy bond between mother and child",
    desc:
      "Premium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc.",
  },

  {
    id: 3,
    date: "20",
    month: "JUN",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
    title:
      "Siblings and their relationship & differences when growing together",
    desc:
      "Premium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc.",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-section py-5">

      <div className="container">

        {/* Top Banner */}
        <div className="offer-banner d-flex justify-content-between align-items-center px-4">
          <h5 className="m-0">
            SHOPPING OFFERS & PRODUCTS INFO
          </h5>

          <button className="btn shop-btn">
            SHOP NOW
          </button>
        </div>

        {/* Blog Area */}
        <div className="row mt-5">

          {/* Left Side */}
          <div className="col-lg-8">

            {blogData.map((item) => (
              <div
                className="blog-card d-flex flex-column flex-md-row mb-4"
                key={item.id}
              >

                {/* Image */}
                <div className="blog-img position-relative">

                  <img
                    src={item.image}
                    alt="blog"
                    className="img-fluid"
                  />

                  {/* Date */}
                  <div className="date-box">
                    <h6>{item.date}</h6>
                    <span>{item.month}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="blog-content ms-md-4 mt-3 mt-md-0">

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <a href="/">READ MORE</a>

                </div>
              </div>
            ))}
          </div>

          {/* Right Side Banner */}
          <div className="col-lg-4">

            <div className="right-banner">

              <div className="overlay-content">

                <h2>
                  STYLING TIPS &
                  <br />
                  SHOPPING INSPO
                </h2>

                <button className="btn read-btn mt-4">
                  READ MORE
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-text text-center">

          <p>WELCOME TO PLAYGROW</p>

          <h1>YOUR DREAM BABY SHOP</h1>

          <div className="mt-4">

            <button className="btn shop-btn me-3">
              SHOP NOW
            </button>

            <button className="btn read-btn">
              READ MORE
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Blogs;