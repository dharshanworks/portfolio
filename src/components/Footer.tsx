import { personalInfo } from '../data/portfolio';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <a href="#home" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white block text-center md:text-left mb-2">
              DHARSHAN R<span className="text-primary">.</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-center md:text-left">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React, Tailwind CSS & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
