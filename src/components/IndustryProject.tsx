import { Section } from './Section';
import { industryProject } from '../data/portfolio';
import { Lock, Building2 } from 'lucide-react';

export function IndustryProject() {
  return (
    <Section id="industry-project" title="Industry-Collaborated Project">
      <div className="bg-slate-900 rounded-2xl p-1 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-600/30 opacity-50"></div>
        <div className="relative bg-slate-950 rounded-xl p-8 md:p-12 h-full flex flex-col justify-between border border-slate-800">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
                <Building2 size={16} />
                Industry Collaboration: {industryProject.collaboration}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {industryProject.title}
              </h3>
              <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
                {industryProject.description}
              </p>
            </div>
            
            <div className="shrink-0 bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center gap-3 self-start max-w-sm">
              <div className="bg-amber-500/10 p-2 rounded-full text-amber-500 shrink-0">
                <Lock size={20} />
              </div>
              <p className="text-sm text-slate-400 font-medium leading-tight">
                {industryProject.disclaimer}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 border-t border-slate-800 pt-8 mt-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {industryProject.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Key Contributions</h4>
              <ul className="space-y-3">
                {industryProject.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span className="text-slate-400 leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
