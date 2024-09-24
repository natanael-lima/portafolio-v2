import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { FaGitlab } from "react-icons/fa6";

export default function Contact() {
  return (
    <article className="">
      <h2 className="text-white text-3xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/natanael-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition-colors duration-300 p-3 rounded-lg mr-2"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/natanael-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:underline"
          >
            linkedin/natanael-dev
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/natanael-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition-colors duration-300 p-3 rounded-lg mr-2"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://github.com/natanael-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:underline"
          >
            github/natanael-lima
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="mailto:natanaelsys@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition-colors duration-300 p-3 rounded-lg mr-2"
          >
            <RiMailFill size={24} />
          </a>
          <a
            href="mailto:natanaelsys@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:underline"
          >
            mail/natanaelsys@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://wa.me/+5493884670317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition-colors duration-300 p-3 rounded-lg mr-2"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://wa.me/+5493884670317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:underline"
          >
            whatsapp
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://gitlab.com/natanael-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition-colors duration-300 p-3 rounded-lg mr-2"
          >
            <FaGitlab size={24} />
          </a>
          <a
            href="https://gitlab.com/natanael-lima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:underline"
          >
            gitlab/natanael-lima
          </a>
        </div>
      </div>
    </article>
  
  );
}