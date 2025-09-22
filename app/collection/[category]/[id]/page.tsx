import { instrumentSerif } from '@/lib/fonts/font'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import AddToCart from '@/components/userComponents/AddToCart'

const Product = async ({params}: {params: Promise<{id:string}>}) => {

  const id = (await params).id
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`)
  const data = res.data.product
  return (
    <main className="flex flex-col pt-24 px-6 lg:px-20">
      {/* Product Section */}
      <section className="flex flex-col md:flex-row gap-12">
        {/* Left: Product Image */}
        <div className="flex-shrink-0 flex items-center md:border-r md:border-gray-700 justify-center w-full md:w-[50%] md:pr-8 ">
          <Image
            src={data.images[0]}
            alt={data.name}
            width={400}
            height={500}
            className="text-center"
          />
        </div>

        {/* Right: Product Info */}
        <section className="flex flex-col justify-center gap-6">
          {/* Title + SKU */}
          <div>
            <h1 className={`uppercase ${instrumentSerif.className} text-3xl font-bold tracking-widest`}>
              {data.name}
            </h1>
            <p className="text-gray-400 text-[12px]">{data.productId}</p>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-semibold text-gray-800">PKR {data.price}</h2>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
             {data.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <h4>
              <span className='font-semibold'>COLLECTION:</span> <span className='text-sm'>{data.category}</span>
            </h4>
            <h4>
              <span className='font-semibold'>Type:</span> <span className='text-sm'>{data.type}</span>
            </h4>
            <h4>
              <span className='font-semibold'>GENDER:</span> <span className='text-sm'>{data.gender}</span>
            </h4>
          </div>

          {/* Add to Basket Button */}
          <AddToCart data={data} />
        </section>
      </section>
    </main>
  )
}

export default Product
