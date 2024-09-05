'use client'

import React, { useEffect, useState } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-200 text-slate-900'}`}>
    <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/5">
      {/* Pasar darkMode y setDarkMode como props al Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="py-12">
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  </div>
  );
}
