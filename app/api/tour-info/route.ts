// pages/api/tour-info.js

// En un futuro, aquí importarías tus modelos y te conectarías a la base de datos.
// import dbConnect from '../../lib/dbConnect';
// import Trip from '../../models/Trip';
// import PickupPoint from '../../models/PickupPoint';

export default function handler(req:any, res:any) {
  // Simulamos una respuesta exitosa de la base de datos con datos de ejemplo.
  const mockData = {
    // Próximas fechas de tours disponibles
    upcomingTours: [
      {
        id: "trip01",
        // Mostramos la fecha en un formato legible
        displayDate: "Sábado, 14 de Septiembre, 2025",
        isoDate: "2025-09-14T07:00:00.000Z",
        price: 210000, // En centavos, lo formatearemos en el frontend
        availableSeats: 12,
      },
      {
        id: "trip02",
        displayDate: "Domingo, 15 de Septiembre, 2025",
        isoDate: "2025-09-15T07:00:00.000Z",
        price: 210000,
        availableSeats: 18,
      },
      {
        id: "trip03",
        displayDate: "Sábado, 21 de Septiembre, 2025",
        isoDate: "2025-09-21T07:00:00.000Z",
        price: 225000, // Precio especial de fin de semana
        availableSeats: 5,
      },
    ],
    // Puntos de salida disponibles
    pickupPoints: [
      {
        id: "point01",
        name: "Parque Lleras, El Poblado",
        departureTime: "7:00 AM",
      },
      {
        id: "point02",
        name: "Estación Estadio del Metro",
        departureTime: "7:30 AM",
      },
    ],
  };

  if (req.method === "GET") {
    res.status(200).json(mockData);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
