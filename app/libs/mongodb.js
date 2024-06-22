import mongoose from "mongoose";

const { MONGODB_URI } = process.env || false

if (!MONGODB_URI) {
    throw new Error("No definido mongodb")
}

export const connectDB = async () => {

    try {


        const { connection } = await mongoose.connect(MONGODB_URI)

        if (connection.readyState === 1) {
            console.log("Mongod conencted")
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)

    }





}