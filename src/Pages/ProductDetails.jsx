import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";

import photo1 from "../assets/img/chil with toys.jpg";
import photo2 from "../assets/img/baby camera.jpg";
import photo3 from "../assets/img/Silicone Printed Bibs - Rainbow.jpg";
import photo4 from "../assets/img/yellow sun.jpg";
import photo5 from "../assets/img/Wooden Boys bed.jpg";
import photo6 from "../assets/img/bottels.jpg";

const products = [
  {
    id: 1,
    tag: "Sale",
    category: "SOFT TOYS",
    name: "Mr Bear Baby Toy",
    price: "$69.00",
    oldPrice: "$80.00",
    rating: 4.8,
    reviews: 124,
    img: photo1,
    description:
      "Soft and premium teddy bear toy specially designed for babies and kids.",
  },

  {
    id: 2,
    tag: "New",
    category: "TOYS & BOOKS",
    name: "Baby Camera",
    price: "$70.00",
    rating: 4.7,
    reviews: 98,
    img: photo2,
    description:
      "Cute baby camera toy with safe plastic material and smooth finishing.",
  },

  {
    id: 3,
    category: "ACCESSORIZE",
    name: "Light Baby Bib",
    price: "$80.00",
    rating: 4.6,
    reviews: 76,
    img: photo3,
    description:
      "Comfortable silicone baby bib with waterproof quality.",
  },

  {
    id: 4,
    category: "TOYS & BOOKS",
    name: "Yellow Sun Toy",
    price: "$60.00",
    rating: 4.5,
    reviews: 88,
    img: photo4,
    description:
      "Beautiful yellow sun soft toy for kids.",
  },

  {
    id: 5,
    tag: "New",
    category: "EQUIPMENT",
    name: "Premium Wood Bed",
    price: "$320.00",
    rating: 4.9,
    reviews: 210,
    img: photo5,
    description:
      "Luxury premium wooden baby bed with modern design.",
  },

  {
    id: 6,
    category: "BOTTLES",
    name: "Candy Milk Bottle",
    price: "$20.00",
    rating: 4.4,
    reviews: 45,
    img: photo6,
    description:
      "Baby feeding milk bottle made with BPA-free material.",
  },
];

const ProductDetails = () => {
const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Product Not Found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (

    <div className="container py-5">

      <div className="row align-items-center g-5">

        {/* Left Image */}
        <div className="col-lg-6">

          <img
            src={product.img}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />

        </div>

        {/* Right Content */}
        <div className="col-lg-6">

          {/* Category */}
          <p className="text-uppercase text-muted small mb-2">
            {product.category}
          </p>

          {/* Name */}
          <h1 className="fw-bold mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="d-flex align-items-center gap-2 mb-3">

            <div className="text-warning fs-5">
              ★★★★★
            </div>

            <span className="text-muted">
              {product.rating} ({product.reviews} Reviews)
            </span>

          </div>

          {/* Price */}
          <div className="mb-4">

            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through me-3 fs-5">
                {product.oldPrice}
              </span>
            )}

            <span className="fw-bold fs-3 text-dark">
              {product.price}
            </span>

          </div>

          {/* Description */}
          <p className="text-muted lh-lg">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-4">

            <h5 className="fw-bold mb-3">
              Features
            </h5>

            <ul className="product-features">

              <li>Premium Quality Material</li>
              <li>Safe For Babies & Kids</li>
              <li>Comfortable & Lightweight</li>
              <li>Modern Stylish Design</li>
              <li>Long Lasting Durability</li>

            </ul>

          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 flex-wrap">
<button
  className="btn btn-dark px-4 py-2"
  onClick={() => {

    addToCart(product);

    toast.success("Product Added To Cart");

  }}
>
  Add To Cart
</button>

            <button className="btn btn-warning px-4 py-2">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;