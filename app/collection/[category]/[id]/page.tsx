import MayLike from '@/components/userComponents/MayLike'
import { instrumentSerif } from '@/lib/fonts/font'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const Product = async ({params}: {params: Promise<{id:string}>}) => {

  const id = (await params).id
  const res = await axios.get(`/api/products/${id}`)
  const data = res.data.product
  console.log(data)
  return (
    <main className="flex flex-col pt-24 px-6 lg:px-20">
      {/* Product Section */}
      <section className="flex flex-col md:flex-row gap-12">
        {/* Left: Product Image */}
        <div className="flex-shrink-0 flex items-center md:border-r md:border-gray-700 justify-center w-full md:w-[50%] md:pr-8 ">
          <Image
            src={"/main (2).jpg"}
            alt="Discovery Box"
            width={400}
            height={500}
            className="text-center"
          />
        </div>

        {/* Right: Product Info */}
        <section className="flex flex-col justify-center gap-6">
          {/* Title + SKU */}
          <div>
            <h1 className={`uppercase ${instrumentSerif.className} text-3xl font-bold tracking-wide`}>
              Discovery Box
            </h1>
            <p className="text-gray-400 text-[12px]">SKU: 12313131313</p>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-semibold text-gray-800">PKR 2399</h2>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab provident,
              laborum nemo unde, voluptatum, harum cum praesentium ipsum ullam aspernatur
              doloribus quod obcaecati placeat suscipit commodi pariatur eaque quos!
            </p>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <h4>
              <span className='font-semibold'>COLLECTION:</span> <span className='text-sm'>MAN-FABRICS</span>
            </h4>
            <h4>
              <span className='font-semibold'>QUANTITY:</span> <span className='text-sm'>1</span>
            </h4>
            <h4>
              <span className='font-semibold'>GENDER:</span> <span className='text-sm'>MEN</span>
            </h4>
          </div>

          {/* Add to Basket Button */}
          <button className="text-black cursor-pointer bg-white px-6 py-3 text-sm w-full border">
            Add to Basket
          </button>
        </section>
      </section>

      {/* May Like Section */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">You May Also Like</h2>
        <MayLike />
      </section>
    </main>
  )
}

export default Product
