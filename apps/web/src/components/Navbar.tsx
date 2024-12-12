"use client"
import React, { useState } from 'react'
import { useTheme } from "next-themes"
import { VscColorMode } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from "next-auth/react"
import { handleLogOut } from "@/app/actions/authActions";
import { FaCode } from "react-icons/fa6";
const Navbar: React.FC = () => {
    const { data: session } = useSession()
    const { setTheme } = useTheme();
    const [mode, setMode] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);
    return (

        <nav className="shadow-md w-full sticky top-0 z-10" >
            <div className="flex justify-between items-center px-2 py-1 md:px-2 md:py-2  bg-white dark:bg-dark">
                <div className="flex items-center gap-2">
                    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
                        <span className="flex items-center gap-2 sm:hidden dark:decoration-white underline-offset-8 ml-3 text-xl tracking-tighter text-black dark:text-[#4E7AFF] dark:hover:text-whit">
                        <FaCode/>
                        <h5>CS</h5>
                        </span>
                        <span className="hidden md:flex md:items-center md:gap-2 sm:block dark:decoration-white underline-offset-8 ml-3 text-xl tracking-tighter text-black dark:text-[#4E7AFF] dark:hover:text-white">
                            <FaCode/>
                            <h5> CODESIDE</h5>
                        </span>
                    </Link>
                    <ul className="text-[16px] hidden md:flex items-center gap-4 mx-2">
                        <li><Link href="/" >Home</Link></li>
                        <li><Link href="/problemset" >Problems</Link></li>
                        <li><Link href="/contests" >Contests</Link></li>
                        
                    </ul>
                </div>
                <div className="text-[16px] flex flex-col md:flex-row gap-2 items-center" >
                    <ul className="hidden md:flex flex-col md:flex-row gap-2">
                        {
                            !session ? (

                                <>
                                    <li><Link href={"/signup"}>Signup</Link></li>
                                    <li><Link href={"/login"}>Login</Link></li>
                                </>
                            ) : (
                                <form action={handleLogOut}>
                                    <button type="submit" >Logout</button>
                                </form>
                            )
                        }
                    </ul>
                    <div className="flex items-center gap-2">

                        <VscColorMode onClick={() => { if (mode === "dark") { setTheme("light"); setMode("light"); } else { setTheme("dark"); setMode("dark"); } }} className="text-3xl cursor-pointer" />

                        {
                            isOpen ? <IoMdClose onClick={() => setIsOpen(!isOpen)} className="md:hidden text-4xl cursor-pointer" /> :
                                <IoMdMenu onClick={() => setIsOpen(!isOpen)} className="md:hidden text-4xl cursor-pointer" />
                        }

                    </div>
                </div>
            </div>
            <div className={`md:hidden shadow-md py-2 bg-white dark:bg-dark absolute md:z-auto z-[-1] w-full right-0 transition-all duration-500 ease-in ${isOpen ? "top-14" : "-top-32"}`}>
                <ul className="text-[16px] flex items-end flex-col px-4">
                    <li><Link href={"/"} >Home</Link></li>
                    <li><Link href={"/problemset"} >Problems</Link></li>
                    <li><Link href={"/contests"} >Contests</Link></li>

                    {
                        !session ? (

                            <>
                                <li><Link href={"/signup"}>Signup</Link></li>
                                <li><Link href={"/login"}>Login</Link></li>
                            </>
                        ) : (
                            <form action={handleLogOut}>
                                <button type="submit" >Logout</button>
                            </form>
                        )
                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar