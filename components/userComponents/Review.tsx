'use client';

import React, { useEffect, useState } from 'react';
import { instrumentSerif } from '@/lib/fonts/font';
import { motion, AnimatePresence } from "framer-motion";
import useView from '@/hooks/useView';

interface ReviewItem {
  _id: string;
  name: string;
  message: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setView } = useView();

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/review');
      if (res.ok) {
        const {data} = await res.json();
        setReviews(data);
      }
    } catch (error) {
      console.error("Failed to load reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', message: '' });
        setIsModalOpen(false);
        fetchReviews(); // Refresh list
        alert("Review Added")
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="relative my-27 bg-main py-10 text-light px-6">
      <div className='flex max-w-5xl mx-auto justify-between items-center'>
      <motion.h4 
        onViewportEnter={() => setView(true)} 
        onViewportLeave={() => setView(false)} 
        className={`${instrumentSerif.className} text-4xl mb-4 text-center`}
      >
        Customer Reviews
      </motion.h4>

      <div className="flex justify-center mb-10">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="border border-light/50 px-6 py-2 rounded-full hover:bg-light hover:text-main transition-all uppercase text-xs tracking-widest"
        >
          Write a Review
        </button>
      </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse border border-light/10 p-6 rounded-lg bg-white/5 h-40" />
          ))
        ) : reviews.length > 0 ? (
          reviews.map((rev) => (
            <div key={rev._id} className="border border-light/20 p-6 rounded-lg bg-white/5">
              <p className="italic text-lg mb-4 text-light/90">"{rev.message}"</p>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-4 bg-light/50"></span>
                <p className="font-bold uppercase tracking-wider text-sm">{rev.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center opacity-50">No reviews yet.</p>
        )}
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="absolute inset-0 top-10 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 h-screen bg-black/50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-zinc-200 border border-light/20 p-8 rounded-2xl w-full max-w-md shadow-2xl"
            >
              <h5 className={`${instrumentSerif.className} text-3xl mb-6`}>Leave a Review</h5>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  required
                  placeholder="Your Name"
                  className="bg-transparent border-b border-light/20 py-2 focus:border-light outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <textarea 
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="bg-transparent border border-light/20 p-3 rounded-lg focus:border-light outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <div className="flex justify-end gap-4 mt-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="text-sm opacity-50 hover:opacity-100">Cancel</button>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="bg-light text-main px-6 py-2 rounded-lg font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Post Review'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewSection;