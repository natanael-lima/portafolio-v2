'use client'
import { Moon, Sun } from 'lucide-react';
import React from 'react'
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Header({ darkMode, setDarkMode }:HeaderProps) {
  //const [language, setLanguage] = useState('en')
  //const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en')

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <header className="py-6 flex flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Apartado del logo */}
        <img src="favicon.ico" alt="Logo" className="h-12" />
        
        <div className="flex flex-col items-start">
          <p className="text-sm font-md text-neutral-500 ">Jujuy, Argentina</p>
          <p className="text-md font-bold">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    
      <nav className="flex items-center space-x-3">
        {/* Iconos de redes sociales */}
        <a className="p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80" href="https://www.linkedin.com/in/natanael-ever-lima-gutierrez-9bb695259/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a className="p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80" href="https://github.com/natanael-lima" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a className="p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80" href="/CV.pdf" download="CV-LIMA-NATANAEL.pdf">
          CV
        </a>
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-lg bg-lime-950/10 hover:bg-lime-950/20 text-neutral-700/80`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
    
    )
}
