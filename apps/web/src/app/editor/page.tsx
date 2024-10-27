import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { GoCodeSquare } from "react-icons/go";
import { MdDescription } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

const Editor = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-screen rounded-lg border min-w-screen"
    >
      <ResizablePanel defaultSize={50}>
        <div className="border border-gray-500 rounded-md min-h-screen dark:bg-dark">
          <div className="flex flex-row gap-2 px-2 py-2 border-b border-gray-300 dark:bg-slate">
            <div className="flex gap-1 font-semibold justify-center items-center">
              <MdDescription className="text-blue-600 text-xl" />
              <Link href={"/"}>Description |</Link>
            </div>
            <div className="flex gap-1 font-semibold justify-center items-center">
            <AiOutlineExperiment className="text-blue-600 text-xl" />
            <Link href={"/"}>Solutions |</Link>
            </div>
            <div className="flex gap-1 font-semibold justify-center items-center"> 
            <IoTimeOutline className="text-blue-600 text-xl" />
            <Link href={"/"}>Submissions</Link>
            </div>
          </div>
          <div className="overflow-y-scroll flex flex-col gap-2 px-2 py-2 text-sm">
            <h2 className="text-2xl">1. Two Sum</h2>

            <p>Given an array of integers <span className="border italic w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">nums</span> and an integer <span className="border italic w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">target</span>, return indices of the two numbers such that they add up to <span className="border italic w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">target</span>.</p>
            <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>


            <div className="my-8 pl-2 border-l-2 border-l-gray-200/[0.6] flex flex-col gap-3">
              <h5 className="font-semibold">Example 1:</h5>
              <p>
                <span className="font-semibold" >Input:</span> nums = [2,7,11,15], target = 9<br />
                <span className="font-semibold">Output:</span> [0,1]<br />
                <span className="font-semibold">Output:</span> Because nums[0] + nums[1] == 9, we return [0, 1].
              </p>
              <h5 className="font-semibold">Example 2:</h5>
              <p>
                <span className="font-semibold" >Input:</span> nums = [3,2,4], target = 6<br />
                <span className="font-semibold">Output:</span> [1,2]
              </p>
              <h5 className="font-semibold">Example 3:</h5>
              <p>
                <span className="font-semibold" >Input:</span> nums = [3,3], target = 6<br />
                <span className="font-semibold">Output:</span> [0,1]
              </p>
            </div>

            <h4 className="font-semibold">Constraints:</h4>
            <ul className="flex flex-col gap-2 pl-2 border-l-2 border-l-gray-200/[0.6] mb-4">
              <li className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md" >{`2 <= nums.length <= 10`}<sup>4</sup></li>
              <li className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">-10<sup>9</sup> {`<= nums[i] <= 10`}<sup>9</sup></li>
              <li className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">-10<sup>9</sup> {`<= target <= 10`}<sup>9</sup></li>
              <li className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">Only one valid answer exists.</li>
            </ul>
            <h4><span className="font-semibold" >Follow-up:</span> Can you come up with an algorithm that is less than <span className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md">O(n2)</span> time complexity?</h4>

            <Accordion type="single" collapsible className="w-full mt-8 px-2">
              <AccordionItem value="item-1" className="border-t">
                <AccordionTrigger>🏷️ Topics</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex gap-2 pl-4">
                    <li className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md"><Link href={"/"}>Array</Link></li>
                    <li className="border w-fit px-1 border-gray-500 dark:bg-slate/[0.5] rounded-md"><Link href={"/"} >Hash Table</Link></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>💡Hint 1</AccordionTrigger>
                <AccordionContent>
                  A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>💡Hint 2</AccordionTrigger>
                <AccordionContent>
                  So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam fugiat nisi ratione? Excepturi eum nesciunt cum enim culpa provident minus distinctio facere et accusamus voluptatibus sed facilis, possimus vitae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam fugiat nisi ratione? Excepturi eum nesciunt cum enim culpa provident minus distinctio facere et accusamus voluptatibus sed facilis, possimus vitae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam fugiat nisi ratione? Excepturi eum nesciunt cum enim culpa provident minus distinctio facere et accusamus voluptatibus sed facilis, possimus vitae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam fugiat nisi ratione? Excepturi eum nesciunt cum enim culpa provident minus distinctio facere et accusamus voluptatibus sed facilis, possimus vitae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam fugiat nisi ratione? Excepturi eum nesciunt cum enim culpa provident minus distinctio facere et accusamus voluptatibus sed facilis, possimus vitae?</p>

          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75}>
            <div className="h-full border border-gray-500 rounded-md dark:bg-dark">
              <div className="flex justify-between px-2 border-b border-gray-300 dark:bg-slate">
                <div className="flex gap-2 font-semibold justify-center items-center">
                <FaCode className="text-green-500 text-xl" />
                <h6 className="font-semibold">Code</h6>
                </div>
                <Select>
                  <SelectTrigger className="w-[100px] dark:bg-slate">
                    <SelectValue className="font-semibold" placeholder="C++" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-slate">
                    <SelectGroup>
                      <SelectItem value="cpp">C++</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="javascript">Javascript</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="rust">Rust</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={25}>
            <div className="h-full border border-gray-500 rounded-md dark:bg-dark">
              <div className="flex flex-row items-center gap-2 py-2 px-2 border-b border-gray-300 dark:bg-slate">
                <GoCodeSquare className="text-green-400 text-xl" />
                <h6 className="font-semibold">Testcases</h6>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Editor