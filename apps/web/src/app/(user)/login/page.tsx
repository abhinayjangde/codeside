"use client"

import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {handleCredentialsLogIn} from "@/app/actions/authActions"
import { logInSchema } from '@repo/common/zod';
import { useState } from 'react';

const Login = () => {

  const [globalError, setGlobalError] = useState<string>("")

  const handleLogIn = async (formData: FormData) => {
    try {
      let form = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
      }
      if (!form.email && !form.password) {
        toast.warn("Please enter your credentials.")
        return
      }
      else if (!form.email) {
        toast.warn("Please enter your email.")
        return
      }
      else if (!form.password) {
        toast.warn("Please enter your password.")
        return
      }
      const validSchema = logInSchema.safeParse(form)

      if (!validSchema.success) {
        toast.warn(`${validSchema.error.errors[0].message}`)
        return
      }
  
      const result = await handleCredentialsLogIn({email: validSchema.data.email, password: validSchema.data.password});
      if (result?.message) {
        setGlobalError(result.message);
        toast.warn(result.message)
      }
    } catch (error) {
      toast.warn("An unexpected error occurred. Please try again.")
      console.log("An unexpected error occurred. Please try again.");
    }
  };
  return (
    <div className="py-16 md:py-44  dark:bg-black md:dark:bg-dark ">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className="flex bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center uppercase">
            codeside
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center">let's code!</p>

          <form action={handleLogIn} >
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="bg-gray-200 text-gray-700 dark:bg-dark dark:text-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700  dark:text-gray-400 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input

                className="bg-gray-200 dark:bg-dark dark:text-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div className="mt-8">
              <button type="submit" className="border-[1px] text-white border-gray-600 px-4 py-2 font-bold w-full rounded-sm bg-gray-700 hover:bg-gray-600">
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center text-gray-700 mt-4">
            <span>Don't have an account ? </span>
            <Link href="/signup" className="text-gray-700 px-2">
              Sign Up
            </Link>
            <Link href="/forget-password" className="text-gray-700 px-2">
              Forget Password?
            </Link>


          </div>
          {/* OAuth Sections  */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4" />
            <Link href="#" className="text-xs text-gray-500 uppercase">
              or
            </Link>
            <span className="border-b w-1/5 md:w-1/4" />
          </div>

          <div className="flex flex-col justify-center items-center" >

            <Link
              href="#"
              className="flex w-fit items-center justify-center mt-4 text-white rounded-lg shadow-md dark:bg-dark hover:bg-gray-100"
            >
              <div className="px-4 py-3 text-2xl">
                <FcGoogle />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center dark:text-gray-300 text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </Link>
            <Link
              href="#"
              className="flex w-fit items-center justify-center mt-4 text-white rounded-lg shadow-md dark:bg-dark hover:bg-gray-100"
            >
              <div className="px-4 py-3 text-2xl">
                <FaGithub className="dark:text-white text-black" />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center dark:text-gray-300 text-gray-600 font-bold">
                Sign in with Github
              </h1>
            </Link>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Login

