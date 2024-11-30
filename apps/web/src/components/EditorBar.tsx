"use client";
import { useEffect, useState } from "react";
import { LANGUAGE_MAPPING } from "@repo/common/languages";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FaCode } from "react-icons/fa6";
import { useSession } from "next-auth/react"

const EditorBar = () => {
    const [language, setLanguage] = useState(
        Object.keys(LANGUAGE_MAPPING)[0] as string
    );
    const { data: session } = useSession()
    console.log("session",session)
    return (
        <div className="flex justify-between px-2 border-b border-gray-300 dark:bg-slate">
            <Select
                value={language}
                defaultValue="js"
                onValueChange={(value) => setLanguage(value)}
            >
                <SelectTrigger className="w-[100px] dark:bg-slate">
                    <SelectValue className="font-semibold" placeholder="C++" />
                </SelectTrigger>
                <SelectContent className="dark:bg-slate">
                    <SelectGroup>
                        {Object.keys(LANGUAGE_MAPPING).map((language) => (
                            <SelectItem key={language} value={language}>
                                {LANGUAGE_MAPPING[language]?.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className="flex justify-center font-semibold items-center gap-2 text-green-500">
            <FaCode/>
            <button
             type="submit"
             >
                {/* {
                    session?.user?.name
                } */}
                Submit
             </button>
            </div>

        </div>
    )
}

export default EditorBar