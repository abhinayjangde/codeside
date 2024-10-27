"use client"
import credentialLogin from '@/actions/login'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const [loading,setLoading] = React.useState(false)
  const router = useRouter()
  
  return (

    <section className="text-gray-600 body-font">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <form action={async (formData: FormData) => {
            const email = formData.get("email") as string | undefined
            const password = formData.get("password") as string | undefined
            if (!email || !password) {
              toast.warn("Please enter you credentials.")
              return
            }
            try {
              setLoading(true)
              const res = await credentialLogin(email!, password!)
              if(res.success){
                toast.success("Logged in successfully.")
                setLoading(false)
                setTimeout(()=>{
                  router.push(`/u/${res.data?.email.split("@")[0]}`)
                },3000)
              }
              toast.warn(res.error)
              setLoading(false)

            } catch (error: any) {
              toast.warn(error.message)
            }
          }}>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
          </form>
          <p className="text-md text-gray-500 mt-3">
            Don't have an account?{" "} <Link href="/signup" className="text-indigo-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>

  )
}

export default Login

