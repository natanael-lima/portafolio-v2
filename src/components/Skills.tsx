import React from 'react';
import { FaHtml5, FaCss3Alt, FaGithub, FaAngular, FaBootstrap, FaGitAlt, FaJava, FaNodeJs } from "react-icons/fa";
import {  SiSpring, SiPostman, SiCsharp,  SiMicrosoftsqlserver, SiCoreldraw, SiDocker } from "react-icons/si";
import { DiDotnet, DiScrum } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";


export default function Skills() {

  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 size={28} /> },
    { name: 'CSS', icon: <FaCss3Alt size={28} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={28} /> },
    { name: 'Angular', icon: <FaAngular size={28} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={28} /> },
    { name: 'WPF', icon: <DiDotnet size={28} /> },
    { name: 'WinForms', icon: <DiDotnet size={28} /> },
  ];

  const backendSkills = [
    { name: 'Java', icon: <FaJava size={28} /> },
    { name: 'C#', icon: <SiCsharp size={28} /> },
    { name: 'Spring', icon: <SiSpring size={28} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={28} /> },
    { name: 'MySQL', icon: <GrMysql size={28} /> },
    { name: 'SQLServer', icon: <SiMicrosoftsqlserver size={28} /> },
  ];

  const extraSkills = [
    { name: 'SCRUM', icon: <DiScrum size={28} /> },
    { name: 'CorelDraw', icon: <SiCoreldraw  size={28} /> },
    { name: 'Docker', icon: <SiDocker  size={28} /> },
    { name: 'Git', icon: <FaGitAlt size={28} /> },
    { name: 'GitHub', icon: <FaGithub size={28} /> },
    { name: 'Postman', icon: <SiPostman size={28} /> },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Columna Frontend */}
  <article className="">
    <div className="bg-neutral-800/30 p-4 rounded-3xl mb-4 text-center border border-neutral-700/50">
      <h2 className="text-white text-3xl font-bold">Frontend</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {frontendSkills.map((skill) => (
        <div key={skill.name} className="flex items-center bg-neutral-800/30 border border-neutral-700/50 p-4 rounded-3xl">
          <div className="bg-neutral-600 text-white p-1 rounded-lg mr-2">
            {skill.icon}
          </div>
          <span className="text-white text-lg font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </article>

  {/* Columna Backend */}
  <article className="">
    <div className="bg-neutral-800/30 p-4 rounded-3xl mb-4 text-center border border-neutral-700/50">
      <h2 className="text-white text-3xl font-bold">Backend</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {backendSkills.map((skill) => (
        <div key={skill.name} className="flex items-center bg-neutral-800/30 border border-neutral-700/50 p-4 rounded-3xl">
          <div className="bg-neutral-600 text-white p-1 rounded-lg mr-2">
            {skill.icon}
          </div>
          <span className="text-white text-lg font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </article>

  {/* Columna Extra */}
  <article className="">
    <div className="bg-neutral-800/30 p-4 rounded-3xl mb-4 text-center border border-neutral-700/50">
      <h2 className="text-white text-3xl font-bold">Extra</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {extraSkills.map((skill) => (
        <div key={skill.name} className="flex items-center bg-neutral-800/30 border border-neutral-700/50 p-4 rounded-3xl">
          <div className="bg-neutral-600 text-white p-1 rounded-lg mr-2">
            {skill.icon}
          </div>
          <span className="text-white text-lg font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </article>
</div>

  );
}
