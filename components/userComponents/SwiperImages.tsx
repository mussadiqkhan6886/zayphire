'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperImages = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-[320px] bg-gray-100">
        <Image
          src="/placeholder.png"
          alt="No image"
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[320px]">
      <Swiper className="h-full w-full">
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[320px]">
              <Image
                src={image}
                alt="product image"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImages;