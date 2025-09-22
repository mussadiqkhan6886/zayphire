import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const metadata : Metadata = {
  title: "collection zayphire",
  description: "Premium collection page of zayphire with modern and elegant trending collection"

}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const product = await fetch(`https://api.example.com/products/${params.id}`).then(res => res.json())

//   return {
//     title: `${product.name} - Zayphire Store`,
//     description: product.description,
//     openGraph: {
//       title: product.name,
//       description: product.description,
//       images: product.images?.[0] ? [product.images[0]] : [],
//     },
//   }
// }


const Collection = () => {
  return (
     <>
      <main className='pt-30 flex flex-col items-center justify-between'>
        <h1 className='text-3xl font-semibold text-center mb-5'>Collections</h1>
        <div className=' grid grid-cols-2'>
        <section className='flex flex-col gap-3  max-w-[400px] p-2 '>
          <Image src={"/manfabric.jpg"} quality={100} unoptimized  alt='man fabric image collection' width={100} height={100} className='w-full' />
          <div  className='flex items-center gap-2 py-2' >
            <Link href={"/collection/men-fabric"}>MEN FABRICS COLLECTION </Link>
            <FaLongArrowAltRight />
          </div>
        </section>
        {/* <section className='flex flex-col gap-3  max-w-[400px] p-2 '>
          <Image src={"/main (2).jpg"} alt='change later' width={100} height={100} className='w-full' />
          <div  className='flex items-center gap-2 py-2' >
            <Link href={"/collection/men-fragrance"}>MEN PERFUMES COLLECTION </Link>
            <FaLongArrowAltRight />
          </div>
        </section> */}
        </div>
      </main>
    </>
  )
}

export default Collection
