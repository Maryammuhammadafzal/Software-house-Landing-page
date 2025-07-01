import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    let nav_item = [
        {
            name : 'Home', 
            link : '/'
        },
        {
            name : 'About', 
            link : '/about'
        },
        {
            name : 'services', 
            link : '/services'
        },
        {
            name : 'contact us', 
            link : '/contact'
        },
    ]
    return (
        <header className='w-full flex justify-between items-center h-full'>
            <Link href='/' className='h-auto w-auto'>
                <Image
                    src='/images/logo.png'
                    alt='logo'
                    width={80}
                    height={80}
                />
            </Link>
            <nav className='flex w-auto h-auto'>
                <ul className=' w-auto h-auto justify-center lg:gap-8 md:gap-6 gap-4 items-center sm:flex hidden '>
                   { nav_item.map(({name , link} , index) => (
                    <li key={index} className='px-4 py-1 text-center uppercase focus:border hover:border border-black rounded-full'>
                        <Link href={link}>{name}</Link>
                    </li>
                   ))}
                
                </ul>
            </nav>
        </header>
    )
}

export default Header
