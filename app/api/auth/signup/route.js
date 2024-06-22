
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs"
import { connectDB } from "@/app/libs/mongodb";
import { User } from "@/app/models/users";

export async function POST(request) {

    const { username, password } = await request.json();

    if (!username) return NextResponse.json({
        message: "El usuario es requerido"
    }, {
        status: 400
    })

    if (!password) return NextResponse.json({
        message: "La contraseña es requerida"
    }, {
        status: 400
    })


    if (password.length < 8) return NextResponse.json({
        message: "La contraseña debe tener mas de 8 caracteres"
    }, {
        status: 400
    })

    try {
        await connectDB();
        const userFound = await User.findOne({ username })

        if (userFound) return NextResponse.json({
            message: "El usuario ya existe"
        }, {
            status: 400
        })

        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword.toString)
        const user = new User({ username, password: hashedPassword })


        const savedUser = await user.save()

        console.log(savedUser)
        return NextResponse.json({
            data: savedUser
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data: error.message
        }, {
            status: 500
        })
    }

}