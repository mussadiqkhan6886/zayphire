"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import Footer from "./Footer";

const Men = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        direction="vertical" // 👈 Vertical swiper
        modules={[Mousewheel, Keyboard]} // add Keyboard
        mousewheel // scroll with mousewheel
        keyboard={{ enabled: true }} // 👈 enable keyboard navigation
        className="h-screen w-full"
      >
        <SwiperSlide>
          <Image
            className="w-full h-screen object-cover"
            width={1000}
            height={1000}
            src="/main (3).jpg"
            alt="main"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-screen object-cover"
            width={1000}
            height={1000}
            src="/main (2).jpg"
            alt="main"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-screen object-cover"
            width={1000}
            height={1000}
            src="/main (1).jpg"
            alt="main"
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
