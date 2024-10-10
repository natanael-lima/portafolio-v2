import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaJsSquare, FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function Slider() {
  return (
    <div className="overflow-hidden w-full h-32 flex items-center">
      <div className="flex w-max animate-scroll">
        {/* Primer grupo de íconos */}
        <div className="flex items-center mx-8">
          <FaReact className="text-2xl" />
          <span className="ml-3 text-lg font-medium">React</span>
        </div>
        <div className="flex items-center mx-8">
          <FaNodeJs className="text-2xl" />
          <span className="ml-3 text-lg font-medium">Node.js</span>
        </div>
        <div className="flex items-center mx-8">
          <FaPython className="text-2xl" />
          <span className="ml-3 text-lg font-medium">Python</span>
        </div>
        <div className="flex items-center mx-8">
          <FaJava className="text-2xl" />
          <span className="ml-3 text-lg font-medium">Java</span>
        </div>
        <div className="flex items-center mx-8">
          <FaJsSquare className="text-2xl" />
          <span className="ml-3 text-lg font-medium">JavaScript</span>
        </div>
        <div className="flex items-center mx-8">
          <FaAngular className="text-2xl" />
          <span className="ml-3 text-lg font-medium">Angular</span>
        </div>
        <div className="flex items-center mx-8">
          <FaHtml5 className="text-2xl" />
          <span className="ml-3 text-lg font-medium">HTML5</span>
        </div>
        <div className="flex items-center mx-8">
          <FaCss3Alt className="text-2xl" />
          <span className="ml-3 text-lg font-medium">CSS3</span>
        </div>

        {/* Segundo grupo de íconos (duplicado para efecto infinito) */}
        <div className="flex items-center mx-8">
          <FaReact className="text-2xl" />
          <span className="ml-3 text-lg font-medium">React</span>
        </div>
        <div className="flex items-center mx-8">
          <FaNodeJs className="text-2xl" />
          <span className="ml-3 text-lg font-medium">Node.js</span>
        </div>
        <div className="flex items-center mx-8">
          <FaPython className="text-2xl " />
          <span className="ml-3 text-lg font-medium">Python</span>
        </div>
        <div className="flex items-center mx-8">
          <FaJava className="text-2xl " />
          <span className="ml-3 text-lg font-medium">Java</span>
        </div>
        <div className="flex items-center mx-8">
          <FaJsSquare className="text-2xl " />
          <span className="ml-3 text-lg font-medium">JavaScript</span>
        </div>
        <div className="flex items-center mx-8">
          <FaAngular className="text-2xl " />
          <span className="ml-3 text-lg font-medium">Angular</span>
        </div>
        <div className="flex items-center mx-8">
          <FaHtml5 className="text-2xl " />
          <span className="ml-3 text-lg font-medium">HTML5</span>
        </div>
        <div className="flex items-center mx-8">
          <FaCss3Alt className="text-2xl " />
          <span className="ml-3 text-lg font-medium">CSS3</span>
        </div>
      </div>
    </div>
  );
}
