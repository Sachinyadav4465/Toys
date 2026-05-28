

import React from "react";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row gy-5">

          {/* Company */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">COMPANY</h6>

            <ul className="footer-links">
              <li>About PlayGrow</li>
              <li>Our Experts</li>
              <li>Services & Prices</li>
              <li>Latest News</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Customers */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">CUSTOMERS</h6>

            <ul className="footer-links">
              <li>Read Our Advice</li>
              <li>Get In Touch</li>
              <li>Online Store</li>
              <li>Terms & Conditions</li>
              <li>Ask Away</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">SOCIAL MEDIA</h6>

            <ul className="footer-links social-links">

              <li>
                <FaTwitter className="me-2" />
                Twitter
              </li>

              <li>
                <FaInstagram className="me-2" />
                Instagram
              </li>

              <li>
                <FaFacebookF className="me-2" />
                Facebook
              </li>

              <li>
                <FaPinterestP className="me-2" />
                Pinterest
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">CONTACT</h6>

            <ul className="footer-links">
              <li>Monday to Friday 9 a.m - 5 p.m.</li>
              <li>012 34 567 8912</li>
              <li>123 45 678 8123</li>
              <li>playgrow@codeinteractive.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">

          {/* Logo */}
          <div className="footer-logo">
            <h2>
              <span>PLAY</span>GROW
            </h2>

            <p>BABY EQUIPMENT</p>
          </div>

          {/* Copyright */}
          <div className="copyright">
            © 2023 Code Interactive, All Rights Reserved
          </div>

          {/* Payment */}
          <div className="payment-methods">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="visa"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="mastercard"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
              alt="paypal"
            />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;