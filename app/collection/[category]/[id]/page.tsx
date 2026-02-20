import { instrumentSerif } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'
import AddToCart from '@/components/userComponents/AddToCart'
import { connectDB } from '@/lib/config/database'
import Product from '@/lib/models/ProductSchema'

export async function generateStaticParams() {
  await connectDB()
  const products = await Product.find({})

  return products.map((p) => ({ id: p._id }));
}

import type { Metadata } from 'next'

export const generateMetadata = async (
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> => {
  const { id } = await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    return {
      title: 'Product not found',
      description: 'This product does not exist.',
    }
  }

  const { product } = await res.json()

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images?.length
        ? [
            {
              url: product.images[0],
              alt: product.name,
            },
          ]
        : [],
    },
  }
}


const ProductItem = async ({params}: {params: Promise<{id:string}>}) => {

  const id = (await params).id
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {next: {revalidate: 60}})
  const {product: data} = await res.json()
  return (
    <main className="flex flex-col pt-2 px-6 lg:px-20">
      {/* Product Section */}
      <section className="flex flex-col md:flex-row gap-12">
        {/* Left: Product Image */}
        <div className="flex-shrink-0 flex items-center md:border-r md:border-gray-700 justify-center w-full md:w-[50%] md:pr-8 ">
          <Image
            priority={true}
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

          {/* Product Details (Conditionally Rendered) */}
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <h4>
              <span className="font-semibold">COLLECTION:</span>{' '}
              <span className="text-sm capitalize">{data.category}</span>
            </h4>

            {/* TYPE (for fabrics or general) */}
            {(data.category?.includes('fabric')) &&  (
              <h4>
                <span className="font-semibold">Type:</span> <span>{data.type}</span>
              </h4>
            )}

            {/* FRAGRANCE DETAILS */}
            {data.category?.includes('fragrance') && (
              <>
                {data.fragranceType && (
                  <h4>
                    <span className="font-semibold">Fragrance Type:</span> <span>{data.fragranceType}</span>
                  </h4>
                )}
                {data.length && (
                  <h4>
                    <span className="font-semibold">Volume:</span> <span>{data.length}ml</span>
                  </h4>
                )}
              </>
            )}

            {/* FABRIC DETAILS */}
            {data.category?.includes('fabric') && (
              <>
                {data.material && (
                  <h4>
                    <span className="font-semibold">Material:</span> <span>{data.material}</span>
                  </h4>
                )}
              </>
            )}

            {/* WATCH DETAILS */}
            {data.category?.includes('watches') && (
              <>
                {data.material && (
                  <h4>
                    <span className="font-semibold">Material:</span> <span>{data.material}</span>
                  </h4>
                )}
                {data.color && (
                  <h4>
                    <span className="font-semibold">Color:</span> <span>{data.color}</span>
                  </h4>
                )}
              </>
            )}

            {/* GENDER */}
            {data.gender && (
              <h4>
                <span className="font-semibold">Gender:</span> <span>{data.gender}</span>
              </h4>
            )}

            {/* BRAND */}
            {data.brand && (
              <h4>
                <span className="font-semibold">Brand:</span> <span>{data.brand}</span>
              </h4>
            )}
          </div>

          {/* Add to Basket Button */}
          <AddToCart data={data} />
        </section>
      </section>
    </main>
  )
}

export default ProductItem
