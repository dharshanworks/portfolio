import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Search, Command } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenCommandPalette: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ isDarkMode, toggleDarkMode, onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled 
          ? "glass-nav py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <span className="font-extrabold tracking-tight">
            <span className="text-gradient">DHARSHAN</span>
            <span className="text-primary-dark">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={cn(
                      "text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200",
                      isActive 
                        ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-indigo-300 font-semibold" 
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-5">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 transition-colors shadow-xs"
              title="Open Command Palette (Cmd + K)"
            >
              <Search size={13} className="text-slate-400" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                <Command size={10} /> K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            {/* View Projects CTA */}
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Explore Work
            </a>
          </div>
        </nav>

        {/* Mobile Nav Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl p-6 flex flex-col gap-3 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-primary/10 text-primary dark:text-indigo-300 font-semibold"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                  )}
                >
                  {link.name}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
              >
                <Search size={16} /> Open Quick Command Palette
              </button>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors text-center shadow-md shadow-primary/20"
              >
                Explore Projects
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
