'use client'
import {IoMdMoon,IoMdSunny } from "react-icons/io";
import React from 'react'

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ darkMode, setDarkMode }:HeaderProps) {
  //const [menuOpen, setMenuOpen] = useState(false);

  //const toggleMenu = () => {
  //  setMenuOpen(!menuOpen);
  //};
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8 relative transition-colors">
      {/* Logo y Correo */}
      <div className="flex justify-between w-full md:w-auto items-center mb-4 md:mb-0">
        <div className="flex items-center space-x-4">
          <span className="font-sans font-bold text-xl text-neutral-700">Natanael<span className="text-lime-400">Lima</span></span>
        </div>
        <button
        onClick={toggleDarkMode}
        className="block sm:hidden p-2 rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
      >
        {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
      </button>
        {/* Botón de hamburguesa para móviles 
        <button onClick={toggleMenu} className="md:hidden focus:outline-none text-neutral-900 dark:text-neutral-200">
          {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>*/}
      </div>

      {/* Navegación para móviles y escritorio
      <nav
        className={`flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex items-start md:space-x-6 space-y-4 md:space-y-0 md:bg-transparent w-full md:w-auto transition-colors`}>
        <a href="#about" className="font-medium hover:text-lime-600 transition text-neutral-900 dark:text-neutral-200">
          Skills
        </a>
        <a href="#projects" className="font-medium hover:text-lime-600 transition text-neutral-900 dark:text-neutral-200">
          Projects
        </a>
        <a href="#contact" className="font-medium hover:text-lime-600 transition text-neutral-900 dark:text-neutral-200">
          Contact
        </a>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center mt-4 md:hidden text-neutral-900 dark:text-neutral-200"
        >
          {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
        </button>
      </nav> */}

      {/* Botón de cambio de modo para pantallas grandes*/}
      <div className="hidden md:block ">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
        >
          {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
        </button>
      </div>
  </header>
    )
}
