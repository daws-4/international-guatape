import mongoose, { Schema } from "mongoose";

const tripSchema = new Schema(
  {
    tourDate: {
      type: Date,
      required: [true, "La fecha del tour es obligatoria."],
    },
    totalSeats: {
      type: Number,
      required: [true, "El número total de asientos es obligatorio."],
    },
    bookedSeats: {
      type: Number,
      default: 0,
      // Validador personalizado para asegurar que los asientos reservados no superen el total
      validate: {
        validator: function (value:any) {
          return value <= this.totalSeats;
        },
        message:
          "Los asientos reservados no pueden exceder el total de asientos.",
      },
    },
    availablePickupPoints: [
      {
        type: Schema.Types.ObjectId,
        ref: "PickupPoint", // Referencia al modelo PickupPoint
        required: true,
      },
    ],
    basePrice: {
      type: Number, // Precio por persona en centavos
      required: [true, "El precio base es obligatorio."],
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled", "full"],
      default: "scheduled",
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.models.Trip || mongoose.model("Trip", tripSchema);

export default Trip;
