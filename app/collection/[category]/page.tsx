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
          {category === "men-sale" ? data.filter(item => item.sale).map((item, i) => (
            <Card key={i} {...item} />
          )) : data.filter(item => item.category === category && !item.sale).map((item, i) => (
            <Card key={i} {...item} />       
          ))}
        </section>
       
      </main>
    </>
    
  )
}

export default Category
