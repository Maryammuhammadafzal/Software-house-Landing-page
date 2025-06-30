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
        <div className='w-full h-auto py-10 justify-center items-center flex'>
            <div className='w-[90%]  h-auto flex-wrap justify-evenly items-center flex'>
                {rating_data.map(({ rate, type, title }, index) => (
                    <div key={index} className='flex justify-center items-center w-auto h-auto gap-4 py-3 relative px-2'>
                        <div className=' w-[200px] h-[200px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[70px] rotate-45 rounded-2xl '></div>
                        <div className='w-full h-full absolute top-0 gap-4 left-0 bg-transparent flex flex-col justify-center items-center'>
                            <h2 className='text-5xl font-medium uppercase px-2' >{rate}{type}</h2>
                            <p className='text-xl px-3 leading-7'>{title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rating
