import { NavLink, Outlet } from 'react-router-dom';
import { PORTFOLIO_DATA } from '@/data';
import { EditorialSocialIconLink, EditorialThemeToggle } from '@/components/editorial/primitives';

const TABS = [
  { label: 'About', to: '/', end: true },
  { label: 'Work', to: '/work', end: true },
  { label: 'Posts', to: '/posts', end: false },
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
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-8">
        <EditorialThemeToggle
          isDark={isDark}
          onToggleTheme={onToggleTheme}
          className="absolute right-4 top-4 z-20 md:right-8 md:top-6"
        />
        <header className="mb-2 border-foreground/20 pb-8 text-center">
          <h1 className="mb-4 font-heading text-7xl font-bold tracking-tighter md:text-8xl">
            {firstName}
            {lastName ? (
              <>
                <br className="md:hidden" />
                <span className="block md:inline md:ml-4 font-light italic text-primary">{lastName}</span>
              </>
            ) : null}
          </h1>
          <p className="mx-auto max-w-2xl font-heading text-xl italic text-foreground/80 md:text-2xl">{about.title}</p>
        </header>

        <nav className="mb-10 border-b border-foreground/20">
          <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
            <ul className="mx-auto flex w-max min-w-fit">
              {TABS.map((tab) => (
                <li key={tab.label} className="shrink-0">
                  <NavLink
                    to={tab.to}
                    end={tab.end}
                    className={({ isActive }) =>
                      [
                        'relative block px-3.5 py-3 text-center font-body text-[13px] font-medium uppercase tracking-wide transition-colors sm:px-6 sm:text-sm md:px-8 md:py-4 md:text-left',
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
          </div>
        </nav>

        <div className="min-h-[60vh]">
          <Outlet />
        </div>

        <footer className="mt-32 border-t border-foreground/20 pt-8 text-center">
          <p className="mx-auto max-w-3xl text-sm text-foreground/60">{about.philosophy}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <p className="font-body text-sm tracking-widest text-foreground/50 lowercase">
              @{about.username}
            </p>
            <span aria-hidden="true" className="h-4 w-px bg-foreground/20" />
            <div className="flex items-center gap-4">
              {PORTFOLIO_DATA.socials.map((social) => (
                <EditorialSocialIconLink
                  key={`footer-${social.name}`}
                  {...social}
                  size={18}
                  className="text-foreground/65 transition-colors hover:text-primary"
                />
              ))}
            </div>
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
