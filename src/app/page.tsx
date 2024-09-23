'use client';

import "./globals.css";
import React from 'react';
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Profile from "@/components/Profile";
import DateNow from "@/components/DateNow";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-r from-neutral-950 from-10% via-50% to-neutral-900 to-90% text-slate-900">
  {/* Contenedor principal */}
  <div className="mx-auto w-full px-6 sm:w-4/5 md:w-3/4 lg:w-3/4 py-12">
    {/* Diseño Bento */}
    <main className="grid grid-cols-12 gap-4">
      {/* Primera fila */}
      <section className="col-span-12 grid grid-cols-12 gap-4">
        {/* Columna 1: About */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          {/* Fila 1: Profile */}
          <article className="bg-neutral-800/30 p-6 rounded-3xl h-full border border-neutral-700/50">
            <Profile />
          </article>
          {/* Fila 2: Data */}
          <aside className="bg-neutral-800/30 p-3 rounded-3xl flex justify-center items-center border border-neutral-700/50">
             <DateNow/>
          </aside>
        </div>

        {/* Columna 2: About */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4 h-full">
          <aside className="bg-neutral-800/30 p-6 rounded-3xl flex justify-center items-center flex-grow border border-neutral-700/50">
            {/* Descripción personal */}
            <About />
          </aside>
        </div>
         {/* Columna 2: About */}
         <div className="col-span-12 md:col-span-5 flex flex-col gap-4 h-full">
          <aside className="bg-neutral-800/30 p-6 rounded-3xl flex justify-center items-center flex-grow border border-neutral-700/50">
            {/* Descripción personal */}
            <ProjectCard />
          </aside>
        </div>
      </section>
    
      {/* Segunda fila */}
      <section className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 grid grid-rows-1 gap-4">
          <Skills/>
        </div>
      </section>

      {/* Tercera fila 
      <section className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 grid grid-rows-1 gap-4">
          <Project/>
        </div>
      </section>*/}
    </main>
    {/* Footer */}
    <Footer />
  </div>
</div>


  );
}
