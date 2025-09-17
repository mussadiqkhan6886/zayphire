import Footer from '@/components/userComponents/Footer'
import Header from '@/components/userComponents/HeaderMain'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Collection = () => {
  return (
     <>
    <Header />
      <main className='pt-20 min-h-screen flex flex-col md:flex-row flex-wrap justify-center gap-20'>
        <section className='border border-gray-200  max-w-[430px] max-h-[430px] p-2 '>
          <Image src={"/main (3).jpg"} alt='change later' width={130} height={130} className='w-full mb-1' />
          <div  className='flex items-center gap-2' >
            <Link href={"/collection/men-fabric"}>MEN FABRICS COLLECTION </Link>
            <FaLongArrowAltRight />
          </div>
        </section>
        <section className='border border-gray-200  max-w-[430px] max-h-[430px] p-2 '>
          <Image src={"/main (2).jpg"} alt='change later' width={130} height={130} className='w-full mb-1' />
          <div  className='flex items-center gap-2' >
            <Link href={"/collection/men-fragrance"}>MEN PERFUMES COLLECTION </Link>
            <FaLongArrowAltRight />
          </div>
        </section>
      </main>
    </>
  )
}

export default Collection
