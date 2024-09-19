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
    const savedMode = localStorage.getItem('darkMode') === 'true'; // Recuperar el valor guardado
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode); // Establecer la clase 'dark' en el HTML
  }, []);

  // Actualizar el localStorage y la clase 'dark' en el <html> cuando cambie el estado de darkMode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); // Guardar la preferencia en localStorage
    document.documentElement.classList.toggle('dark', darkMode); // Aplicar la clase 'dark' según el modo
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-slate-200' : 'bg-slate-200 text-slate-900'}`}>
    <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/5">
      {/* Agregar el elemento para el efecto de degradado*/}
      
      {/* Pasar darkMode y setDarkMode como props al Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="py-12">
        <About  darkMode={darkMode} />
        <Skills darkMode={darkMode}/>
        <Project/>
        <Contact darkMode={darkMode}/>
      </main>
      <Footer/>
    </div>
  </div>
  );
}
