import React from 'react'
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" className="p-3 lg:p-0 mb-12 text-center">
    <h3 className="text-3xl font-md mb-2 mt-12">Contact Me</h3>
    <p className="text-lg">
      I am always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
    </p>
    <div className="space-y-2 p-5">
      <div className="flex items-center justify-center">
        <RiMailFill className="mr-2" size={20} />
        <a href="mailto:natanael.lima.dev@gmail.com" className="hover:underline">natanael.lima.dev@gmail.com</a>
      </div>
      <div className="flex items-center justify-center">
        <FaLinkedin className="mr-2" size={20} />
        <a href="https://linkedin.com/in/natanael-dev" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/natanael-dev</a>
      </div>
      <div className="flex items-center justify-center">
        <FaGithub className="mr-2" size={20} />
        <a href="https://github.com/natanael-lima" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/natanael-lima</a>
      </div>
      <div className="flex items-center justify-center">
        <FaWhatsapp className="mr-2" size={20} />
        <a href="https://api.whatsapp.com/send?phone=5493884670317" target="_blank" rel="noopener noreferrer" className="hover:underline">send direct message</a>
      </div>
    </div>
  </section>
  
  )
}
