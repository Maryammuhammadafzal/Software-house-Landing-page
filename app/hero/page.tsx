import AnimatedVector from '@/components/AnimatedVector'
import Header from '@/components/Header'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='flex w-full h-auto lg:h-screen py-4 justify-center items-center'>
            <div className='flex flex-col w-[90%] h-full justify-between items-center gap-4'>
                <div className="header w-full h-[80px] flex justify-center items-center">
                    <Header />
                </div>
                <div className='hero-section flex w-full min-h-[400px] relative justify-center items-center'>
                    <div className='w-full h-[400px] absolute left-0 top-0 flex justify-center items-center z-10'>
                        <AnimatedVector />
                    </div>
                    <div className='flex justify-center items-center w-full z-20 h-full absolute top-0 left-0'>
                        <div className='flex flex-col gap-4 max-w-lg justify-center items-center text-center'>
                            <h1 className='text-5xl font-medium uppercase leading-16' >Discover Excellence with CodeCrafters Studio</h1>
                            <p className='text-xl px-3 leading-7'>At CodeCrafters Studio, we transform ideas into reality by delivering cutting-edge software solutions tailored to your unique needs.</p>
                        </div>
                    </div>
                

                </div>
            </div>
        </div>
    )
}

export default HeroPage
