import type { ComponentType, SVGProps } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Github, Twitter, Youtube, Mail, Link2 } from 'lucide-react';

function RedditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
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
