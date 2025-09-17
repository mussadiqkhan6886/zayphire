import FilterationHeader from '@/components/userComponents/FilterationHeader'
import Header from '@/components/userComponents/HeaderMain'
import Image from 'next/image'
import React from 'react'

const Category = async ({params}: {params: Promise<{category: string}>}) => {

  const data = [
    {}
    
  ]

  const category = (await params).category

  return (
    <>
    <Header />
      <main className='pt-32'>
        <FilterationHeader breadcrums={category} />
        <section className='grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 w-full'>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (1).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (2).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (3).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (1).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
         
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (1).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (2).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (3).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (1).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
         
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (1).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (2).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (3).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
          <div className='border border-black flex flex-col'>
            <div className='h-full'>
              <Image src="/main (1).jpg" alt="change" width={200} height={300} className='w-full h-full' />
            </div>
            <div className='p-3 py-4 border-t border-black'>
              <div className='leading-2'>
                <h4>NEW FABRIC</h4>
                <div className='text-gray-400  text-sm mb-2'>
                  <span className='border-r border-gray-400 pr-2 mr-2'>4 colors</span>
                  <span>Men </span>
                </div>
              </div>
              <p>PKR 5990</p>
            </div>
          </div>
         
        </section>
      </main>
    </>
    
  )
}

export default Category
