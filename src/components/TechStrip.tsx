import { techStrip } from '../data/portfolio';

export function TechStrip() {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-6 overflow-hidden flex">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Double the array for seamless scrolling effect if needed, but flex wrap is also fine for a clean tech strip */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4 max-w-6xl mx-auto w-full">
          {techStrip.map((tech) => (
            <span 
              key={tech} 
              className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
