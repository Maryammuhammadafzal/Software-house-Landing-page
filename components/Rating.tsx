import React from 'react'

const Rating = () => {
    let rating_data = [
        {
            rate: 500,
            type: '+',
            title: 'Websites Delivered'
        },
        {
            rate: 10,
            type: '+',
            title: 'Years of Expertise'
        },
        {
            rate: 1,
            type: 'M+',
            title: 'Social Media Engagements'
        },
        {
            rate: 5,
            type: '-Star',
            title: 'Client Reviews'
        },
    ]
    return (
        <div className='w-full h-auto py-20 justify-center items-center flex'>
            <div className='w-[90%]  h-auto flex-wrap justify-evenly items-center flex'>
                {rating_data.map(({ rate, type, title }, index) => (
                    <div key={index} className='flex justify-center items-center w-auto h-auto gap-4 relative p-3'>
                        <div className='absolute top-0 left-0 flex justify-center items-center p-3'>
                            <div className=' w-[180px] h-[180px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-full '></div>
                        </div>
                        <div className='w-full h-full gap-3 bg-transparent flex flex-col justify-center items-center'>
                            <h2 className='text-5xl font-medium uppercase px-2' >{rate}{type}</h2>
                            <p className='text-lg leading-7'>{title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rating
