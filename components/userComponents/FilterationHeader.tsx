'use client'

import React, { useState } from 'react'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'

export type FilterState = {
  materials: string[]
  priceRange: [number, number]
}

type Props = {
  breadcrums: string
  allMaterials: string[]
  maxPrice: number
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  resultCount: number
}

const PRICE_PRESETS = [
  { label: 'Under Rs. 2,999', range: [0, 2998] as [number, number] },
  { label: 'Rs. 2,999', range: [2999, 2999] as [number, number] },
  { label: 'Rs. 3,499 & above', range: [3499, 99999] as [number, number] },
]

const FilterationHeader = ({
  breadcrums,
  allMaterials,
  maxPrice,
  filters,
  onFilterChange,
  resultCount,
}: Props) => {
  const [open, setOpen] = useState(false)
  const [materialOpen, setMaterialOpen] = useState(true)
  const [priceOpen, setPriceOpen] = useState(true)

  const activeFilterCount =
    filters.materials.length +
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== maxPrice ? 1 : 0)

  const toggleMaterial = (mat: string) => {
    const updated = filters.materials.includes(mat)
      ? filters.materials.filter((m) => m !== mat)
      : [...filters.materials, mat]
    onFilterChange({ ...filters, materials: updated })
  }

  const setPricePreset = (range: [number, number]) => {
    const isSame =
      filters.priceRange[0] === range[0] && filters.priceRange[1] === range[1]
    onFilterChange({
      ...filters,
      priceRange: isSame ? [0, maxPrice] : range,
    })
  }

  const clearAll = () => {
    onFilterChange({ materials: [], priceRange: [0, maxPrice] })
  }

  const breadcrumbLabel = breadcrums
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="px-4 md:px-8 border-t border-b border-gray-200">
      {/* Top bar */}
      <div className="flex items-center justify-between py-3 gap-4">
        <p className="text-xs tracking-widest uppercase text-gray-400">
          {breadcrumbLabel} / {resultCount} Results
        </p>

        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button
              onClick={clearAll}
              className="text-xs underline underline-offset-2 text-gray-500 hover:text-black transition-colors"
            >
              Clear all ({activeFilterCount})
            </button>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 hover:border-black transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filter
            {activeFilterCount > 0 && (
              <span className="bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Active filter chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 pb-3">
          {filters.materials.map((m) => (
            <button
              key={m}
              onClick={() => toggleMaterial(m)}
              className="flex items-center gap-1.5 text-xs border border-gray-300 px-3 py-1.5 hover:border-black transition-colors"
            >
              {m} <X size={10} />
            </button>
          ))}
          {(filters.priceRange[0] !== 0 || filters.priceRange[1] !== maxPrice) && (
            <button
              onClick={() => onFilterChange({ ...filters, priceRange: [0, maxPrice] })}
              className="flex items-center gap-1.5 text-xs border border-gray-300 px-3 py-1.5 hover:border-black transition-colors"
            >
              Rs. {filters.priceRange[0]} – {filters.priceRange[1] > 9000 ? '3,499+' : filters.priceRange[1]}
              <X size={10} />
            </button>
          )}
        </div>
      )}

      {/* Filter panel */}
      {open && (
        <div className="border-t border-gray-100 py-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Material */}
          {allMaterials.length > 0 && (
            <div>
              <button
                onClick={() => setMaterialOpen((v) => !v)}
                className="flex items-center justify-between w-full text-sm font-semibold uppercase tracking-widest pb-3"
              >
                Material
                <ChevronDown
                  size={14}
                  className={`transition-transform ${materialOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {materialOpen && (
                <div className="flex flex-col gap-2">
                  {allMaterials.map((mat) => (
                    <label
                      key={mat}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          filters.materials.includes(mat)
                            ? 'bg-black border-black'
                            : 'border-gray-300 group-hover:border-black'
                        }`}
                        onClick={() => toggleMaterial(mat)}
                      >
                        {filters.materials.includes(mat) && (
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Price */}
          <div>
            <button
              onClick={() => setPriceOpen((v) => !v)}
              className="flex items-center justify-between w-full text-sm font-semibold uppercase tracking-widest pb-3"
            >
              Price
              <ChevronDown
                size={14}
                className={`transition-transform ${priceOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {priceOpen && (
              <div className="flex flex-col gap-2">
                {PRICE_PRESETS.map((preset) => {
                  const active =
                    filters.priceRange[0] === preset.range[0] &&
                    filters.priceRange[1] === preset.range[1]
                  return (
                    <label
                      key={preset.label}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          active
                            ? 'bg-black border-black'
                            : 'border-gray-300 group-hover:border-black'
                        }`}
                        onClick={() => setPricePreset(preset.range)}
                      >
                        {active && (
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                        {preset.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterationHeader