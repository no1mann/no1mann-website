import type { ComponentType, SVGProps } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Github, Twitter, Youtube, Mail, Link2 } from 'lucide-react';

function RedditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" />
    </svg>
  );
}

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="349 102 123 123" fill="currentColor" stroke="none" {...props}>
      <path d="M413.43 102.851C379.665 101.509 351.207 127.791 349.87 161.556C348.528 195.321 374.817 223.773 408.576 225.115C442.34 226.457 470.793 200.175 472.135 166.41C473.471 132.645 447.189 104.187 413.43 102.851ZM439.254 192.48C438.493 193.822 437.011 194.493 435.568 194.292C435.127 194.23 434.685 194.085 434.271 193.85C426.185 189.248 417.372 186.251 408.078 184.942C398.784 183.633 389.484 184.086 380.442 186.284C378.479 186.759 376.505 185.557 376.03 183.594C375.555 181.632 376.757 179.658 378.72 179.182C388.662 176.766 398.885 176.269 409.096 177.706C419.307 179.143 428.992 182.437 437.889 187.498C439.639 188.499 440.255 190.724 439.259 192.48H439.254ZM447.295 176.42C446.048 178.724 443.162 179.585 440.858 178.338C431.397 173.221 421.152 169.86 410.41 168.35C399.668 166.841 388.897 167.249 378.39 169.558C377.819 169.681 377.255 169.704 376.707 169.625C374.8 169.357 373.167 167.937 372.731 165.94C372.166 163.379 373.788 160.846 376.349 160.281C387.963 157.726 399.869 157.273 411.735 158.939C423.596 160.605 434.92 164.319 445.377 169.978C447.686 171.225 448.542 174.105 447.295 176.414V176.42ZM456.209 158.313C455.034 160.572 452.591 161.741 450.208 161.405C449.565 161.316 448.933 161.114 448.324 160.801C437.308 155.069 425.441 151.284 413.055 149.544C400.669 147.805 388.215 148.174 376.047 150.646C372.882 151.289 369.8 149.242 369.157 146.083C368.514 142.918 370.561 139.837 373.721 139.194C387.197 136.459 400.976 136.051 414.682 137.975C428.388 139.898 441.518 144.092 453.72 150.439C456.583 151.927 457.696 155.455 456.209 158.318V158.313Z" />
    </svg>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <g transform="translate(12 12) scale(1.3) translate(-12 -12)">
        <path d="M16.95 12.13c.02 2.14 1.9 2.86 1.92 2.87-.02.05-.3 1.02-.98 2.02-.58.85-1.19 1.69-2.14 1.7-.93.02-1.24-.55-2.31-.55-1.08 0-1.42.53-2.28.57-.9.03-1.59-.9-2.18-1.74-1.2-1.73-2.11-4.9-.88-7.03a3.32 3.32 0 0 1 2.8-1.7c.87-.02 1.7.58 2.29.58.6 0 1.7-.71 2.86-.61.49.02 1.87.2 2.75 1.49-.07.04-1.64.95-1.63 2.4zm-1.88-5.03c.48-.58.8-1.39.71-2.2-.69.03-1.52.46-2.01 1.04-.44.52-.83 1.34-.73 2.13.77.06 1.55-.39 2.03-.97z" />
      </g>
    </svg>
  );
}

type IconComponent = ComponentType<{ size?: number; className?: string } & Record<string, unknown>>;

export const SOCIAL_ICON_MAP: Record<string, IconComponent> = {
  twitter: Twitter,
  github: Github,
  youtube: Youtube,
  reddit: ({ size, ...props }) => <RedditIcon width={size} height={size} {...props} />,
  spotify: ({ size, ...props }) => {
    const adjustedSize = typeof size === 'number' ? size * 0.88 : size;
    return <SpotifyIcon width={adjustedSize} height={adjustedSize} {...props} />;
  },
  apple: ({ size, ...props }) => <AppleIcon width={size} height={size} {...props} />,
  email: Mail,
  website: Link2,
};

type EditorialSocialIconLinkProps = {
  name: string;
  icon: string;
  link: string;
  size?: number;
  className?: string;
};

export function EditorialSocialIconLink({ name, icon, link, size = 20, className = '' }: EditorialSocialIconLinkProps) {
  const Icon = SOCIAL_ICON_MAP[icon];
  if (!Icon) {
    return null;
  }

  const isExternalLink = link.startsWith('http');

  return (
    <a
      href={link}
      {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={name}
      title={name}
      className={`text-primary transition-opacity hover:opacity-70 ${className}`.trim()}
    >
      <Icon size={size} />
      <span className="sr-only">{name}</span>
    </a>
  );
}

type EditorialMetaBarProps = {
  primaryProject: string;
  isDark: boolean;
  onToggleTheme: () => void;
};

export function EditorialMetaBar({ primaryProject, isDark, onToggleTheme }: EditorialMetaBarProps) {
  return (
    <div className="flex items-center justify-between border-b border-foreground/20 px-4 py-2 text-xs uppercase tracking-widest md:px-8">
      <span>{primaryProject}</span>
      <div className="flex items-center gap-3">
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
