import React from 'react'
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" className="mb-12 mx-auto w-full px-2 sm:px-14">
    <h3 className="text-xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
      Contact Me
    </h3>
  
    {/* Contact Buttons */}
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      {/* Email Section */}
      <div className="flex items-center">
        <a
          href="mailto:natanael.lima.dev@gmail.com"
          className="p-2 rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
        >
          <RiMailFill size={32} className="transition-colors duration-200 hover:text-lime-600" />
        </a>
      </div>
  
      {/* LinkedIn Section */}
      <div className="flex items-center">
        <a
          href="https://linkedin.com/in/natanael-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
        >
          <FaLinkedin size={32} className="transition-colors duration-200 hover:text-lime-600" />
        </a>
      </div>
  
      {/* GitHub Section */}
      <div className="flex items-center">
        <a
          href="https://github.com/natanael-lima"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
        >
          <FaGithub size={32} className="transition-colors duration-200 hover:text-lime-600" />
        </a>
      </div>
  
      {/* WhatsApp Section */}
      <div className="flex items-center">
        <a
          href="https://api.whatsapp.com/send?phone=5493884670317"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
        >
          <FaWhatsapp size={32} className="transition-colors duration-200 hover:text-lime-600" />
        </a>
      </div>
    </div>
  </section>
  )
}
