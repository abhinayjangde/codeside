import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProblemDescription = ({ description }: { description: string }) => {
  
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
    </div>
  )
}

export default ProblemDescription