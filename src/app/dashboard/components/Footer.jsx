import React from 'react'
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <div className='text-white sm:mx-20 mx-5'>
      <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10 xl:gap-0 xl:place-items-center '>
        <div className='space-y-5 order-1'>
          <h1 className='font-bold text-xl md:text-3xl'>Rithick jackson</h1>
          <p className='montserrat xl:text-sm text-xs text-gray-400 xl:w-80'>Crafting seamless web experiences where clean design meets powerful functionality.</p>
          <div className='flex gap-5 text-gray-400'>
             <Link href='https://github.com/Rithick78'>
            <FaGithub className='size-5' />
             </Link>
              <Link href='https://www.linkedin.com/in/rithickjackson/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav2'>
            <FaLinkedin className='size-5' />
             </Link>
              <Link href="https://wa.me/916383534076">
            <FaWhatsapp className='size-5' />
            </Link>
          </div>
        </div>
        <div className="pt-2 pl-10 sm:pl-20 lg:pl-40 2xl:pl-10 order-2">
          <h1 className='font-bold text-[14px] md:text-[20px]'>Sites</h1>
          <ul className='mt-2'>
            <Link href='/'>
              <li className='flex items-center gap-2 md:text-md sm:text-sm text-xs text-gray-400'><GoDotFill className='text-blue-500 size-2 hover:text-gray-700' />Home</li>
            </Link>
            <Link href='/dashboard/about'>
              <li className='flex items-center gap-2 md:text-md sm:text-sm text-xs text-gray-400'><GoDotFill className='text-blue-500 size-2 hover:text-gray-700' />About</li>
            </Link>
            <Link href='/dashboard/skills'>
              <li className='flex items-center gap-2 md:text-md sm:text-sm text-xs text-gray-400'><GoDotFill className='text-blue-500 size-2 hover:text-gray-700' />Skills</li>
            </Link>
            <Link href='/dashboard/project'>
              <li className='flex items-center gap-2 md:text-md sm:text-sm text-xs text-gray-400'><GoDotFill className='text-blue-500 size-2 hover:text-gray-700' />Projects</li>
            </Link>
          </ul>
        </div>
        <div className="pl-10 sm:pl-20 lg:pl-30 order-4 md:order-3">
          <h1 className='font-bold text-[14px] md:text-[20px]'>Projects</h1>
          <ul className='mt-2'>
            <Link href='https://ai-resume-builder-rj.netlify.app/'>
              <li className='flex items-center text-gray-400 gap-2 md:text-md sm:text-sm text-xs hover:text-gray-700'>AI-Resume Builder<ArrowUpRight className='size-4' /></li>
            </Link>
            <Link href='https://ai-mock-interview-rj.netlify.app/'>
              <li className='flex items-center text-gray-400 gap-2 md:text-md sm:text-sm text-xs hover:text-gray-700'>AI-Mock Interview<ArrowUpRight className='size-4' /></li>
            </Link>
            <Link href='https://portfoliorj7.netlify.app/'>
              <li className='flex items-center text-gray-400 gap-2 md:text-md sm:text-sm text-xs hover:text-gray-700'>Portfolio<ArrowUpRight className='size-4' /></li>
            </Link>
            <Link href='https://todo-list-rj.netlify.app/'>
              <li className='flex items-center text-gray-400 gap-2 md:text-md sm:text-sm text-xs hover:text-gray-700'>Todo List<ArrowUpRight className='size-4' /></li>
            </Link>
          </ul>
        </div>
        <div className='space-y-4 md:col-span-3 xl:col-span-1 order-3 md:order-4'>
          <p className='montserrat md:text-md sm:text-xs text-[8px]'>Looking for full-time opportunities as a Frontend Developer to contribute to modern, scalable, and user-friendly web solutions.</p>
          <a href="mailto:rithickjackson8@gmail.com" className='text-blue-500 flex items-center gap-2 md:text-md text-xs'> <IoIosMail /> rithickjackson8@gmail.com</a>
          <a href="tel:+916383534076" className='text-blue-500 flex items-center gap-2 md:text-md text-xs'><MdLocalPhone /> +91 6383534076</a>
        </div>
      </div>
      <hr className='border-gray-400 my-7' />
      <p className='md:text-sm text-xs flex pb-5 text-gray-400 justify-center'>Copyright © 2025 Rithick Jackson. All rights reserved.</p>
    </div>
  )
}

export default Footer