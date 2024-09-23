import Footer from '@/components/Footer'
import Profile from '@/components/Profile'
import Project from '@/components/Project'
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
                <Profile />
                <button className="mt-2 flex-1 bg-neutral-800 hover:bg-neutral-700 p-3 text-neutral-300 rounded-lg flex justify-center items-center transition">
                  <a href="/">View More Profile</a>
                </button>
              </aside>
            </div>

            {/* Columna 2: Proyectos */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
              <h2 className="text-white text-3xl font-bold mb-4">My Projects</h2>
              <Project/>
            </div>
          </section>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
    
  )
}
