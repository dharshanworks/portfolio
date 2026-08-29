import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, title, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className={cn("container mx-auto px-6 md:px-12 max-w-6xl", containerClassName)}>
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-slate-50">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
