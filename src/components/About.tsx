import { Section } from './Section';
import { personalInfo } from '../data/portfolio';
import { GraduationCap, MapPin } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          <p>{personalInfo.about}</p>
          <p>
            I focus on writing clean, maintainable code and building responsive, accessible web applications. My goal is to work on challenging projects where I can leverage my full-stack skills to deliver robust software solutions.
          </p>
        </div>
        
        <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Education & Details</h3>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{personalInfo.degree}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{personalInfo.college}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <span>{personalInfo.educationPeriod}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  <span className="font-medium text-primary">CGPA: {personalInfo.cgpa}</span>
                </div>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{personalInfo.location}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
