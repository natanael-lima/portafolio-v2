
import React from 'react'
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";
interface ModeProps {
  darkMode: boolean;
}

export default function About({ darkMode }:ModeProps) {

  return (
    <section id="about" className="mb-12">
  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">About Me<strong className='text-amber-400'>.</strong></h2>
  
  <div className="flex flex-col items-center gap-4">
    {/* Imagen del perfil */}
    <div className="flex flex-col items-center">
      <img 
        src="https://i.postimg.cc/d318QCJZ/me4.webp"
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover mb-2"
      />
      <p className="text-sm font-semibold text-slate-500">Software Developer</p>
    </div>

    {/* Descripción resumida */}
    <div className="text-center px-4">
      <p className="text-sm mb-2">
        Hi, I m Natanael, a developer from Jujuy, Argentina. I focus on web and desktop app development with a passion for solving problems efficiently.
      </p>
      <p className="text-sm">
        I love building adaptable software and working with teams to push projects forward.
      </p>
    </div>

    {/* Botón de Available to Work */}
    <a
      href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
      className={`mt-4 rounded-full px-4 py-2 border-2 flex items-center justify-center ${darkMode ? 'border-amber-500 hover:bg-amber-500 text-amber-500 hover:text-white' : 'border-slate-600 hover:bg-slate-800 text-slate-600 hover:text-white'}`}
    >
      Available To Work
      <MdArrowOutward size={20} className="ml-2" />
    </a>

    {/* Iconos de redes sociales */}
    <div className="flex space-x-3 mt-5">
      <a href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} className="hover:scale-110 transition-colors duration-300 hover:text-amber-400" />
      </a>
      <a href="https://github.com/natanael-lima" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} className="hover:scale-110 transition-colors duration-300 hover:text-amber-400" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5493884670317">
        <BsWhatsapp size={24} className="hover:scale-110 transition-colors duration-300 hover:text-amber-400" />
      </a>
      <a href="/CV.pdf" download="CV-LIMA-NATANAEL.pdf">
        <BiSolidFilePdf size={24} className="hover:scale-110 transition-colors duration-300 hover:text-amber-400" />
      </a>
    </div>
  </div>
</section>

  );
}

