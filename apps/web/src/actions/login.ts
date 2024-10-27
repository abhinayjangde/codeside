"use server";

import { signIn } from "@/auth";
import { db } from "@/db";
import bcryptjs from "bcryptjs";

const credentialLogin = async (email: string, password: string) => {
    try {
        if (!email || !password) {
            throw new Error("Please enter you credentials.");
        }
        const user = await db.user.findUnique({
            where: {
                email: email as string
            }
        })
        if (!user) {
            return {
                success: false,
                error: "User not found with this email."
            }
        }

        const hashedPassword = await bcryptjs.compare(password,user.password as string)
        if (!hashedPassword) {
            return {
                success: false,
                error: "Please enter valid credentials."
            }
        }
        await signIn("credentials", {
            redirect: false,
            id: user.id,
            email: email,
            name: user.name as string
        });
        return {
            success: true,
            data: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }
       
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}

export default credentialLogin;