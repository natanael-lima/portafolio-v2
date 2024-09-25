'use client'

import "./globals.css";
import React, { useEffect, useState } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  // Recuperar la preferencia de modo oscuro desde el localStorage cuando la página se carga
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'false'; // Recuperar el valor guardado
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode); // Establecer la clase 'dark' en el HTML
  }, []);

  // Actualizar el localStorage y la clase 'dark' en el <html> cuando cambie el estado de darkMode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); // Guardar la preferencia en localStorage
    document.documentElement.classList.toggle('dark', darkMode); // Aplicar la clase 'dark' según el modo
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-neutral-950 text-slate-200' : 'bg-neutral-50 text-slate-900'}`}>
    
      {/* Pasar darkMode y setDarkMode como props al Header */}
      <div className="">
        <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/5">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      <main className="mb-2 pt-12">
        <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/5 p-1">
            <About/>
         </div>
        <div className="bg-lime-950/5">
          <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/5">
            <Skills />
            <Project/>
            <Contact/>
            <Footer/>
          </div>
        </div>
      </main>
    </div>
  );
}
