import React from 'react'
import { FaGithub,FaLinkedin,FaFilePdf } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdAttachEmail,MdArrowOutward } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
export default function About() {
  return (
    <section id="about" className="mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/natanael-lima"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
          {/* Open to Work Button */}
          <span className="bg-blue-100 hover:bg-blue-50 rounded-full flex items-center mt-5">
            <a
              href="mailto:natanael.lima.dev@gmail.com"
              className="p-2 flex items-center text-blue-900 no-underline hover:text-blue-950"
            >
              
              <span className="px-1">Disponible para trabajar</span>
              <MdArrowOutward size={20} />
            </a>
          </span>
        </div>

        {/* Content and Open to Work Button */}
        <div className="flex flex-col items-start space-y-4 md:space-y-0 md:ml-8">
          <div className="flex flex-col items-center items-start space-y-4">
            {/* About Me Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 flex items-center">About Me <BsQuestionCircleFill size={32} className="ml-2"/></h2>

                <p className="text-lg mb-4">
                ¡Hola! Soy <span className="text-blue-500 font-semibold">Analista Programador Universitario</span> de Jujuy, Argentina, con experiencia en <span className="text-blue-500 font-semibold">desarrollo de aplicaciones web y desktop</span> y <span className="text-blue-500 font-semibold">organización de datos</span>.
                </p>
                <p className="text-lg mb-4">
                Me especializo en la <span className="text-blue-500 font-semibold">implementación de soluciones prácticas y eficientes</span>, utilizando un conjunto de <span className="text-blue-500 font-semibold">tecnologías</span>. Mi enfoque está en la <span className="text-blue-500 font-semibold">creación de software funcional y adaptable</span>.
                </p>
                <p className="text-lg mb-4">
                Soy una persona <span className="text-blue-500 font-semibold">responsable</span> y <span className="text-blue-500 font-semibold">organizada</span>, que disfruta trabajar en equipo para lograr los objetivos del proyecto. Me apasiona <span className="text-blue-500 font-semibold">contribuir al avance tecnológico</span>.
                </p>


            </div>
          </div>

          {/* Social Media and CV Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-blue-300 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-blue-30 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-100 hover:text-blue-30 transition-colors duration-300"
            >
              <BsWhatsapp size={24} />
            </a>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="text-blue-100 hover:text-blue-30 transition-colors duration-300"
            >
              <FaFilePdf size={24} />
            </a>
            <a
              href="/path-to-your-cv.pdf"
              className="text-blue-100 hover:text-blue-30 transition-colors duration-300"
            >
              <MdAttachEmail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

