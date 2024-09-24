import Footer from '@/components/Footer'
import Project from '@/components/Project'
import ViewProfile from '@/components/ViewProfile'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-950 from-10% via-50% to-neutral-900 to-90% text-slate-900">
      {/* Contenedor principal */}
      <div className="mx-auto w-full px-6 sm:w-4/5 md:w-3/4 lg:w-3/4 py-12">
        {/* Diseño Bento */}
        <main className="grid grid-cols-12 gap-4">
          {/* Primera fila */}
          <section className="col-span-12 grid grid-cols-12 gap-4">
            {/* Columna 1: Regresar al perfil */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
              <aside className="bg-neutral-800/30 p-6 rounded-3xl flex flex-col justify-center items-center border border-neutral-700/50">
                <ViewProfile />
              </aside>
            </div>
              {/* Columna 2: Regresar al perfil */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
              <aside className="bg-neutral-800/30 p-6 rounded-3xl flex flex-col justify-center items-center border border-neutral-700/50 h-full">
                  <h2 className="text-neutral-100 text-3xl font-bold">My Projects</h2>
              </aside>
            </div>
          </section>
          {/* Segunda fila: Proyectos */}
          <section className="col-span-12 grid grid-cols-12 gap-4">
                  {/* Columna 3x3: Proyectos */}
                  <article className="col-span-12 md:col-span-12 flex flex-col gap-4">
                    <Project/>
                  </article>
          </section>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
    
  )
}
