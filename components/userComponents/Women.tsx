import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import Footer from './Footer';
import { instrumentSerif } from '@/lib/fonts/font';

const Women = () => {
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
          <h1
            className={`${instrumentSerif.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            text-[60px] md:text-[100px] lg:text-[120px] text-wrap sm:text-nowrap font-bold text-center text-white`}
          >
            COMING SOON
          </h1>
          <video playsInline controls={false} muted loop autoPlay className='w-full h-screen object-cover'  width={1000} height={1000} src={"/women.webm"}  />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Women
