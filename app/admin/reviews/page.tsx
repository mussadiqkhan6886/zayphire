'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("/api/review");
      setReviews(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = async (id: string) => {

    if(!confirm("Are you sure you want to delete this review?")) return;
    try {
      await axios.delete(`/api/review/${id}`);

      setReviews(prev => prev.filter(review => review._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">All Reviews</h1>

      {loading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map(rev => (
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
            <button
                onClick={() => deleteReview(rev._id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
              
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Page;
