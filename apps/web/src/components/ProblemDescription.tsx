import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { useEffect, useState } from "react";

const ProblemDescription = ({ description }: { description: string }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const processContent = async () => {
      // Parse front matter
      const { data, content } = matter(description);

      // Convert Markdown to HTML with syntax highlighting
      const processedContent = await remark()
        .use(remarkRehype) // Convert Markdown -> HTML AST
        .use(rehypeHighlight) // Apply syntax highlighting
        .use(rehypeStringify) // Convert AST -> HTML string
        .process(content);

      setContent(processedContent.toString());
    };

    processContent();
  }, [description]);

  return (
    <div>
       <style>
        {`
          h2{
            font-size: 25px;
          }
          p{
            margin: 5px 0px;
          }
          pre {
            background: #282c34;
            color: white;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
          }
          code {
            font-family: monospace;
          }
        `}
      </style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ProblemDescription;
