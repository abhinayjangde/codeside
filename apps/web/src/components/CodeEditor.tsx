"use client";
import { useEffect, useState } from "react";
import { LANGUAGE_MAPPING } from "@repo/common/languages";
import Editor from "@monaco-editor/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { GoCodeSquare } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { submissions as SubmissionsType } from "@prisma/client";
import { Turnstile } from "@marsidev/react-turnstile";
import { Label } from "@repo/ui/label";
import { useSession } from "next-auth/react"
import { Button } from "./ui/button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

// Main function
const CodeEditor = ({
  problem,
  contestId,
}: {
  problem: IProblem;
  contestId?: string;
}) => {

  const [editorTheme, setEditorTheme] = useState("vs-dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setEditorTheme(storedTheme === "dark" ? "vs-dark" : "vs-light");
    }
  }, [localStorage.getItem("theme")]);

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

  async function pollWithBackoff(id: string, retries: number) {
    if (retries === 0) {
      setStatus(SubmitStatus.SUBMIT);
      toast.error("Not able to get status ");
      return;
    }

    const response = await axios.get(`/api/submission/?id=${id}`);

    console.log(response.data.submission);
    if (response.data.submission.status === "PENDING") {
      setTestcases(response.data.submission.testcases);
      await new Promise((resolve) => setTimeout(resolve, 2.5 * 1000));
      pollWithBackoff(id, retries - 1);
    } else {
      if (response.data.submission.status === "AC") {
        setStatus(SubmitStatus.ACCEPTED);
        setTestcases(response.data.submission.testcases);
        toast.success("Accepted!");
        return;
      } else {
        setStatus(SubmitStatus.FAILED);
        toast.error("Failed :(");
        setTestcases(response.data.submission.testcases);
        return;
      }
    }
  }

  // submit function
  async function submit() {
    setStatus(SubmitStatus.PENDING);
    setTestcases((t) => t.map((tc) => ({ ...tc, status: "PENDING" })));
    try {
      const response = await axios.post(`/api/submission/`, {
        code: code[language],
        languageId: language,
        problemId: problem.id,
        activeContestId: contestId,
        token: token,
      });
      pollWithBackoff(response.data.id, 10);
    } catch (e) {
      //@ts-ignore
      toast.error(e.response.statusText);
      setStatus(SubmitStatus.SUBMIT);
    }
  }
  return (
    <ResizablePanel defaultSize={50}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={75}>
          <div className="h-full border border-gray-500 rounded-md dark:bg-dark">
            <div>
              {/* Top Editor Bar  */}
              <div className="flex justify-between px-2 py-0 border-b border-gray-300 dark:bg-slate">
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

                  {process.env.NODE_ENV === "production" ? (
                    <Turnstile
                      onSuccess={(token: string) => {
                        setToken(token);
                      }}
                      siteKey={TURNSTILE_SITE_KEY}
                    />
                  ) : null}

                  <FaCode />
                  <button
                    disabled={status === SubmitStatus.PENDING}
                    type="submit"
                    onClick={submit}
                    className=""
                  >
                    {session?.user
                      ? status === SubmitStatus.PENDING
                        ? "Submitting"
                        : "Submit"
                      : "Login to submit"}

                  </button>
                </div>

              </div>
              {/* Code Editor */}
              <Editor
                height={"80vh"}
                value={code[language]}
                theme={editorTheme}
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
  )
}
export default CodeEditor

