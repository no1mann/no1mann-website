import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import type { ComponentPropsWithoutRef } from 'react';

type MarkdownRendererProps = {
  content: string;
};

const markdownComponents = {
  table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
    <div className="editorial-table-wrap">
      <table {...props}>{children}</table>
    </div>
  ),
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const contentWithoutTitle = content.replace(/^#\s+.+\n*/, '');

  return (
    <div className="editorial-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={markdownComponents}
      >
        {contentWithoutTitle}
      </ReactMarkdown>
    </div>
  );
}
