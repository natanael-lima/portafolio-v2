
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { RiMailFill } from 'react-icons/ri';

export default function Hero() {

  return (
    <section id="about" className="mb-12">
      <div className="flex flex-col items-center text-center space-y-3">

        {/* Imagen */}
        <img 
          src="https://i.postimg.cc/SK6LgqZR/me3.webp"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mb-0"
        />
         {/* Span con punto y estado de trabajo */}
         <div className="flex items-center space-x-2 border border-lime-600/50 text-neutral-500 dark:text-neutral-100 text-sm py-2 px-3 bg-lime-500/10 dark:bg-neutral-50/10 rounded-full">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-600"></span>
                </span>
              <span className='text-lime-600/80'>Available for work</span>
          </div>
        {/* Nombre */}
        <h1 className="text-3xl font-bold text-neutral-600 dark:text-neutral-50">
          Natanael Lima
        </h1>
        

        {/* Descripción */}
        <p className="text-md font-normal text-neutral-700/50 dark:text-neutral-200/50">
        Software Developer / Programmer Analyst from Argentina, specializing in web and desktop apps.
        </p>
                     
       
        {/* Redes sociales */}
        <nav className="flex items-center space-x-3 mt-6">
          {/* Iconos de redes sociales */}
          <a
            className="transition-colors duration-200  text-neutral-800/50  dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
            href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiMailFill className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
          </a>
          <a
            className="transition-colors duration-200  text-neutral-800/50   dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
            href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
          </a>
          <a
            className="transition-colors duration-200 text-neutral-800/50  dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
            href="https://github.com/natanael-lima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
          </a>
          <a
            className="transition-colors duration-200 text-neutral-800/50  dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
            href="/resume.pdf"
            download="resume-lima.pdf"
          >
            <PiReadCvLogoFill className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
          </a>
        </nav>
      </div>
    </section>


  );
}

