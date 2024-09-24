import React from 'react';

export default function About() {
  return (
    <article className="relative w-full">
      {/* Contenedor de imagen e información */}
      <div className="flex items-center mb-1">
        {/* Imagen de perfil */}
        <img
          src="https://i.postimg.cc/Gt5v4pp7/me5.webp"
          alt="Profile"
          className="w-24 h-24 rounded-lg object-cover"
        />

        {/* Información al lado de la imagen */}
        <div className="ml-6 flex flex-col justify-between">
           {/* Nombre */}
           <h2 className="text-2xl font-bold text-neutral-200">Natanael Lima</h2>

          {/* Descripción de trabajo */}
          <p className="text-md text-neutral-500">Programmer Analyst</p>
          {/* Boton volver*/}
          <div className="flex gap-4 ">
            <button className="mt-2 flex-1 bg-neutral-800 hover:bg-neutral-700 p-3 text-neutral-300 rounded-lg flex justify-center items-center transition">
                      <a href="/">View More Profile</a>
            </button>
          </div> 
        </div>
      </div>
    </article>
  );
}
