import React from 'react';
import { instrumentSerif } from '@/lib/fonts/font';

// Function to fetch data from your new API
async function getReviews() {
  // Use an absolute URL for server-side fetches if necessary, 
  // but usually relative works in Next.js Server Components
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/review`, {
    cache: 'no-store', // Ensures you get fresh data on every request
  });

  if (!res.ok) return [];
  return res.json();
}

const ReviewSection = async () => {
  const reviews = await getReviews();

  return (
    <section id="reviews" className="my-24 bg-main py-10 text-light px-6">
      <h4 className={`${instrumentSerif.className} text-4xl mb-10 text-center`}>
        Customer Reviews
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews?.length > 0 ? (
          reviews.map((rev: any) => (
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