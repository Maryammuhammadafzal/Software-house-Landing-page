import AnimatedVector from '@/components/AnimatedVector'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='flex w-full h-auto  md:h-screen py-4 justify-center items-center'>
            <div className='flex flex-col w-[90%] h-full justify-between items-center gap-4'>
                <div className="header w-full h-[80px] flex justify-center items-center">
                    <Header />
                </div>
                <div className='hero-section flex w-full min-h-[400px] relative justify-center items-start'>
                    <div className='w-full h-[400px] absolute left-0 top-0 flex justify-center items-start z-10'>
                        <div className=' w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-4xl '></div>
                    </div>
                    <div className='flex justify-center md:py-0 xs:py-20 py-14 items-start w-full z-20 h-full absolute top-0 left-0'>
                        <div className='flex flex-col gap-4 max-w-2xl justify-start items-center text-center'>
                            <h1 className='md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-medium uppercase xs:leading-10 leading-8 sm:leading-12 md:leading-16' >Discover Excellence with CodeCrafters Studio</h1>
                            <p className='md:text-xl xs:text-lg text-base sm:px-3 px-1 leading-7'>At CodeCrafters Studio, we transform ideas into reality by delivering cutting-edge software solutions tailored to your unique needs.</p>
                            {/* <div className="inline-block p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full"> */}
                                <button className="button-border-gradient border- bg-transparent text-black px-8 py-2 uppercase rounded-full font-semibold">
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
