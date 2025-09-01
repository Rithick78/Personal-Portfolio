'use client'
import CountUp from '@/components/ui/countUp';
import FallingText from '@/components/ui/FallingText'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { WobbleCard } from '@/components/ui/wobble-card'
import React from 'react'
import { PiHandSwipeRightLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";


function DetailSection() {

    const testimonials = [
        {
            image: "/programming.png",
            title: "Website Development",
            summary: "Dynamic, user-friendly websites with clean code and smooth performance.",
            detail: "I build dynamic, user-friendly, and scalable websites using React, Next.js, and Tailwind CSS. With experience in API integration, OOP, and modern UI/UX practices, I ensure clean code, smooth performance, and secure functionality tailored to client needs."
        },
        {
            image: "/seo.png",
            title: "SEO Optimized",
            summary: "Built with SEO best practices for higher visibility.",
            detail: "I follow SEO best practices like semantic HTML, optimized metadata, clean URL structures, and fast-loading pages. This improves search engine visibility, boosts organic traffic, and strengthens online presence effectively."
        },
        {
            image: "/devices.png",
            title: "Responsive",
            summary: "Seamless performance across all devices and screens.",
            detail: "I specialize in building responsive applications that adapt seamlessly across desktops, tablets, and mobiles. Using CSS media queries, Tailwind CSS, and component-based design, I ensure consistent performance and accessibility on all screen sizes."
        },
        {

            image: "/drawing.png",
            title: "Modern Design",
            summary: "Sleek, trend-driven layouts for an engaging experience.",
            detail: "I create sleek and engaging layouts following the latest design trends. My focus on UI/UX ensures visually appealing interfaces, interactive elements, and accessibility (WCAG standards), delivering professional and inclusive user experiences."
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto xl:w-[75%] w-[90%] sm:my-20">
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]">
                <h1 className='font-semibold'>Tech Enthusiast</h1>
                <FallingText
                    text={`Passionate about exploring the latest technologies to stay ahead in the fast-evolving digital world. Focused on turning creative ideas into impactful projects that deliver innovation and real value.`}
                    highlightWords={["Passionate", "latest", "technologies", "fast-evolving", "Focused", "creative", "real", "projects"]}
                    highlightClass="highlighted"
                    trigger="click"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize=""
                    mouseConstraintStiffness={0.9}
                />
                <p className='justify-center lg:text-2xl text-xl font-extrabold text-gray-400 opacity-35 gap-1 flex items-center'>Click above <PiHandSwipeRightLight /></p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <div>
                    <h1 className='font-semibold'>Projects</h1>
                    <div className='flex flex-col gap-3 items-center mt-3'>
                         <div className='flex items-baseline justify-center text-[#ADFF2F]'>
                        <CountUp
                            from={0}
                            to={6}
                            separator=","
                            direction="up"
                            duration={0.5}
                            className="count-up-text text-8xl font-extrabold"/>
                            <h1><FaPlus className='stroke-5 size-15'/></h1>
                    </div>
                     <h1 className='font-extrabold xl:text-2xl text-xl text-gray-400'>Real-World Project</h1>
                    </div>
                    <p className='mt-5 text-center'>Built with <span className='text-xl font-bold text-[#18CCFC]'>React, Next.js</span> & <span className='text-xl font-bold text-[#18CCFC]'>Tailwind</span></p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 h-full min-h-[500px] lg:min-h-[300px]">
                <h1 className='font-bold'>What I Provide</h1>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow" />

            </WobbleCard>
        </div>
    )
}

export default DetailSection