import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { IndustryProject } from './components/IndustryProject';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { ToastProvider, Toast } from './components/Toast';
import { CommandPalette } from './components/CommandPalette';
import { ScrollProgress } from './components/ScrollProgress';

function PortfolioApp() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut for Command Palette (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 selection:bg-primary/30 selection:text-primary-dark relative">
      {/* Top Scroll Progress and Back-to-Top button */}
      <ScrollProgress />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Toast Notification Viewport */}
      <Toast />

      {/* Top Navigation Bar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />
      
      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <TechStrip />
        <About />
        <Experience />
        <IndustryProject />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <PortfolioApp />
    </ToastProvider>
  );
}

export default App;
