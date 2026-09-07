import { Section } from './Section';
import { personalInfo } from '../data/portfolio';
import { GraduationCap, MapPin, Calendar, Award, Code2, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    title: "Full-Stack Development",
    desc: "Crafting end-to-end web apps with React.js, Node.js, Express, and relational/NoSQL databases.",
    icon: <Code2 className="w-5 h-5 text-indigo-500" />
  },
  {
    title: "Cloud & Containerization",
    desc: "Containerizing apps with Docker and deploying clusters on AWS EKS with Kubernetes manifests.",
    icon: <Cloud className="w-5 h-5 text-purple-500" />
  },
  {
    title: "Engineering Excellence",
    desc: "Writing maintainable, type-safe TypeScript, building RESTful APIs, and implementing clean MVC/DAO patterns.",
    icon: <Sparkles className="w-5 h-5 text-pink-500" />
  }
];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Bio and Pillars (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            <p>
              {personalInfo.about}
            </p>
            <p>
              I believe great software is built at the intersection of robust backend logic, intuitive user interfaces, and reliable infrastructure. Currently in my third year pursuing B.Tech in Information Technology, I actively build and ship projects that reflect production standards.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title} 
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs"
              >
                <div className="mb-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 w-fit">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{pillar.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Education & Snapshot (5 cols) */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={20} />
            Academic Background
          </h3>
          
          <div className="space-y-6">
            {/* Degree */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold">
                Undergraduate Degree
              </span>
              <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
                {personalInfo.degree}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {personalInfo.college}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
                <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <Calendar size={13} /> {personalInfo.educationPeriod}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                  <Award size={13} /> CGPA: {personalInfo.cgpa} / 10
                </span>
              </div>
            </div>

            {/* Quick Details List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Based in</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Primary Focus</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Full-Stack Development, Cloud & DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
