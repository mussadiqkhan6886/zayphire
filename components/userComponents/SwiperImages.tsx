'use client';

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

const SwiperImages = ({images}: {images: string[]}) => {
  return (
    <Swiper
        className="h-screen w-full"
      >
         {images.map((image, i) => (
             <SwiperSlide key={i}>
                <Image priority={true} src={image} alt='image of clothes' width={240} height={280} className='w-full h-full' />
            </SwiperSlide>
         ))}
      </Swiper>
  )
}

export default SwiperImages
