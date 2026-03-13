import { PORTFOLIO_DATA } from '@/data';
import { EditorialDirectoryLink, EditorialFeatureLink, EditorialMetaBar } from '@/components/editorial/primitives';
import { SectionTitle } from '@/components/editorial/section-title';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type HomepageProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Homepage({ isDark, onToggleTheme }: HomepageProps) {
  const { about, skills, currentProjects, pastProjects, blog, appearances, socials } = PORTFOLIO_DATA;
  const [firstName, ...lastNameParts] = about.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <EditorialMetaBar name={about.name} title={about.title} year={year} isDark={isDark} onToggleTheme={onToggleTheme} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <header className="mb-24 border-b border-foreground/20 pb-16 text-center">
          <h1 className="mb-6 font-heading text-7xl font-bold tracking-tighter md:text-9xl">
            {firstName}
            {lastName ? (
              <>
                <br className="md:hidden" />
                <span className="ml-4 font-light italic text-primary">{lastName}</span>
              </>
            ) : null}
          </h1>
          <p className="mx-auto max-w-2xl font-heading text-xl italic text-foreground/80 md:text-2xl">{about.title}</p>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <section className="md:col-span-8">
            <SectionTitle>Prologue</SectionTitle>
            <p className="font-heading text-2xl leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-primary md:text-3xl">
              {about.bio}
            </p>

            <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <SectionTitle>Selected Works</SectionTitle>
                <div className="space-y-8">
                  {currentProjects.map((project) => (
                    <article key={project.title} className="group cursor-pointer">
                      <h3 className="mb-2 font-heading text-2xl font-bold transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="leading-relaxed text-foreground/70">{project.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Essays</SectionTitle>
                <div className="space-y-8">
                  {blog.map((post) => (
                    <article key={post.title} className="group cursor-pointer">
                      <Badge asChild variant="editorial" className="mb-2 block">
                        <time>{post.date}</time>
                      </Badge>
                      <h3 className="mb-2 font-heading text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground/70">{post.excerpt}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-24">
              <SectionTitle>Archive</SectionTitle>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {pastProjects.map((project) => (
                  <Card key={project.title} className="transition-shadow hover:shadow-lg">
                    <CardHeader className="flex-row items-start justify-between space-y-0 p-6">
                      <CardTitle>{project.title}</CardTitle>
                      <Badge variant="editorial">{project.year}</Badge>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-16 border-t border-foreground/20 pt-12 md:col-span-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <div>
              <SectionTitle>Expertise</SectionTitle>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-heading text-lg">
                    <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle>Features</SectionTitle>
              <ul className="space-y-6">
                {appearances.map((appearance) => (
                  <EditorialFeatureLink
                    key={appearance.title}
                    type={appearance.type}
                    title={appearance.title}
                    date={appearance.date}
                    link={appearance.link}
                  />
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle>Directory</SectionTitle>
              <div className="flex flex-col gap-3">
                {socials.map((social) => (
                  <EditorialDirectoryLink key={social.name} name={social.name} link={social.link} />
                ))}
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-32 border-t border-foreground/20 pt-8 text-center font-heading text-sm italic text-foreground/60">
          Published {year} &mdash; All rights reserved.
        </footer>
      </div>
    </div>
  );
}
