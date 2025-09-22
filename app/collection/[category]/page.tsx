import Card from '@/components/userComponents/Card'
import FilterationHeader from '@/components/userComponents/FilterationHeader'
import axios from 'axios'

const Category = async ({params}: {params: Promise<{category: string}>}) => {
  
  const category = (await params).category
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  const data = res.data.products
  console.log(data)
  return (
    <>
      <main className='pt-32'>
        <FilterationHeader breadcrums={category} />
        <section className='grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 w-full'>
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
