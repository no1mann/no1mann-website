import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PORTFOLIO_DATA, formatDate } from '@/data';
import { MarkdownRenderer } from '@/components/editorial/markdown-renderer';
import { Badge } from '@/components/ui/badge';
import { loadPost } from '@/pages/posts';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type BlogPost = (typeof PORTFOLIO_DATA.blog)[number];

function BlogListItem({ post }: { post: BlogPost }) {
  return (
    <article className="py-8 first:pt-0 last:pb-0">
      <Link
        to={`/blog/${post.slug}`}
        className="group block transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex-1">
            <h3 className="mb-2 font-heading text-2xl font-bold leading-tight transition-colors group-hover:text-primary md:text-3xl">
              {post.title}
            </h3>
            <p className="max-w-xl text-foreground/70">{post.excerpt}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end md:gap-2 pt-2">
            <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-1">
              <Badge asChild variant="editorial">
                <time>{formatDate(post.date)}</time>
              </Badge>
              <span className="text-xs text-foreground/40">{post.readTime}</span>
            </div>
            <ArrowRight size={20} className="text-foreground/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </div>
      </Link>
    </article>
  );
}

function BlogPostView({ post }: { post: BlogPost }) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    loadPost(post.slug).then((md) => {
      if (!isMounted) {
        return;
      }

      setContent(md);
      setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [post.slug]);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Link
        to="/blog"
        className="group mb-10 flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/50 transition-colors hover:text-primary"
      >
        <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
        Back to Posts
      </Link>

      <header className="mb-12 border-b border-foreground/20 pb-10">
        <div className="mb-4 flex items-center gap-4">
          <Badge variant="editorial">
            <time>{post.date}</time>
          </Badge>
          <span className="text-xs text-foreground/40">{post.readTime}</span>
        </div>
        <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-4 max-w-4xl font-heading text-lg italic text-foreground/60 md:text-xl">
          {post.excerpt}
        </p>
        {post.author && (
          <p className="mt-4 text-sm text-foreground/50">
            By {post.author}
          </p>
        )}
      </header>

      <div className="mx-auto w-full max-w-3xl">
        {loading ? (
          <div className="flex items-center gap-3 py-16 text-foreground/40">
            <div className="h-1 w-8 animate-pulse bg-primary/40" />
            <span className="text-sm uppercase tracking-widest">Loading</span>
          </div>
        ) : content ? (
          <MarkdownRenderer content={content} />
        ) : (
          <p className="py-16 text-foreground/40">Post not found.</p>
        )}
      </div>
    </div>
  );
}

export function BlogPage() {
  const { blog } = PORTFOLIO_DATA;
  const { slug } = useParams<{ slug?: string }>();
  const activePost = slug ? blog.find((post) => post.slug === slug) : null;

  if (activePost) {
    return <BlogPostView post={activePost} />;
  }

  if (slug) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <Link
          to="/blog"
          className="group mb-10 flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/50 transition-colors hover:text-primary"
        >
          <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Posts
        </Link>
        <p className="py-16 text-foreground/40">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-0 divide-y divide-foreground/10">
        {blog.map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
