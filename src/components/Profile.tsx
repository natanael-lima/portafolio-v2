import React from 'react';
import { FaGithub, FaGraduationCap, FaLinkedin, FaUserTie } from 'react-icons/fa';
import { TiLocation } from "react-icons/ti";
import { FaFileArrowDown } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { MdMail } from 'react-icons/md';
import { BsPersonFillUp } from "react-icons/bs";

export default function About() {
  return (
    <div className="rounded-md relative shadow-lg">
      {/* Botón de descargar CV en la esquina superior derecha */}
      <div className="absolute top-1 right-0"> 
        <a href="/resume.pdf" download >
            <button className="bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition">
                <FaFileArrowDown size={18} />
            </button>
        </a>
      </div>

      {/* Contenedor de imagen e información */}
      <div className="flex items-center mb-6">
        {/* Imagen de perfil */}
        <img
          src="https://i.postimg.cc/Gt5v4pp7/me5.webp"
          alt="Profile"
          className="w-24 h-24 rounded-lg object-cover"
        />

        {/* Información al lado de la imagen */}
        <div className="ml-6 flex flex-col justify-between">
          {/* Disponibilidad */}
          <span className="bg-neutral-700/40 rounded-full text-neutral-400 font-md flex items-center px-3 py-1">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span> Available for work
          </span>

          {/* Nombre */}
          <h2 className="text-2xl font-bold text-neutral-200">Natanael Lima</h2>

          {/* Descripción de trabajo */}
          <p className="text-md text-neutral-500">Programmer Analyst</p>
        </div>
      </div>
      {/* Etiquetas de información adicional */}
      <div className="flex flex-wrap gap-2 mb-6">
        {/* Tags con íconos y texto */}
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <TiLocation className="mr-1" /> Argentina
        </span>
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <FaGraduationCap className="mr-1" /> University Graduate
        </span>
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <BsPersonFillUp className="mr-1" /> Self-taught
        </span>
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <FaUserTie className="mr-1" /> Software Developer
        </span>
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <RiTeamFill className="mr-1" /> Team Player
        </span>
        
        
      </div>

      {/* Botones de contacto*/}
      <div className="flex flex-wrap gap-2 mb-1">
        <a
          href="https://www.linkedin.com/in/natanael-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 p-3 text-neutral-300 rounded-lg flex justify-center items-center transition"
        >
          LinkedIn <FaLinkedin className="ml-1 text-xl" />
        </a>
        <a
          href="https://github.com/natanael-lima"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1  bg-neutral-800 hover:bg-neutral-700 p-3 text-neutral-300 rounded-lg flex justify-center items-center transition"
        >
          GitHub <FaGithub className="ml-1 text-xl" />
        </a>
        <a
          href="mailto:natanaelsys@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 p-3 rounded-lg flex justify-center items-center transition"
        >
          Mail <MdMail className="ml-1 text-xl" />
        </a>
      </div> 
    </div>
  );
}
