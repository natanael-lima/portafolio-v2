import React from 'react'
import { FaGithub,FaEye  } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

export default function Project() {
  return (
    <section id="portfolio" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            Portfolio
            <BsFillSuitcaseLgFill size={32} className="ml-2"/>
          </h2>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col md:flex-row gap-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img src={`https://i.postimg.cc/KzLFw5MM/project-playa.png`} alt={`Project ${item}`} className="w-full md:w-1/3 h-64 object-cover" />
                <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Project {item}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A comprehensive description of Project {item}. This project showcases my skills in web development,
                      focusing on creating responsive and interactive user interfaces with modern web technologies.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'Tailwind CSS', 'Next.js'].map((tech) => (
                        <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                      <FaEye size={16} className="mr-2" /> Live Demo
                    </a>
                    <a href="#" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center">
                    <FaGithub size={16} className="mr-2" />Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}
