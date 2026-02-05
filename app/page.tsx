'use client';

import Categories from '@/components/userComponents/Categories'
import Header from '@/components/userComponents/Header'
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";

import Whatsapp from '@/components/userComponents/Whatsapp';
import Men from '@/components/userComponents/Men';

const Home = () => {
  return (
    <div>
      <Whatsapp />
      <Header/>
      <main className='h-screen'>
        <Swiper modules={[Navigation]} navigation={true} slidesPerView={1} pagination={{clickable:true}}>
          <SwiperSlide>
              <Men />
            <Categories />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>  
  )
}

export default Home
