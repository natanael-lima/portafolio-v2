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
  const [darkMode, setDarkMode] = useState(true); // Inicia en modo claro
  const [isVisible, setIsVisible] = useState(Array(5).fill(false)); // Todas las secciones inicialmente invisibles

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'; // Verifica el modo oscuro guardado
    if (savedMode) {
      setDarkMode(savedMode);
      document.documentElement.classList.toggle('dark', savedMode); // Aplica la clase 'dark' al elemento raíz
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); // Guarda el estado del modo oscuro
    document.documentElement.classList.toggle('dark', darkMode); // Aplica o quita la clase 'dark' según el estado
  }, [darkMode]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    isVisible.forEach((visible, index) => {
      const timeout = setTimeout(() => {
        setIsVisible(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 300);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
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
