import React from 'react'
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
interface ModeProps {
  darkMode: boolean;
}
export default function Contact({ darkMode }:ModeProps) {
  return (
    <section id="contact" className="mb-12">
    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center lg:justify-start">Contact Me<strong className='text-amber-400'>.</strong></h2>
    <div className={` rounded-lg p-6  ${darkMode ? 'bg-slate-800' : 'bg-slate-300'}`}>
      <p className="text-lg mb-4">
        I am always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
      </p>
      <div className="space-y-2">
        <div className="flex items-center">
          <RiMailFill className="mr-2 " size={20} />
          <a href="mailto:natanael.lima.dev@gmail.com" className="hover:underline">natanael.lima.dev@gmail.com</a>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="mr-2 " size={20} />
          <a href="https://linkedin.com/in/natanael-dev" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/natanael-dev</a>
        </div>
        <div className="flex items-center">
          <FaGithub className="mr-2 " size={20} />
          <a href="https://github.com/natanael-lima" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/natanael-lima</a>
        </div>
        <div className="flex items-center">
          <FaWhatsapp className="mr-2 " size={20} />
          <a href="https://api.whatsapp.com/send?phone=5493884670317" target="_blank" rel="noopener noreferrer" className="hover:underline">send direct message</a>
        </div>
      </div>
    </div>
  </section>
  )
}
