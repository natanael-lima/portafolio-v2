'use client'
import React from 'react'
import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { LuLanguages } from "react-icons/lu";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Header({ darkMode, setDarkMode }:HeaderProps) {
  const [language, setLanguage] = useState('en')
  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en')

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
        <header className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <nav className="mb-4 sm:mb-0">
            <ul className="flex space-x-4">
              <li><a href="#about" className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 
              ${darkMode ? 'text-slate-200 bg-slate-900' : 'text-slate-900 bg-slate-200 hover:text-slate-200'}`}>About</a></li>
              <li><a href="#skills" className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 
              ${darkMode ? 'text-slate-200 bg-slate-900' : 'text-slate-900 bg-slate-200 hover:text-slate-200'}`}>Skills</a></li>
              <li><a href="#portfolio" className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 
              ${darkMode ? 'text-slate-200 bg-slate-900' : 'text-slate-900 bg-slate-200 hover:text-slate-200'}`}>Projects</a></li>
              <li><a href="#contact" className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 
              ${darkMode ? 'text-slate-200 bg-slate-900' : 'text-slate-900 bg-slate-200 hover:text-slate-200'}`}>Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 
              ${darkMode ? 'text-slate-200 bg-slate-900' : 'text-slate-900 bg-slate-200 hover:text-slate-200'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleLanguage} 
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 
              ${darkMode ? 'text-slate-200 bg-slate-900' : 'text-slate-900 bg-slate-200 hover:text-slate-200'}`}
              >
              {darkMode ? <LuLanguages size={20} /> : <LuLanguages size={20} />}
            </button>
          </div>
        </header>
  )
}
