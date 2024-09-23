import React from 'react';

export default function ProjectCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <img 
        src='https://i.postimg.cc/sgCj6LVy/portada-postulan.png'
        alt="Test Prueba"
        className="w-full h-80 object-cover transition-opacity duration-300 ease-in-out hover:opacity-50" 
      />
        <a href='/project'>
            <button className="mt-2 w-full bg-neutral-800 hover:bg-neutral-700 p-2 text-neutral-300 rounded-lg transition">View More</button>
        </a>
    </div>
  );
}
