'use client'
import Footer from '@/app/dashboard/components/Footer'
import ShinyTextTitle from '@/components/ui/ShinyTextTitle'
import React from 'react'
import { GiBoomerangSun } from 'react-icons/gi'

function ContactSection() {
    return (
        <div className='md:mt-50 sm:mt-30 mt-10'>
            <div className='flex justify-center'>
                <h1 className='flex items-center gap-2 text-[#ADFF2F] roboto font-semibold mb-10'><GiBoomerangSun className='animate-spin' /> <ShinyTextTitle
                    text="Contact"
                    disabled={false}
                    speed={10}
                    className='custom-class roboto' />
                </h1>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactSection