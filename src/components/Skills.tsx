import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaNodeJs, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiSpring, SiCsharp, SiMongodb, SiMicrosoftsqlserver, SiDocker, SiCoreldraw, SiPostman } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';

// Definimos el tipo para los grupos de habilidades
interface SkillGroup {
  name: string;
  icon: JSX.Element;
  skills: { name: string; icon: JSX.Element }[];
}

const frontendSkills = [
  { name: 'HTML', icon: <FaHtml5 size={32} /> },
  { name: 'CSS', icon: <FaCss3Alt size={32} /> },
  { name: 'TypeScript', icon: <BiLogoTypescript size={32} /> },
  { name: 'Angular', icon: <FaAngular size={32} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={32} /> },
  { name: 'WPF', icon: <SiCoreldraw size={32} /> },
  { name: 'Thymeleaf', icon: <SiPostman size={32} /> },
];

const backendSkills = [
  { name: 'Java', icon: <FaJava size={32} /> },
  { name: 'C#', icon: <SiCsharp size={32} /> },
  { name: 'Spring', icon: <SiSpring size={32} /> },
  { name: 'NodeJS', icon: <FaNodeJs size={32} /> },
  { name: 'MySQL', icon: <SiMicrosoftsqlserver size={32} /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} /> },
];

const extraSkills = [
  { name: 'SCRUM', icon: <SiCoreldraw size={32} /> },
  { name: 'Docker', icon: <SiDocker size={32} /> },
  { name: 'Git', icon: <FaGitAlt size={32} /> },
  { name: 'GitHub', icon: <FaGithub size={32} /> },
];

const skillGroups: SkillGroup[] = [
  { name: 'Frontend', icon: <FaHtml5 />, skills: frontendSkills },
  { name: 'Backend', icon: <FaNodeJs />, skills: backendSkills },
  { name: 'Extra', icon: <SiDocker />, skills: extraSkills },
];

export default function SkillSlider() {
  const [offset, setOffset] = useState(0);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null); // Corregido: Aseguramos que el tipo puede ser HTMLDivElement o null

  useEffect(() => {
    const slider = sliderRef.current; // Usamos la referencia

    if (!slider) return; // Aseguramos que el slider existe

    let animationId: number;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }
      const elapsed = timestamp - lastTimestamp;

      if (elapsed > 50) { // Mueve cada 50ms
        setOffset((prevOffset) => (prevOffset + 1) % (skillGroups.length * 100));
        lastTimestamp = timestamp;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };

    const resumeAnimation = () => {
      lastTimestamp = 0;
      animationId = requestAnimationFrame(animate);
    };

    slider.addEventListener('mouseenter', pauseAnimation);
    slider.addEventListener('mouseleave', resumeAnimation);

    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', pauseAnimation);
      slider.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  // Corregimos el tipo del parámetro `group`
  const renderSkillGroup = (group: SkillGroup) => (
    <div key={group.name} className="flex-shrink-0 w-full md:w-1/3 px-2">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
        <div className="flex items-center mb-4">
          {group.icon}
          <h3 className="text-xl font-semibold ml-2">{group.name}</h3>
        </div>
        <ul className="list-disc list-inside">
          {group.skills.slice(0, 3).map((skill) => (
            <li key={skill.name} className="flex items-center space-x-2">
              {skill.icon}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
          Skills
        </h3>
        {/* Botón para ver todos los proyectos */}
        
          <button 
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center group hover:text-neutral-500 text-lime-600 dark:text-lime-300 mb-4 mt-12 transition-all duration-300" 
          >
            See them all 
            <IoIosArrowForward 
              className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
            />
          </button>
      </header>

        <div
          ref={sliderRef}
          className="relative overflow-hidden"
          style={{ height: '250px' }}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${offset}%)`,
              width: `${skillGroups.length * 100}%`,
            }}
          >
            {[...skillGroups, ...skillGroups].map(renderSkillGroup)}
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            {showAllSkills ? 'Hide All Skills' : 'See All Skills'}
          </button>
        </div>

        {showAllSkills && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {group.icon}
                  <h4 className="text-xl font-semibold ml-2">{group.name}</h4>
                </div>
                <ul className="list-disc list-inside">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center space-x-2">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
