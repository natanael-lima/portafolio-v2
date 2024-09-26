'use client'

import "./globals.css";
import React, { useEffect, useState } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState([false, false, false, false, false]);
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
 // Animaciones secuenciales
 useEffect(() => {
  const timeouts: NodeJS.Timeout[] = [];

  // Animar cada sección de forma secuencial con un delay
  isVisible.forEach((visible, index) => {
    const timeout = setTimeout(() => {
      setIsVisible((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    }, index * 300); // Incrementa el retraso en 300ms por cada sección
    timeouts.push(timeout);
  });

  return () => {
    // Limpiar timeouts si el componente se desmonta
    timeouts.forEach((timeout) => clearTimeout(timeout));
  };
}, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-lime-950/20 text-neutral-100' : 'bg-neutral-100/80 text-neutral-900'}`}>
      {/* Pasar darkMode y setDarkMode como props al Header */}
      <main className="mb-0">
          <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/5 bg-white dark:bg-neutral-600/10">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <section className={`fade-in ${isVisible[0] ? 'fade-in-visible' : ''}`}>
              <Hero />
            </section>
            <section className={`fade-in ${isVisible[2] ? 'fade-in-visible' : ''}`}>
              <Project />
            </section>
            <section className={`fade-in ${isVisible[1] ? 'fade-in-visible' : ''}`}>
              <Skills />
            </section>
            <section className={`fade-in ${isVisible[1] ? 'fade-in-visible' : ''}`}>
              <About />
            </section>
            <section className={`fade-in ${isVisible[3] ? 'fade-in-visible' : ''}`}>
              <Contact />
            </section>
            <section className={`fade-in ${isVisible[4] ? 'fade-in-visible' : ''}`}>
              <Footer />
            </section>
          </div>
      </main>
    </div>
  );
}
