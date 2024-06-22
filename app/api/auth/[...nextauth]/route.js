import { connectDB } from "@/app/libs/mongodb";
import { User } from "@/app/models/users";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                await connectDB()
                const userFound = await User.findOne({ username: credentials.username }).select("+password");


                if (!userFound) {
                    throw new Error("Invalid credentials")
                }

                const passwordMatch = await bcrypt.compare(credentials.password, userFound.password)

                if (!passwordMatch) {
                    throw new Error("Invalid credentials")
                }

                // Add logic here to look up the user from the credentials supplied


                return userFound ? { id: userFound._id, username: userFound.username, role: userFound.role } : null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        }
    },

    //     async session(session, user) {
    //         // session.id = user.id
    //         return session
    //     }
    // }
})

export { handler as GET, handler as POST }