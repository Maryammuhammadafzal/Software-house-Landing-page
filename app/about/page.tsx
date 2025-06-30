import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center py-20'>
            <div className='flex flex-row w-[90%] h-auto justify-center items-center gap-10'>
                <div className='left w-1/2 flex felx-col gap-4'>
                    <h2 className='text-5xl font-medium uppercase' >Why Choose Us?</h2>
                    <p className='text-xl px-3 leading-7'> Our team of dedicated professionals is passionate about technology, creativity, and excellence, ensuring every project we undertake exceeds expectations.</p>
                    <div className="inline-block p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full">
                        <button className="bg-white text-black px-8 py-2 uppercase rounded-full font-semibold">
                           Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
