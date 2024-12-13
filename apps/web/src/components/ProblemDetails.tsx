"use client"
import { MdDescription } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineExperiment } from "react-icons/ai";
import {ResizablePanel} from "@/components/ui/resizable"
import ProblemDescription from '@/components/ProblemDescription'
import { useState } from "react";

const ProblemDetails = ({ description }: { description: string }) => {
    const [activeTab, setActiveTab] = useState('description');
    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return <ProblemDescription description={description} />;
            case 'solutions':
                return <div>Solutions Component</div>;
            case 'submissions':
                return <div>Submissions Component</div>;
            default:
                return null;
        }
    };
    return (
        <ResizablePanel defaultSize={50}>
            <div className="border border-gray-500 rounded-md min-h-screen dark:bg-dark">
                <div className="flex flex-row gap-2 px-2 py-[0.39rem] border-b border-gray-300 dark:bg-slate">
                    <div
                        className={`flex gap-1 font-semibold justify-center items-center cursor-pointer ${activeTab === 'description' ? 'text-blue-600' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        <MdDescription className="" />
                        <span>Description |</span>
                    </div>
                    <div
                        className={`flex gap-1 font-semibold justify-center items-center cursor-pointer ${activeTab === 'solutions' ? 'text-blue-600' : ''}`}
                        onClick={() => setActiveTab('solutions')}
                    >
                        <AiOutlineExperiment className="" />
                        <span>Solutions |</span>
                    </div>
                    <div
                        className={`flex gap-1 font-semibold justify-center items-center cursor-pointer ${activeTab === 'submissions' ? 'text-blue-600' : ''}`}
                        onClick={() => setActiveTab('submissions')}
                    >
                        <IoTimeOutline className="" />
                        <span>Submissions |</span>
                    </div>
                </div>
                <div className="p-4">
                    {renderContent()}
                </div>
            </div>
        </ResizablePanel>
    )
}

export default ProblemDetails