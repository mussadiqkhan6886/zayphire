import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SwiperImages from './SwiperImages';

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
  material,
  season
}: Product) => {

  if (!name || !price) {
    return <div>No {category} yet.</div>;
  }

  return (
    <div className={`border border-black w-full max-w-[370px] flex flex-col 
      ${inStock ? '' : 'opacity-60'} hover:shadow-lg transition duration-300`}>

      {/* IMAGE SECTION */}
      <div className="relative w-full h-[320px] overflow-hidden">
        {inStock ? (
          <Link href={`/collection/${category}/${_id}`} className="block h-full">
            <SwiperImages images={images} />
          </Link>
        ) : (
          <Image
            src={images?.[0] || '/placeholder.png'}
            alt={name}
            fill
            className="object-cover"
          />
        )}

        {isSale && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
            SALE
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex h-[100px] flex-col justify-between flex-1 border-t border-black">

        <div>
          <h3 className="font-medium text-[15px] leading-5 mb-2">
            {name}
            {!inStock && (
              <span className="text-red-600 text-sm ml-2">Out of stock</span>
            )}
          </h3>

          <div className="text-gray-500 text-xs flex flex-wrap gap-x-2 gap-y-1 mb-3">
            <span>{category.includes('fragrance') ? fragranceType : color}</span>
            <span className="hidden md:inline">{gender}</span>
            <span>{brand}</span>

            {category.includes('fragrance') && <span>{length}ml</span>}
            {category.includes('fragrance') && <span>{season}</span>}
            {category.includes('fabric') && <span>{type}</span>}
            {(category.includes('watches') || category.includes('fabric')) && (
              <span>{material} </span>
            )}
          </div>
        </div>

        {/* PRICE */}
        <div className="text-[15px] font-semibold">
          PKR{' '}
          {isSale ? (
            <>
              {discountPrice}
              <span className="text-gray-400 line-through font-normal ml-2">
                {price}
              </span>
            </>
          ) : (
            price
          )}
        </div>

      </div>
    </div>
  );
};

export default Card;