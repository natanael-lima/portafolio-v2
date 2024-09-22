import React from 'react';
import { FaHtml5, FaCss3Alt, FaGithub, FaAngular, FaBootstrap, FaGitAlt, FaJava, FaNodeJs } from "react-icons/fa";
import {  SiSpring, SiPostman, SiCsharp,  SiMicrosoftsqlserver, SiCoreldraw, SiDocker } from "react-icons/si";
import { DiDotnet, DiScrum } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";


export default function Skills() {

  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 size={48} /> },
    { name: 'CSS', icon: <FaCss3Alt size={48} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={48} /> },
    { name: 'Angular', icon: <FaAngular size={48} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={48} /> },
    { name: 'WPF', icon: <DiDotnet size={48} /> },
    { name: 'WinForms', icon: <DiDotnet size={48} /> },
  ];

  const backendSkills = [
    { name: 'Java', icon: <FaJava size={48} /> },
    { name: 'C#', icon: <SiCsharp size={48} /> },
    { name: 'Spring', icon: <SiSpring size={48} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={48} /> },
    { name: 'MySQL', icon: <GrMysql size={48} /> },
    { name: 'SQLServer', icon: <SiMicrosoftsqlserver size={48} /> },
  ];

  const extraSkills = [
    { name: 'SCRUM', icon: <DiScrum size={48} /> },
    { name: 'CorelDraw', icon: <SiCoreldraw  size={48} /> },
    { name: 'Docker', icon: <SiDocker  size={48} /> },
    { name: 'Git', icon: <FaGitAlt size={48} /> },
    { name: 'GitHub', icon: <FaGithub size={48} /> },
    { name: 'Postman', icon: <SiPostman size={48} /> },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Columna 1 */}
      <article className="bg-neutral-800/30 p-2 rounded-3xl border border-neutral-700/50">
        <div className="p-4 rounded-md">
        <h2 className="text-white text-2xl font-bold mb-4">Frontend</h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {frontendSkills.map((skill) => (
              <div
                key={skill.name}
                className="px-1 py-2 flex items-center space-x-2 text-gray-300 text-md"
              >
                <div className="bg-neutral-700 text-gray-200 p-1 rounded-lg">
                  {skill.icon}
                </div>
                <span className="text-gray-300 text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Columna 2 */}
      <article className="bg-neutral-800/30 p-2 rounded-3xl border border-neutral-700/50">
        <div className="p-4 rounded-md">
        <h2 className="text-white text-2xl font-bold mb-4">Backend</h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {backendSkills.map((skill) => (
              <div
                key={skill.name}
                className="px-1 py-2 flex items-center space-x-2 text-gray-300 text-md"
              >
                <div className="bg-neutral-700 text-gray-200 p-1 rounded-lg">
                  {skill.icon}
                </div>
                <span className="text-gray-300 text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Columna 3 */}
      <article className="bg-neutral-800/30 p-2 rounded-3xl border border-neutral-700/50">
        <div className="p-4 rounded-md">
          <h2 className="text-white text-2xl font-bold mb-4">Extra</h2>
          <div className="grid grid-cols-2 gap-2">
            {extraSkills.map((skill) => (
              <div
                key={skill.name}
                className="px-1 py-2 flex items-center space-x-2 text-gray-300 text-md"
              >
                <div className="bg-neutral-700 text-gray-200 p-1 rounded-lg">
                  {skill.icon}
                </div>
                <span className="text-gray-300 text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>

  );
}
