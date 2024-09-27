import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaJava, FaNodeJs, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiDotnet } from 'react-icons/di'
import { SiThymeleaf, SiCsharp, SiSpring, SiMongodb, SiMicrosoftsqlserver, SiJsonwebtokens } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { AiOutlineDotNet } from 'react-icons/ai'
import Link from 'next/link'

export const projects = [
  {
    img: 'https://i.postimg.cc/qRF08bmP/portada-hotel.png',
    title: 'Hotel Reservation System',
    description: 'Registra usuarios, permite reservar y cancelar habitaciones, administra tarifas, procesa pagos e integra reseñas de usuarios.',
    technologies: ['React','Tailwind','Vite','HTML','Node.js', 'Docker', 'Spring Boot','Postgresql'],
    sourceLink: 'https://github.com/natanael-lima/hotel-reservation-system',
    demoLink: 'https://yourproject1.demo.com'
  },
  {
    img: 'https://i.postimg.cc/W4Xs4b0b/portada-ecommerce.png',
    title: 'E-commerce Platform',
    description: 'Gestiona usuarios, categorías y productos desde un panel administrativo con búsqueda y filtrado para una mejor experiencia.',
    technologies: ['Java', 'HTML', 'CSS', 'Angular', 'RESTful', 'Postman', 'MySQL', 'Spring Boot','JWT'],
    sourceLink: 'https://github.com/natanael-lima/ecommerce-web-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/qv6mRmnt/portada-lovely.png',
    title: 'Lovely Dating App',
    description: 'Aplicación de citas con registro de usuarios, perfiles, chat en tiempo real y un motor de búsqueda de coincidencias.',
    technologies : ['Java','CSS', 'Angular', 'RESTful', 'Postman', 'MySQL', 'Spring Boot','JWT', 'WebSocket'],
    sourceLink: 'https://github.com/natanael-lima/lovely-dating-web-app.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/sgCj6LVy/portada-postulan.png',
    title: 'Postulants System Management',
    description: 'Registra usuarios, permite seguimiento de postulaciones y cuenta con un rol administrativo para gestionar y revisar solicitudes.',
    technologies : ['Java', 'Spring Boot', 'Thymeleaf', 'HTML', 'Bootstrap', 'JPA', 'MySQL'],
    sourceLink: 'https://github.com/natanael-lima/applications-web-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/Wbkp7VcX/portada-weather.png',
    title: 'Weather App',
    description: 'Obtén información meteorológica precisa, incluyendo temperatura y velocidad del viento, con una interfaz sencilla.',
    technologies :['NextJs', 'Tailwind','API'],
    sourceLink: 'https://github.com/natanael-lima/weather-app.git',
    demoLink: 'https://weather-app-nine-inky-68.vercel.app'
  },
  {
    img: 'https://i.postimg.cc/GmPcZj2D/portada-tiendahia.png',
    title: 'HIA Store Layout',
    description: 'Maquetación de una tienda de productos artesanales, creado con Mobirise con seguimiento de visitas a través de Google Analytics.',
    technologies :['Mobirise', 'HTML','CSS','Google-Analytics'],
    sourceLink: 'https://github.com/natanael-lima/layout-store-mobirise',
    demoLink: 'https://natanael-lima.github.io/layout-store-mobirise/'
  },
  {
    img: 'https://i.postimg.cc/pd22xnh6/portada-gestion-ventas.png',
    title: 'Comprehensive Sales System',
    description: 'Gestiona ventas, productos y configuraciones de automóviles clásicos con roles de usuario específicos.',
    technologies :['Java', 'Spring Boot','Thymeleaf', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    sourceLink: 'https://github.com/natanael-lima/sales-management-web-applications.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/85cNfQbd/portada-eventos.png',
    title: 'Event Management System',
    description: 'Programa y rastrea reuniones de negocios con informes detallados y acceso para los participantes a agendas y detalles.',
    technologies : ['HTML', 'CSS', 'Bootstrap', 'Angular', 'NodeJS', 'Postman', 'Express', 'TypeScript', 'MongoDB'],
    sourceLink: 'https://github.com/maxi1103/TpFinal-PySW-2022',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/KzLFw5MM/project-playa.png',
    title: 'Parking System Management',
    description: 'Control de vehículos, emisión de boletos, gestión de clientes, seguimiento de espacios y generación de informes de ventas.',
    technologies: ['C#', 'WPF', '.NET','SQL Server'],
    sourceLink: 'https://github.com/natanael-lima/parking-management-desktop-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/jj0MvQt9/project-optica.png',
    title: 'Optical System Management',
    description: 'Gestiona clientes, productos, ventas y usuarios con funciones de registro, modificación e informes detallados.',
                  
    technologies: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Stored Procedure'],
    sourceLink: 'https://github.com/natanael-lima/optical-management-desktop-application.git',
    demoLink: 'https://yourproject2.demo.com'
  },
  {
    img: 'https://i.postimg.cc/kMZX84z2/portada-turnoss.png',
    title: 'Clinical Shift Management',
    description: 'Programa citas, gestiona pacientes, médicos y obras sociales, asigna turnos y envía notificaciones por correo electrónico.',
    technologies: ['Java', 'Spring', 'JPA', 'Rest API', 'Postman', 'Unit Tests', 'MySQL'],
    sourceLink: 'https://gitlab.com/lima73777/poo-2021-grupo02',
    demoLink: 'https://yourproject2.demo.com'
  },
  // Agrega más proyectos aquí
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
    <section id="portfolio" className="mb-12 mx-auto w-full px-2 sm:px-14">
        <h3 className="text-xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
          Projects
        </h3>

      <div className="mb-4">
        <button
          onClick={() => setSelectedTechnology('All')}
          className={`mr-2 mb-2 px-4 py-2 rounded-full transition-all duration-300 ${
            selectedTechnology === 'All' 
              ? 'bg-neutral-400/50 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100' 
              : 'text-neutral-800 dark:text-neutral-300 bg-neutral-400/20 dark:bg-neutral-600/20 hover:bg-neutral-500/30 dark:hover:bg-neutral-700/40'
          }`}
        >
          All
        </button>
        {[...frontendSkills, ...backendSkills].map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedTechnology(skill.name)}
            className={`mr-2 mb-2 px-4 py-2 rounded-full transition-all duration-300 ${
              selectedTechnology === skill.name
                ? 'bg-neutral-400/50 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100'
                : 'text-neutral-800 dark:text-neutral-300 bg-neutral-400/20 dark:bg-neutral-600/20 hover:bg-neutral-500/30 dark:hover:bg-neutral-700/40'
            }`}
          >
            {skill.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {filteredProjects.map((project) => (
          <Link 
            key={project.title}
            href={project.demoLink}
            className="relative rounded-lg p-4 hover:shadow-md transition-all duration-300 group hover:bg-neutral-100/80 dark:hover:bg-lime-200/5 flex"
            style={{ display: 'flex', alignItems: 'flex-start' }}
          >
            {/* Columna de la imagen (30%) */}
            <div className="w-2/5 mr-4">
              <img 
                src={project.img} 
                alt={`Project ${project.title}`} 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
              />
            </div>

            {/* Columna de contenido (70%) */}
            <div className="w-3/5 flex flex-col justify-between">
              {/* Título e Iconos */}
              <div className="flex justify-between items-start mb-2">
                {/* Título */}
                <h3 className="text-sm font-semibold text-lime-900 dark:text-neutral-100 group-hover:text-lime-600/80 dark:group-hover:text-lime-400/80 transition-colors">
                  {project.title}
                </h3>

                {/* Iconos de Demo y Código */}
                <div className="flex gap-3 z-10">
                  {/* Icono de Código fuente */}
                  <span 
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que el clic propague al enlace principal
                      window.open(project.sourceLink, '_blank'); // Abrir en nueva pestaña
                    }} 
                    className="text-lime-900 dark:text-lime-100 dark:hover:text-lime-300 hover:text-lime-500 transition-colors cursor-pointer"
                    aria-label="Source Code"
                  >
                    <FaGithub size={16} />
                  </span>

                  {/* Icono de Demo en vivo */}
                  <span 
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que el clic propague al enlace principal
                      window.open(project.demoLink, '_blank'); // Abrir en nueva pestaña
                    }} 
                    className="text-lime-900 dark:text-lime-100 dark:hover:text-lime-300 hover:text-lime-500 transition-colors cursor-pointer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </span>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-lime-500/20 text-lime-600/90 px-1.5 py-0.5 rounded-full text-xs font-normal dark:bg-lime-700/40 dark:text-lime-300/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}