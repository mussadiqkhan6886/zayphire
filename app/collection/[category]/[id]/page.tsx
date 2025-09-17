import Header from '@/components/userComponents/HeaderMain'
import MayLike from '@/components/userComponents/MayLike'
import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <>
     <Header />
     <main className='flex flex-col pt-25'>
      <section className='flex flex-col md:flex-row gap-10'>
        <div>
          <Image src={"/main (2).jpg"} alt='cahnge' width={250} height={300} />
        </div>
        <section>
          <div>
            <h1 className='uppercase text-3xl '>discovery box</h1>
            <p>12313131313</p>
          </div>
          <h2>PKR 2399</h2>
          <div>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab provident, laborum nemo unde, voluptatum, harum cum praesentium ipsum ullam aspernatur doloribus quod obcaecati placeat suscipit commodi pariatur eaque quos!</p>
          </div>
          <div>
            <h4>COLLECTION <span>MAN-FABRICS</span></h4>
            <h4>QUANTITY <span>1</span></h4>
            <h4>GENDER <span>MEN</span></h4>
          </div>
          <button>Add to basket</button>
        </section>
      </section>
      <section>
        <MayLike />
      </section>
    </main> 
    </>
  )
}

export default Product
