
import ProblemDescription from '@/components/ProblemDescription'
import { getProblem } from '@/db/problem'
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
import CodeEditor from '@/components/CodeEditor'

const Problem = async ({ params: { problemId } }: { params: { problemId: string } }) => {
    const problem = await getProblem(problemId)
    if (!problem) {
        return <div>Problem Not Found</div>
    }
    return (
        <>
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
                        <div className="flex flex-col gap-2 px-2 py-2 text-sm">
                            <ProblemDescription description={problem.description} />
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
                                <CodeEditor problem={problem} />
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



        </>
    )
}

export default Problem