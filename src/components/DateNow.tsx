import React, { useEffect, useState } from 'react';
import { FaHourglass,FaCalendarDay } from "react-icons/fa";

export default function DateNow() {
  // Estado para almacenar la fecha y hora actualizada
  const [currentDate, setCurrentDate] = useState<Date | null>(null); // Inicializa como null, pero especifica el tipo

  useEffect(() => {
      // Configura la fecha y hora actual solo en el cliente
      setCurrentDate(new Date());

      // Actualiza el estado de la fecha y hora cada segundo
      const timer = setInterval(() => {
          setCurrentDate(prevDate => new Date(prevDate!.getTime() + 1000)); // Aumentar en un segundo
      }, 1000);

      // Limpia el intervalo al desmontar el componente
      return () => clearInterval(timer);
  }, []);

  // Si currentDate es null, no renderizar nada hasta que se inicialice
  if (!currentDate) {
      return <div className="text-white">Cargando...</div>; // Muestra un mensaje de carga
  }

  // Formatea la fecha y hora
  const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
  });
  return (
    <div className="flex items-center justify-center space-x-4">
    {/* Contenedor de la fecha */}
    <section className="flex flex-col items-center rounded-lg px-4">
        <FaCalendarDay className="text-white text-lg mb-2" />
        <time className="text-white text-lg font-semibold" dateTime={currentDate.toISOString()}>
            {formattedDate}
        </time>
    </section>
    {/* Contenedor de la hora */}
    <section className="flex flex-col items-center rounded-lg px-4">
        <FaHourglass className="text-white text-lg mb-2" />
        <time className="text-white text-lg font-semibold" dateTime={currentDate.toISOString()}>
            {formattedTime}
        </time>
    </section>
</div>
  );
}
