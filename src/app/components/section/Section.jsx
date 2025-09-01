import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import React from 'react'
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import DetailSection from "./components/DetailSection";
import SkillSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";


function Section() {
  return (
    <div className='relative bg-black lg:rounded-t-[120px] sm:rounded-t-[90px] rounded-t-[70px] min-h-screen mt-55'>
        <div className='pt-3 flex justify-center'>
          <MdKeyboardDoubleArrowDown  className='size-10 text-[#709933] animate-pulse'/>
        </div>
        <div >
          <AboutSection/>
          <ProjectsSection/>
          <DetailSection/>
          <SkillSection/>
          <ContactSection/>
        </div>
      

    </div>
  )
}

export default Section