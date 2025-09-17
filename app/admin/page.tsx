import React from 'react'
import SideBar from '@/components/adminComponents/SideBar'
import HomeButton from '@/components/adminComponents/HomeButton'

const page = () => {
  return (
    <>
      <HomeButton />
      <main>
        <SideBar />
      </main>
    </>
  )
}

export default page
