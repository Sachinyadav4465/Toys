import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yzjnz38",
        "template_89e8myd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "GqFvGZqLFoJgfwiqr"
      )
      .then(() => {
        toast.success("Message sent successfully ");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message ");
      });
  };

  return (
    <section className="contact-section py-5">
      <ToastContainer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916392377675?text=Hello%20I%20need%20help"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Feel free to contact us anytime
          </p>
        </div>

        <div className="row g-4">

          {/* LEFT SIDE */}
          <div className="col-lg-5 col-md-6">
            <div className="contact-info-card">

              <h4 className="fw-bold mb-4">Get in Touch</h4>

              {/* Address */}
              <div className="info-item">
                <i className="bi bi-geo-alt-fill icon"></i>
                <div>
                  <h6>Address</h6>
                  <p>Delhi, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item">
                <i className="bi bi-telephone-fill icon"></i>
                <div>
                  <h6>Phone</h6>
                  <p>+91 9876543210</p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item">
                <i className="bi bi-envelope-fill icon"></i>
                <div>
                  <h6>Email</h6>
                  <p>support@example.com</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/916392377675"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success w-100 mt-3"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Chat on WhatsApp
              </a>

              {/* MAP */}
              <div className="map-card mt-4">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.839!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0199d3b0c6c1%3A0x2b3c7c2b2f0a!2sDelhi%2C%20India!5e0!3m2!1sen!2sin"
                  loading="lazy"
                  allowFullScreen=""
                ></iframe>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-7 col-md-6">
            <div className="contact-form-card">

              <h4 className="fw-bold mb-3">Send Message</h4>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="form-control mb-3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button className="btn btn-submit w-100">
                  Send Message 
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;