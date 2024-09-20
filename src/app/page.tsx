'use client';

import "./globals.css";
import React from 'react';
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import DateNow from "@/components/DateNow";
import Project from "@/components/Project";
import { FaCode, FaDatabase, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import DescriptionAbout from "@/components/DescriptionAbout";

export default function Home() {
  return (
<div className="min-h-screen bg-lime-500/35 text-slate-900">
  {/* Contenedor principal */}
  <div className="mx-auto w-full px-4 sm:w-4/5 md:w-3/4 lg:w-3/4">
    {/* Diseño Bento */}
    <main className="py-20 grid grid-cols-12 gap-4">
      {/* Primera fila */}
      <section className="col-span-12 grid grid-cols-12 gap-4">
        {/* Columna 1: 33.33% ancho */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          {/* Fila 1: About Section */}
          <article className="bg-neutral-900 p-6 rounded-3xl">
            <About />
          </article>

          {/* Fila 2: Contacto */}
          <aside className="bg-orange-500 p-6 rounded-3xl flex justify-center items-center">
             <Contact/>
          </aside>
        </div>

        {/* Columna 2: Nuevas secciones o contenido */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 h-full">
          <aside className="bg-amber-500 p-6 rounded-3xl flex justify-center items-center flex-grow">
            {/* Descripción personal */}
            <DescriptionAbout />
          </aside>
          <aside className="bg-cyan-600 p-6 rounded-3xl flex justify-center items-center">
            <DateNow />
          </aside>
        </div>



        {/* Columna 3: Cuadrícula 2x2 */}
        <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-4">
          {/* Container 1 */}
          <aside className="bg-white p-6 rounded-3xl flex flex-col items-start justify-between">
            <FaCode className="text-green-800 text-5xl" />
            <span className="text-neutral-900 text-3xl font-medium">Frontend</span>
          </aside>

          {/* Container 2 */}
          <aside className="bg-white p-6 rounded-3xl flex flex-col items-start justify-between">
            <FaLaptopCode className="text-amber-500 text-5xl" />
            <span className="text-neutral-900 text-3xl font-medium">Backend</span>
          </aside>

          {/* Container 3 */}
          <aside className="bg-white p-6 rounded-3xl flex flex-col items-start justify-between">
            <FaDatabase className="text-orange-500 text-5xl" />
            <span className="text-neutral-900 text-3xl font-medium">Database</span>
          </aside>

          {/* Container 4 */}
          <aside className="bg-white p-6 rounded-3xl flex flex-col items-start justify-between">
            <FaPaintBrush className="text-cyan-600 text-5xl" />
            <span className="text-neutral-900 text-3xl font-medium">Design</span>
          </aside>
        </div>

      </section>

      {/* Segunda fila */}
      <section className="col-span-12 grid grid-cols-12 gap-4">
        {/* Columna 1: Proyectos y Contacto */}
        <div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-4">
          {/* Proyectos con dos imágenes */}
          <article className="bg-white p-4 rounded-3xl">
            <Project />
          </article>

          {/* Contacto */}
          <article className="bg-gray-200 p-4 rounded-3xl">
            <Contact />
          </article>
        </div>

        {/* Columna 2: Cuadrícula 1x1 */}
        <div className="col-span-12 md:col-span-6 grid grid-rows-1 gap-4">
          {/* Sección de habilidades */}
          <section className="bg-green-800 p-6 rounded-3xl h-full">
            <Skills />
          </section>
        </div>
      </section>
    </main>

    {/* Footer */}
    <Footer />
  </div>
</div>


  );
}
