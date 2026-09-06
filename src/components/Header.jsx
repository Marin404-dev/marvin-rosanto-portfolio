import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', nextMode);
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
    setIsDarkMode(nextMode);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_90%,transparent)] backdrop-blur-md">
      <div className="page-container flex min-h-20 items-center justify-between gap-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-[-0.08em]" aria-label="Marvin Rosanto home">
          MR
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              onClick={() => setActiveSection(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {isDarkMode ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          <span className="hidden sm:inline">Theme</span>
        </button>
      </div>

      <nav className="border-t border-[var(--line)] md:hidden" aria-label="Mobile navigation">
        <div className="page-container grid grid-cols-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-3 text-center font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${activeSection === link.href.slice(1) ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}
              aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              onClick={() => setActiveSection(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
