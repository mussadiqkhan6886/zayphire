import Header from '@/components/userComponents/Header'
import Kids from '@/components/userComponents/Kids'
import Men from '@/components/userComponents/Men'
import Women from '@/components/userComponents/Women'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
        <div className='h-screen sticky top-0'>
          <Men />
        </div>
        <div className='h-screen sticky top-0'>
          <Women />
        </div>
        <div className='h-screen sticky top-0'>
          <Kids />
        </div>
      </main>
    </div>
  )
}

export default Home
