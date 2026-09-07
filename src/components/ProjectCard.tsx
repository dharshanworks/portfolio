import { useState } from 'react';
import type { Project } from '../types';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle, Server, Database, Cloud, Globe, Share2 } from 'lucide-react';
import { GithubIcon } from './icons';
import { cn } from '../utils/cn';
import { useToast } from '../hooks/useToast';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<'highlights' | 'architecture'>('highlights');
  const { toast } = useToast();

  const handleDemoClick = (e: React.MouseEvent) => {
    if (!project.liveUrl || project.liveUrl.includes('example.com') || project.liveUrl.includes('[')) {
      e.preventDefault();
      toast({
        type: 'info',
        title: 'Project Demo Available On Request',
        description: `Staging environment / video walkthrough available. Reach out at iamdharshanrt@gmail.com!`,
      });
    }
  };

  const handleShareProject = () => {
    navigator.clipboard.writeText(`${project.title} — ${project.subtitle}\nTech: ${project.technologies.join(', ')}`);
    toast({
      type: 'copy',
      title: 'Project Info Copied',
      description: `${project.title} summary copied to clipboard`,
    });
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-slate-200/80 dark:border-slate-800/80 hover:border-primary/40 transition-all duration-300">
      
      {/* Top Banner / Card Head */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            {project.category && (
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {project.category}
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider rounded-full border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Featured Project
              </span>
            )}
          </div>

          <button
            onClick={handleShareProject}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
            title="Copy project summary"
          >
            <Share2 size={15} />
          </button>
        </div>
        
        {/* Project Title & Subtitle */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
          {project.title}
        </h3>
        <p className="text-primary font-medium text-sm mb-4">{project.subtitle}</p>
        
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Metrics Pills if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40"
              >
                <CheckCircle size={12} className="text-indigo-500" />
                {metric}
              </span>
            ))}
          </div>
        )}
        
        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 7).map((tech) => (
            <span 
              key={tech} 
              className="bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 7 && (
            <span className="bg-slate-100 dark:bg-slate-800/90 text-slate-500 dark:text-slate-400 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60">
              +{project.technologies.length - 7} more
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
          <a 
            href={project.liveUrl || '#'} 
            onClick={handleDemoClick}
            target={project.liveUrl && !project.liveUrl.includes('example.com') ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-xl font-medium transition-all shadow-md shadow-primary/20 hover:shadow-primary/30 text-sm"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl transition-colors text-sm font-medium border border-slate-200 dark:border-slate-700"
              title="View Source Code"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Expandable Technical Highlights & Architecture Section */}
      <div className="bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800/80">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between p-4 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Layers size={15} className="text-primary" />
            <span>Deep Dive: Technical Specs & Architecture</span>
          </span>
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          showDetails ? "max-h-[950px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="p-5 pt-1 space-y-4">
            
            {/* View Toggle Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 mb-3">
              <button
                onClick={() => setActiveTab('highlights')}
                className={cn(
                  "pb-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                  activeTab === 'highlights'
                    ? "text-primary border-b-2 border-primary"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                )}
              >
                Key Engineering Highlights
              </button>

              {project.architectureDetails && (
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={cn(
                    "pb-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                    activeTab === 'architecture'
                      ? "text-primary border-b-2 border-primary"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  )}
                >
                  System Architecture
                </button>
              )}
            </div>

            {/* Highlights View */}
            {activeTab === 'highlights' && (
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* System Architecture View */}
            {activeTab === 'architecture' && project.architectureDetails && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-primary font-bold mb-1">
                    <Globe size={13} /> Frontend Tier
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{project.architectureDetails.frontend}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-purple-500 font-bold mb-1">
                    <Server size={13} /> Backend & API
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{project.architectureDetails.backend}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-emerald-500 font-bold mb-1">
                    <Database size={13} /> Data Persistence
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{project.architectureDetails.database}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-amber-500 font-bold mb-1">
                    <Cloud size={13} /> Cloud & Orchestration
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{project.architectureDetails.deployment}</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
