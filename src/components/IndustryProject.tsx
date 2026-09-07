import { Section } from './Section';
import { industryProject } from '../data/portfolio';
import { Lock, Building2, Eye, Cpu, ShieldCheck, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';

const pipelineSteps = [
  {
    step: "01",
    title: "Optical Capture",
    desc: "Telecentric lens distortion-free image ingestion",
    icon: <Eye size={16} className="text-cyan-400" />
  },
  {
    step: "02",
    title: "Preprocessing",
    desc: "Contrast normalization, ROI isolation & filtering",
    icon: <Activity size={16} className="text-indigo-400" />
  },
  {
    step: "03",
    title: "Dimensional Analysis",
    desc: "Sub-pixel feature & measurement extraction",
    icon: <Cpu size={16} className="text-purple-400" />
  },
  {
    step: "04",
    title: "Validation & Metrics",
    desc: "Anomaly classification & threshold verification",
    icon: <ShieldCheck size={16} className="text-emerald-400" />
  }
];

export function IndustryProject() {
  return (
    <Section id="industry-project" title="Industry-Collaborated Project">
      <div className="bg-slate-900 rounded-3xl p-1 overflow-hidden relative group shadow-2xl border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-600/20 to-cyan-500/20 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
        
        <div className="relative bg-slate-950/95 rounded-[22px] p-6 sm:p-10 md:p-12 h-full flex flex-col justify-between">
          
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/30 text-xs font-semibold mb-4 tracking-wide">
                <Building2 size={14} />
                Industry Mentored Initiative • {industryProject.collaboration}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {industryProject.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {industryProject.description}
              </p>
            </div>
            
            {/* NDA Lock Badge */}
            <div className="shrink-0 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-start gap-3.5 max-w-sm">
              <div className="bg-amber-500/10 p-2.5 rounded-xl text-amber-400 shrink-0 mt-0.5">
                <Lock size={18} />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Confidential System
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {industryProject.disclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Pipeline Architecture Flow Diagram */}
          <div className="my-6 p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Cpu size={14} className="text-primary" /> Architectural Processing Pipeline (High-Level Overview)
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Validated
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {pipelineSteps.map((item, idx) => (
                <div key={item.step} className="relative p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-slate-500">{item.step}</span>
                      <div className="p-1.5 rounded-lg bg-slate-900">{item.icon}</div>
                    </div>
                    <h5 className="text-sm font-bold text-slate-200 mb-1">{item.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech and Contributions Footer */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-slate-800/90 pt-8 mt-2">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3 flex items-center gap-2">
                Core Competencies & Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {industryProject.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-800/90 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-medium border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3 flex items-center gap-2">
                Key Engineering Contributions
              </h4>
              <ul className="space-y-2.5">
                {industryProject.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contribution}</span>
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
