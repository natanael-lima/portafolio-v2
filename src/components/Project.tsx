import React from 'react';
import { RiCodeView } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";

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
  return (
    <div className="grid grid-cols-12 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <article className="bg-neutral-800/30 rounded-3xl border border-neutral-700/50 p-4">
              <div className="relative group overflow-hidden rounded-lg">
                {/* Imagen del proyecto */}
                <figure>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-40 opacity-80 blur-none group-hover:blur-sm transition-all duration-500"
                  />
                </figure>

                {/* Lista de tecnologías */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="whitespace-nowrap rounded-full border border-lime-200/40 bg-lime-900/40 px-1.5 py-0.5 text-xs text-lime-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Contenedor de botones y título */}
                <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <header className="w-full flex justify-between items-center">
                    <h3 className="text-white text-md font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full"
                        aria-label="View Project"
                      >
                        <VscEye className="text-xl hover:text-gray-500 transition" />
                      </a>
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full"
                        aria-label="View Code"
                      >
                        <RiCodeView className="text-xl hover:text-gray-500 transition" />
                      </a>
                    </div>
                  </header>
                </div>
              </div>
            </article>
          </div>
        ))}
    </div>
  );
}
