import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

import photo1 from "../assets/img/chil with toys.jpg";
import photo2 from "../assets/img/baby camera.jpg";
import photo3 from "../assets/img/Silicone Printed Bibs - Rainbow.jpg";
import photo4 from "../assets/img/yellow sun.jpg";
import photo5 from "../assets/img/Wooden Boys bed.jpg";
import photo6 from "../assets/img/bottels.jpg";


// Products array updated with Flipkart values to match home/category page
const products = [
  {
    id: 1,
    tag: "Bestseller",
    isSponsored: true,
    category: "SOFT TOYS",
    name: "Mr Bear Baby Toy for Kids Infants New Born Baby Plush Toys",
    price: "₹534",
    oldPrice: "₹2,599",
    discount: "79% off",
    rating: "4.1",
    reviews: "69,590 Ratings & 4,210 Reviews",
    img: photo1,
    description: "Soft and premium teddy bear toy specially designed for babies and kids with non-toxic fabrics.",
  },
  {
    id: 2,
    tag: "New",
    isSponsored: true,
    category: "TOYS & BOOKS",
    name: "Baby Camera Digital Toy and Kids Educational Mini Camera",
    price: "₹148",
    oldPrice: "₹999",
    discount: "85% off",
    rating: "4.2",
    reviews: "1,290 Ratings & 110 Reviews",
    img: photo2,
    description: "Cute baby camera toy with safe plastic material, smooth finishing and dummy clicking sound.",
  },
  {
    id: 3,
    tag: "",
    isSponsored: false,
    category: "ACCESSORIZE",
    name: "Light Baby Bib - Silicone Printed Waterproof Bibs for Babies",
    price: "₹372",
    oldPrice: "₹1,299",
    discount: "71% off",
    rating: "4.0",
    reviews: "1,670 Ratings & 95 Reviews",
    img: photo3,
    description: "Comfortable silicone baby bib with waterproof quality, easy to wash, and food-grade premium silicone.",
  },
  {
    id: 4,
    tag: "Bestseller",
    isSponsored: false,
    category: "TOYS & BOOKS",
    name: "Yellow Sun Toy Kids Playground Indoor/Outdoor Creative Toy",
    price: "₹258",
    oldPrice: "₹2,499",
    discount: "89% off",
    rating: "4.3",
    reviews: "5,095 Ratings & 612 Reviews",
    img: photo4,
    description: "Beautiful bright yellow sun soft toy for kids room decor and interactive playful gaming.",
  },
  {
    id: 5,
    tag: "New",
    isSponsored: false,
    category: "EQUIPMENT",
    name: "Premium Wood Bed for Boys Toddler Luxury Wooden Bedroom Furniture",
    price: "₹3,200",
    oldPrice: "₹15,999",
    discount: "80% off",
    rating: "4.5",
    reviews: "890 Ratings & 45 Reviews",
    img: photo5,
    description: "Luxury premium wooden baby bed with modern design, polished edges and premium heavy load capacity.",
  },
  {
    id: 6,
    tag: "",
    isSponsored: false,
    category: "BOTTLES",
    name: "Candy Milk Bottle Premium Grade Anti-Colic Feed Bottles Pack of 1",
    price: "₹200",
    oldPrice: "₹999",
    discount: "80% off",
    rating: "4.1",
    reviews: "2,340 Ratings & 189 Reviews",
    img: photo6,
    description: "Baby feeding milk bottle made with 100% BPA-free material and anti-colic medical grade nipple.",
  },
];

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="product-details-box" style={{ background: "#fff", padding: "20px", borderRadius: "4px" }}>
        <div className="row g-5">
          
          {/* LEFT SIDE: IMAGE SECTON */}
          <div className="col-lg-5 text-center position-relative">
            {product.tag && (
              <span className="flipkart-bestseller-badge" style={{ top: "15px" }}>
                {product.tag}
              </span>
            )}
            <div className="details-img-box border p-3" style={{ borderRadius: "4px", background: "#fff" }}>
              <img
                src={product.img}
                alt={product.name}
                className="img-fluid details-img"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* RIGHT SIDE: FLIPKART STYLE DETAILS */}
          <div className="col-lg-7">
            {/* BRAND / CATEGORY */}
            <p className="text-uppercase fw-bold text-muted small m-0" style={{ letterSpacing: "0.5px" }}>
              {product.category}
            </p>

            {/* PRODUCT TITLE */}
            <h1 className="details-title-custom mt-1">{product.name}</h1>

            {/* RATING & REVIEWS ROW */}
            <div className="details-rating-row">
              <span className="details-green-badge">
                {product.rating} <FaStar className="ms-1" style={{ fontSize: "10px" }} />
              </span>
              <span className="details-reviews-text">{product.reviews}</span>
            </div>

            {/* FLIPKART PRICE CONTAINER */}
            <div className="details-price-container">
              <span className="details-new-price">{product.price}</span>
              {product.oldPrice && (
                <span className="details-old-price">{product.oldPrice}</span>
              )}
              {product.discount && (
                <span className="details-discount">{product.discount}</span>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-dark" style={{ fontSize: "15px", lineHeight: "1.5" }}>
              {product.description}
            </p>

            {/* AVAILABLE OFFERS (Flipkart Highlight) */}
            <div className="feature-box mt-4">
              <h5 className="offers-heading">Available Offers</h5>
              <ul className="flipkart-offers-list">
                <li>
                  <span className="offer-bold">Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card. <span className="text-primary fw-bold" style={{cursor:"pointer"}}>T&C</span>
                </li>
                <li>
                  <span className="offer-bold">Partner Offer</span> Buy 2 items, save extra 5% off on baby care products.
                </li>
              </ul>
            </div>

            {/* ACTION BUTTONS (Exact Flipkart Colors & Height) */}
            <div className="d-flex gap-3 flex-wrap mt-4">
              <button
                className="btn fk-btn fk-cart-btn flex-fill"
                onClick={() => {
                  addToCart(product);
                  toast.success("Product Added To Cart");
                }}
              >
                Add To Cart
              </button>

              <button className="btn fk-btn fk-buy-btn flex-fill">
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;