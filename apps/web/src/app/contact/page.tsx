"use client"
import React, { useEffect } from 'react'

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - The right way to learn coding'
  }, [])

  return (
    <div className="dark:bg-dark py-5 bg-gray-50 p-4">
      <div className="max-w-screen-lg mx-auto bg-white dark:text-white dark:bg-black/[0.3] rounded-lg shadow-md p-6 lg:p-10">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white mb-2 border-b pb-2">
          Contact Us
        </h1>
        <p className="bg-slate-200 text-center dark:bg-slate-800 mb-4 px-2 py-1 md:inline-block">
          We’re here to help! Reach out with any questions or feedback.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-800 dark:text-gray-300 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-300 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 h-32 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
