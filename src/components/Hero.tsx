import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { FileText, ArrowRight, Sparkles, Terminal, Copy, Check, Mail, Code2, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useToast } from '../hooks/useToast';

const roles = [
  "Full-Stack Developer",
  "Cloud & DevOps Enthusiast",
  "API & Distributed Systems Builder",
  "React & Node.js Specialist"
];

const codeTabs = [
  {
    id: 'profile',
    filename: 'dharshan.ts',
    content: `// Candidate Profile
export const engineer = {
  name: "Dharshan R",
  role: "Full-Stack Developer",
  education: "B.Tech IT (2023 - 2027)",
  institution: "Sri Shakthi Inst. of Engg & Tech",
  cgpa: 7.7,
  focus: ["Scalable Web Apps", "Cloud Infrastructure", "APIs"],
  currentStatus: "Open for SDE Internships",
  location: "Coimbatore, India"
};`
  },
  {
    id: 'stack',
    filename: 'techStack.json',
    content: `{
  "languages": ["TypeScript", "JavaScript", "Java", "SQL", "Python"],
  "frontend": ["React.js", "Tailwind CSS", "Vite", "HTML5/CSS3"],
  "backend": ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
  "databases": ["MongoDB Atlas", "MySQL", "SQLAlchemy"],
  "cloudDevOps": ["AWS EKS", "Docker", "Kubernetes", "Git/GitHub"]
}`
  },
  {
    id: 'pipeline',
    filename: 'deploy.sh',
    content: `#!/bin/bash
# Microservices CI/CD Deployment Flow
echo "🔨 Building React + Node containers..."
docker build -t cloudcart-api:latest .
docker push \${AWS_ACCOUNT_ID}.dkr.ecr.ap-south-1.amazonaws.com

echo "☸️ Deploying to AWS EKS Cluster..."
kubectl apply -f k8s/deployment.yaml
kubectl rollout status deployment/cloudcart-web
echo "🚀 Application live with 99.9% uptime!"`
  }
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeTabs[activeTab].content);
    setCopied(true);
    toast({
      type: 'copy',
      title: 'Copied to Clipboard',
      description: `${codeTabs[activeTab].filename} contents copied`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (!personalInfo.resumeUrl.startsWith('http') && !personalInfo.resumeUrl.startsWith('/')) {
      e.preventDefault();
      navigator.clipboard.writeText(personalInfo.email);
      toast({
        type: 'info',
        title: 'Resume Request',
        description: `Email ${personalInfo.email} copied! Drop a line for Dharshan's latest PDF resume.`,
      });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-44 md:pb-24 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-[350px] h-[350px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 tracking-wide shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for SDE Internships 2025–2026</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Role Rotator */}
            <div className="h-10 sm:h-12 flex items-center mb-4 overflow-hidden">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Sparkles size={22} className="text-primary shrink-0" />
                <span className="inline-block transition-all duration-500 transform font-mono">
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            {/* Description Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Engineering high-performance, modular web applications with <span className="font-semibold text-slate-900 dark:text-white">React.js</span>, <span className="font-semibold text-slate-900 dark:text-white">Node.js</span>, and <span className="font-semibold text-slate-900 dark:text-white">TypeScript</span>. Experienced in containerization and cloud deployments with <span className="font-semibold text-slate-900 dark:text-white">Docker, Kubernetes & AWS</span>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mb-9">
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-xl font-bold text-primary">3+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-xl font-bold text-purple-500">2x</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Hackathon Awards</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-xl font-bold text-indigo-500">12+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tech Skills</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-xl font-bold text-emerald-500">7.7</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">B.Tech CGPA</div>
              </div>
            </div>

            {/* CTAs & Socials */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#contact" 
                className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 px-5 py-3 rounded-xl font-medium transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span>Get In Touch</span>
              </a>

              <a 
                href={personalInfo.resumeUrl} 
                onClick={handleResumeClick}
                className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 hover:border-primary/50 text-slate-700 dark:text-slate-300 px-4 py-3 rounded-xl font-medium transition-colors"
                title="View Resume"
              >
                <FileText size={16} className="text-purple-500" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-1.5 ml-1">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a 
                  href={personalInfo.linkedin.includes('[') ? `mailto:${personalInfo.email}` : personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Code Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-slate-400 text-xs ml-2 font-mono flex items-center gap-1.5">
                    <Terminal size={12} className="text-slate-500" /> bash ~ dharshan
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-800 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex bg-slate-950/40 border-b border-slate-800/80 px-2 pt-2 gap-1 overflow-x-auto">
                {codeTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                      activeTab === idx
                        ? 'bg-slate-900 text-indigo-400 border-t-2 border-primary font-medium'
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/40'
                    }`}
                  >
                    <Code2 size={12} />
                    {tab.filename}
                  </button>
                ))}
              </div>

              {/* Code Display */}
              <div className="p-4 sm:p-5 text-slate-300 overflow-x-auto max-h-[340px] leading-relaxed select-text">
                <pre className="font-mono text-xs">
                  <code>{codeTabs[activeTab].content}</code>
                </pre>
              </div>

              {/* Terminal Bottom Status */}
              <div className="bg-slate-950/90 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  <span>ready for deployment</span>
                </div>
                <span className="text-slate-500">UTF-8 • TypeScript 5.8</span>
              </div>
            </div>

            {/* Floating Decorative Tags */}
            <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full shadow-lg text-xs font-medium text-slate-700 dark:text-slate-200 animate-float">
              <Cpu size={14} className="text-primary" />
              <span>Full-Stack & Cloud</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full shadow-lg text-xs font-medium text-slate-700 dark:text-slate-200 animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span>React 19 + TypeScript</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
