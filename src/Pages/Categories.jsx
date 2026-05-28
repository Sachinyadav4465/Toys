import React from "react";
import { Link } from "react-router-dom";

import photo1 from "../../src/assets/img/chil with toys.jpg";
import photo2 from "../../src/assets/img/baby camera.jpg";
import photo3 from "../../src/assets/img/Silicone Printed Bibs - Rainbow.jpg";
import photo4 from "../../src/assets/img/yellow sun.jpg";
import photo5 from "../../src/assets/img/Wooden Boys bed.jpg";
import photo6 from "../../src/assets/img/bottels.jpg";

const categories = [
  "SHOW ALL",
  "ACCESSORIZE",
  "BOTTLES",
  "EQUIPMENT",
  "SOFT TOYS",
  "TOYS & BOOKS",
];

const products = [
  {
    id: 1,
    tag: "Sale",
    category: "SOFT TOYS",
    name: "Mr Bear Baby Toy",
    price: "$69.00",
    oldPrice: "$80.00",
    img: photo1,
  },
  {
    id: 2,
    tag: "New",
    category: "TOYS & BOOKS",
    name: "Baby Camera",
    price: "$70.00",
    img: photo2,
  },
  {
    id: 3,
    category: "ACCESSORIZE",
    name: "Light Baby Bib",
    price: "$80.00",
    img: photo3,
  },
  {
    id: 4,
    category: "TOYS & BOOKS",
    name: "Yellow Sun Toy",
    price: "$60.00",
    img: photo4,
  },
  {
    id: 5,
    tag: "New",
    category: "EQUIPMENT",
    name: "Premium Wood Bed",
    price: "$320.00",
    img: photo5,
  },
  {
    id: 6,
    category: "BOTTLES",
    name: "Candy Milk Bottle",
    price: "$20.00",
    img: photo6,
  },
];

const LatestCollection = () => {
  return (
    <div className="container py-5">

      {/* Title */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">LATEST COLLECTION</h4>
      </div>

      {/* Categories */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
        {categories.map((item, i) => (
          <span key={i} className="small text-uppercase category-link">
            {item}
          </span>
        ))}
      </div>

      {/* Products */}
      <div className="row g-4">

        {products.map((item) => (

          <div className="col-lg-4 col-md-6" key={item.id}>

            <div className="card border-0 shadow-sm p-3 text-center position-relative product-card">

              {/* Tag */}
              {item.tag && (
                <span className="badge bg-success position-absolute top-0 start-0 m-2">
                  {item.tag}
                </span>
              )}

              {/* Image Click */}
              <Link
                to={`/product/${item.id}`}
                className="text-decoration-none"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid mb-3 product-img"
                />
              </Link>

              {/* Category */}
              <small className="text-muted">
                {item.category}
              </small>

              {/* Name */}
              <h6 className="fw-bold mt-1">
                {item.name}
              </h6>

              {/* Price */}
              <div className="mb-3">

                {item.oldPrice && (
                  <span className="text-muted text-decoration-line-through me-2">
                    {item.oldPrice}
                  </span>
                )}

                <span className="fw-bold text-dark">
                  {item.price}
                </span>

              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-2 flex-wrap">

               

                <Link
                  to={`/product/${item.id}`}
                  className="btn btn-warning px-3"
                >
                  View Details
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default LatestCollection;