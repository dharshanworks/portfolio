import { personalInfo } from '../data/portfolio';
import { FileText, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold tracking-wide uppercase mb-4">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-500 dark:text-slate-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
            {personalInfo.subtitle} {personalInfo.about.split('.')[0]}.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-6 py-3 rounded-md font-medium transition-all"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-md font-medium transition-colors"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
              GitHub
            </a>
            
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-md font-medium transition-colors"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
              LinkedIn
            </a>
            
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium px-4 py-3 transition-colors"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
