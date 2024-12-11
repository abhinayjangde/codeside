import Link from 'next/link'
import React from 'react'

const HeroSection:React.FC = () => {
  return (
    <section className="bg-white dark:bg-dark md:m-0 py-10 md:py-20">
    <div className="mx-auto px-4 md:px-6 flex flex-col justify-center items-center gap-0">
      <div className="flex flex-col justify-center text-center gap-3 ">
        <div className="text-5xl uppercase md:text-6xl font-bold">Conquer the Code at</div>
        <div className="text-5xl md:text-6xl text-[#4E7AFF] font-bold uppercase leading-tight">
          Codeside
        </div>
        <div className="text-md text-gray-900 dark:text-gray-300">
          Join elite coders, solve problems, and climb leaderboards at
          Codeside Arena{" "}
        </div>
        <div className="flex justify-center flex-col md:flex-row gap-4 mt-4">
          <Link
            href={"/problemset"}
            className="border-[1px] text-white border-gray-600 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-sm"
          >
            Start Solving{" "}
          </Link>
          <Link
            href={"/#features"}
            className="border-[1px] border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800  px-4 py-2 rounded-sm"
          >
            Explore Features
          </Link>
        </div>
      </div>
      <div className="">
        {/* Light Mode Image */}
        <img
          className="block dark:hidden "
          src="/HeroSectionLightImage.svg"
          alt="Light mode hero image"
        />
        {/* Dark Mode Image */}
        <img
          className="hidden dark:block "
          src="/HeroSectionDarkImage.svg"
          alt="Dark mode hero image"
        />
      </div>
    </div>
  </section>
  )
}

export default HeroSection