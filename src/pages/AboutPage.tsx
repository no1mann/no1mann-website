import { PORTFOLIO_DATA, formatDateRange } from '@/data';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/editorial/section-title';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

type AboutPageProps = {
  workHref?: string;
};

export function AboutPage({ workHref }: AboutPageProps) {
  const { about, skills, currentProjects } = PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
      <section className="md:col-span-8">
        <p className="border-l-4 border-accent pl-5 font-heading text-2xl leading-[1.38] md:pl-6 md:text-3xl md:leading-[1.34]">
          {about.bio}
        </p>

        <div className="mt-12">
          <SectionTitle>About Me</SectionTitle>
          <div className="space-y-4">
            {about.aboutDescription.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-foreground/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle>Current Work</SectionTitle>
          <ul className="space-y-8">
            {currentProjects.map((project) => (
              <li key={project.title} className="border-b border-foreground/10 pb-6">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-xl font-bold">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-baseline gap-2 transition-colors hover:text-primary">
                      {project.title}
                      <ArrowRight size={14} className="relative top-[2px] shrink-0 text-primary transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </h3>
                  <span className="shrink-0 text-sm italic text-foreground/50">{formatDateRange(project.startDate, project.endDate)}</span>
                </div>
                <p className="mb-3 leading-relaxed text-foreground/70">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="editorial" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          {workHref && (
            <Link
              to={workHref}
              className="mt-6 inline-block font-heading text-sm italic text-primary transition-opacity hover:opacity-70"
            >
              View all work &rarr;
            </Link>
          )}
        </div>

      </section>

      <aside className="space-y-16 pt-12 md:col-span-4 md:border-l md:border-foreground/20 md:pl-12 md:pt-0">
        <div>
          <SectionTitle>Expertise</SectionTitle>
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-3 font-heading text-xs uppercase tracking-widest text-foreground/50">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 font-heading text-lg">
                      <span className="block h-1.5 w-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

    </div>
  );
}
