import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  img: string
  price: number
  color: number
  gender: string
  category: string
  id: string
  name: string
  sale?: boolean
  newPrice?: number
}

const Card = ({img, price, color, gender, category, id, name, sale, newPrice}: Props) => {
  return (
    <div className='border border-black flex flex-col'>
      <Link href={`/collection/${category}/${id}`} className='h-full'>
        <Image src={img} alt="change" width={200} height={300} className='w-full h-full' />
      </Link>
      <div className='p-3 py-4 border-t border-black'>
        <div className='leading-2'>
          <h4>{name}</h4>
          <div className='text-gray-400  text-sm mb-2'>
            <span className='border-r border-gray-400 pr-2 mr-2'>{color} colors</span>
            <span>{gender} </span>
          </div>
        </div>
        <div className='flex gap-2'>PKR {sale ? <p className='font-semibold'>{newPrice} <span className='text-gray-500 font-thin line-through'>{price}</span></p>: price}</div>
      </div>
    </div>  
  )
}

export default Card
