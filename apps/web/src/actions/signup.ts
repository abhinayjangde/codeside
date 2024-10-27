"use server";
import { db } from "@/db";
import bcryptjs from "bcryptjs";

const credentialSignup = async (name: string, email: string, password: string)=>{
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
   } catch (error: any) {
        throw new Error(error)
   }
}

export default credentialSignup