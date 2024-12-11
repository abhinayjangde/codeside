

import { getProblem } from '@/db/problem'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"



import { Metadata } from "next";
import CodeEditor from '@/components/CodeEditor'
import ProblemDetails from '@/components/ProblemDetails'

export const generateMetadata = async ({ params }: { params: { problemId: string } }): Promise<Metadata> => {
    const problem = await getProblem(params.problemId);
    if (!problem) {
        return { title: "Problem Not Found" };
    }
    return { title: problem.title || "Problem Details" };
};

const Problem = async ({ params }: { params: { problemId: string } }) => {
    const { problemId } = await params;
    const problem = await getProblem(problemId)
    if (!problem) {
        return <div>Problem Not Found</div>
    }

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-screen rounded-lg border min-w-screen"
        >
            <ProblemDetails description={problem.description} />

            <ResizableHandle />

            <CodeEditor problem={problem} />

        </ResizablePanelGroup>

    )
}

export default Problem