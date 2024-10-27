"use client"

import ProblemTable from '@/components/ProblemTable'
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import React from "react"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import topInterview150 from "../../../public/studyplan/top-interview-150.png"
import codeside75 from "../../../public/studyplan/codeside-75.png"
import daysjs30 from "../../../public/studyplan/30-days-of-javascript.png"

const ProblemSet: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

          {/* <div className="flex justify-between">
            <h5 className="dark:text-gray-300 font-semibold text-xl">Study Plan</h5>
            <p className="dark:text-blue-600" >See all</p>
          </div> */}
        {/* <div className="flex justify-center flex-wrap gap-4" >
            <div className="flex gap-2 rounded-md items-center bg-white shadow-md hover:bg-slate-50 dark:bg-dark p-2 cursor-pointer hover:dark:bg-gray-900 transition-all">
              <div>
                <Image src={topInterview150} className="w-16 rounded-md" alt="topInterview150" width={100} height={100} />
              </div>
              <div>
                <p className="text-xl">Codeside 75</p>
                <p className="text-sm dark:text-gray-400">Must-do list for Interview Prep</p>
              </div>
            </div>
            <div className="flex gap-2 rounded-md items-center bg-white shadow-md hover:bg-slate-50 dark:bg-dark p-2 cursor-pointer hover:dark:bg-gray-900 transition-all">
              <div>
                <Image src={codeside75} className="w-16 rounded-md" alt="topInterview150" width={100} height={100} />
              </div>
              <div>
                <p className="text-xl">Top Interview 150</p>
                <p className="text-sm dark:text-gray-400">Ace coding Interview with 75 Qs</p>
              </div>
            </div>
            <div className="flex gap-2 rounded-md items-center bg-white shadow-md hover:bg-slate-50 dark:bg-dark p-2 cursor-pointer hover:dark:bg-gray-900 transition-all">
              <div>
                <Image src={daysjs30} className="w-16 rounded-md" alt="topInterview150" width={100} height={100} />
              </div>
              <div>
                <p className="text-xl">30 Days fo JavaScript</p>
                <p className="text-sm dark:text-gray-400">Learn JS basics with 30 Qs</p>
              </div>
            </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-center gap-4 py-10 mx-2">
          <div className="">
            <h1 className="uppercase text-3xl font-semibold my-4 px-2 bg-dark-layer-1 w-fit">Gems For Coders</h1>
            <div className="flex flex-row py-1 gap-1">
              <Input type="text" placeholder="Search Queustions" className="bg-white dark:bg-black text-md focus:outline-none" />
              <div className="bg-white border dark:bg-black">
              <Select>
                <SelectTrigger className="w-[120px] md:w-[180px] font-semibold text-black/[0.7] dark:text-white/[0.7]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="easy" className="text-yellow-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark">Easy</SelectItem>
                    <SelectItem value="medium" className="text-green-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark">Medium</SelectItem>
                    <SelectItem value="hard" className="text-red-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark">Hard</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
            </div>
            <ProblemTable />
          </div>

          <div className="flex h-fit justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border bg-white shadow-md dark:bg-dark"
            />
          </div>
        </div>
        

      </div>

    </>
  )
}

export default ProblemSet