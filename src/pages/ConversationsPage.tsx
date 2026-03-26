import { PORTFOLIO_DATA, formatConversationDate } from '@/data';
import { EditorialSocialIconLink } from '@/components/editorial/primitives';
import { SectionTitle } from '@/components/editorial/section-title';
import { Badge } from '@/components/ui/badge';

export function ConversationsPage() {
  const { conversations } = PORTFOLIO_DATA;

  return (
    <div>
      <SectionTitle>Talks, Podcasts & Interviews</SectionTitle>
      <div className="space-y-10">
        {conversations.map((item) => {
          const primaryLink = item.links[0]?.link;

          return (
            <article key={item.title} className="border-b border-foreground/10 pb-8 last:border-0">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
                <div className="shrink-0 md:w-28 md:pt-2">
                  <Badge variant="editorial" className="mb-1 block">
                    {item.type}
                  </Badge>
                  <span className="text-sm italic text-foreground/50">{formatConversationDate(item.date)}</span>
                </div>
                <div className="flex-1">
                  {primaryLink ? (
                    <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <h3 className="mb-2 cursor-pointer font-heading text-xl font-bold leading-tight transition-colors hover:text-primary md:text-2xl">
                        {item.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="mb-2 font-heading text-xl font-bold leading-tight md:text-2xl">{item.title}</h3>
                  )}
                  <p className="text-foreground/70">{item.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {item.links.map((linkItem) => (
                      <EditorialSocialIconLink
                        key={`${item.title}-${linkItem.name}`}
                        name={`${item.title}: ${linkItem.name}`}
                        icon={linkItem.icon}
                        link={linkItem.link}
                        size={26}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-foreground/20 text-foreground/70 transition-colors hover:border-primary/60 hover:text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
