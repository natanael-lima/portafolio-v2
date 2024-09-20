import React, { useEffect, useState } from 'react';
import { FaHourglass,FaCalendarDay } from "react-icons/fa";

export default function DateNow() {
  // Estado para almacenar la fecha y hora actualizada
  const [currentDate, setCurrentDate] = useState(new Date());

  // Actualiza el estado de la fecha y hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  // Formatea la fecha y hora
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="flex items-center justify-center space-x-6">
      
      {/* Contenedor de la fecha */}
      <section className="flex flex-col items-center p-6 rounded-lg px-4">
        <FaCalendarDay className="text-gray-200 text-2xl mb-2" />
        <time className="text-gray-50 text-lg font-semibold" dateTime={currentDate.toISOString()}>
          {formattedDate}
        </time>
      </section>

     

      {/* Contenedor de la hora */}
      <section className="flex flex-col items-center p-6 rounded-lg px-3">
        <FaHourglass className="text-gray-200 text-2xl mb-2" />
        <time className="text-gray-50 text-lg font-semibold" dateTime={currentDate.toISOString()}>
          {formattedTime}
        </time>
      </section>
    </div>
  );
}
