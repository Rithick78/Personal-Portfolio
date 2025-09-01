import { SparklesCore } from '@/components/ui/sparkles'
import React from 'react'

function SkillSection() {

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
      skill: "Rest API",
      image: "/api.png"
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
      skill: "Netlify",
      image: "/netlify.png"
    },
    {
      skill:"VS Code",
      image:"/vscode.png"
    }
  ]

  return (
    <div className='md:mt-52 sm:mt-40 mt-15 md:mx-10 mx-5 lg:mx-40 2xl:mx-90 mb-10'>
      <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-center text-white relative z-20">
          My Tech Stack & Tools
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#ADFF2F"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className='sm:space-y-10 '>
        <div className="grid md:grid-cols-4 grid-cols-3 sm:gap-y-8 gap-y-4 place-items-center place-content-center">
          {techStack.map((item, index) => (
            <div key={index} className="flex items-center justify-center bg-[gray]/30 xl:px-10 sm:px-6 px-4 xl:py-4 py-2 border border-[gray]/20 rounded-3xl gap-2 ">
              <img src={item.image} className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 hover:animate-pulse" />
              <p className="xl:text-md md:text-sm sm:text-xs text-[8px] font-semibold hover:text-[#18CCFC]">{item.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillSection