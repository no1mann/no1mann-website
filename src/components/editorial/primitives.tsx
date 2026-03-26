import { useState, useEffect, type ComponentType, type SVGProps } from 'react';
import { createPortal } from 'react-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Github, Twitter, Youtube, Mail, Link2, X, Copy, Check } from 'lucide-react';

function RedditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.35}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.985 13.5a1.447 1.447 0 1 1-2.895 0a1.447 1.447 0 0 1 2.895 0m-8.528 1.447a1.447 1.447 0 1 0 0-2.894a1.447 1.447 0 0 0 0 2.894m.393 1.682a.75.75 0 0 0-.8 1.268l.345.218a6.75 6.75 0 0 0 7.202 0l.345-.217a.75.75 0 1 0-.8-1.27l-.345.218a5.25 5.25 0 0 1-5.602 0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.96 1.75c-.873 0-1.636.479-2.038 1.188l-3.6-.739a.75.75 0 0 0-.841.442c-.411.966-1.027 2.431-1.542 3.685c-.182.444-.352.863-.495 1.225c-2.047.082-3.943.617-5.494 1.484a3.066 3.066 0 1 0-3.762 4.421c-.132.48-.201.977-.201 1.491c0 2.142 1.209 4.012 3.025 5.317c1.818 1.307 4.29 2.091 6.988 2.091c2.697 0 5.17-.784 6.988-2.09c1.816-1.306 3.025-3.176 3.025-5.318c0-.514-.07-1.012-.2-1.49a3.066 3.066 0 1 0-3.762-4.422c-1.427-.797-3.145-1.314-5.003-1.456c.088-.216.181-.446.28-.684c.418-1.021.906-2.185 1.294-3.103l3.018.62a2.343 2.343 0 1 0 2.32-2.662m-.842 2.342a.842.842 0 1 1 1.685 0a.842.842 0 0 1-1.685 0M12 9.04c.154 0 .307.003.46.009a.621.621 0 0 1-.012.094l-.002.005l.003-.01l.029-.088c2.224.086 4.201.77 5.634 1.8c1.537 1.104 2.401 2.563 2.401 4.098c0 1.536-.865 2.995-2.4 4.1c-1.536 1.102-3.694 1.808-6.113 1.808c-2.419 0-4.577-.706-6.112-1.809c-1.537-1.104-2.401-2.563-2.401-4.099c0-1.535.864-2.994 2.4-4.098C7.424 9.744 9.582 9.039 12 9.039M1.75 10.605a1.566 1.566 0 0 1 2.947-.738c-.799.63-1.463 1.373-1.934 2.204a1.567 1.567 0 0 1-1.013-1.466m19.487 1.466c-.471-.83-1.135-1.575-1.934-2.204a1.566 1.566 0 1 1 1.934 2.204"
      />
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

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M15.5 17.5L16.5 19.5C16.5 19.5 20.671 18.172 22 16C22 15 22.53 7.853 19 5.5C17.5 4.5 15 4 15 4L14 6H12M8.52799 17.5L7.52799 19.5C7.52799 19.5 3.35699 18.172 2.02799 16C2.02799 15 1.49799 7.853 5.02799 5.5C6.52799 4.5 9.02799 4 9.02799 4L10.028 6H12.028" />
        <path d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16" />
      </g>
    </svg>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4 2 16.2 20"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
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
    const adjustedSize = typeof size === 'number' ? size * 0.9 : size;
    return <SpotifyIcon width={adjustedSize} height={adjustedSize} {...props} />;
  },
  apple: ({ size, ...props }) => {
    const adjustedSize = typeof size === 'number' ? size * 0.9 : size;
    return <AppleIcon width={adjustedSize} height={adjustedSize} {...props} />;
  },
  discord: ({ size, ...props }) => <DiscordIcon width={size} height={size} {...props} />,
  email: Mail,
  website: Link2,
};

type UsernameModalProps = {
  name: string;
  icon: string;
  username: string;
  onClose: () => void;
};

function UsernameModal({ name, icon, username, onClose }: UsernameModalProps) {
  const [copied, setCopied] = useState(false);
  const Icon = SOCIAL_ICON_MAP[icon];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative border border-foreground/20 bg-background px-10 py-8 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-foreground/50 transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X size={16} />
        </button>
        {Icon && <Icon size={32} className="mx-auto mb-4 text-primary" />}
        <p className="mb-1 text-xs uppercase tracking-widest text-foreground/50">{name}</p>
        <p className="font-heading text-2xl font-bold tracking-tight">{username}</p>
        <button
          onClick={handleCopy}
          className="mt-5 inline-flex items-center gap-2 border border-foreground/20 px-4 py-2 text-xs uppercase tracking-widest transition-colors hover:bg-foreground/5"
        >
          {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Username</>}
        </button>
      </div>
    </div>,
    document.body,
  );
}

type EditorialSocialIconLinkProps = {
  name: string;
  icon: string;
  link?: string;
  username?: string;
  size?: number;
  className?: string;
};

export function EditorialSocialIconLink({ name, icon, link, username, size = 20, className = '' }: EditorialSocialIconLinkProps) {
  const [showModal, setShowModal] = useState(false);
  const Icon = SOCIAL_ICON_MAP[icon];
  if (!Icon) return null;

  if (username) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          aria-label={name}
          title={name}
          className={`cursor-pointer text-primary transition-opacity hover:opacity-70 ${className}`.trim()}
        >
          <Icon size={size} className="block" />
          <span className="sr-only">{name}</span>
        </button>
        {showModal && (
          <UsernameModal
            name={name}
            icon={icon}
            username={username}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  if (!link) return null;

  const isExternalLink = link.startsWith('http');

  return (
    <a
      href={link}
      {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={name}
      title={name}
      className={`cursor-pointer text-primary transition-opacity hover:opacity-70 ${className}`.trim()}
    >
      <Icon size={size} className="block" />
      <span className="sr-only">{name}</span>
    </a>
  );
}

type EditorialMetaBarProps = {
  headerText: string;
  isDark: boolean;
  onToggleTheme: () => void;
};

export function EditorialMetaBar({ headerText, isDark, onToggleTheme }: EditorialMetaBarProps) {
  return (
    <div className="flex items-center justify-between border-b border-foreground/20 px-4 py-2 text-xs uppercase tracking-widest md:px-8">
      <span>{headerText}</span>
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
