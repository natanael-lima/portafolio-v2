import React from 'react';

export default function About() {
  return (
    <article className="relative w-full">
    {/* Contenedor de imagen e información */}
    <div className="flex flex-wrap items-center mb-1">
      {/* Imagen de perfil */}
      <img
        src="https://i.postimg.cc/Gt5v4pp7/me5.webp"
        alt="Profile"
        className="w-16 h-16 rounded-lg object-cover"
      />
  
      {/* Información al lado de la imagen */}
      <div className="ml-3 flex flex-col">
        {/* Nombre */}
        <h2 className="text-1xl font-bold text-neutral-200">Natanael Lima</h2>
        {/* Descripción de trabajo */}
        <p className="text-sm text-neutral-500">Programmer Analyst</p>
      </div>
  
      {/* Botón volver */}
      <div className="w-full mt-3 sm:mt-0 sm:w-auto sm:ml-auto">
        <button className="w-full sm:w-44 bg-neutral-800 hover:bg-neutral-700 p-3 text-neutral-300 rounded-lg flex justify-center items-center transition">
          <a href="/">View More Profile</a>
        </button>
      </div>
    </div>
  </article>
  

  );
}
