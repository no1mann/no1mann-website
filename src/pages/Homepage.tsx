import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data';
import { EditorialMetaBar, EditorialSocialIconLink } from '@/components/editorial/primitives';
import { AboutPage } from '@/pages/AboutPage';
import { WorkPage } from '@/pages/WorkPage';
import { BlogPage } from '@/pages/BlogPage';
import { ConversationsPage } from '@/pages/ConversationsPage';

const TABS = ['About', 'Work', 'Blog', 'Conversations'] as const;
type Tab = (typeof TABS)[number];

type HomepageProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Homepage({ isDark, onToggleTheme }: HomepageProps) {
  const [activeTab, setActiveTab] = useState<Tab>('About');
  const { about } = PORTFOLIO_DATA;
  const [firstName, ...lastNameParts] = about.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <EditorialMetaBar primaryProject={about.primaryProject} isDark={isDark} onToggleTheme={onToggleTheme} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <header className="mb-2 border-foreground/20 pb-16 text-center">
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
          <div className="mt-6 flex items-center justify-center gap-4">
            {PORTFOLIO_DATA.socials.map((social) => (
              <EditorialSocialIconLink key={social.name} name={social.name} icon={social.icon} link={social.link} />
            ))}
          </div>
        </header>

        <nav className="mb-16 border-b border-foreground/20">
          <ul className="flex gap-0">
            {TABS.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors
                    md:px-8 md:py-4 md:text-sm
                    ${activeTab === tab
                      ? 'bg-foreground text-background'
                      : 'text-foreground/50 hover:bg-foreground/5 hover:text-foreground/80'
                    }
                  `}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-h-[60vh]">
          {activeTab === 'About' && <AboutPage onNavigateToWork={() => setActiveTab('Work')} />}
          {activeTab === 'Work' && <WorkPage />}
          {activeTab === 'Blog' && <BlogPage />}
          {activeTab === 'Conversations' && <ConversationsPage />}
        </div>

        <footer className="mt-32 border-t border-foreground/20 pt-8 text-center">
          <p className="mx-auto max-w-3xl text-sm text-foreground/60">{about.philosophy}</p>
          <p className="mt-4 font-heading text-xs uppercase tracking-widest text-foreground/40">Published {year}</p>
        </footer>
      </div>
    </div>
  );
}
