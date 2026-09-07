import { useState } from 'react';
import { Section } from './Section';
import { achievementsData, certificationsData } from '../data/portfolio';
import { Trophy, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useToast } from '../hooks/useToast';

export function Achievements() {
  const [filter, setFilter] = useState<'all' | 'achievements' | 'certifications'>('all');
  const { toast } = useToast();

  const handleCertClick = (certTitle: string, issuer: string) => {
    toast({
      type: 'info',
      title: certTitle,
      description: `Official credential issued by ${issuer}. Available on LinkedIn profile.`,
    });
  };

  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="max-w-3xl mb-8">
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          Competitive hackathon rankings, technical milestones, and verified industry credentials reflecting hands-on cloud and software engineering capabilities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            filter === 'all'
              ? 'bg-primary text-white shadow-md shadow-primary/25'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          All Recognitions ({achievementsData.length + certificationsData.length})
        </button>

        <button
          onClick={() => setFilter('achievements')}
          className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            filter === 'achievements'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Hackathons & Challenges ({achievementsData.length})
        </button>

        <button
          onClick={() => setFilter('certifications')}
          className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            filter === 'certifications'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Certifications ({certificationsData.length})
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Achievements Column */}
        {(filter === 'all' || filter === 'achievements') && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white mb-2">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                <Trophy size={18} />
              </div>
              <span>Hackathon & Contest Honours</span>
            </div>

            {achievementsData.map((achievement, idx) => (
              <div 
                key={achievement.id}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-amber-500/40 relative overflow-hidden transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 shrink-0">
                    <Trophy size={22} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-md">
                        {idx === 0 ? 'Runner Up' : 'Top Tier Finalist'}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Verified</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {achievement.title}
                    </h4>

                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-amber-500" />
                      {achievement.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Certifications Column */}
        {(filter === 'all' || filter === 'certifications') && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white mb-2">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Award size={18} />
              </div>
              <span>Verified Industry Certifications</span>
            </div>

            {certificationsData.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => handleCertClick(cert.title, cert.issuer)}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary/40 cursor-pointer relative overflow-hidden transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-xl text-primary shrink-0 transition-colors">
                    <ShieldCheck size={22} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-md">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-primary group-hover:underline flex items-center gap-1">
                        <CheckCircle2 size={12} /> Certified
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </Section>
  );
}
