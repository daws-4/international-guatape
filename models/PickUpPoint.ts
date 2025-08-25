import mongoose, { Schema } from 'mongoose';

const pickupPointSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del punto de encuentro es obligatorio.'],
    trim: true,
    unique: true,
  },
  address: {
    type: String,
    required: [true, 'La dirección es obligatoria.'],
  },
  // Usamos el formato GeoJSON para almacenar coordenadas geográficas.
  // Esto permite realizar consultas espaciales eficientes en el futuro.
  location: {
    type: {
      type: String,
      enum: ['Point'], // 'location.type' debe ser 'Point'
      required: true,
    },
    coordinates: {
      type: [Number], // Array de números para [longitud, latitud]
      required: true,
      index: '2dsphere' // Crea un índice geoespacial para búsquedas rápidas
    }
  },
  imageUrl: {
    type: String,
    required: false, // Opcional, por si quieres mostrar una foto del lugar
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true // Añade createdAt y updatedAt automáticamente
});

const PickupPoint = mongoose.models.PickupPoint || mongoose.model('PickupPoint', pickupPointSchema);

export default PickupPoint;