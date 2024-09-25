import React from 'react'
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" className="p-3 lg:p-0 mb-12 text-center">
  <h3 className="text-3xl font-semibold mb-6 mt-12 text-neutral-800 dark:text-neutral-100">
    Contact Me
  </h3>
  <p className="text-lg mb-8 text-neutral-700 dark:text-neutral-300">
    I am always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
  </p>

  {/* Contact Buttons */}
  <div className="flex flex-col items-center space-y-4">
    {/* Email Section */}
    <div className="flex items-center space-x-2">
      <a
        href="mailto:natanael.lima.dev@gmail.com"
        className="flex items-center space-x-2 cursor-pointer hover:text-lime-600 transition-transform duration-200 hover:-translate-y-1"
      >
        <RiMailFill size={24} className="transition-colors duration-200 hover:text-lime-600" />
      </a>
      <a
        href="mailto:natanaelsys@gmail.com"
        className="text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:underline"
      >
        natanaelsys@gmail.com
      </a>
    </div>

    {/* LinkedIn Section */}
    <div className="flex items-center space-x-2">
      <a
        href="https://linkedin.com/in/natanael-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 cursor-pointer hover:text-lime-600 transition-transform duration-200 hover:-translate-y-1"
      >
        <FaLinkedin size={24} className="transition-colors duration-200 hover:text-lime-600" />
      </a>
      <a
        href="https://linkedin.com/in/natanael-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:underline"
      >
        linkedin.com/in/natanael-dev
      </a>
    </div>

    {/* GitHub Section */}
    <div className="flex items-center space-x-2">
      <a
        href="https://github.com/natanael-lima"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 cursor-pointer hover:text-lime-600 transition-transform duration-200 hover:-translate-y-1"
      >
        <FaGithub size={24} className="transition-colors duration-200 hover:text-lime-600" />
      </a>
      <a
        href="https://github.com/natanael-lima"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:underline"
      >
        github.com/natanael-lima
      </a>
    </div>

    {/* WhatsApp Section */}
    <div className="flex items-center space-x-2">
      <a
        href="https://api.whatsapp.com/send?phone=5493884670317"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 cursor-pointer hover:text-lime-600 transition-transform duration-200 hover:-translate-y-1"
      >
        <FaWhatsapp size={24} className="transition-colors duration-200 hover:text-lime-600" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5493884670317"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:underline"
      >
        Send direct message
      </a>
    </div>
  </div>
</section>

  )
}
