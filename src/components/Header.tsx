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
    <header className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8 relative">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img src="favicon.ico" alt="Logo" className="h-12" />
        <button
          onClick={() => {
            navigator.clipboard.writeText('natanaelsys@gmail.com');
            alert('Correo copiado: natanaelsys@gmail.com');
          }}
          className="p-2 rounded-full hover:bg-neutral-300/20 transition flex items-center text-sm font-medium"
          aria-label="Copiar correo"
        >
          natanaelsys@gmail.com
          <IoMdCopy size={16} className="ml-2" />
        </button>
        <button onClick={toggleMenu} className="md:hidden block focus:outline-none">
          {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Navegación para dispositivos móviles */}
      <nav className={`flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-3 bg-white md:bg-transparent md:flex md:space-x-3 md:relative absolute md:top-auto top-16 right-0 w-full md:w-auto`}>
        <a href="#about" className="font-medium hover:text-lime-600 transition md:block">About</a>
        <span className="flex items-center justify-center h-1 w-1 rounded-full bg-neutral-500" />
        <a href="#projects" className="font-medium hover:text-lime-600 transition md:block">Projects</a>
        <span className="flex items-center justify-center h-1 w-1 rounded-full bg-neutral-500" />
        <a href="#contact" className="font-medium hover:text-lime-600 transition md:block">Contact</a>

        {/* Botón de cambio de modo en el menú móvil */}
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full hover:bg-neutral-300/20 transition flex items-center mt-4 block md:hidden"
        >
          {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
        </button>
      </nav>

      {/* Botón de cambio de modo en pantallas grandes */}
      <div className="hidden md:block">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full hover:bg-neutral-300/20 transition flex items-center"
        >
          {darkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
        </button>
      </div>
    </header>
    )
}
