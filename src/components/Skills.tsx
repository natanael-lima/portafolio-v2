import React from 'react'
import { FaLayerGroup } from "react-icons/fa";

export default function Skills() {
    const frontendSkills = [
        'HTML', 'CSS', 'TypeScript', 'Angular', 'Bootstrap', 'Windows Form', 'WPF', 'Thymeleaf'
      ];
    
      const backendSkills = [
        'Java', 'C#', 'Spring', 'NodeJS', 'MySQL', 'MongoDB', '.NET', 'MSSQL Server', 'Hibernate', 'JWT'
      ];
    
      const extraSkills = [
        'SCRUM', 'CorelDraw', 'Photoshop', 'Docker', 'Git'
      ];
    
      return (
        <section id="skills" className="mb-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center">Skills <FaLayerGroup className='ml-2' size={32} /></h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend Development */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
  
          {/* Backend Development */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <div key={skill} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
  
          {/* Extras */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Extras</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {extraSkills.map((skill) => (
                <div key={skill} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
     );
}