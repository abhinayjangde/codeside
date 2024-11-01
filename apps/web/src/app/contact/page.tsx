"use client";
import { useState } from "react";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="sm:h-[50rem] text-gray-600 dark:text-white dark:bg-dark body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-gray-900">
          CONTACT US
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Connect with Us: Your Gateway to Support, Solutions, and Success!
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm dark:text-white text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 dark:focus:bg-dark focus:border-indigo-500 focus:bg-white focus:ring-2 dark:text-white focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm dark:text-white text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 dark:focus:bg-dark focus:border-indigo-500 focus:bg-white focus:ring-2 dark:text-white focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm dark:text-white text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500 dark:focus:bg-dark focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none dark:text-white text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            {
              loading ? (
                <button disabled className="flex mx-auto uppercase transition duration-150 ease-in-out disabled:opacity-70 text-black dark:text-white border dark:border-white border-black py-2 px-8 focus:outline-none  rounded text-lg">
                  <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mt-[0.45rem]"
                    role="status"></div>
                  <span className="ml-3 text-lg">Loading...</span>
                </button>

              ) : (

                <button className="flex mx-auto border-[1px] border-gray-600 text-black dark:text-white px-4 py-2 rounded-sm bg-[#4E7AFF]">
                  Submit
                </button>
              )
            }
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
