import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaJava, FaNodeJs, FaEye, FaGithub } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiDotnet } from 'react-icons/di'
import { SiThymeleaf, SiCsharp, SiSpring, SiMongodb, SiMicrosoftsqlserver, SiJsonwebtokens } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { AiOutlineDotNet } from 'react-icons/ai'

const projects = [
  {
    name: 'Parking System Management',
    img: 'https://i.postimg.cc/KzLFw5MM/project-playa.png',
    description: 'System for multiple zones that handles vehicle entry/exit, ticketing, and customer management.',
    technologies: ['C#', 'WPF', '.NET','SQL Server'],
    githubLink: 'https://github.com/yourusername/html-css-portfolio',
    liveDemo: 'https://yourwebsite.com/html-css-portfolio'
  },
  {
    name: 'Clinical Shift Management',
    img:'https://i.postimg.cc/kMZX84z2/portada-turnoss.png',
    description: 'System for an ophthalmology clinic with appointment scheduling, patient and doctor management',
    technologies: ['Java', 'Spring', 'JPA', 'Rest API', 'Postman', 'Unit Tests', 'MySQL'],
    githubLink: 'https://github.com/yourusername/typescript-calculator',
    liveDemo: 'https://yourwebsite.com/typescript-calculator'
  },
  {
    name: 'Optical System Management',
    img: 'https://i.postimg.cc/jj0MvQt9/project-optica.png',
    description: 'A Windows Forms sales management system for an optician that manages clients, products, and sales with features for registration, modification, and detailed reporting.',
    technologies: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Stored Procedure'],
    githubLink: 'https://github.com/yourusername/angular-ecommerce',
    liveDemo: 'https://yourwebsite.com/angular-ecommerce'
  },
  {
    name: 'Postulants System Management',
    img: 'https://i.postimg.cc/sgCj6LVy/portada-postulan.png',
    description: 'A web system for job applications with user registration, application tracking, and an admin module for managing and reviewing submissions.',
    technologies : ['Java', 'Spring Boot', 'Thymeleaf', 'HTML', 'Bootstrap', 'JPA', 'MySQL'],
    githubLink: 'https://github.com/yourusername/bootstrap-admin-dashboard',
    liveDemo: 'https://yourwebsite.com/bootstrap-admin-dashboard'
  },
  {
    name: 'Comprehensive Sales System',
    img: 'https://i.postimg.cc/pd22xnh6/portada-gestion-ventas.png',
    description: 'A sales management system for classic car models with user roles for managing sales, products, and settings.',
    technologies :['Java', 'Spring Boot','Thymeleaf', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    githubLink: 'https://github.com/yourusername/winform-inventory',
    liveDemo: 'https://yourwebsite.com/winform-inventory'
  },
  {
    name: 'Event Management System',
    img: 'https://i.postimg.cc/85cNfQbd/portada-eventos.png',
    description: 'A web system for scheduling and tracking business meetings, with detailed reporting and participant access to agendas and meeting details.',
    technologies : ['HTML', 'CSS', 'Bootstrap', 'Angular', 'NodeJS', 'Postman', 'Express', 'TypeScript', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/wpf-media-player',
    liveDemo: 'https://yourwebsite.com/wpf-media-player'
  },
  {
    name: 'Lovely Dating App',
    img: 'https://i.postimg.cc/kD3mHVPw/portada-lovely-reponsive.png',
    description: 'Lovely is a dating app like Tinder, offering user registration, profile creation, real-time chatting, and a match search engine with mutual match conversations.',
    technologies : ['Java', 'HTML', 'CSS', 'Angular', 'RESTful', 'Postman', 'MySQL', 'Spring Boot','JWT', 'WebSocket'],
    githubLink: 'https://github.com/yourusername/thymeleaf-blog',
    liveDemo: 'https://yourwebsite.com/thymeleaf-blog'
  },
  {
    name: 'Griiin E-commerce Platform',
    img: 'https://i.postimg.cc/W4Xs4b0b/portada-ecommerce.png',
    description: 'Platform with an admin panel for managing users, categories, and products. It includes search and filtering features for a smooth shopping experience.',
    technologies: ['Java', 'HTML', 'CSS', 'Angular', 'RESTful API', 'Postman', 'MySQL', 'Spring Boot','JWT'],
    githubLink: 'https://github.com/yourusername/docker-nodejs-api',
    liveDemo: 'https://yourwebsite.com/docker-nodejs-api'
  },
  {
    name: 'Hotel System',
    img: 'https://i.postimg.cc/qRF08bmP/portada-hotel.png',
    description: 'System built with Spring Boot and React, using PostgreSQL for data management. It offers a seamless booking experience with a modern, full-stack architecture.',
    technologies: ['React','Tailwind','Vite','HTML','Node.js', 'Docker', 'Spring','Postgresql'],
    githubLink: 'https://github.com/yourusername/docker-nodejs-api',
    liveDemo: 'https://yourwebsite.com/docker-nodejs-api'
  }
];

const frontendSkills = [
  { name: 'HTML', icon: <FaHtml5 size={24} /> },
  { name: 'CSS', icon: <FaCss3Alt size={24} /> },
  { name: 'TypeScript', icon: <BiLogoTypescript size={24} /> },
  { name: 'Angular', icon: <FaAngular size={24} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={24} /> },
  { name: 'WinForm', icon: <DiDotnet size={24} /> },
  { name: 'WPF', icon: <DiDotnet size={24} /> },
  { name: 'Thymeleaf', icon: <SiThymeleaf size={20} /> },
]

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
]

export default function Project() {
  const [selectedTechnology, setSelectedTechnology] = useState('All')

  const filteredProjects = selectedTechnology === 'All'
    ? projects
    : projects.filter(project => 
        project.technologies.some(tech => tech === selectedTechnology)
      );

  return (
    <section id="portfolio" className="mb-12">
       <h2 className="text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">
              Projects <strong className="text-amber-400">.</strong>
       </h2>
      {/*<div className="bg-indigo-500 text-indigo-200 p-5   dark:bg-black dark:text-indigo-200">
            asdasdasd
      </div>*/}
      <div className="mb-4">
        <button
          onClick={() => setSelectedTechnology('All')}
          className={`mr-2 mb-2 px-4 py-2 rounded-full ${
            selectedTechnology === 'All' ? 'bg-indigo-500 text-indigo-100 ' : 'text-indigo-100 bg-indigo-400/30  hover:bg-indigo-500/80'
          }`}
        >
          All
        </button>
        {[...frontendSkills, ...backendSkills].map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedTechnology(skill.name)}
            className={`mr-2 mb-2 px-4 py-2 rounded-full ${
              selectedTechnology === skill.name ? 'bg-indigo-500 text-indigo-100' : 'text-indigo-100 bg-indigo-400/30 hover:bg-indigo-500/80'
            }`}
          >
            {skill.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {filteredProjects.map((project) => (
  <div 
    key={project.name} 
    className="relative rounded-md overflow-hidden shadow-md bg-gray-200 dark:bg-gray-800 transition-all duration-300"
  >
    {/* Contenedor de la imagen */}
    <div className="relative">
      <img 
        src={project.img} 
        alt={`Project ${project.name}`} 
        className="w-full h-64 object-cover transition-transform duration-300"
      />

      {/* Contenido que aparece en hover sobre la imagen */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-gray-800/60 opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
        {/* Descripción */}
        <p className="text-center mb-2 text-gray-200 dark:text-gray-300">{project.description}</p>
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 justify-center">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-emerald-500/80 text-emerald-50 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Contenedor para Título y Botones */}
    <div className="flex justify-between items-center p-4 bg-transparent dark:bg-gray-950">
      <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{project.name}</h3>
      <div className="flex gap-1">
        <a 
          href={project.liveDemo} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:text-gray-500 text-gray-900 transition-colors"
          aria-label="View Live Demo"
        >
          <FaEye size={20} />
        </a>
        <a 
          href={project.githubLink} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:text-gray-500 text-gray-900 transition-colors"
          aria-label="View Source Code"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  </div>
))}






      </div>
      
    </section>
  )
}