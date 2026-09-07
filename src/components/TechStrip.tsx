import { techStrip } from '../data/portfolio';
import { Layers } from 'lucide-react';

export function TechStrip() {
  // Duplicate array twice to ensure an uninterrupted, seamless infinite marquee loop
  const marqueeItems = [...techStrip, ...techStrip, ...techStrip];

  return (
    <div className="w-full relative bg-slate-100/70 dark:bg-slate-950/80 border-y border-slate-200/80 dark:border-slate-800/80 py-5 overflow-hidden">
      {/* Left and right fade gradient overlays for smooth seamless appearance */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee ticker container */}
      <div className="flex items-center">
        <div className="animate-marquee flex items-center gap-4 md:gap-6 py-1">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold text-xs md:text-sm whitespace-nowrap shadow-xs hover:border-primary/50 hover:text-primary transition-all duration-200 select-none group"
            >
              <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle indicator caption */}
      <div className="mt-2 text-center text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-600 flex items-center justify-center gap-1.5">
        <Layers size={11} /> Primary Technical Ecosystem
      </div>
    </div>
  );
}
