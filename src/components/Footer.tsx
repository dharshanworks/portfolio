import { personalInfo } from '../data/portfolio';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useToast } from '../hooks/useToast';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    toast({
      type: 'copy',
      title: 'Email Copied!',
      description: personalInfo.email,
    });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 py-12 transition-colors">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <a 
              href="#home" 
              className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white block text-center md:text-left mb-1 group"
            >
              <span className="text-gradient">DHARSHAN R</span>
              <span className="text-primary-dark">.</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium text-center md:text-left">
              {personalInfo.title} • Open for SDE Internships 2025–2026
            </p>
          </div>
          
          {/* Social Links and Back to top */}
          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:border-primary/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a 
              href={personalInfo.linkedin.includes('[') ? `mailto:${personalInfo.email}` : personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:border-primary/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:border-primary/40 transition-colors"
              aria-label="Copy Email"
              title="Copy Email"
            >
              <Mail size={16} />
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowUp size={13} />
              <span>Top</span>
            </button>
          </div>
          
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800/80 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Engineered with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            <span>using React 19, Vite, Tailwind CSS v4 & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
