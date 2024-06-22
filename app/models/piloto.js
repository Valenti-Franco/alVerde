import mongoose from 'mongoose';

const pilotoSchema = new mongoose.Schema(
    {
        nombreCompleto: {
            type: String,
            required: [true, "Por favor, complete el campo"],
        },
        telefono: {
            type: String,
            required: [true, "Por favor, complete el campo"],
        },
        instagram: {
            type: String,
            required: [true, "Por favor, complete el campo"],
        },
        fechaNacimiento: {
            type: Date,
            required: [true, "Por favor, complete el campo"],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const pilotoModel = mongoose?.models?.Piloto || mongoose.model("Piloto", pilotoSchema);
