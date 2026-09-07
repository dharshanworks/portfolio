import { Section } from './Section';
import { experienceData } from '../data/portfolio';
import { ExternalLink, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" className="bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-4xl">
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-10">
          Professional experience applying frontend engineering and collaborative software development practices in real-world team environments.
        </p>

        <div className="space-y-8 relative pl-6 md:pl-10 border-l-2 border-slate-200 dark:border-slate-800">
          {experienceData.map((exp) => (
            <div 
              key={exp.id} 
              className="relative group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-primary shadow-sm shadow-primary/30 group-hover:scale-125 transition-transform" />
              
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800/80 group-hover:border-primary/40 transition-all duration-300">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                      <Briefcase size={13} />
                      Internship Experience
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-full self-start border border-slate-200/60 dark:border-slate-700/60">
                    <Calendar size={13} />
                    {exp.startDate} – {exp.endDate}
                  </div>
                </div>
                
                {/* Responsibilities list */}
                <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Footer link */}
                {exp.companyUrl && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      Visit {exp.company} Website <ExternalLink size={13} />
                    </a>

                    <span className="text-[11px] text-slate-400 font-mono">Verified Experience</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
