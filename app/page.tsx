'use client';

import Categories from '@/components/userComponents/Categories'
import Header from '@/components/userComponents/Header'
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";

import { Suspense, lazy } from 'react'
import Whatsapp from '@/components/userComponents/Whatsapp';

const Men = lazy(() => import('@/components/userComponents/Men'))
// const Women = lazy(() => import('@/components/userComponents/Women'))
// const Kids = lazy(() => import('@/components/userComponents/Kids'))

const Home = () => {
  return (
    <div>
      <Whatsapp />
      <Header/>
      <main className='h-screen'>
        <Swiper modules={[Navigation]} navigation={true} slidesPerView={1} pagination={{clickable:true}}>
          <SwiperSlide>
            <Suspense fallback={<div>Loading...</div>}>
              <Men />
            </Suspense>
            <Categories />
          </SwiperSlide>
          {/* <SwiperSlide>
             <Suspense fallback={<div>Loading...</div>}>
              <Women />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide>
             <Suspense fallback={<div>Loading...</div>}>
              <Kids />
            </Suspense>
          </SwiperSlide> */}
       
        </Swiper>
      </main>
    </div>  
  )
}

export default Home
