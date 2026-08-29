import { Section } from './Section';
import { experienceData } from '../data/portfolio';
import { ExternalLink, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-4xl">
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div 
              key={exp.id} 
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-29px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-primary z-10 mt-1.5" />
              <div className="hidden md:block absolute left-[-22px] top-6 bottom-[-32px] w-[2px] bg-slate-200 dark:bg-slate-800" />
              
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Briefcase size={20} className="text-primary md:hidden" />
                      {exp.role}
                    </h3>
                    <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {exp.company}
                    </div>
                  </div>
                  <div className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6 marker:text-slate-300 dark:marker:text-slate-600">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="leading-relaxed pl-2 -indent-5 ml-5">{resp}</li>
                  ))}
                </ul>
                
                {exp.companyUrl && (
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Company Website <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
