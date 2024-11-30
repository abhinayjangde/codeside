
import ProblemTable from '@/components/ProblemTable'
import topInterview150 from "../../../public/studyplan/top-interview-150.png"
import codeside75 from "../../../public/studyplan/codeside-75.png"
import daysjs30 from "../../../public/studyplan/30-days-of-javascript.png"
// import { useSession } from "next-auth/react"
import Calender from '@/components/Calender';
const ProblemSet = () => {
  
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
          {/* Problem Table Part  */}
          <div className="">
            <h1 className="uppercase text-3xl font-semibold my-4 px-2 bg-dark-layer-1 w-fit">Gems For Coders</h1>
            <ProblemTable query={null} />
          </div>
          {/* Calender Part  */}
          <div className="flex h-fit justify-center">
            <Calender />
          </div>
        </div>


      </div>

    </>
  )
}

export default ProblemSet
export const dynamic = "force-dynamic";