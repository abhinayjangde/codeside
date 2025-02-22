import { getProblem } from '@/db/problem'
import {
    ResizableHandle,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import CodeEditor from '@/components/CodeEditor'
import ProblemDetails from '@/components/ProblemDetails'


export default async function ProblemPage({params}: {params: Promise<{problemId: string}>}) {
  const {problemId} = await params;
  const problem = await getProblem(problemId);
  if (!problem) {
    return <div>Problem not found</div>;
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

export const dynamic = "force-dynamic";