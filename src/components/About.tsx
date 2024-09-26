
import React from 'react'

export default function About() {

  return (
    <section id="about" className="mb-12 mx-auto w-full px-2 sm:px-14">
    <h3 className="text-xl font-semibold mb-4 mt-12 text-start text-neutral-800 dark:text-neutral-100">
      About me
    </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center mx-auto">

          {/* Columna 1: Imagen y datos personales */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
            {/* Imagen cuadrada */}
            <img 
              src="https://i.postimg.cc/597B7smB/me6.webp"
              alt="Profile"
              className="w-44 h-44 rounded-lg object-cover mb-2"
            />

            {/* Contenedor de información personal */}
            <div className="flex flex-col justify-center items-start text-center md:text-left space-y-2">
              
              {/* Span con punto y estado de trabajo */}
              <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-100 text-sm py-2 px-3 bg-neutral-300/50 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                </span>
                <span>Available for Work</span>
              </div>

              {/* Nombre */}
              <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mt-2">
                Natanael Lima
              </h1>

              {/* Profesión */}
              <h2 className="text-lg font-medium text-neutral-500 dark:text-neutral-100">
              Programmer Analyst
              </h2>
            </div>
          </div>

          {/* Columna 2: Descripción */}
          <div className="flex flex-col text-left space-y-3">
            <p className="text-sm text-neutral-400 dark:text-neutral-300">
              Hi, I am <span className="font-semibold text-neutral-600 dark:text-neutral-100">Software Developer  / Programmer Analyst</span> from <span className="font-semibold text-neutral-600 dark:text-neutral-100">Argentina</span>, with experience in <span className="font-semibold text-neutral-600 dark:text-neutral-100">web and desktop applications</span> as well as <span className="font-semibold text-neutral-600 dark:text-neutral-100">data organization</span>.
            </p>

            <p className="text-sm text-neutral-400 dark:text-neutral-300">
              I implement <span className="font-semibold text-neutral-600 dark:text-neutral-100">practical</span> and <span className="font-semibold text-neutral-600 dark:text-neutral-100">efficient solutions</span> using various <span className="font-semibold text-neutral-600 dark:text-neutral-100">languages and frameworks</span>. I focus on creating <span className="font-semibold text-neutral-600 dark:text-neutral-100">functional</span> and <span className="font-semibold text-neutral-600 dark:text-neutral-100">adaptable software</span>, collaborating through all stages of the development lifecycle, from <span className="font-semibold text-neutral-600 dark:text-neutral-100">analysis</span> to <span className="font-semibold text-neutral-600 dark:text-neutral-100">implementation</span>.
            </p>

          </div>
        </div>
      </section>
  );
}

