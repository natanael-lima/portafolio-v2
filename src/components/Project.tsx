import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaAngular, FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiDotnet } from 'react-icons/di'
import { SiThymeleaf, SiCsharp, SiSpring, SiMongodb, SiMicrosoftsqlserver, SiJsonwebtokens } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { AiOutlineDotNet } from 'react-icons/ai'
import { FaRegEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
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



export default function Project() {


  return (
    <div className='p-2'>
          <h2 className="text-xl font-bold text-white mb-4">Projects</h2>
  
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <img 
              src="https://i.postimg.cc/kD3mHVPw/portada-lovely-reponsive.png" 
              alt="Project 1" 
              className="rounded-md w-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-700 rounded-md"></div>
          </div>

          <div className="relative">
            <img 
              src="https://i.postimg.cc/kD3mHVPw/portada-lovely-reponsive.png" 
              alt="Project 2" 
              className="rounded-md w-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-700 rounded-md"></div>
          </div>

          <div className="relative">
            <img 
              src="https://i.postimg.cc/kD3mHVPw/portada-lovely-reponsive.png" 
              alt="Project 3" 
              className="rounded-md w-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-700 rounded-md"></div>
          </div>
        </div>
        
        {/* Ver más proyectos */}
        <div className="flex justify-center mt-4">
          <button className=" bg-gray-700 border border-gray-600/50 hover:bg-gray-600/70 text-gray-300 p-3 rounded-lg hover:bg-amber-600 transition">
            See More Projects
          </button>
        </div>
    </div>
    
  )
}