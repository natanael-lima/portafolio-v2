
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";
import { PiReadCvLogoFill } from 'react-icons/pi';

export default function About() {

  return (
    <section id="about" className="mb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
      {/* Primera columna: Imagen y nombre grande */}
      <div className="flex flex-col items-center md:items-start">
        <img 
          src="https://i.postimg.cc/SK6LgqZR/me3.webp"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h1 className="text-5xl font-md text-center md:text-left">Hello! I am Natanael Lima</h1>
      </div>
  
      {/* Segunda columna: Título y descripción */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl font-md mb-2 text-center md:text-left">
          A Software Developer / Programmer Analyst, Argentina.
        </h2>
        <p className="text-lg mb-4 text-center md:text-left text-neutral-500">
          I focus on web and desktop app development with a passion for solving problems efficiently.
        </p>
        <p className="text-lg mb-4 text-center md:text-left text-neutral-500">
          I love building adaptable software and working with teams to push projects forward.
        </p>
  
        {/* Botón de Available to Work */}
        <a
          href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
          className='mt-4 rounded-lg px-4 py-2 border-2 flex items-center justify-center border-neutral-500 hover:bg-neutral-500 text-neutral-500 hover:text-white'
        >
          Available To Work
          <MdArrowOutward size={20} className="ml-2" />
        </a>
        
        {/* Navegación de redes sociales y modo oscuro */}
        <nav className="flex items-center space-x-3 mt-6">
          {/* Iconos de redes sociales */}
          <a className="p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80" href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a className="p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80" href="https://github.com/natanael-lima" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a className="p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80" href="/CV.pdf" download="CV-LIMA-NATANAEL.pdf">
            <PiReadCvLogoFill />
          </a>
        
        </nav>
      </div>
    </div>
  </section>
  


  );
}

