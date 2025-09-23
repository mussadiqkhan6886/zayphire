"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";
import Footer from "./Footer";

const Men = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        direction="vertical" // 👈 Vertical swiper
        modules={[Mousewheel, Keyboard, Pagination]} // add Keyboard
        mousewheel // scroll with mousewheel
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }} // 👈 enable keyboard navigation
        className="h-screen w-full"
        style={{scrollBehavior: "smooth"}}
      >
        <SwiperSlide>
          <video
          muted 
          loop
          preload="metadata"
          playsInline
  controls={false}
            id="main"
            className="w-full h-screen object-cover"
            width={1000}
            height={1000}
            src="/men.mp4"
            autoPlay
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
          playsInline
  controls={false}
          muted
          loop
            id="fragrances"
            className="w-full h-screen object-cover object-[90%_center]"
            width={1000}
            height={1000}
            src="/menperfume.mp4"
            autoPlay
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
          playsInline
  controls={false}
          muted
          loop
            id="fabrics"
            className="w-full h-screen object-cover"
            width={1000}
            height={1000}
            src="/fabric.mp4"
            autoPlay
          />
        
        </SwiperSlide>
        <SwiperSlide>
            <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Men;
