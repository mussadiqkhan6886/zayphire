import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Collection = () => {
  return (
     <>
      <main className='pt-25 grid grid-cols-2'>
        <section className='flex flex-col gap-3  max-w-[400px] p-2 '>
          <Image src={"/main (3).jpg"} alt='change later' width={100} height={100} className='w-full' />
          <div  className='flex items-center gap-2 py-2' >
            <Link href={"/collection/men-fabric"}>MEN FABRICS COLLECTION </Link>
            <FaLongArrowAltRight />
          </div>
        </section>
        <section className='flex flex-col gap-3  max-w-[400px] p-2 '>
          <Image src={"/main (2).jpg"} alt='change later' width={100} height={100} className='w-full' />
          <div  className='flex items-center gap-2 py-2' >
            <Link href={"/collection/men-fragrance"}>MEN PERFUMES COLLECTION </Link>
            <FaLongArrowAltRight />
          </div>
        </section>
      </main>
    </>
  )
}

export default Collection
