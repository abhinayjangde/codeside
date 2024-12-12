"use client"

import {credentialSignup} from "@/app/actions/authActions";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (

    <div className="py-16 md:py-32 dark:bg-black md:dark:bg-dark ">
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
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 text-center uppercase">
          codeside
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center">join us!</p>
  
        <form action={async (formData) => {
          const name = formData.get("name") as string;
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
  
          if (!name || !email || !password) {
            toast.warn("All fields are required.");
            return;
          }
          try {
            setLoading(true);
            const res = await credentialSignup(name, email, password);
            if (res.success) {
              toast.success("Account created successfully.");
              setTimeout(() => {
                router.push("/login");
              }, 3000);
            } else {
              toast.warn(res?.error);
            }
            setLoading(false);
          } catch (error) {
            setLoading(false);
            // toast.warn(error.message);
          }
        }}>
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              className="bg-gray-200 text-gray-700 dark:bg-dark dark:text-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              id="name"
              name="name"
            />
          </div>
  
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
            <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="bg-gray-200 dark:bg-dark dark:text-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              id="password"
              name="password"
            />
          </div>
  
          <div className="mt-8">
            <button type="submit" className="border-[1px] text-white border-gray-600 px-4 py-2 font-bold w-full rounded-sm bg-gray-700 hover:bg-gray-600">
              Sign Up
            </button>
          </div>
        </form>
  
        <div className="flex items-center justify-center text-gray-700 mt-4">
          <span className="dark:text-gray-400">Already have an account?</span>
          <Link href="/login" className="text-gray-700 dark:text-gray-500 underline px-2">
            Login
          </Link>
        </div>
  
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4" />
          <Link href="#" className="text-xs text-gray-500 uppercase">
            or
          </Link>
          <span className="border-b w-1/5 md:w-1/4" />
        </div>
  
        <div className="flex flex-col justify-center items-center">
          <Link
            onClick={() => {
              toast.dark("This auth method is coming soon.");
            }}
            href="#"
            className="flex w-fit items-center justify-center mt-4 text-white rounded-lg shadow-md dark:bg-dark hover:bg-gray-100"
          >
            <div className="px-4 py-3 text-2xl">
              <FcGoogle />
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center dark:text-gray-300 text-gray-600 font-bold">
              Sign up with Google
            </h1>
          </Link>
  
          <Link
            onClick={() => {
              toast.dark("This auth method is coming soon.");
            }}
            href="#"
            className="flex w-fit items-center justify-center mt-4 text-white rounded-lg shadow-md dark:bg-dark hover:bg-gray-100"
          >
            <div className="px-4 py-3 text-2xl">
              <FaGithub className="dark:text-white text-black" />
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center dark:text-gray-300 text-gray-600 font-bold">
              Sign up with Github
            </h1>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Signup