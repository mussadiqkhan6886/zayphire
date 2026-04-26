import { categoryDescriptions } from "@/lib/constants"
import CategoryClient from "../../../components/userComponents/CategoryClient"
import { instrumentSerif } from "@/lib/fonts/font"

const Category = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = (await params).category
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    next: { revalidate: 60 },
  })
  const { products: data } = await res.json()
  const heading = categoryDescriptions.find((item) => item.key === category)

  return (
    <main className="flex flex-col pt-2 max-w-7xl mx-auto">
      <section className="flex flex-col items-center justify-center px-10 md:px-40 lg:px-50 pb-9">
        <h1 className={`text-4xl font-bold ${instrumentSerif.className} mb-2`}>
          {heading?.title}
        </h1>
        <p className="text-thin text-center">{heading?.content}</p>
      </section>

      <CategoryClient category={category} data={data} />
    </main>
  )
}

export default Category