import AnimatedVector from '@/components/AnimatedVector'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
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
                        <div className=' w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[110px] rotate-45 rounded-4xl '></div>
                    </div>
                    <div className='flex justify-center items-center w-full z-20 h-full absolute top-0 left-0'>
                        <div className='flex flex-col gap-4 max-w-2xl justify-center items-center text-center'>
                            <h1 className='text-5xl font-medium uppercase leading-16' >Discover Excellence with CodeCrafters Studio</h1>
                            <p className='text-xl px-3 leading-7'>At CodeCrafters Studio, we transform ideas into reality by delivering cutting-edge software solutions tailored to your unique needs.</p>
                            {/* <div className="inline-block p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full"> */}
                                <button className="border-style border bg-transparent text-black px-8 py-2 uppercase rounded-full font-semibold">
                                    {`Let’s Connect`}
                                </button>
                            {/* </div> */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HeroPage
