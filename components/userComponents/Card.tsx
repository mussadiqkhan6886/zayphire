import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SwiperImages from './SwiperImages'

const Card = ({
  images,
  price,
  color,
  gender,
  category,
  _id,
  name,
  isSale,
  discountPrice,
  type,
  brand,
  inStock,
  fragranceType,
  length,
  material
}: Product) => {
 // Fallback if product data is missing
  if (!name || !price) {
    return <div>NO {category} yet.</div>
  }

  console.log(category, material)

  return (
    <div className={`border border-black w-full sm:max-w-[370px] md:mx-2 flex flex-col ${inStock ? '' : 'opacity-65'}`}>
      {inStock ? (
        <Link
          href={`/collection/${category}/${_id}`}
          className={`h-full w-full ${inStock ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          <SwiperImages images={images} />
        </Link>
      ) : (
        <div className="h-full">
          <Image priority={true} src={images[0]} alt={name} width={200} height={210} className="w-full h-full" />
        </div>
      )}

      <div className="p-3 py-4 border-t border-black">
        <div className="leading-5">
          <h3>
            {name}{' '}
            <span className="text-red-700">{inStock ? '' : 'Not in stock'}</span>
          </h3>

          <div className="text-gray-400 text-[13px] mb-2">
            {/* Fragrance or color */}
            <span className="border-r border-gray-400 pr-2 mr-2">
              {category.includes('fragrance') ? fragranceType : color}
            </span>

            {/* Gender (only on medium+) */}
            <span className="border-r border-gray-400 pr-2 hidden md:inline-block mr-2">{gender}</span>

            {/* Brand */}
            <span className="border-r border-gray-400 pr-2 mr-2">{brand}</span>

            {/* Fragrance type: add ml properly */}
            {category.includes('fragrance') && (
              <span className="border-r border-gray-400 pr-2 mr-2">{length}ml</span>
            )}

            {/* Fabric type */}
            {category.includes('fabric') && (
              <span className="border-r border-gray-400 pr-2 mr-2">{type}</span>
            )}

            {/* Material — fixed logical condition */}
            {(category.includes('watches') || category.includes('fabric')) && (
              <span className="border-r border-gray-400 pr-2 mr-2">{material}</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          PKR{' '}
          {isSale ? (
            <p className="font-semibold">
              {discountPrice}{' '}
              <span className="text-gray-500 font-thin line-through">{price}</span>
            </p>
          ) : (
            price
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
