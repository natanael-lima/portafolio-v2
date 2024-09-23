import React from 'react';
import { FaRegEye, FaCode } from "react-icons/fa";

const projects = [
  {
    name: 'Parking System Management',
    img: 'https://i.postimg.cc/KzLFw5MM/project-playa.png',
    description: 'System for multiple zones that handles vehicle entry/exit, ticketing, and customer management.',
    githubLink: 'https://github.com/yourusername/html-css-portfolio',
    liveDemo: 'https://yourwebsite.com/html-css-portfolio'
  },
  {
    name: 'Clinical Shift Management',
    img: 'https://i.postimg.cc/kMZX84z2/portada-turnoss.png',
    description: 'System for an ophthalmology clinic with appointment scheduling, patient and doctor management.',
    githubLink: 'https://github.com/yourusername/typescript-calculator',
    liveDemo: 'https://yourwebsite.com/typescript-calculator'
  },
  {
    name: 'Optical System Management',
    img: 'https://i.postimg.cc/jj0MvQt9/project-optica.png',
    description: 'A Windows Forms sales management system for an optician that manages clients, products, and sales with features for registration, modification, and detailed reporting.',
    githubLink: 'https://github.com/yourusername/angular-ecommerce',
    liveDemo: 'https://yourwebsite.com/angular-ecommerce'
  },
  {
    name: 'Postulants System Management',
    img: 'https://i.postimg.cc/sgCj6LVy/portada-postulan.png',
    description: 'A web system for job applications with user registration, application tracking, and an admin module for managing and reviewing submissions.',
    githubLink: 'https://github.com/yourusername/bootstrap-admin-dashboard',
    liveDemo: 'https://yourwebsite.com/bootstrap-admin-dashboard'
  },
  {
    name: 'Comprehensive Sales System',
    img: 'https://i.postimg.cc/pd22xnh6/portada-gestion-ventas.png',
    description: 'A sales management system for classic car models with user roles for managing sales, products, and settings.',
    githubLink: 'https://github.com/yourusername/winform-inventory',
    liveDemo: 'https://yourwebsite.com/winform-inventory'
  },
  {
    name: 'Event Management System',
    img: 'https://i.postimg.cc/85cNfQbd/portada-eventos.png',
    description: 'A web system for scheduling and tracking business meetings, with detailed reporting and participant access to agendas and meeting details.',
    githubLink: 'https://github.com/yourusername/wpf-media-player',
    liveDemo: 'https://yourwebsite.com/wpf-media-player'
  },
  {
    name: 'Lovely Dating App',
    img: 'https://i.postimg.cc/kD3mHVPw/portada-lovely-reponsive.png',
    description: 'Lovely is a dating app like Tinder, offering user registration, profile creation, real-time chatting, and a match search engine with mutual match conversations.',
    githubLink: 'https://github.com/yourusername/thymeleaf-blog',
    liveDemo: 'https://yourwebsite.com/thymeleaf-blog'
  },
  {
    name: 'Griiin E-commerce Platform',
    img: 'https://i.postimg.cc/W4Xs4b0b/portada-ecommerce.png',
    description: 'Platform with an admin panel for managing users, categories, and products. It includes search and filtering features for a smooth shopping experience.',
    githubLink: 'https://github.com/yourusername/docker-nodejs-api',
    liveDemo: 'https://yourwebsite.com/docker-nodejs-api'
  },
  {
    name: 'Hotel System',
    img: 'https://i.postimg.cc/qRF08bmP/portada-hotel.png',
    description: 'System built with Spring Boot and React, using PostgreSQL for data management. It offers a seamless booking experience with a modern, full-stack architecture.',
    githubLink: 'https://github.com/yourusername/docker-nodejs-api',
    liveDemo: 'https://yourwebsite.com/docker-nodejs-api'
  }
];

export default function Project() {
  return (
        <div className="grid grid-cols-12 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <section className="bg-neutral-800/30 rounded-3xl border border-neutral-700/50 p-4">
                <div className="relative group overflow-hidden rounded-3xl">
                  {/* Imagen del proyecto */}
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-25 opacity-80"
                  />
                  {/* Contenedor de botones y título */}
                  <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="w-full flex justify-between items-center">
                      <h3 className="text-white text-lg font-semibold">{project.name}</h3>
                      <div className="flex gap-2">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
                          aria-label="View Project"
                        >
                          <FaRegEye className="text-xl" />
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
                          aria-label="View Code"
                        >
                          <FaCode className="text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
  );
}
