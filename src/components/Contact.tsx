import { Section } from './Section';
import { personalInfo } from '../data/portfolio';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" className="bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
          Have a project or opportunity? Let's connect. I'm currently looking for a Software Development Engineer Internship to apply my skills and build impactful products.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="bg-primary/10 p-4 rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
            <Mail size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
          <p className="text-slate-500 dark:text-slate-400">{personalInfo.email}</p>
        </a>
        
        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full text-slate-600 dark:text-slate-300 mb-4">
            <MapPin size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Location</h3>
          <p className="text-slate-500 dark:text-slate-400">{personalInfo.location}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-6 py-3 rounded-lg font-medium transition-all"
        >
          <GithubIcon className="w-5 h-5" />
          GitHub
        </a>
        
        <a 
          href={personalInfo.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-lg font-medium transition-all"
        >
          <LinkedinIcon className="w-5 h-5" />
          LinkedIn
        </a>
        
        <a 
          href={personalInfo.leetcode} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
        >
          <ExternalLink size={20} />
          LeetCode
        </a>
      </div>
    </Section>
  );
}
