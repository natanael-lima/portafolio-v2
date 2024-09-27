
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { LuCopy } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { PiReadCvLogoFill } from 'react-icons/pi';

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

    {/* Nombre */}
    <h1 className="text-3xl font-bold text-neutral-600 dark:text-lime-50">
      Natanael Lima
    </h1>

    {/* Descripción */}
    <p className="text-md font-normal text-neutral-600/50 dark:text-lime-100/50">
    Software Developer / Programmer Analyst from Argentina, specializing in web and desktop apps.
    </p>

    {/* Botones de "Available to Work" y "Copy Email" */}
      <div className='flex flex-row space-x-4'>
        <a
          href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
          className='rounded-lg px-4 py-2 flex items-center justify-center bg-neutral-950/80 text-neutral-100 hover:bg-neutral-900/60 hover:text-white transition-colors duration-200 dark:bg-lime-50/90 dark:text-lime-950/90 font-medium dark:hover:bg-lime-100/90 '
        >
          Available To Work
          <MdArrowOutward size={20} className="ml-2" />
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText('natanaelsys@gmail.com');
            alert('Correo copiado: natanaelsys@gmail.com');
          }}
          className="rounded-lg px-4 py-2 flex items-center justify-center bg-neutral-950/80 text-neutral-100 hover:bg-neutral-900/60 hover:text-white transition-colors duration-200 dark:bg-lime-50/90 dark:text-lime-950/90 font-medium dark:hover:bg-lime-100/90 "
          aria-label="Copiar correo"
        >
          Copy Email
          <LuCopy size={20} className="ml-2" />
        </button>
      </div>


    {/* Redes sociales */}
    <nav className="flex items-center space-x-3 mt-6">
      {/* Iconos de redes sociales */}
      <a
        className="transition-colors duration-200  text-neutral-950/80  dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
        href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
      </a>
      <a
        className="transition-colors duration-200 text-neutral-950/80 dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
        href="https://github.com/natanael-lima"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
      </a>
      <a
        className="transition-colors duration-200 text-neutral-950/80  dark:text-lime-50/90 hover:text-neutral-900/60 dark:hover:text-lime-100/90 flex items-center justify-center"
        href="/CV.pdf"
        download="CV-LIMA-NATANAEL.pdf"
      >
        <PiReadCvLogoFill className="transition-transform duration-200 hover:-translate-y-1 text-2xl" />
      </a>
    </nav>
  </div>
</section>


  );
}

