import { cn } from '@/lib/utils';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return <h2 className={cn('mb-6 border-b border-foreground/20 pb-2 text-sm uppercase tracking-widest', className)}>{children}</h2>;
}
