import React, { useState } from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

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


export default function Project() {
  const [showAll, setShowAll] = useState(false); // Estado para controlar la visualización

  const filteredProjects = 'All' === 'All'
    ? projects
    : projects.filter(project =>
        project.technologies.some(tech => tech === 'All')
      );

  // Solo mostrar los primeros 3 proyectos si `showAll` es falso
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);

  return (
    <section id="portfolio" className="mb-12 mx-auto w-full px-2 sm:px-8">
      <header className="flex justify-between items-center">
      <h3 className="text-2xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
        Projects
      </h3>
      {/* Botón para ver todos los proyectos */}
      {!showAll && (
        <button 
          onClick={() => setShowAll(true)} 
          className="flex items-center group hover:text-neutral-500 text-lime-600 dark:text-lime-300 mb-4 mt-12 transition-all duration-300" 
        >
          See them all 
          <IoIosArrowForward 
            className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
          />
        </button>
      )}
    </header>


    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
      {visibleProjects.map((project) => (
        <Link 
          key={project.title}
          href={project.demoLink}
          className="relative rounded-lg p-4 hover:shadow-md transition-all duration-300 group hover:bg-neutral-100/80 dark:hover:bg-lime-200/5 flex"
          style={{ display: 'flex', alignItems: 'flex-start' }}
        >
          {/* Columna de la imagen (30%) */}
          <div className="w-2/6 mr-4">
            <img 
              src={project.img} 
              alt={`Project ${project.title}`} 
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
            />
          </div>

          {/* Columna de contenido (70%) */}
          <div className="w-3/5 flex flex-col justify-between h-full">
            {/* Título e Iconos */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-lime-900 dark:text-neutral-100 group-hover:text-lime-600/80 dark:group-hover:text-lime-400/80 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Descripción */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-lime-500/20 text-lime-600/90 px-1.5 py-0.5 rounded-full text-xs font-normal dark:bg-lime-700/40 dark:text-lime-300/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-2 mt-2 z-10">
                {/* Icono de Código fuente */}
                <span 
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que el clic propague al enlace principal
                    window.open(project.sourceLink, '_blank');
                  }} 
                  className="flex items-center text-md font-semibold text-lime-600 dark:text-lime-100 dark:hover:text-lime-300 hover:text-lime-500 transition-colors cursor-pointer"
                  aria-label="Source Code"
                >
                   Source <FiArrowUpRight className='ml-1 h-4 w-4'/>
                </span>

                {/* Icono de Demo en vivo */}
                <span 
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que el clic propague al enlace principal
                    window.open(project.demoLink, '_blank');
                  }} 
                  className="flex items-center text-md font-semibold text-lime-600 dark:text-lime-100 dark:hover:text-lime-300 hover:text-lime-500 transition-colors cursor-pointer"
                  aria-label="Live Demo"
                >
                  Demo <FiArrowUpRight className='ml-1 h-4 w-4'/>
                </span>
              </div>
          </div>
        </Link>
      ))}
    </div>

    {/* Mostrar botón para ocultar proyectos si están todos visibles */}
    {showAll && (
      <button 
        onClick={() => setShowAll(false)} 
        className="mt-6 block mx-auto text-lime-600 dark:text-lime-300 hover:text-lime-500 transition-colors"
      >
        Show less
      </button>
    )}
  </section>
  );
}