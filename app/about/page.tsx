import { MoveRightIcon, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center pt-20 md:pt-30 pb-14 md:pb-10'>
            <div className='flex md:flex-row  md:px-0 px-3 flex-col w-full md:w-[95%] lg:w-[90%] h-auto justify-center items-center gap-10'>
                <div className='left md:w-1/2 w-full flex flex-col gap-8 px-3'>
                    <h2 className='lg:text-5xl md:text-4xl text-3xl font-medium uppercase px-2' >Why Choose Us?</h2>
                    <p className='md:text-xl text-lg px-3 leading-5 md:leading-7'> Our team of dedicated professionals is passionate about technology, creativity, and excellence, ensuring every project we undertake exceeds expectations.</p>
                    <div className='flex flex-col gap-2 w-full h-auto'>
                        {/* <div className="inline-block pb-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF]"> */}
                            <div className=" border-style border-b text-black px-6 py-2 flex justify-between w-full items-center uppercase font-semibold">
                                <h4 className='md:text-2xl text-xl font-medium uppercase' >Client-Centric Approach</h4>
                                <MoveRightIcon />
                            </div>
                        {/* </div> */}
                        <div className="inline-block pb-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF]">
                            <div className="bg-white text-black px-6 py-2 flex justify-between w-full items-center uppercase font-semibold">
                                <h4 className='md:text-2xl text-xl font-medium uppercase' >Innovation</h4>
                                <MoveRightIcon />
                            </div>
                        </div>
                        <div className="inline-block pb-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF]">
                            <div className="bg-white text-black px-6 py-2 flex justify-between w-full items-center uppercase font-semibold">
                                <h4 className='md:text-2xl text-xl font-medium uppercase' >Quality Assurance</h4>
                                <MoveRightIcon />
                            </div>
                        </div>
                    </div>
                    <div className="inline-block w-fit m-3 p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full">
                        <button className="bg-white text-black px-8 py-2 uppercase rounded-full font-semibold">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className='right md:w-1/2 w-full h-full flex justify-center items-center'>
                    <div className='w-auto h-auto rounded-2xl relative pr-2'>
                        <Image src='/images/about-image.jpg' alt='about-image' width={350} height={320} className='rounded-2xl' />
                         <div className="inline-block w-fit m-3 absolute -bottom-6 -left-6 p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full">
                        <button className="bg-white p-5 text-black  uppercase rounded-full ">
                            <MoveUpRight size={40}/>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
