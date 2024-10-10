import React, { useState, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaNodeJs, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiSpring, SiCsharp, SiMongodb, SiMicrosoftsqlserver, SiDocker, SiCoreldraw, SiPostman } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';

const skillsAll = [
  { name: 'HTML', description: 'Lenguaje de tipado', icon: <FaHtml5 size={24} color="#E34F26" />, type: 'Frontend' },
  { name: 'CSS', description: 'Estilo en cascada', icon: <FaCss3Alt size={24} color="#1572B6" />, type: 'Frontend' },
  { name: 'TypeScript', description: 'JavaScript tipado', icon: <BiLogoTypescript size={24} color="#3178C6" />, type: 'Frontend' },
  { name: 'Angular', description: 'Framework para SPA', icon: <FaAngular size={24} color="#DD0031" />, type: 'Frontend' },
  { name: 'Bootstrap', description: 'Framework CSS', icon: <FaBootstrap size={24} color="#7952B3" />, type: 'Frontend' },
  { name: 'WPF', description: 'Windows Presentation Foundation', icon: <SiCoreldraw size={24} color="#0465B0" />, type: 'Frontend' }, // WPF puede considerarse como UI, pero del lado de aplicaciones de escritorio
  { name: 'Thymeleaf', description: 'Motor de plantillas', icon: <SiPostman size={24} color="#FF6C37" />, type: 'Backend' },
  { name: 'Java', description: 'Lenguaje de programación', icon: <FaJava size={24} color="#007396" />, type: 'Backend' },
  { name: 'C#', description: 'Lenguaje de Microsoft', icon: <SiCsharp size={24} color="#239120" />, type: 'Backend' },
  { name: 'Spring', description: 'Framework para Java', icon: <SiSpring size={24} color="#6DB33F" />, type: 'Backend' },
  { name: 'NodeJS', description: 'Entorno para JavaScript', icon: <FaNodeJs size={24} color="#339933" />, type: 'Backend' },
  { name: 'MySQL', description: 'Sistema de gestión de bases de datos', icon: <SiMicrosoftsqlserver size={24} color="#4479A1" />, type: 'Backend' },
  { name: 'MongoDB', description: 'Base de datos NoSQL', icon: <SiMongodb size={24} color="#47A248" />, type: 'Backend' },
  { name: 'SCRUM', description: 'Marco de trabajo ágil', icon: <SiCoreldraw size={24} color="#F5C712" />, type: 'Extra' },
  { name: 'Docker', description: 'Plataforma de contenedores', icon: <SiDocker size={24} color="#2496ED" />, type: 'Extra' },
  { name: 'Git', description: 'Sistema de control de versiones', icon: <FaGitAlt size={24} color="#F05032" />, type: 'Extra' },
  { name: 'GitHub', description: 'Plataforma de desarrollo', icon: <FaGithub size={24} color="#181717" />, type: 'Extra' },
];

export default function SkillSlider() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  //const visibleCards = 5;  Número de tarjetas visibles en un momento dado
  const duplicatedSkills = [...skillsAll, ...skillsAll]; // Duplicar las tarjetas para el efecto loop

  const renderSkillCard = (skill: { name: string; description: string; icon: JSX.Element,type: string},index: number) => (
    <div key={index} className="flex-shrink-0 w-full lg:w-72 px-4">
      <div className="bg-gray-100/90 p-5 rounded-lg h-full">
        <div className="flex items-center justify-between">
          {/* Ícono alineado a la izquierda */}
          <div className="rounded-lg border border-gray-400/25 bg-white p-2 mr-4">
            {skill.icon}
          </div>
          {/* Título alineado a la derecha */}
          <div>
            <h3 className="text-lg font-semibold mb-0 text-right">{skill.name}</h3>
            {/* Subtítulo pequeño debajo del ícono */}
            <span className="text-sm text-gray-500 mb-4">{skill.type}</span>
          </div>
        </div>
        {/* Descripción que ocupa todo el ancho de la tarjeta */}
        <p className="mt-4 text-left text-md text-gray-500 w-full">
          {skill.description}
        </p>
      </div>
    </div>
  );
  return (
      <section id="skill" className="py-12 mb-12 mx-auto w-full px-2 sm:px-8">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
            Skills
          </h3>
          {/* Botón para ver todas las habilidades */}
          <button 
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center group hover:text-neutral-500 text-lime-600 dark:text-lime-300 mb-4 mt-12 transition-all duration-300" 
          >
            {showAllSkills ? 'Hide All Skills' : 'See All Skills'}
            <IoIosArrowForward 
              className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
            />
          </button>
        </header>

        {/* Slider de habilidades */}
        {!showAllSkills && (
          <div
            ref={sliderRef}
            className="relative overflow-hidden group">
              <div
                className="flex animate-loop-scroll group-hover:paused"
                style={{
                  width: `${duplicatedSkills.length * (98 / 6)}%`,
                }}>
                {duplicatedSkills.map((skill, index) => renderSkillCard(skill, index))}
              </div>
          </div>
        )}

        {/* Mostrar todas las habilidades en una cuadrícula cuando se presiona "See All" */}
        {showAllSkills && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsAll.map((skill) => (
              <div key={skill.name} className="bg-gray-100/80 p-4 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="rounded-full border border-gray-400/30 bg-white p-2">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-left text-lg font-semibold">{skill.name}</h4>
                <p className="text-left text-gray-500">{skill.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
  );
}