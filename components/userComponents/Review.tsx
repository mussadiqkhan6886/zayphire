'use client';

import React, { useEffect, useState } from 'react';
import { instrumentSerif } from '@/lib/fonts/font';
import {motion} from "framer-motion"
import useView from '@/hooks/useView';

interface ReviewItem {
  _id: string;
  name: string;
  message: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  
   const {setView} = useView()

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/review');
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="reviews" className="my-24 bg-main py-10 text-light px-6">
      <motion.h4 onViewportEnter={() => setView(true)} onViewportLeave={() => setView(false)} className={`${instrumentSerif.className} text-4xl mb-10 text-center`}>
        Customer Reviews
      </motion.h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {loading ? (
          // Simple loading placeholders
          [...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse border border-light/10 p-6 rounded-lg bg-white/5 h-40" />
          ))
        ) : reviews.length > 0 ? (
          reviews.map((rev) => (
            <div 
              key={rev._id} 
              className="border border-light/20 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <p className="italic text-lg mb-4">"{rev.message}"</p>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-4 bg-light/50"></span>
                <p className="font-bold uppercase tracking-wider text-sm">
                  {rev.name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center opacity-50">No reviews yet.</p>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;