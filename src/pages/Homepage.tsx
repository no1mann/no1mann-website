import { NavLink, Outlet } from 'react-router-dom';
import { PORTFOLIO_DATA } from '@/data';
import { EditorialMetaBar, EditorialSocialIconLink } from '@/components/editorial/primitives';

const TABS = [
  { label: 'About', to: '/', end: true },
  { label: 'Work', to: '/work', end: true },
  { label: 'Blog', to: '/blog', end: false },
  { label: 'Conversations', to: '/conversations', end: true },
] as const;

type HomepageProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Homepage({ isDark, onToggleTheme }: HomepageProps) {
  const { about } = PORTFOLIO_DATA;
  const [firstName, ...lastNameParts] = about.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <EditorialMetaBar headerText={about.headerText} isDark={isDark} onToggleTheme={onToggleTheme} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <header className="mb-2 border-foreground/20 pb-10 text-center">
          <h1 className="mb-6 font-heading text-7xl font-bold tracking-tighter md:text-8xl">
            {firstName}
            {lastName ? (
              <>
                <br className="md:hidden" />
                <span className="block md:inline md:ml-4 font-light italic text-primary">{lastName}</span>
              </>
            ) : null}
          </h1>
          <p className="mx-auto max-w-2xl font-heading text-xl italic text-foreground/80 md:text-2xl">{about.title}</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="font-body text-sm tracking-widest text-foreground/50 lowercase pr-2 border-r border-foreground/20">
              @{about.username}
            </span>
            {PORTFOLIO_DATA.socials.map((social) => (
              <EditorialSocialIconLink key={social.name} {...social} />
            ))}
          </div>
        </header>

        <nav className="mb-16 border-b border-foreground/20">
          <ul className="flex">
            {TABS.map((tab) => (
              <li key={tab.label} className="flex-1 md:flex-initial">
                <NavLink
                  to={tab.to}
                  end={tab.end}
                  className={({ isActive }) =>
                    [
                      'relative block px-2 py-3 text-center font-body text-sm font-medium transition-colors sm:px-5 md:px-8 md:py-4 md:text-left uppercase',
                      isActive
                        ? 'bg-foreground text-background'
                        : 'text-foreground/50 hover:bg-foreground/5 hover:text-foreground/80',
                    ].join(' ')
                  }
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-h-[60vh]">
          <Outlet />
        </div>

        <footer className="mt-32 border-t border-foreground/20 pt-8 text-center">
          <p className="mx-auto max-w-3xl text-sm text-foreground/60">{about.philosophy}</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            {PORTFOLIO_DATA.socials.map((social) => (
              <EditorialSocialIconLink
                key={`footer-${social.name}`}
                {...social}
                size={18}
                className="text-foreground/65 transition-colors hover:text-primary"
              />
            ))}
          </div>
          <p className="mt-4 font-heading text-xs uppercase tracking-widest text-foreground/40">
            Published {year}
            <span className="mx-2">·</span>
            <a href={PORTFOLIO_DATA.repo.website} target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-foreground/60">Source</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
