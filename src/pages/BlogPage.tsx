import { PORTFOLIO_DATA } from '@/data';
import { SectionTitle } from '@/components/editorial/section-title';
import { Badge } from '@/components/ui/badge';

export function BlogPage() {
  const { blog } = PORTFOLIO_DATA;

  return (
    <div>
      <SectionTitle>Essays</SectionTitle>
      <div className="grid grid-cols-1 gap-0 divide-y divide-foreground/10">
        {blog.map((post) => (
          <article key={post.title} className="group cursor-pointer py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
              <div className="flex-1">
                <h3 className="mb-2 font-heading text-2xl font-bold leading-tight transition-colors group-hover:text-primary md:text-3xl">
                  {post.title}
                </h3>
                <p className="max-w-xl text-foreground/70">{post.excerpt}</p>
              </div>
              <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-end md:gap-1">
                <Badge asChild variant="editorial">
                  <time>{post.date}</time>
                </Badge>
                <span className="text-xs text-foreground/40">{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
