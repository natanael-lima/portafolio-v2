import React from 'react';
import { FaCode, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { TbPointFilled } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import { FaFileArrowDown } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

export default function About() {
  return (
    <div className="bg-neutral-900 p-3 rounded-md relative shadow-lg">
      {/* Botón de descargar CV en la esquina superior derecha */}
      <div className="absolute top-2 right-4"> 
        <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg transition">
          <FaFileArrowDown className="text-white text-2xl" />
        </button>
      </div>

      {/* Contenedor de imagen e información */}
      <div className="flex items-center mb-6">
        {/* Imagen de perfil */}
        <img
          src="https://i.postimg.cc/Gt5v4pp7/me5.webp"
          alt="Profile"
          className="w-28 h-28 rounded-lg object-cover"
        />

        {/* Información al lado de la imagen */}
        <div className="ml-6 flex flex-col justify-between">
          {/* Disponibilidad */}
          <span className="bg-neutral-800 rounded-full text-neutral-300 font-md flex items-center px-3 py-1">
            <TbPointFilled className="text-sm text-green-500" /> Available for work
          </span>

          {/* Nombre */}
          <h2 className="text-2xl font-bold text-white">Natanael Lima</h2>

          {/* Descripción de trabajo */}
          <p className="text-lg text-neutral-300">Programmer Analyst</p>
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
          <FaUserTie className="mr-1" /> Software Developer
        </span>
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <FaCode className="mr-1" /> Full Stack Developer
        </span>
        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-full px-3 py-1 text-sm flex items-center">
          <RiTeamFill className="mr-1" /> Team Player
        </span>
        
        
      </div>

      {/* Botones de contacto
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 p-3 text-neutral-300 rounded-lg flex justify-center items-center transition"
        >
          LinkedIn <FaLinkedin className="ml-1 text-xl" />
        </a>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 p-3 rounded-lg flex justify-center items-center transition"
        >
          GitHub <FaGithub className="ml-1 text-xl" />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 p-3 rounded-lg flex justify-center items-center transition"
        >
          Mail <MdMail className="ml-1 text-xl" />
        </a>
      </div> */}
    </div>
  );
}
