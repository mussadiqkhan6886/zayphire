'use client'

import { useState, useMemo } from 'react'
import Card from '@/components/userComponents/Card'
import FilterationHeader, { FilterState } from '@/components/userComponents/FilterationHeader'

type Props = {
  category: string
  data: Product[]
}

export default function CategoryClient({ category, data }: Props) {
  // First apply category logic (same as before)
  const categoryFiltered = useMemo(() => {
    if (category === 'men-new') return data.filter((item) => item.isNewArrival)
    if (category === 'men-sale') return data.filter((item) => item.isSale)
    return data.filter((item) => item.category.includes(category) && !item.isSale)
  }, [category, data])

  // Derive available materials from this category's products
  const allMaterials = useMemo(() => {
    const mats = new Set<string>()
    categoryFiltered.forEach((item) => {
      if (item.material) {
        // support "material" being a string or array
        const m = Array.isArray(item.material) ? item.material : [item.material]
        m.forEach((v: string) => mats.add(v))
      }
    })
    return Array.from(mats).sort()
  }, [categoryFiltered])

  const maxPrice = useMemo(
    () => Math.max(...categoryFiltered.map((i) => i.price), 0),
    [categoryFiltered]
  )

  const [filters, setFilters] = useState<FilterState>({
    materials: [],
    priceRange: [0, maxPrice],
  })

  const filtered = useMemo(() => {
    return categoryFiltered.filter((item) => {
      // Price filter
      const inPrice =
        item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]

      // Material filter
      const inMaterial =
        filters.materials.length === 0 ||
        (item.material &&
          filters.materials.some((m) =>
            Array.isArray(item.material)
              ? item.material.includes(m)
              : item.material === m
          ))

      return inPrice && inMaterial
    })
  }, [categoryFiltered, filters])

  return (
    <>
      <FilterationHeader
        breadcrums={category}
        allMaterials={allMaterials}
        maxPrice={maxPrice}
        filters={filters}
        onFilterChange={setFilters}
        resultCount={filtered.length}
      />
      <section className="grid grid-cols-2 mt-10 gap-y-5 md:gap-10 lg:grid-cols-3 place-items-center w-full">
        {filtered.length > 0 ? (
          filtered.map((item) => <Card key={item._id} {...item} />)
        ) : (
          <p className="col-span-full text-center text-gray-400 py-20 text-sm">
            No products match the selected filters.
          </p>
        )}
      </section>
    </>
  )
}