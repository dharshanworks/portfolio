import { useState } from 'react';
import { Section } from './Section';
import { personalInfo } from '../data/portfolio';
import { Mail, MapPin, Phone, Copy, Check, Send, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useToast } from '../hooks/useToast';

const messageTemplates = [
  {
    label: "👋 SDE Internship",
    subject: "Software Development Engineer Internship Inquiry",
    body: "Hi Dharshan,\n\nI reviewed your portfolio and would like to discuss an SDE Internship opportunity with our team..."
  },
  {
    label: "🚀 Collaboration",
    subject: "Full-Stack Project Collaboration",
    body: "Hi Dharshan,\n\nI came across your work on CloudCart and AI Copilot and would love to collaborate on a project..."
  },
  {
    label: "💼 General Chat",
    subject: "Connecting with Dharshan R",
    body: "Hi Dharshan,\n\nWanted to connect regarding your engineering work and experience..."
  }
];

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState(messageTemplates[0].subject);
  const [message, setMessage] = useState(messageTemplates[0].body);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    toast({
      type: 'copy',
      title: 'Email Copied!',
      description: personalInfo.email,
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    toast({
      type: 'copy',
      title: 'Phone Number Copied!',
      description: personalInfo.phone,
    });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleTemplateSelect = (tmpl: typeof messageTemplates[0]) => {
    setSubject(tmpl.subject);
    setMessage(tmpl.body);
    toast({
      type: 'info',
      title: 'Template Applied',
      description: tmpl.label,
    });
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${senderName || 'Anonymous'}\n\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    toast({
      type: 'success',
      title: 'Opening Email Client',
      description: `Draft prepared for ${personalInfo.email}`,
    });
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Currently seeking a <span className="font-semibold text-slate-900 dark:text-white">Software Development Engineer (SDE) Internship</span>. Whether you have an opportunity, a technical question, or an innovative idea, my inbox is always open!
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
        
        {/* Left Info & Quick Copy Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Card */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Direct Email</span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {personalInfo.email}
                  </h4>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-primary rounded-lg bg-slate-50 dark:bg-slate-800 transition-colors"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              Compose in Default Mailer <ExternalLink size={12} />
            </a>
          </div>

          {/* Phone Quick Card */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Phone & WhatsApp</span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.phone}
                  </h4>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 text-slate-400 hover:text-emerald-500 rounded-lg bg-slate-50 dark:bg-slate-800 transition-colors"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Available Monday – Saturday IST</span>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium">Current Base</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.location}
              </h4>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            
            <a 
              href={personalInfo.linkedin.includes('[') ? `mailto:${personalInfo.email}` : personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href={personalInfo.leetcode.includes('[') ? personalInfo.github : personalInfo.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              <ExternalLink size={14} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right Interactive Quick Message Composer (7 cols) */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-primary" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Quick Message Composer
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Direct Mailto Link</span>
          </div>

          {/* Preset Buttons */}
          <div className="mb-4">
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
              Select a message template:
            </span>
            <div className="flex flex-wrap gap-2">
              {messageTemplates.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => handleTemplateSelect(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    subject === t.subject
                      ? 'bg-primary/10 text-primary border border-primary/30 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendMail} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Name or Company
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g., Jane Doe, Recruiter @ TechCorp"
                className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Message Body
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary text-slate-900 dark:text-white leading-relaxed font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-xl font-medium text-sm transition-all shadow-md shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <Send size={15} />
              <span>Launch in Email App</span>
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
}
