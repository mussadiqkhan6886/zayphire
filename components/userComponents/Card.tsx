import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
}: Product) => {
  // If no product data, show fallback
  if (!name || !price) {
    return <div>NO {category} yet.</div>
  }

  return (
    <div className={`border border-black flex flex-col ${inStock ? '' : 'opacity-65'}`}>
      {inStock ? (
        <Link
          href={`/collection/${category}/${_id}`}
          className={`h-full ${inStock ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          <Image src={images[0]} alt={name} width={200} height={300} className="w-full h-full" />
        </Link>
      ) : (
        <div className="h-full">
          <Image src={images[0]} alt={name} width={200} height={300} className="w-full h-full" />
        </div>
      )}

      <div className="p-3 py-4 border-t border-black">
        <div className="leading-2">
          <h4>
            {name}{' '}
            <span className="text-red-700">{inStock ? '' : 'Not in stock'}</span>
          </h4>
          <div className="text-gray-400 text-sm mb-2">
            <span className="border-r border-gray-400 pr-2 mr-2">
              {category.includes('fragrance') ? fragranceType : color}
            </span>
            <span className="border-r border-gray-400 pr-2 mr-2">{gender}</span>
            <span className="border-r border-gray-400 pr-2 mr-2">{brand}</span>
            <span>{category.includes('fragrance') ? length + 'ml' : type}</span>
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
