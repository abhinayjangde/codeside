"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { db } from "@/db";
import bcryptjs from "bcryptjs";


export async function handleGithubSignIn() {
    await signIn("github", { redirectTo: "/" });
}
export async function handleGoogleSignIn() {
    await signIn("google", { redirectTo: "/" });
}

export async function handleLogOut() {
    await signOut();
}


export async function handleCredentialsLogIn({ email, password }: {
    email: string,
    password: string
}) {
    try {
        await signIn("credentials", { email, password, redirectTo: "/problemset" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        message: 'Invalid credentials',
                    }
                default:
                    return {
                        message: 'Something went wrong.',
                    }
            }
        }
        throw error;
    }
}

