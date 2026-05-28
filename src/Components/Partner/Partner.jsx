import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/free-mode";

const Partners = () => {

  const logos = [
    { name: "SWEET CHILDHOOD", bgClass: "bg-rose" },
    { name: "LILIBULLE", bgClass: "bg-sage" },
    { name: "LOUIS & EMILY", bgClass: "bg-cream" },
    { name: "LE PETIT MONDE", bgClass: "bg-blue" },
    { name: "L'OISELET", bgClass: "bg-clay" },
    { name: "LEMON TREE", bgClass: "bg-mint" },
     { name: "SWEET CHILDHOOD", bgClass: "bg-rose" },
    { name: "LILIBULLE", bgClass: "bg-sage" },
    { name: "LOUIS & EMILY", bgClass: "bg-cream" },
    { name: "LE PETIT MONDE", bgClass: "bg-blue" },
    { name: "L'OISELET", bgClass: "bg-clay" },
    { name: "LEMON TREE", bgClass: "bg-mint" }
  ];

  return (
    <section className="partners-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h5
            className="fw-bold m-0"
            style={{
              letterSpacing: "2px",
              color: "var(--pg-dark)"
            }}
          >
            OUR BRANDS
          </h5>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          speed={2500}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          className="brand-swiper-container"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className={`logo-box ${logo.bgClass}`}>
                <h6 className="logo-text m-0">
                  {logo.name}
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Partners;