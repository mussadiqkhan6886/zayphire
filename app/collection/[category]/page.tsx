import Card from '@/components/userComponents/Card'
import FilterationHeader from '@/components/userComponents/FilterationHeader'
import Header from '@/components/userComponents/HeaderMain'

import React from 'react'

const Category = async ({params}: {params: Promise<{category: string}>}) => {
  
  const category = (await params).category
  const data = [
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fabric", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (2).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fabric", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fabric", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fabric", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fragrance", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fragrance", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (2).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fragrance", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-fragrance", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (3).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric"},
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric", sale: true, newPrice: 1000},
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric", sale: true, newPrice: 1000},
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric", sale: true, newPrice: 1000},
    {img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric", sale: true, newPrice: 1000},
  ]

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
