import { useState, useMemo } from 'react';
import { Section } from './Section';
import { projectsData } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { Search, Sparkles, Filter, X } from 'lucide-react';

const categories = [
  "All",
  "Full-Stack & Cloud",
  "AI & Real-Time",
  "Systems & Java"
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Section id="projects" title="Featured Projects" className="relative">
      {/* Intro description */}
      <div className="max-w-3xl mb-10">
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          A showcase of full-stack engineering, cloud deployments, and AI integration. Each project is architected with modular patterns, clean database schemas, and modern development standards.
        </p>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider hidden sm:flex items-center gap-1 mr-1">
            <Filter size={12} /> Filter:
          </span>
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

        {/* Real-Time Search Box */}
        <div className="relative min-w-[240px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search tech, stack, or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center max-w-lg mx-auto">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            No projects found
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            No projects matched your search for "{searchQuery}". Try resetting filters or searching for "React", "Docker", or "Python".
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
