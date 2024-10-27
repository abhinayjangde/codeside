import Link from "next/link"
import { FiCheckCircle } from "react-icons/fi";
const ProblemTable: React.FC = () => {
  return (
    <div className="overflow-x-auto w-full border">
      <table className="min-w-full table-auto">
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
        <tbody>

          <tr className="bg-white dark:bg-dark border-b">
            <td className="px-4 py-2 dark:text-green-400 hidden md:block"></td>
            <td className="px-4 py-2 dark:text-gray-200 w-full"><Link href="/" className="w-full hover:text-blue-600">1371. Find the Longest Substring Containing Vowels</Link></td>
            <td className="px-4 py-2 text-blue-500"><Link href={"/"}>👀</Link></td>
            <td className="px-4 py-2 dark:text-gray-200 hidden md:block">70.9%</td>
            <td className="px-4 py-2 text-yellow-400">Medium</td>
            <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
          </tr>

          <tr className="bg-white dark:bg-dark border-b">
            <td className="px-4 py-2 text-green-400 hidden md:block"></td>
            <td className="px-4 py-2 dark:text-gray-200"><Link href="/" className="w-full hover:text-blue-600">1. Two Sum</Link></td>
            <td className="px-4 py-2 text-blue-500"><Link href={"/"}>👀</Link></td>
            <td className="px-4 py-2 dark:text-gray-200 hidden md:block">53.7%</td>
            <td className="px-4 py-2 text-green-400">Easy</td>
            <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
          </tr>


          <tr className="bg-white dark:bg-dark border-b">
            <td className="px-4 py-2 text-green-400 hidden md:block"><FiCheckCircle title="Solved" /></td>
            <td className="px-4 py-2 dark:text-gray-200"><Link href="/" className=" hover:text-blue-600">2. Add Two Numbers</Link></td>
            <td className="px-4 py-2 text-blue-500"><Link href={"/"}>👀</Link></td>
            <td className="px-4 py-2 dark:text-gray-200 hidden md:block">44.0%</td>
            <td className="px-4 py-2 text-yellow-400">Medium</td>
            <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
          </tr>

          <tr className="bg-white dark:bg-dark border-b">
            <td className="px-4 py-2 text-green-400 hidden md:block"></td>
            <td className="px-4 py-2 dark:text-gray-200"><Link href="/" className=" hover:text-blue-600">9. Palindrome Number</Link></td>
            <td className="px-4 py-2 text-blue-500"><Link href={"/"}>👀</Link></td>
            <td className="px-4 py-2 dark:text-gray-200 hidden md:block">41.0%</td>
            <td className="px-4 py-2 text-green-400">Easy</td>
            <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
          </tr>
          <tr className="bg-white dark:bg-dark border-b">
            <td className="px-4 py-2 text-green-400 hidden md:block"></td>
            <td className="px-4 py-2 dark:text-gray-200"><Link href="/" className=" hover:text-blue-600">42. Trapping Rain Water</Link></td>
            <td className="px-4 py-2 text-blue-500"><Link href={"/"}>👀</Link></td>
            <td className="px-4 py-2 dark:text-gray-200 hidden md:block">23.12%</td>
            <td className="px-4 py-2 text-red-500">Hard</td>
            <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
          </tr>
          <tr className="bg-white dark:bg-dark border-b">
            <td className="px-4 py-2 text-green-400 hidden md:block"></td>
            <td className="px-4 py-2 dark:text-gray-200"><Link href="/" className=" hover:text-blue-600">15. 3Sum</Link></td>
            <td className="px-4 py-2 text-blue-500"><Link href={"/"}>👀</Link></td>
            <td className="px-4 py-2 dark:text-gray-200 hidden md:block">35.4%</td>
            <td className="px-4 py-2 text-yellow-400">Medium</td>
            <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
          </tr>



        </tbody>
      </table>
    </div>
  )
}

export default ProblemTable