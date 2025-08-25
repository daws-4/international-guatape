import mongoose, { Schema } from "mongoose";

const addOnSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del añadido es obligatorio."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria."],
    },
    price: {
      type: Number, // Se recomienda guardar en centavos (ej: 55000 para $550.00)
      required: [true, "El precio es obligatorio."],
    },
    type: {
      type: String,
      enum: ["souvenir", "food", "service", "other"],
      required: [true, "El tipo de añadido es obligatorio."],
    },
    imageUrl: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const AddOn = mongoose.models.AddOn || mongoose.model("AddOn", addOnSchema);

export default AddOn;
