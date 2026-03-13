import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

type EditorialMetaBarProps = {
  name: string;
  title: string;
  year: number;
  isDark: boolean;
  onToggleTheme: () => void;
};

export function EditorialMetaBar({ name, title, year, isDark, onToggleTheme }: EditorialMetaBarProps) {
  return (
    <div className="flex items-center justify-between border-b border-foreground/20 px-4 py-2 text-xs uppercase tracking-widest md:px-8">
      <span>
        Vol. 1 &mdash; {year}
      </span>
      <span className="hidden md:inline">The Portfolio of {name}</span>
      <div className="flex items-center gap-3">
        <span>{title}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="h-7 w-7 rounded-none border border-foreground/25 p-0 hover:bg-foreground/10"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </Button>
      </div>
    </div>
  );
}

type EditorialFeatureLinkProps = {
  type: string;
  title: string;
  date: string;
  link: string;
};

export function EditorialFeatureLink({ type, title, date, link }: EditorialFeatureLinkProps) {
  return (
    <li>
      <Badge variant="editorial" className="mb-1 block">
        {type}
      </Badge>
      <Button asChild variant="editorialFeature" size="none" className="w-full justify-start">
        <a href={link}>{title}</a>
      </Button>
      <span className="text-sm italic text-foreground/60">{date}</span>
    </li>
  );
}

type EditorialDirectoryLinkProps = {
  name: string;
  link: string;
};

export function EditorialDirectoryLink({ name, link }: EditorialDirectoryLinkProps) {
  return (
    <Button asChild variant="editorialLink" size="none">
      <a href={link}>
        {name}
        <span className="font-sans text-xs not-italic text-foreground/40">&nearr;</span>
      </a>
    </Button>
  );
}
