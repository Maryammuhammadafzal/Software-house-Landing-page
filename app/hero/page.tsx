import Header from '@/components/Header'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='flex w-full h-auto lg:h-screen py-4 justify-center items-center'>
      <div className='flex flex-col w-[90%] h-full justify-between items-center gap-4'>
        <div className="header w-full h-[80px] flex justify-center items-center">
            <Header/>
        </div>
        <div className='hero-section flex w-full h-auto justify-center items-center py-20'>

        </div>
      </div>
    </div>
  )
}

export default HeroPage
