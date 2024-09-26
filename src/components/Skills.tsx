import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub , FaAngular, FaBootstrap, FaGitAlt, FaJava,FaNodeJs   } from "react-icons/fa";
import { SiMongodb, SiSpring, SiPostman,SiCsharp,SiThymeleaf,SiMicrosoftsqlserver,SiCoreldraw,SiAdobephotoshop,SiDocker  } from "react-icons/si";
import { DiDotnet, DiScrum } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";

export default function Skills() {
  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 size={32} /> },
    { name: 'CSS', icon: <FaCss3Alt size={32} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={32} /> },
    { name: 'Angular', icon: <FaAngular size={32} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={32} /> },
    { name: 'WPF', icon: <DiDotnet size={32} /> },
    { name: 'Thymeleaf', icon: <SiThymeleaf size={32} /> },
  ];

  const backendSkills = [
    { name: 'Java', icon: <FaJava size={32} /> },
    { name: 'C#', icon: <SiCsharp size={32} /> },
    { name: 'Spring', icon: <SiSpring size={32} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={32} /> },
    { name: 'MySQL', icon: <GrMysql size={32} /> },
    { name: 'MongoDB', icon: <SiMongodb size={32} /> },
    { name: '.NET', icon: <AiOutlineDotNet size={32} /> },
    { name: 'SQLServer', icon: <SiMicrosoftsqlserver size={32} /> },
  ];

  const extraSkills = [
    { name: 'SCRUM', icon: <DiScrum size={32} /> },
    { name: 'CorelDraw', icon: <SiCoreldraw  size={32} /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={32} /> },
    { name: 'Docker', icon: <SiDocker  size={32} /> },
    { name: 'Git', icon: <FaGitAlt size={32} /> },
    { name: 'GitHub', icon: <FaGithub size={32} /> },
    { name: 'Postman', icon: <SiPostman size={32} /> },
  ];
    
      return (
        <section id="skills" className="mb-12 mx-auto w-full px-2 sm:px-14">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Frontend Development */}
    <div className="col-span-1">
    <h3 className="text-xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
      Frontend 
    </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {frontendSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center"
          >
            <div className="hover:text-lime-600 p-2 rounded-md text-lime-900 dark:hover:text-lime-300 dark:text-lime-700 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="font-semibold text-sm ml-2 text-neutral-800 dark:text-neutral-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Backend Development */}
    <div className="col-span-1">
    <h3 className="text-xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
      Backend
    </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {backendSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center "
          >
            <div className="hover:text-lime-600 p-2 rounded-md text-lime-900 dark:hover:text-lime-300 dark:text-lime-700 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="font-semibold text-sm ml-4 text-neutral-800 dark:text-neutral-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Extra Skills */}
    <div className="col-span-1">
      <h3 className="text-xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
        Extra 
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {extraSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <div className="hover:text-lime-600 p-2 rounded-md text-lime-900 dark:hover:text-lime-300 dark:text-lime-700 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="font-semibold text-sm ml-2 text-neutral-800 dark:text-neutral-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

     );
}
{/*
  <div className="p-3 lg:p-0 w-full">
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
              </div>*/}