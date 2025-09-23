import Card from '@/components/userComponents/Card'
import FilterationHeader from '@/components/userComponents/FilterationHeader'
import { connectDB } from '@/lib/config/database'
import { categoryDescriptions } from '@/lib/constants'
import { instrumentSerif } from '@/lib/fonts/font'
import Product from '@/lib/models/ProductSchema'


export async function generateStaticParams() {
  await connectDB()
  const products = await Product.find({})

  return products.map((p) => ({ category: p.category }));
}



const Category = async ({params}: {params: Promise<{category: string}>}) => {
  
  const category = (await params).category
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {next: { revalidate: 60 }})
  const { products: data } = await res.json();
  const heading = categoryDescriptions.find(item => item.key === category)
  return (
    <>
      <main className='flex flex-col pt-24'>
        <section className='flex flex-col items-center justify-center px-10 md:px-40 lg:px-50 pb-9'>
          <h1 className={`text-4xl font-bold ${instrumentSerif.className} mb-2`}>{heading?.title}</h1>
          <p className='text-thin text-center'>{heading?.content}</p>
        </section>
        
        <FilterationHeader breadcrums={category} />
        <section className='grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3  w-full'>
          {category === "men-new" ? data.filter((item: Product) => item.isNewArrival).map((item: Product) => (
            <Card key={item._id} {...item} />
          )) : category === "men-sale" ? data.filter((item: Product) => item.isSale).map((item: Product) => (
            <Card key={item._id} {...item} />
          )) : data.filter((item: Product) => item.category === category && !item.isSale).map((item: Product) => (
            <Card key={item._id} {...item} />       
          ))}
          
        </section>
       
      </main>
    </>
    
  )
}

export default Category
