'use client'
import React from 'react'
import Footer from '../components/Footer'
import Lanyard from '@/components/ui/Lanyard'
import { InfiniteLoop } from '@/components/ui/InfiniteLoop'

function About() {

  const techStack = [
    {
      skill: "HTML",
      image: "/html.png"
    },
    {
      skill: "CSS",
      image: "/css.png"
    },
    {
      skill: "React",
      image: "/react.png"
    },
    {
      skill: "Next.js",
      image: "/nextjs.png"
    },
    {
      skill: "JavaScript",
      image: "/js.png"
    },
    {
      skill: "Tailwind CSS",
      image: "/tailwind.png"
    },
    {
      skill: "Shadcn UI",
      image: "/shadcn.png"
    },
    {
      skill: "Git",
      image: "/git.png"
    },
    {
      skill: "Github",
      image: "/github.png"
    },
    {
      skill: "Rest API",
      image: "/api.png"
    },
    {
      skill: "Netlify",
      image: "/netlify.png"
    },
    {
      skill:"VS Code",
      image:"/vscode.png"
    }
  ]

  return (
    <div className='mb-25'>

      <div className='lg:grid lg:grid-cols-3 flex flex-col'>
        <div className='lg:h-190 h-160'>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        <div className='lg:pt-70 pb-20 lg:pb-0 lg:col-span-2'>
          <div className=' space-y-9 mx-5 lg:mx-0'>
            <h1 className='2xl:text-7xl xl:text-5xl md:text-5xl sm:text-4xl text-2xl font-extrabold text-white space-mono'>A creative <span className='text-[#ADFF2F]'>Frontend <br /> Developer</span> & design-driven<br /> <span className='text-[#ADFF2F]'>coder</span></h1>
            <p className='roboto text-gray-500 font-extrabold md:text-md text-sm xl:w-150 lg:w-110 md:w-150 sm:w-110 w-80'>I specialize in developing pixel-perfect, accessible, and performance-driven web applications that align with brand goals and enhance user experience.</p>
            <button className='bg-[white]/30 md:py-3 md:px-7 px-5 py-2 hover:bg-[white]/50 rounded-3xl font-bold border border-[white]/40 md:text-md text-sm'>My Resume</button>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <InfiniteLoop
          items={techStack}
          direction="right"
          speed="slow" />

      </div>
    </div>
  )
}

export default About