import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { FaGitlab } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="p-3">
      <h2 className="text-white text-2xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-3 gap-2">
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-3 rounded-md text-gray-100"
        >
          <span className="mr-2"><FaLinkedin size={24} /></span> Linkedin
        </a>
        <a
          href="https://github.com/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-3 rounded-md text-gray-100"
        >
          <span className="mr-2"><FaGithub size={24} /></span> Github
        </a>
        <a
          href="mailto:tu-email@ejemplo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-3 rounded-md text-gray-100"
        >
          <span className="mr-2"><RiMailFill size={24} /></span> Mail
        </a>
        <a
          href="https://wa.me/+1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-3 rounded-md text-gray-100"
        >
          <span className="mr-2"><FaWhatsapp size={24} /></span> WhatsApp
        </a>
        <a
          href="https://wa.me/+1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-3 rounded-md text-gray-100"
        >
          <span className="mr-2"><FaGitlab size={24} /></span> Gitlab
        </a>
        <a
          href="https://wa.me/+1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-3 rounded-md text-gray-100"
        >
          <span className="mr-2"><FaBehanceSquare size={24} /></span> Behance
        </a>
      </div>
    </div>
  );
}