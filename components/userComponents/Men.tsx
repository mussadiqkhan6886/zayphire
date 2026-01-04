"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";
import Footer from "./Footer";
import Link from "next/link";

const Men = () => {
  return (
    <div key={"men"} className="h-screen w-full">
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
          <Link draggable={false} href="collection/men-fabric">
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
            src="/men.webm"
            autoPlay
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link draggable={false} href={"collection/men-fragrance"}>
          <video
          playsInline
          controls={false}
          muted
          loop
            id="fragrances"
            className="w-full h-screen object-cover object-[90%_center]"
            width={1000}
            height={1000}
            src="/menperfume.webm"
            autoPlay
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Men;
