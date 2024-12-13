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


// Will be updated soon
export async function credentialSignup(name: string, email: string, password: string){
    try {
 
     // finding user
      const existingUser = await db.user.findUnique({
          where:{
              email: email
          }
      })
      // existing user
      if(existingUser){
          return {
             success: false,
             data: {},
             error: "User already exist with this email."
          }
      }
      // if user not exists then create new user
      const hashedPassword = await bcryptjs.hash(password,10);
 
      const newUser = await db.user.create({
         data: {
             name:name,
             email: email!,
             password: hashedPassword
         }
      })
      return {
         success: true,
         data: {
             id: newUser.id,
             email: newUser.email,
             name: newUser.name
         }
      };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred");
    }
 }
 
