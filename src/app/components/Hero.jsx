import RotatingText from '@/components/ui/RotatingText';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { PiHandThin } from "react-icons/pi";

function Hero() {
    return (
        <div className='flex justify-center'>
             <div className='mt-35 w-[90%] md:w-[65%]'>

            <div className='space-y-5'>
                <div className='flex xl:gap-5 gap-3 items-center'>

                    <div className=' flex gap-3 items-center xl:text-lg lg:text-md sm:text-sm text-xs'>
                        <PiHandThin className='animate-wave sm:size-7 size-5 text-[#ADFF2F] stroke-5' />
                        Hey! it's me <span className="relative inline-block px-4 py-1 text-white font-semibold">
                        <span className="absolute inset-0 bg-[#2cc3ec] -skew-x-30 "></span>
                        <span className="relative md:text-md sm:text-sm ">Rithick Jackson</span>
                    </span>
                    </div>
                    <div className='hidden sm:block border-2 border-[#18CCFC] rounded-full bg-[white]/10'>
                        <Image src='/Rithick.png' className='rounded-full flex justify-center items-center xl:w-15 xl:h-15 w-12 h-12' width={70} height={70} alt='Rithick' />
                    </div>
                    <RotatingText
                        texts={['Frontend Developer', 'React Developer', 'UI Web Designer']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[black]/20 font-semibold sm:text-[13px] text-[9px] text-[#ADFF2F] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.05}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 "
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3500}
                    />
                </div>
                <h1 className='space-mono 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-2xl font-extrabold'>Crafting <span className='text-[#ADFF2F]' >modern frontend </span><br />solutions that <span className='text-[#ADFF2F]' >inspire & <br /> perform.</span></h1>
            </div>
            <div>
                <hr className='my-8 w-[80%] opacity-30 ' />
                <div className='flex items-center md:mr-20 2xl:mr-10 justify-between'>
                    <div className='montserrat flex items-center md:text-[13px] sm:text-[11px] text-[8px] xl:gap-6 sm:gap-4 gap-3'>
                        <Link href='https://www.linkedin.com/in/rithickjackson/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav2'>
                            <p className='flex items-center gap-1 hover:text-[#18CCFC]'>LINKEDIN<MdArrowOutward /></p>
                        </Link>
                        <Link href='https://github.com/Rithick78'>
                            <p className='flex items-center gap-1 hover:text-[#18CCFC]'>GITHUB<MdArrowOutward /></p>
                        </Link>
                        <Link href='https://www.instagram.com/rithick.jackson/'>
                            <p className='flex items-center gap-1 hover:text-[#18CCFC]'>INSTAGRAM<MdArrowOutward /></p>
                        </Link>
                        <Link href='mailto:rithickjackson8@gmail.com'>
                            <p className='flex items-center gap-1 hover:text-[#18CCFC]'>GMAIL<MdArrowOutward /></p>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Hero