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
    { name: 'HTML', icon: <FaHtml5 size={24} /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={24} /> },
    { name: 'Angular', icon: <FaAngular size={24} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={24} /> },
    { name: 'WinForm', icon: <DiDotnet size={24} /> },
    { name: 'WPF', icon: <DiDotnet size={24} /> },
    { name: 'Thymeleaf', icon: <SiThymeleaf size={20} /> },
  ];

  const backendSkills = [
    { name: 'Java', icon: <FaJava size={24} /> },
    { name: 'C#', icon: <SiCsharp size={24} /> },
    { name: 'Spring', icon: <SiSpring size={24} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={24} /> },
    { name: 'MySQL', icon: <GrMysql size={24} /> },
    { name: 'MongoDB', icon: <SiMongodb size={24} /> },
    { name: '.NET', icon: <AiOutlineDotNet size={24} /> },
    { name: 'SQLServer', icon: <SiMicrosoftsqlserver size={24} /> },
    { name: 'JWT', icon: <SiJsonwebtokens size={24} /> },
  ];

  const extraSkills = [
    { name: 'SCRUM', icon: <DiScrum size={24} /> },
    { name: 'CorelDraw', icon: <SiCoreldraw  size={24} /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={22} /> },
    { name: 'Docker', icon: <SiDocker  size={24} /> },
    { name: 'Git', icon: <FaGitAlt size={24} /> },
    { name: 'GitHub', icon: <FaGithub size={24} /> },
    { name: 'Postman', icon: <SiPostman size={24} /> },
  ];
    
      return (
        <section id="skills" className="mb-12">
  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">
    Skills <strong className="text-amber-400">.</strong>
  </h2>

  <div className="space-y-6">
    {/* Frontend Development */}
    <div className="p-4 w-full">
      <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
        {frontendSkills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-md flex flex-col items-center px-6 py-6 text-center ${
              darkMode ? 'dark:bg-slate-800' : 'dark:bg-slate-300'
            }`}
          >
            {skill.icon}
            <span className="mt-2 font-semibold text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Backend Development */}
    <div className="p-4 w-full">
      <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-5">
        {backendSkills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-md flex flex-col items-center px-6 py-6 text-center ${
              darkMode ? 'bg-slate-800' : 'bg-slate-300'
            }`}
            >
            {skill.icon}
            <span className="mt-2 font-semibold text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Extras */}
    <div className="p-4 w-full">
      <h3 className="text-xl font-semibold mb-3">Extras</h3>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
        {extraSkills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-md flex flex-col items-center px-6 py-6 text-center ${
              darkMode ? 'dark:bg-slate-800' : 'dark:bg-slate-300'
            }`}
          >
            {skill.icon}
            <span className="mt-2 font-semibold text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

     );
}