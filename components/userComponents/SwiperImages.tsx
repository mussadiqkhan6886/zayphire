'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperImages = ({ images }: { images: string[] }) => {
  const [validImages, setValidImages] = useState<string[]>([]);

  useEffect(() => {
    const checkImages = async () => {
      const checks = await Promise.all(
        images.map(async (url) => {
          try {
            const res = await fetch(url, { method: 'HEAD' });
            return res.ok ? url : null;
          } catch {
            return null;
          }
        })
      );
      setValidImages(checks.filter((url): url is string => Boolean(url)));
    };

    checkImages();
  }, [images]);

  return (
    <Swiper className="md:h-[90vh] h-screen w-full">
      {validImages.map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            src={image}
            alt="image of clothes"
            width={240}
            height={210}
            className="w-full h-full object-cover"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImages;
