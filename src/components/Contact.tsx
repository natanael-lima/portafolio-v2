import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
export default function Contact() {
  return (
    <section id="contact" className="mb-12">
    <h2 className="text-3xl font-bold mb-4 flex items-center">Contact Me <BiSolidContact className='ml-2' size={32} /> </h2>
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
      <p className="text-lg mb-4">
        I am always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
      </p>
      <div className="space-y-2">
        <div className="flex items-center">
          <IoIosMail className="mr-2 text-blue-500" size={20} />
          <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="mr-2 text-blue-500" size={20} />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/yourprofile</a>
        </div>
        <div className="flex items-center">
          <FaGithub className="mr-2 text-blue-500" size={20} />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/yourusername</a>
        </div>
      </div>
    </div>
  </section>
  )
}
