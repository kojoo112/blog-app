import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({ content }: { content: string }) => {
  return (
    <Markdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </Markdown>
  );
};

export default MarkdownViewer;
