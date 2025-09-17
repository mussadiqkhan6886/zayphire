'use client';

import Categories from '@/components/userComponents/Categories'
import Header from '@/components/userComponents/Header'
import Kids from '@/components/userComponents/Kids'
import Men from '@/components/userComponents/Men'
import Women from '@/components/userComponents/Women'
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Header/>
      <main className='h-screen'>
        <Swiper modules={[Navigation]} navigation={true} slidesPerView={1} pagination={{clickable:true}}>
          <SwiperSlide>
            <Men />
            <Categories cat='MEN' />
          </SwiperSlide>
          <SwiperSlide>
            <Women />
            <Categories cat='WOMEN' />
          </SwiperSlide>
          <SwiperSlide>
            <Kids />
            <Categories cat='KIDS' />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>  
  )
}

export default Home
