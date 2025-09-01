import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import ShinyTextTitle from '@/components/ui/ShinyTextTitle'
import { ArrowUpRight } from 'lucide-react';
import { BsGithub } from "react-icons/bs";
import React from 'react'
import { GiBoomerangSun } from 'react-icons/gi'
import Link from 'next/link';
import { GiStarShuriken } from "react-icons/gi";

function ProjectsSection() {

  const Projects = [
    {
      title: "AI-Resume Builder",
      description: (
        <>
          <h1 className='font-extrabold  md:text-md sm:text-sm text-[10px]' >Developed a fully responsive AI-powered resume builder using React, JavaScript, and Tailwind CSS, accessible seamlessly across all devices.</h1>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" /> Implemented secure user authentication with Clerk and integrated Strapi CMS for structured resume data storage and management.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Enabled AI-assisted resume generation with real-time previews and customizable themes for enhanced personalization.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Integrated instant download and sharing features, allowing users to create and distribute resumes in under 2 minutes.</p>
        </>
      ),
      badge: [
        {
          image: "/react.png",
          name: "React"
        },
        {
          image: "/js.png",
          name: "JavaScript"
        },
        {
          image: "/strapi.png",
          name: "Strapi"
        },
        {
          image: "/clerk.png",
          name: "Clerk"
        },
        {
          image: "/shadcn.png",
          name: "Shadcn UI"
        },{
          image: "/tailwind.png",
          name: "Tailwind CSS"
        }

      ],
      image: "/Resume.png",
      github: "https://github.com/Rithick78/ai-resume-builder",
      live: "https://ai-resume-builder-rj.netlify.app/",
      category: "Development"
    },
    {
      title: "AI-Mock Interviewer",
      description: (
        <>
          <h1 className='font-extrabold md:text-md sm:text-sm text-[10px]'>Built a fully responsive AI-powered mock interview platform with Next.js, React, and Tailwind CSS, enabling users to practice and improve interview skills across all devices.</h1>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Implemented Clerk authentication and Drizzle ORM for secure login, data handling, and scalable user management.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Integrated text-to-speech, instant performance ratings, and corrective feedback to create an interactive learning experience.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Developed webcam-integrated mock interview sessions simulating real interview scenarios for higher engagement.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Optimized for accessibility and responsiveness, ensuring seamless usage on mobile, tablet, and desktop.</p>
        </>
      ),
      badge: [
        {
          image: "/react.png",
          name: "React"
        },
        {
          image: "/nextjs.png",
          name: "Next.js"
        },
        {
          image: "/js.png",
          name: "JavaScript"
        },
        {
          image: "/shadcn.png",
          name: "Shadcn UI"
        },
        {
          image: "/tailwind.png",
          name: "Tailwind CSS"
        },
        {
          image: "/drizzle.png",
          name: "Drizzle ORM"
        },
        {
          image: "/clerk.png",
          name: "Clerk"
        },

      ],
      image: "/Mock.png",
      github: "https://github.com/Rithick78/AI-Mock-Interview",
      live: "https://ai-mock-interview-rj.netlify.app/",
      category: "Development"
    },
    {
      title: "Personal Portfolio",
      description: (
        <>
          <h1 className='font-extrabold md:text-md sm:text-sm text-[8px]'>Built a high-performance portfolio website to showcase projects, technical skills, and achievements, combining modern UI design with smooth animations and a responsive layout.</h1>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Implemented smooth animations and transitions using React Bits and Aceternity UI for an engaging experience.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Designed a project showcase section with detailed descriptions and highlighted tech stacks.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Developed a fully responsive design optimized for all devices.</p>

          <p className="flex items-center gap-2 font-semibold text-gray-400 md:text-md sm:text-sm text-[10px]"><GiStarShuriken className="text-[#ADFF2F]" />Maintained a clean, scalable codebase using Next.js and JavaScript for long-term flexibility.</p>
        </>
      ),
      badge: [
        {
          image: "/react.png",
          name: "React"
        },
        {
          image: "/nextjs.png",
          name: "Next.js"
        },
        {
          image: "/js.png",
          name: "JavaScript"
        },
        {
          image: "/shadcn.png",
          name: "Shadcn UI"
        },
        {
          image: "/tailwind.png",
          name: "Tailwind CSS"
        }
      ],
      image: "/PersonalPorfolio.png",
      github: "https://github.com/Rithick78/Personal-Portfolio",
      live: "https://portfoliorj7.netlify.app/",
      category: "Development"
    },
  ];

  return (
    <div className='sm:mt-30 mt-10 flex flex-col justify-center items-center'>
      <h1 className='flex items-center gap-2 text-[#ADFF2F] roboto font-semibold mb-10'><GiBoomerangSun className='animate-spin' /> <ShinyTextTitle
        text="My Projects"
        disabled={false}
        speed={10}
        className='custom-class roboto' />
      </h1>
      <h1 className='md:text-4xl text-2xl font-semibold ml-5 sm:ml-7 roboto-mono'>Selected Projects</h1>
      <div className="px-6 md:mt-30 sm:mt-20 mt-10">
        <div className=" xl:pt-4 ">
          {Projects.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 flex justify-center">
              <div className='flex xl:flex-row flex-col xl:gap-10 items-center justify-center xl:w-[95%] 2xl:w-[80%] md:w-[80%] sm:w-[90%] w-full'>

                <CardContainer className="inter-var">
                  <CardBody className="bg-white relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="3"
                      className="sm:text-xl text-md font-bold text-black"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem translateZ="3" className="w-full mt-5 ">
                      <img
                        src={item.image}
                        className="sm:h-50 lg:h-60 h-30 w-full object-cover rounded-xl shadow-lg shadow-[#ADFF2F]"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10 mx-5">
                      <CardItem
                        translateZ={1}
                        as="a"
                        href={item.live}
                        target="__blank"
                        className="flex gap-1 items-center text-sm font-semibold text-black hover:bg-[black]/30 p-3 rounded-3xl"
                      >
                        Live <ArrowUpRight className=' size-4' />
                      </CardItem>
                      <CardItem
                        translateZ={1}
                        as="a"
                        href={item.github}
                        className="text-black hover:bg-[black]/30 p-2 rounded-full "
                      >
                        <BsGithub className='size-6' />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>

                <div className='2xl:space-y-7 space-y-3 bg-[gray]/20 sm:px-10 px-3 sm:py-5 py-3 rounded-3xl shadow-2xl hover:shadow-lime-400'>
                  {item.description}
                  <div className='mt-10 grid lg:grid-cols-4 grid-cols-3 gap-3 place-items-center'>
                     {item.badge.map((tech,index)=>(
                      <div key={index} className='shrink-0 flex items-center gap-2 sm:px-5 sm:py-3 px-3 py-1.5 border border-[gray]/20 bg-[gray]/20 rounded-3xl'>
                            <img src={tech.image} className='md:w-5 md:h-5 sm:w-4 sm:h-4 w-2.5 h-2.5'/>
                            <p className='md:text-xs sm:text-[8px] text-[7px]'>{tech.name}</p>
                      </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href='/dashboard/project'>
        <div className='bg-[white]/30 border border-[white]/30 mb-20 sm:p-3 p-2 rounded-3xl'>
          <button className='text-white flex gap-1 text-sm sm:text-md '>View More <ArrowUpRight className='sm:size-6 size-5 stroke-1' /></button>
        </div>
      </Link>
    </div>
  )
}

export default ProjectsSection