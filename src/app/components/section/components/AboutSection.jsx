'use client'
import ShinyTextTitle from '@/components/ui/ShinyTextTitle';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React from 'react'
import { GiBoomerangSun } from "react-icons/gi";


function AboutSection() {
   
    const words = "I'm Rithick Jackson, a Frontend Developer passionate about building responsive, accessible, and SEO-optimized web applications. With expertise in React, Next.js, and Tailwind CSS, I specialize in crafting seamless user experiences that are both visually engaging and performance-driven. Having completed 6+ real-world projects, I bring strong problem-solving skills, modern UI/UX implementation, and a focus on WCAG accessibility to deliver inclusive digital solutions. I thrive on transforming ideas into polished products that inspire, perform, and leave a lasting impact."


    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className='flex items-center gap-2 text-[#ADFF2F]  sm:mb-10 roboto-mono'><GiBoomerangSun className='animate-spin' /> <ShinyTextTitle
                text="About"
                disabled={false}
                speed={10}
                className='custom-class' />
            </h1>
            <TextGenerateEffect words={words} />
        </div>
    )
}

export default AboutSection