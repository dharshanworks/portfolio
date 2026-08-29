import { Section } from './Section';
import { achievementsData, certificationsData } from '../data/portfolio';
import { Trophy, Award } from 'lucide-react';

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Achievements Column */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <Trophy className="text-amber-500" />
            Achievements
          </h3>
          <div className="space-y-4">
            {achievementsData.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm flex items-start gap-4"
              >
                <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500 mt-1 shrink-0">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight">
                    {achievement.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    {achievement.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications Column */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <Award className="text-primary" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certificationsData.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm flex items-start gap-4"
              >
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1 shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
