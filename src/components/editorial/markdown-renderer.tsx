import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { X } from 'lucide-react';

type MarkdownRendererProps = {
  content: string;
};

type ExpandedImage = {
  src: string;
  alt?: string;
};

type ImageModalProps = ExpandedImage & {
  onClose: () => void;
};

function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt ? `Expanded image: ${alt}` : 'Expanded image'}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 text-white/80 transition-colors hover:text-white"
        aria-label="Close image"
      >
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt ?? ''}
        className="max-h-[92vh] max-w-[96vw] w-auto rounded-md border border-white/20 object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [expandedImage, setExpandedImage] = useState<ExpandedImage | null>(null);
  const contentWithoutTitle = content.replace(/^#\s+.+\n*/, '');

  const markdownComponents = {
    table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
      <div className="editorial-table-wrap">
        <table {...props}>{children}</table>
      </div>
    ),
    img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
      if (!src) {
        return null;
      }

      return (
        <button
          type="button"
          className="block w-full cursor-zoom-in bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          onClick={() => setExpandedImage({ src, alt })}
          aria-label={alt ? `Open image: ${alt}` : 'Open image fullscreen'}
        >
          <img src={src} alt={alt ?? ''} {...props} />
        </button>
      );
    },
  };

  return (
    <>
      <div className="editorial-prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={markdownComponents}
        >
          {contentWithoutTitle}
        </ReactMarkdown>
      </div>
      {expandedImage && (
        <ImageModal
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={() => setExpandedImage(null)}
        />
      )}
    </>
  );
};
