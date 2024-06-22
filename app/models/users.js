import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {

        unique: true,
        type: String,
        required: [true, "Please complete the field"],
        minLength: 3,
        maxLength: 30,
    },
    role: {
        type: String,
        default: "user",
    },
    password: {
        type: String,
        required: [true, "Please complete the field"],
    },
});

// export const pilotoModel = mongoose?.models?.Piloto || mongoose.model("Piloto", pilotoSchema);

export const User = mongoose?.models?.User || mongoose.model("User", userSchema);