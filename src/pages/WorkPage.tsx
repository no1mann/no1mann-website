import { PORTFOLIO_DATA, formatDateRange } from '@/data';
import { SectionTitle } from '@/components/editorial/section-title';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';


export function WorkPage() {
  const { currentProjects, pastProjects } = PORTFOLIO_DATA;

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <article key={project.title} className="group border-b border-foreground/10 pb-8">
            <h3 className="mb-1 font-heading text-2xl font-bold transition-colors group-hover:text-primary">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-baseline gap-2">
                {project.title}
                <ArrowRight size={14} className="relative top-[2px] shrink-0 text-primary transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </h3>
            <span className="mb-3 block text-sm italic text-foreground/50">{formatDateRange(project.startDate, project.endDate)}</span>
            <p className="mb-4 leading-relaxed text-foreground/70">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="editorial" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <SectionTitle>Past Projects</SectionTitle>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {pastProjects.map((project) => (
            <Card key={project.title} className="transition-shadow hover:shadow-lg">
              <CardHeader className="sm:flex-row items-start sm:justify-between sm:space-y-0 gap-2 p-6">
                <CardTitle>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-baseline gap-2 transition-colors hover:text-primary">
                    {project.title}
                    <ArrowRight size={14} className="relative top-[2px] shrink-0 text-primary transition-transform duration-200 group-hover/link:translate-x-1" />
                  </a>
                </CardTitle>
                <Badge variant="editorial" className="shrink-0">{formatDateRange(project.startDate, project.endDate)}</Badge>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
