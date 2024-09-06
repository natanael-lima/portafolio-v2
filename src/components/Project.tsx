import React from 'react'
import { FaGithub,FaEye  } from "react-icons/fa";

interface ModeProps {
  darkMode: boolean;
}

const projects = [
  {
    name: 'Parking System Management',
    img: 'https://i.postimg.cc/KzLFw5MM/project-playa.png',
    description: 'System for multiple zones that handles vehicle entry/exit, ticketing, and customer management. It also tracks space availability and generates sales reports.',
    technologies: ['C#', 'WPF', '.NET','SQL Server'],
    githubLink: 'https://github.com/yourusername/html-css-portfolio',
    liveDemo: 'https://yourwebsite.com/html-css-portfolio'
  },
  {
    name: 'Clinical Shift Management',
    img:'https://i.postimg.cc/vZLqmqJz/project-clinical.png',
    description: 'System for an ophthalmology clinic with appointment scheduling, patient and doctor management, and email notifications, featuring a REST API and unit testing.',
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
    img: 'https://i.postimg.cc/7PXZW4MN/psm-project.png',
    description: 'A web system for job applications with user registration, application tracking, and an admin module for managing and reviewing submissions.',
    technologies : ['Java', 'Spring Boot', 'Thymeleaf', 'HTML', 'Bootstrap', 'JPA', 'MySQL'],
    githubLink: 'https://github.com/yourusername/bootstrap-admin-dashboard',
    liveDemo: 'https://yourwebsite.com/bootstrap-admin-dashboard'
  },
  {
    name: 'Comprehensive Sales System',
    img: 'https://i.postimg.cc/Pxj5BrRS/sales-project.png',
    description: 'A sales management system for classic car models with user roles for managing sales, products, and settings.',
    technologies :['Java', 'Spring Boot','Thymeleaf', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    githubLink: 'https://github.com/yourusername/winform-inventory',
    liveDemo: 'https://yourwebsite.com/winform-inventory'
  },
  {
    name: 'Event Management System',
    img: 'https://i.postimg.cc/Dw9DgWSY/event-project.png',
    description: 'A web system for scheduling and tracking business meetings, with detailed reporting and participant access to agendas and meeting details.',
    technologies : ['HTML', 'CSS', 'Bootstrap', 'Angular', 'NodeJS', 'Postman', 'Express', 'TypeScript', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/wpf-media-player',
    liveDemo: 'https://yourwebsite.com/wpf-media-player'
  },
  {
    name: 'Lovely Dating App',
    img: 'https://i.postimg.cc/PxQ5hnGT/lovely-project.png',
    description: 'Lovely is a dating app like Tinder, offering user registration, profile creation, real-time chatting, and a match search engine with mutual match conversations.',
    technologies : ['Java', 'HTML', 'CSS', 'Angular', 'RESTful', 'Postman', 'MySQL', 'Spring Boot','JWT', 'WebSocket'],
    githubLink: 'https://github.com/yourusername/thymeleaf-blog',
    liveDemo: 'https://yourwebsite.com/thymeleaf-blog'
  },
  {
    name: 'Griiin E-commerce Platform',
    img: 'https://i.postimg.cc/mkZ2gpRM/ecommerce-project.png',
    description: 'Platform with an admin panel for managing users, categories, and products. It includes search and filtering features for a smooth shopping experience.',
    technologies: ['Java', 'HTML', 'CSS', 'Angular', 'RESTful API', 'Postman', 'MySQL', 'Spring Boot','JWT'],
    githubLink: 'https://github.com/yourusername/docker-nodejs-api',
    liveDemo: 'https://yourwebsite.com/docker-nodejs-api'
  },
  {
    name: 'Hotel System',
    img: 'https://i.postimg.cc/Vv7sr9Lh/hotel-project.png',
    description: 'System built with Spring Boot and React, using PostgreSQL for data management. It offers a seamless booking experience with a modern, full-stack architecture.',
    technologies: ['React','Tailwind','Vite','HTML','Node.js', 'Docker', 'Spring','Postgresql'],
    githubLink: 'https://github.com/yourusername/docker-nodejs-api',
    liveDemo: 'https://yourwebsite.com/docker-nodejs-api'
  }
];

export default function Project({ darkMode }:ModeProps) {


  return (
    <section id="portfolio" className="p-3 lg:p-0 mb-12">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start ">
        Projects <strong className='text-amber-400'>.</strong>
      </h2>
      <div className="space-y-8">
        {projects.map((item) => (
          <div key={item.name} className={`rounded-md flex flex-col md:flex-row gap-6rounded-lg overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-300'}`}>
            <img src={item.img} alt={`Project ${item.name}`} className="w-full md:w-1/3 h-72 object-cover" />
            <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-2xl font-semibold mb-2 justify-center lg:justify-start">Project {item.name}</h3>
                <p className={`mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-700 text-blue-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={item.liveDemo} className={`px-4 py-2 rounded-full flex items-center ${darkMode ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-slate-800 hover:bg-slate-900 text-white'}`} >
                  <FaEye size={16} className="mr-2" /> Live Demo
                </a>
                <a href={item.githubLink} className={`px-4 py-2 rounded-full flex items-center ${darkMode ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-slate-800 hover:bg-slate-900 text-white'}`} >
                  <FaGithub size={16} className="mr-2" /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
