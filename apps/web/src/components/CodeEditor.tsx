"use client";
import { useEffect, useState } from "react";
import { LANGUAGE_MAPPING } from "@repo/common/languages";
import Editor from "@monaco-editor/react";

import { submissions as SubmissionsType } from "@prisma/client";
import { Turnstile } from "@marsidev/react-turnstile";
import { Label } from "@repo/ui/label";
import { useSession } from "next-auth/react"

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ||
  "0x4AAAAAAAc4qhUEsytXspC_";

enum SubmitStatus {
  SUBMIT = "SUBMIT",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  FAILED = "FAILED",
}

export interface IProblem {
  id: string;
  title: string;
  description: string;
  slug: string;
  defaultCode: {
    languageId: number;
    code: string;
  }[];
}


const CodeEditor = ({
  problem,
  contestId,
}: {
  problem: IProblem;
  contestId?: string;
}) => {

  const [language, setLanguage] = useState(
    Object.keys(LANGUAGE_MAPPING)[0] as string
);
  const [code, setCode] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>(SubmitStatus.SUBMIT);
  const [testcases, setTestcases] = useState<any[]>([]);
  const [token, setToken] = useState<string>("");
  const { data: session } = useSession()
  
  // Setting default code
  useEffect(() => {
    const defaultCode: { [key: string]: string } = {};
    problem.defaultCode.forEach((code) => {
      const language = Object.keys(LANGUAGE_MAPPING).find(
        (language) => LANGUAGE_MAPPING[language]?.internal === code.languageId
      );
      if (!language) return;
      defaultCode[language] = code.code;
    });
    setCode(defaultCode);
  }, [problem]);

 
  return (
    <div>
      <div>
        
      </div>
      <Editor
       height={"80vh"}
       value={code[language]}
       theme="vs-dark"
       onMount={() => { }}
       options={{
         fontSize: 19,
         scrollBeyondLastLine: false,
       }}
       language={LANGUAGE_MAPPING[language]?.monaco}
       onChange={(value) => {
         //@ts-ignore
         setCode({ ...code, [language]: value });
       }}
       defaultLanguage="javascript"
      />

    </div>
  )
}

export default CodeEditor