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
const ProblemTable = async ({ query }: { query: string | null }) => {
  const problems = await getProblems(query ? query : undefined);
  return (
    <>
      <div className="flex flex-row py-1 gap-1">
        <Input type="text" placeholder="Search Problems" className="bg-white dark:bg-black text-md focus:outline-none" />
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
      {/* TODO: Actual Search Functionality  */}
      {/* <div>
        <form
          action={async (form) => {
            "use server";
            const CurrentQuery = form.get("query");
            if (CurrentQuery || (query && !CurrentQuery)) {
              redirect(`/problems?query=${CurrentQuery}`);
            }
          }}
          className="flex gap-2 items-center"
        >
          <Input
            className="w-auto"
            name="query"
            placeholder="Search problems"
          />
          <Button size={"sm"} variant={"secondary"}>
            Search
          </Button>
        </form>
        {query && (
          <Link
            className="text-sm mt-1 text-blue-500 underline"
            href={"/problems"}
          >
            Clear Search
          </Link>
        )}
      </div> */}

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
            problems.map((problem) => (
              <tr className="bg-white dark:bg-dark border-b" key={problem.id}>
                <td className="px-4 py-2 text-green-400 hidden md:block">
                  {problem.solved ? <FiCheckCircle title="Solved" /> : null}
                </td>
                <td className="px-4 py-2 dark:text-gray-200 w-full"><Link href={`/problem/${problem.id}`} className="w-full hover:text-blue-600 capitalize">{problem.title.split("-").join(" ")}</Link></td>
                <td className="px-4 py-2 text-blue-500"><Link href={`/problem/${problem.id}`}>👀</Link></td>
                <td className="px-4 py-2 dark:text-gray-200 hidden md:block">75%</td>
                <td className="px-4 py-2 text-yellow-400 capitalize">{problem.difficulty.toLocaleLowerCase()}</td>
                <td className="px-4 py-2 hover:cursor-pointer hidden md:block" title="Subscribe to Unlock">🔒</td>
              </tr>
            ))
          }
          
          {/* TODO : Will be removed later */}
          {/* <tr className="bg-white dark:bg-dark border-b">
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
          </tr> */}

        </tbody>
      </table>
    </>
  )
}

export default ProblemTable