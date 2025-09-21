import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import Footer from './Footer';
import { instrumentSerif } from '@/lib/fonts/font';

const Kids = () => {
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
           <h1 className={`${instrumentSerif.className} text-[110px] font-bold absolute top-[40%] left-[25%] text-white `}>COMING SOON</h1>
          <video loop muted autoPlay className='w-full h-screen object-cover'  width={1000} height={1000} src={"/kids.mp4"} />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Kids
