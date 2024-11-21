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
const LanguageMenu = () => {
    const [language, setLanguage] = useState(
        Object.keys(LANGUAGE_MAPPING)[0] as string
    );
    console.log("language is ", language)
    return (
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
    )
}

export default LanguageMenu