'use client'
import { IoMdClose, IoMdMenu, IoMdMoon,IoMdSunny } from "react-icons/io";
import { IoMdCopy } from "react-icons/io";
import React, { useState } from 'react'

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Header({ darkMode, setDarkMode }:HeaderProps) {
  //const [language, setLanguage] = useState('en')
  //const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en')
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8 relative bg-neutral-50 dark:bg-neutral-950 transition-colors">
  {/* Logo y Correo */}
  <div className="flex justify-between w-full md:w-auto items-center mb-4 md:mb-0">
    <div className="flex items-center space-x-4">
      <img src="logo.ico" alt="Logo" className="h-8" />
      <button
        onClick={() => {
          navigator.clipboard.writeText('natanaelsys@gmail.com');
          alert('Correo copiado: natanaelsys@gmail.com');
        }}
        className="p-2 rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-200"
        aria-label="Copiar correo"
      >
        natanaelsys@gmail.com
        <IoMdCopy size={16} className="ml-1" />
      </button>
    </div>
    {/* Botón de hamburguesa para móviles */}
    <button onClick={toggleMenu} className="md:hidden focus:outline-none text-neutral-900 dark:text-neutral-200">
      {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
    </button>
  </div>

  {/* Navegación para móviles y escritorio */}
  <nav
    className={`flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex items-center md:space-x-6 space-y-4 md:space-y-0 bg-neutral-50 dark:bg-neutral-950 md:bg-transparent w-full md:w-auto transition-colors`}
  >
    <a href="#about" className="font-medium hover:text-lime-600 transition text-neutral-900 dark:text-neutral-200">
      About
    </a>
    <span className="hidden md:flex items-center justify-center h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
    <a href="#projects" className="font-medium hover:text-lime-600 transition text-neutral-900 dark:text-neutral-200">
      Projects
    </a>
    <span className="hidden md:flex items-center justify-center h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
    <a href="#contact" className="font-medium hover:text-lime-600 transition text-neutral-900 dark:text-neutral-200">
      Contact
    </a>

    {/* Botón de cambio de modo en el menú móvil */}
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center mt-4 md:hidden text-neutral-900 dark:text-neutral-200"
    >
      {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
    </button>
  </nav>

  {/* Botón de cambio de modo para pantallas grandes */}
  <div className="hidden md:block">
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40 transition flex items-center text-neutral-900 dark:text-neutral-200"
    >
      {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
    </button>
  </div>
</header>

    )
}
