import { useState, useMemo } from 'react';
import { Section } from './Section';
import { skillsData, projectsData } from '../data/portfolio';
import { Search, Code2, Database, Cloud, Terminal, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages": <Code2 className="w-4 h-4 text-blue-500" />,
  "Frontend": <Terminal className="w-4 h-4 text-cyan-500" />,
  "Backend": <Cpu className="w-4 h-4 text-emerald-500" />,
  "Databases": <Database className="w-4 h-4 text-amber-500" />,
  "Cloud & DevOps": <Cloud className="w-4 h-4 text-purple-500" />,
  "Engineering Practices": <CheckCircle2 className="w-4 h-4 text-indigo-500" />,
  "CS Fundamentals": <Code2 className="w-4 h-4 text-rose-500" />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { toast } = useToast();

  const categories = useMemo(() => ["All", ...skillsData.map((c) => c.title)], []);

  const filteredCategories = useMemo(() => {
    return skillsData
      .filter((cat) => activeCategory === "All" || cat.title === activeCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        return {
          ...cat,
          skills: cat.skills.filter((s) => s.toLowerCase().includes(q)),
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  // Find projects using the selected skill
  const relatedProjects = useMemo(() => {
    if (!selectedSkill) return [];
    return projectsData.filter((p) =>
      p.technologies.some((t) => t.toLowerCase() === selectedSkill.toLowerCase() || t.toLowerCase().includes(selectedSkill.toLowerCase()))
    );
  }, [selectedSkill]);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
    const related = projectsData.filter((p) =>
      p.technologies.some((t) => t.toLowerCase() === skill.toLowerCase() || t.toLowerCase().includes(skill.toLowerCase()))
    );
    if (related.length > 0) {
      toast({
        type: 'info',
        title: `${skill}`,
        description: `Implemented in: ${related.map((p) => p.title).join(', ')}`,
      });
    }
  };

  return (
    <Section id="skills" title="Technical Skills" className="bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-3xl mb-10">
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          Technologies and tools I work with daily across full-stack engineering, cloud infrastructure, database architecture, and computer science fundamentals.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search skills (e.g., Docker, SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200"
          />
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCategories.map((category) => (
          <div 
            key={category.title}
            className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-primary" />}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <span className="ml-auto text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                {category.skills.length}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                        : "bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-primary/40"
                    }`}
                    title={`Click to view projects using ${skill}`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Cross-link banner if a skill was selected */}
      {selectedSkill && relatedProjects.length > 0 && (
        <div className="mt-8 p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200">
            <span className="font-bold text-primary">{selectedSkill}</span> is actively utilized in:
            <span className="font-semibold text-slate-900 dark:text-white">
              {relatedProjects.map((p) => p.title).join(", ")}
            </span>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-1 shrink-0"
          >
            Inspect in Projects <ArrowRight size={13} />
          </a>
        </div>
      )}
    </Section>
  );
}
