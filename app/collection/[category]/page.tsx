import type { Metadata } from 'next';
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

export const generateMetadata = async (
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> => {
  const category = (await params).category

  const heading = categoryDescriptions.find(
    item => item.key === category
  )

  return {
    title: heading?.title ?? 'Category',
    description: heading?.content ?? 'Browse products by category',
    openGraph: {
      title: heading?.title ?? 'Category',
      description: heading?.content ?? 'Browse products by category',
    },
  }
}


const Category = async ({params}: {params: Promise<{category: string}>}) => {
  
  const category = (await params).category
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {next: { revalidate: 60 }})
  const { products: data } = await res.json();
  const heading = categoryDescriptions.find(item => item.key === category)
  return (
    <>
      <main className='flex flex-col pt-2 max-w-7xl mx-auto'>
        <section className='flex flex-col items-center justify-center px-10 md:px-40 lg:px-50 pb-9'>
          <h1 className={`text-4xl font-bold ${instrumentSerif.className} mb-2`}>{heading?.title}</h1>
          <p className='text-thin text-center'>{heading?.content}</p>
        </section>
        
        <FilterationHeader breadcrums={category} />
        <section className='grid grid-cols-2 mt-10 gap-y-5 md:gap-10 lg:grid-cols-3 place-items-center  w-full'>
          {category === "men-new" ? data.filter((item: Product) => item.isNewArrival).map((item: Product) => (
            <Card key={item._id} {...item} />
          )) : category === "men-sale" ? data.filter((item: Product) => item.isSale).map((item: Product) => (
            <Card key={item._id} {...item} />
          )) : data.filter((item: Product) => item.category.includes(category) && !item.isSale).map((item: Product) => (
            <Card key={item._id} {...item} />       
          ))}
          
        </section>
       
      </main>
    </>
    
  )
}

export default Category
