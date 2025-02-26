
import ProblemTable from '@/components/ProblemTable'
import Calender from '@/components/Calender';

const ProblemSet = () => {

  return (
    <>
      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

        <div className="flex flex-col md:flex-row justify-center gap-4 py-10 mx-2">
          {/* Problem Table Part  */}
          <div className="">
            <h1 className="uppercase text-3xl font-semibold my-4 px-2 bg-dark-layer-1 w-fit">Gems For Codersss</h1>
            <ProblemTable />
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