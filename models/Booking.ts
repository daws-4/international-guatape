import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    // Referencia al viaje específico que se está reservando
    tripId: {
      type: Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },
    // Referencia corta y amigable para el cliente y el admin
    bookingRef: {
      type: String,
      required: true,
      unique: true,
    },
    customer: {
      fullName: { type: String, required: true },
      typeDocument:{type: String, required: true, default: "Passport"},
      documentId: { type: String, required: true }, // Pasaporte, etc.
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    passengers: [
      {
        _id: false, // No necesitamos un ID para cada pasajero en el array
        fullName: { type: String, required: true },
      },
    ],
    numberOfPassengers: {
      type: Number,
      required: true,
      min: 1,
    },
    // El punto de encuentro específico que el cliente eligió para este viaje
    chosenPickupPoint: {
      type: Schema.Types.ObjectId,
      ref: "PickupPoint",
      required: true,
    },
    // "Snapshot" de los productos comprados para mantener la integridad histórica
    selectedAddOns: [
      {
        _id: false, // No necesitamos un ID para cada item
        addOnId: { type: Schema.Types.ObjectId, ref: "AddOn", required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalAmount: {
      type: Number, // Total en centavos
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    qrCodeUrl: {
      type: String, // URL a la imagen del QR en tu servicio de storage
      required: false,
    },
    remindersSent: {
      fiveDay: { type: Boolean, default: false },
      twentyFourHour: { type: Boolean, default: false },
      twelveHour: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
