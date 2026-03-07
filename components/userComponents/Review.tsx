'use client';

import React from 'react'
import Link from 'next/link';
import { instrumentSerif } from '@/lib/fonts/font';
import ReviewsSlider from './ReviewsSwiper';
import { ReviewSchema } from '@/lib/models/ReviewSchema';
import { connectDB } from '@/lib/config/database';

const Review = async () => {

  

  return (
    <section id='reviews' className="my-24 bg-main py-10 text-light px-6">
      <h4 className={`${instrumentSerif.className}`}>What Customers Say About Us</h4>
      <ReviewsSlider data={reviews} />
    </section>
  )
}
export default Review
