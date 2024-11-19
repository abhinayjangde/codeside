"use client";
import { useEffect, useState } from "react";
import { LANGUAGE_MAPPING } from "@repo/common/languages";
import Editor from "@monaco-editor/react";

import { submissions as SubmissionsType } from "@prisma/client";
import { Turnstile } from "@marsidev/react-turnstile";


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
  return (
    <div>CodeEditor</div>
  )
}

export default CodeEditor