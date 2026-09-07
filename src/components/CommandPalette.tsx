import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Search, Command, ArrowRight, ExternalLink, Copy, Moon, Sun, Laptop, FileText, Code2, Briefcase, Award } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolio';
import { useToast } from '../hooks/useToast';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'Social';
  subtitle?: string;
  icon: React.ReactNode;
  perform: () => void;
}

function CommandPaletteDialog({
  onClose,
  isDarkMode,
  toggleDarkMode,
}: {
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      type: 'copy',
      title: `${label} Copied`,
      description: text,
    });
    onClose();
  }, [toast, onClose]);

  const navigateTo = useCallback((selector: string) => {
    onClose();
    const elem = document.querySelector(selector);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onClose]);

  const items: PaletteItem[] = useMemo(() => {
    const list: PaletteItem[] = [
      // Navigation
      {
        id: 'nav-home',
        title: 'Go to Home / Hero',
        category: 'Navigation',
        subtitle: 'Dharshan R Portfolio Overview',
        icon: <Laptop className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#home'),
      },
      {
        id: 'nav-about',
        title: 'Go to About Me',
        category: 'Navigation',
        subtitle: 'Education, Background & Bio',
        icon: <ArrowRight className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#about'),
      },
      {
        id: 'nav-exp',
        title: 'Go to Experience',
        category: 'Navigation',
        subtitle: 'Internship at Cognifyz & History',
        icon: <Briefcase className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#experience'),
      },
      {
        id: 'nav-industry',
        title: 'Go to Industry Collaboration',
        category: 'Navigation',
        subtitle: 'CareSoft Telecentric Project',
        icon: <Briefcase className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#industry-project'),
      },
      {
        id: 'nav-projects',
        title: 'Go to Projects',
        category: 'Navigation',
        subtitle: 'CloudCart, AI Copilot, HMS',
        icon: <Code2 className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#projects'),
      },
      {
        id: 'nav-skills',
        title: 'Go to Skills',
        category: 'Navigation',
        subtitle: 'Frontend, Backend, DevOps, DBs',
        icon: <Code2 className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#skills'),
      },
      {
        id: 'nav-achievements',
        title: 'Go to Achievements & Certifications',
        category: 'Navigation',
        subtitle: 'Hackathons, AWS, TCS iON',
        icon: <Award className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#achievements'),
      },
      {
        id: 'nav-contact',
        title: 'Go to Contact',
        category: 'Navigation',
        subtitle: 'Email, Phone & Inquiry form',
        icon: <ArrowRight className="w-4 h-4 text-primary" />,
        perform: () => navigateTo('#contact'),
      },

      // Actions
      {
        id: 'act-copy-email',
        title: 'Copy Email Address',
        category: 'Actions',
        subtitle: personalInfo.email,
        icon: <Copy className="w-4 h-4 text-emerald-500" />,
        perform: () => copyToClipboard(personalInfo.email, 'Email'),
      },
      {
        id: 'act-copy-phone',
        title: 'Copy Phone Number',
        category: 'Actions',
        subtitle: personalInfo.phone,
        icon: <Copy className="w-4 h-4 text-emerald-500" />,
        perform: () => copyToClipboard(personalInfo.phone, 'Phone Number'),
      },
      {
        id: 'act-toggle-theme',
        title: `Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`,
        category: 'Actions',
        subtitle: 'Toggle website color scheme',
        icon: isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />,
        perform: () => {
          toggleDarkMode();
          toast({
            type: 'info',
            title: `Theme Changed`,
            description: `Switched to ${isDarkMode ? 'Light' : 'Dark'} mode`,
          });
          onClose();
        },
      },
      {
        id: 'act-resume',
        title: 'View / Download Resume',
        category: 'Actions',
        subtitle: 'Full-Stack Developer Resume',
        icon: <FileText className="w-4 h-4 text-purple-500" />,
        perform: () => {
          onClose();
          if (personalInfo.resumeUrl.startsWith('http') || personalInfo.resumeUrl.startsWith('/')) {
            window.open(personalInfo.resumeUrl, '_blank');
          } else {
            toast({
              type: 'info',
              title: 'Resume Request',
              description: 'Resume available via email: ' + personalInfo.email,
            });
          }
        },
      },

      // Social Links
      {
        id: 'social-github',
        title: 'Open GitHub Profile',
        category: 'Social',
        subtitle: personalInfo.github,
        icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
        perform: () => {
          window.open(personalInfo.github, '_blank');
          onClose();
        },
      },
      {
        id: 'social-linkedin',
        title: 'Open LinkedIn Profile',
        category: 'Social',
        subtitle: 'Professional network',
        icon: <ExternalLink className="w-4 h-4 text-blue-500" />,
        perform: () => {
          if (!personalInfo.linkedin.includes('[')) {
            window.open(personalInfo.linkedin, '_blank');
          } else {
            toast({
              type: 'info',
              title: 'LinkedIn',
              description: 'Profile link configured upon request',
            });
          }
          onClose();
        },
      },
    ];

    // Add projects to the palette
    projectsData.forEach((p) => {
      list.push({
        id: `project-${p.id}`,
        title: `View Project: ${p.title}`,
        category: 'Projects',
        subtitle: `${p.subtitle} • ${p.technologies.slice(0, 3).join(', ')}`,
        icon: <Code2 className="w-4 h-4 text-indigo-400" />,
        perform: () => navigateTo('#projects'),
      });
    });

    return list;
  }, [isDarkMode, toggleDarkMode, toast, onClose, copyToClipboard, navigateTo]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(lower)) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [items, query]);

  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].perform();
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-slate-100 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, section, or search term..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
            className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              No matching commands or sections found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                    isSelected
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <p className="font-medium truncate">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-xs text-slate-400 dark:text-slate-500 truncate">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">↵</kbd> Select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Command size={12} /> Palette
          </span>
        </div>
      </div>
    </div>
  );
}

export function CommandPalette({ isOpen, onClose, isDarkMode, toggleDarkMode }: CommandPaletteProps) {
  if (!isOpen) return null;

  return (
    <CommandPaletteDialog
      onClose={onClose}
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
}
