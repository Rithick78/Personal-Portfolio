'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { GiBurningDot } from "react-icons/gi";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const navItem = [
        { name: "Home", href: '/' },
        { name: "About", href: '/dashboard/about' },
        { name: "Projects", href: '/dashboard/project' },
        { name: "Contact", href: '/dashboard/contact' }
    ];
    const pathname = usePathname()
    const route = useRouter()
    const [openMenu, setOpenMenu] = useState(false)


    return (
        <div className='fixed w-full z-50 flex  items-center justify-between text-white py-7 px-7 md:px-12 lg:px-25 xl:px-50 2xl:px-75'>
            <Link href='/'>
                <Image src='/R7.png' width={30} height={30} alt='Icon' className='pt-2' />
            </Link>
            <div className="block md:hidden">
                {openMenu ? (
                    <button className={`${!openMenu && 'hidden' }`} onClick={() => setOpenMenu(false)}>
                        <X className="size-7 stroke-3" />
                    </button>
                ) : (
                    <button onClick={() => setOpenMenu(true)}>
                        <Menu className="size-7 stroke-3" />
                    </button>
                )}
            </div>
            <div className={`absolute ${openMenu ? "top-18 right-3" : "-top-100 right-3"} ease-in transition-all md:static flex flex-col 
                                      md:flex-row gap-10 text-[12px] bg-[black]/20 border-[white]/10 border py-3 px-10 rounded-4xl`}>
                {navItem.map((item, index) => (
                    <Link key={index} href={item.href}>

                        {pathname === item.href ? <p className={`${pathname === item.href && 'text-[#ADFF2F] scale-105'} hover:text-[#ADFF2F] font-semibold flex items-center gap-1.5`}> <GiBurningDot className='text-[#ADFF2F]' />{item.name}</p>
                            : <p className=' hover:text-[#ADFF2F] font-semibold'>{item.name}</p>}
                    </Link>
                ))}
            </div>

            <div className='md:block hidden bg-[black]/30 px-6 py-2 rounded-3xl border border-[gray]/20'>
                <Link href='/dashboard/contact'>
                    <button className="font-semibold text-[12px] hover:text-[#ADFF2F]">
                        Let's Talk
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Header