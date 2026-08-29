import type { Project } from '../types';
import { ExternalLink, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { GithubIcon } from './icons';
import { useState } from 'react';
import { cn } from '../utils/cn';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  const hasActualLiveUrl = project.liveUrl && !project.liveUrl.includes('[');
  const hasActualGithubUrl = project.githubUrl && !project.githubUrl.includes('[');

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-sm transition-all hover:shadow-md h-full">
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        {project.featured && (
          <div className="inline-flex self-start px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Live Project
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-primary font-medium mb-4">{project.subtitle}</p>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 6).map((tech) => (
            <span 
              key={tech} 
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-md">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
        
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
          {hasActualLiveUrl ? (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          ) : (
            <div className="flex-1 flex justify-center items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 px-4 py-2.5 rounded-lg font-medium text-sm cursor-not-allowed">
              Live Demo — Coming Soon
            </div>
          )}
          
          {hasActualGithubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center items-center p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-colors"
              aria-label="View Source Code"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      {/* Expandable Technical Highlights / Architecture */}
      <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between p-4 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Layers size={16} /> Technical Details
          </span>
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          showDetails ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="p-6 pt-2 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {project.architectureDetails && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Architecture</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {Object.entries(project.architectureDetails).map(([key, value]) => (
                    <div key={key} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg">
                      <span className="block text-xs font-semibold text-primary capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
