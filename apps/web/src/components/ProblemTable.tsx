"use client"
import { getProblems } from "@/db/problem";
import Link from "next/link"
import { FiCheckCircle } from "react-icons/fi";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";


const ProblemTable = () => {
  const [problems, setProblems] = useState<any>([])
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProblems, setFilteredProblems] = useState(problems);
  
  useEffect(() => {
    const fetchProblems = async () => {
      const problems = await getProblems();
      console.log(problems)
      setProblems(problems)
    };
    fetchProblems();
  }, [])

  useEffect(() => {
    const filtered = problems.filter((problem:any) => problem.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProblems(filtered);
  }, [searchTerm, problems]);

  return (
    <>
      <div className="flex flex-row py-1 gap-1">
        <Input
          type="text"
          placeholder="Search Problems"
          className="bg-white dark:bg-black text-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  

        {/* <div className="bg-white border dark:bg-black">
          <Select>
            <SelectTrigger className="w-[120px] md:w-[180px] font-semibold text-black/[0.7] dark:text-white/[0.7]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="easy" className="text-green-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark">Easy</SelectItem>
                <SelectItem value="medium" className="text-yellow-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark">Medium</SelectItem>
                <SelectItem value="hard" className="text-red-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark">Hard</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
      </div>


      <table className="min-w-full table-auto">
        {/* Table Heading  */}
        <thead className="bg-gray-100 border-b text-black/[0.7] dark:text-white/[0.7] dark:bg-dark/[0.5]">
          <tr>
            <th className="px-4 py-2 text-left hidden md:block">Status</th>
            <th className="px-4 py-2 text-left w-full">Title</th>
            <th className="px-4 py-2 text-left">Solution</th>
            <th className="px-4 py-2 text-left hidden md:block">Acceptance</th>
            <th className="px-4 py-2 text-left">Difficulty</th>
            <th className="px-4 py-2 text-left hidden md:block">Frequency</th>
          </tr>
        </thead>

        {/* Rendering Problems on Table  */}
        <tbody>
          {
            filteredProblems.map((problem: any) => (
              <tr className="bg-white dark:bg-dark border-b" key={problem.id}>
                <td className="px-4 py-2 text-green-400 hidden md:block">
                  {problem.solved ? <FiCheckCircle title="Solved" /> : null}
                </td>
                <td className="px-4 py-2 dark:text-gray-200 w-full"><Link href={`/problem/${problem.id}`} className="w-full hover:text-blue-600 capitalize">{problem.title.split("-").join(" ")}</Link></td>
                <td className="px-4 py-2 text-blue-500"><Link href={`/problem/${problem.id}`}>👀</Link></td>
                <td className="px-4 py-2 dark:text-gray-200 hidden md:block">75%</td>
                <td className={`px-4 py-2 capitalize ${problem.difficulty.toLocaleLowerCase() === 'easy' ? 'text-green-400' : problem.difficulty.toLocaleLowerCase() === 'medium' ? 'text-yellow-400' : 'text-red-500'}`}>
                  {problem.difficulty.toLocaleLowerCase()}
                </td>
                {/* <td className="px-4 py-2 text-yellow-400 capitalize">{problem.difficulty.toLocaleLowerCase()}</td> */}
                <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default ProblemTable