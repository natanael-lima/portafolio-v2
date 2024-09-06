
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
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img src="https://i.postimg.cc/d318QCJZ/me4.webp"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"></img>
            {/* Social Media and CV Links */}
          <div className="flex flex-wrap justify-center space-x-3 mt-5 ">
            <a
              href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-110 transition ${darkMode ? 'hover:text-amber-400 transition-colors duration-300' : 'hover:text-slate-600 transition-colors duration-300'}`} 
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/natanael-lima"
              target="_blank"
              rel="noopener noreferrer"
              className={` hover:scale-110 transition ${darkMode ? 'hover:text-amber-400 transition-colors duration-300' : 'hover:text-slate-600 transition-colors duration-300'}`} 
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5493884670317"
              className={` hover:scale-110 transition ${darkMode ? 'hover:text-amber-400 transition-colors duration-300' : 'hover:text-slate-600 transition-colors duration-300'}`} 
            >
              <BsWhatsapp size={24} />
            </a>
            <a
              target="_blank"
              href="/CV.pdf" // Ruta relativa desde la raíz pública
              download="CV-LIMA-NATANAEL.pdf"
              className={` hover:scale-110 transition ${darkMode ? 'hover:text-amber-400 transition-colors duration-300' : 'hover:text-slate-600 transition-colors duration-300'}`} 
            >
              <BiSolidFilePdf size={24} />
            </a>
          </div>
        
        </div>

        {/* Content and Open to Work Button */}
        <div className="flex flex-col items-start space-y-4 md:space-y-0 md:ml-8">
          <div className="flex flex-col items-center items-start space-y-4">
            {/* About Me Content */}
            <div className="p-3 lg:p-0 text-start">
                <h1 className="text-2xl lg:text-4xl mb-6 font-extrabold text-slate-400/90 ">
                  Hey, I am Natanael Lima
                </h1>
                <p className="text-lg mb-4">
                     <span className="text-amber-500 font-semibold">Software Developer/Programmer Analyst</span> from Jujuy, Argentina, with experience in <span className="text-amber-500 font-semibold">web and desktop application development</span> and <span className="text-amber-500 font-semibold">data organization</span>.
                </p>
                <p className="text-lg mb-4">
                    I specialize in <span className="text-amber-500 font-semibold">implementing practical and efficient solutions</span>, using a set of <span className="text-amber-500 font-semibold">technologies</span>. My focus is on <span className="text-amber-500 font-semibold">creating functional and adaptable software</span>.
                </p>
                <p className="text-lg mb-4">
                    I am a <span className="text-amber-500 font-semibold">responsible</span> and <span className="text-amber-500 font-semibold">organized</span> person who enjoys working in a team to achieve project goals. I am passionate about <span className="text-amber-500 font-semibold">contributing to technological advancement</span>.
                </p>
            </div>
          </div>
           {/* Open to Work Button */}
           <span className={`ml-3 lg:ml-0 rounded-full flex items-center lg:justify-start mt-5  ${darkMode ? 'border-2 border-amber-500 bg-none hover:bg-amber-500' : 'border-2 border-slate-600 bg-none hover:bg-slate-800'}`}>
              <a
                href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/" className={`p-2 flex items-center  no-underline  ${darkMode ? 'text-amber-500 hover:text-amber-50' : 'text-slate-600 hover:text-slate-50'}`}>
                <span className="px-1 font-semibold">Available To Work</span>
                <MdArrowOutward size={20} />
              </a>
            </span>
           
          
        </div>
      </div>
    </section>
  );
}

