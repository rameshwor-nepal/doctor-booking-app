import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const Menus = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/'
        },
        {
            id: 3,
            name: 'Appointment',
            path: '/'
        },
        {
            id: 4,
            name: 'Contact Us',
            path: '/'
        },
    ]
    return (
        <section className='flex justify-between items-center md:px-10 shadow-md'>
            <div>
                <Image src={'/drLogo.png'} alt='logo' width={120} height={120}></Image>
            </div>
            <ul className='flex gap-6 text-[20px]'>
                {Menus.map((el, index) => (
                    <Link href={el.path} key={index}>
                        <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                            {el.name}
                        </li>
                    </Link>
                ))}
            </ul>
            <div>
                <Button size={'lg'}>Get Started</Button>
            </div>
        </section>
    )
}

export default Header