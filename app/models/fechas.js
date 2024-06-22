import mongoose from 'mongoose';

const pilotoEventoSchema = new mongoose.Schema(
    {
        piloto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Piloto',
            required: true,
        },
        numeroAuto: {
            type: Number,
            required: [true, "Por favor, complete el campo"],
        },
        tiempo: {
            type: Number,
            required: [true, "Por favor, complete el campo"],
        },
        tiempoCategoria: {
            type: Number,
            required: [true, "Por favor, complete el campo"],
        },
    },
    {
        _id: false,
    }
);

const fechaSchema = new mongoose.Schema(
    {
        fecha: {
            type: Date,
            required: [true, "Por favor, complete el campo"],
        },
        clasificacion: [pilotoEventoSchema],
        repechaje: [pilotoEventoSchema],
        eliminatorias: [pilotoEventoSchema],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const fechaModel = mongoose?.models?.Fecha || mongoose.model("Fecha", fechaSchema);
