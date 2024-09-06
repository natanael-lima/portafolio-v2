import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub , FaAngular, FaBootstrap, FaGitAlt, FaJava,FaNodeJs   } from "react-icons/fa";
import { SiMongodb, SiSpring, SiPostman,SiCsharp,SiThymeleaf,SiMicrosoftsqlserver,SiJsonwebtokens,SiCoreldraw,SiAdobephotoshop,SiDocker  } from "react-icons/si";
import { DiDotnet, DiScrum } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";

interface ModeProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }:ModeProps) {
  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 size={40} /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={40} /> },
    { name: 'Angular', icon: <FaAngular size={40} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} /> },
    { name: 'WinForm', icon: <DiDotnet size={40} /> },
    { name: 'WPF', icon: <DiDotnet size={40} /> },
    { name: 'Thymeleaf', icon: <SiThymeleaf size={40} /> },
  ];

  const backendSkills = [
    { name: 'Java', icon: <FaJava size={40} /> },
    { name: 'C#', icon: <SiCsharp size={40} /> },
    { name: 'Spring', icon: <SiSpring size={40} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={40} /> },
    { name: 'MySQL', icon: <GrMysql size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} /> },
    { name: '.NET', icon: <AiOutlineDotNet size={40} /> },
    { name: 'MSSQL Server', icon: <SiMicrosoftsqlserver size={40} /> },
    { name: 'JWT', icon: <SiJsonwebtokens size={40} /> },
  ];

  const extraSkills = [
    { name: 'SCRUM', icon: <DiScrum size={40} /> },
    { name: 'CorelDraw', icon: <SiCoreldraw  size={40} /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={40} /> },
    { name: 'Docker', icon: <SiDocker  size={40} /> },
    { name: 'Git', icon: <FaGitAlt size={40} /> },
    { name: 'GitHub', icon: <FaGithub size={40} /> },
    { name: 'Postman', icon: <SiPostman size={40} /> },
  ];
    
      return (
        <section id="skills" className="mb-12">
         <h2 className="text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">Skills <strong className='text-amber-400'>.</strong></h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend Development */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className={`rounded-md flex flex-col items-center px-4 py-2 text-center ${darkMode ? 'dark:bg-slate-800' : 'dark:bg-slate-300'}`}>
                {skill.icon}
                <span className="mt-2 font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {backendSkills.map((skill) => (
              <div key={skill.name} className={`rounded-md flex flex-col items-center px-4 py-2 text-center ${darkMode ? 'dark:bg-slate-800' : 'dark:bg-slate-300'}`}>
                {skill.icon}
                <span className="mt-2 font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold mb-3">Extras</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {extraSkills.map((skill) => (
              <div key={skill.name} className={`rounded-md flex flex-col items-center px-4 py-2 text-center ${darkMode ? 'dark:bg-slate-800' : 'dark:bg-slate-300'}`}>
                {skill.icon}
                <span className="mt-2 font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
     );
}