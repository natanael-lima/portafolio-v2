import React from 'react';
import { FaHtml5, FaCss3Alt, FaGithub, FaAngular, FaBootstrap, FaGitAlt, FaJava, FaNodeJs } from "react-icons/fa";
import {  SiSpring, SiPostman, SiCsharp,  SiMicrosoftsqlserver, SiCoreldraw, SiAdobephotoshop, SiDocker, SiThymeleaf, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { DiDotnet, DiScrum } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";


export default function Skills() {

  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 size={24} /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={24} /> },
    { name: 'Angular', icon: <FaAngular size={24} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={24} /> },
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
    <div className="p-4 rounded-md">
    <h2 className="text-xl font-bold text-white mb-4">Skills</h2>

    <h3 className="text-lg font-semibold text-gray-300 mb-2">Frontend Skills</h3>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {frontendSkills.map((skill) => (
        <div key={skill.name} className="border border-gray-600/50 rounded-lg px-1 py-2 flex items-center space-x-2 text-gray-300 text-md">
          <div className='bg-gray-600 text-gray-200 p-1 rounded-lg'>{skill.icon}</div>
          <span className="text-gray-300 text-md">{skill.name}</span>
        </div>
      ))}
    </div>

    <h3 className="text-lg font-semibold text-gray-300 mb-2">Backend Skills</h3>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {backendSkills.map((skill) => (
        <div key={skill.name} className="border border-gray-600/50 rounded-lg px-1 py-2 flex items-center space-x-2 text-gray-300 text-md">
          <div className='bg-gray-600 text-gray-200 p-1 rounded-lg'>{skill.icon}</div>
          <span className="text-gray-300 text-md">{skill.name}</span>
        </div>
      ))}
    </div>

    <h3 className="text-lg font-semibold text-gray-300 mb-2">Extra Skills</h3>
    <div className="grid grid-cols-4 gap-2">
      {extraSkills.map((skill) => (
        <div key={skill.name} className="border border-gray-600/50 rounded-lg px-1 py-2 flex items-center space-x-2 text-gray-300 text-md">
          <div className='bg-gray-600 text-gray-200 p-1 rounded-lg'>{skill.icon}</div>
          <span className="text-gray-300 text-md">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
}
