import React from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact, FaNodeJs, FaPython, FaJava, FaJsSquare, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCoreldraw, SiCsharp, SiDocker, SiMicrosoftsqlserver, SiMongodb, SiPostman, SiSpring } from 'react-icons/si';
import { DiDotnet } from "react-icons/di";
const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <BiLogoTypescript />, name: "TypeScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <DiDotnet />, name: "WPF" },
  { icon: <SiPostman />, name: "Thymeleaf" },
  { icon: <SiCsharp />, name: "C#" },
  { icon: <SiSpring />, name: "Spring" },
  { icon: <SiMicrosoftsqlserver />, name: "MySQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiCoreldraw />, name: "SCRUM" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];


export default function Slider() {
  return (
    <div className="overflow-hidden w-full h-32 flex items-center group">
      <div
        className="flex w-[301%] animate-loop-scroll group-hover:paused"
        style={{ display: 'flex' }}
      >
        {/* Duplicamos el array de skills para crear el efecto infinito */}
        {skills.concat(skills).map((skill, index) => (
          <div key={index} className="flex items-center mx-6">
            <div className="text-2xl">{skill.icon}</div>
            <span className="ml-2 text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
