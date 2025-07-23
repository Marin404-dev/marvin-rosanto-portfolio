import { useState, useEffect } from 'react';
import { Sun, Moon, Home, Info, Mail } from 'lucide-react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 w-full bg-transparent backdrop-blur-[3px] px-16 py-6">
        <div className="flex items-center justify-between">
          <div></div>
          <nav className="flex flex-1 justify-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-400 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl px-6 py-3 
      flex justify-between w-[90%] max-w-sm text-gray-900 dark:text-white shadow-lg">
        <a href="#home" className="flex flex-col items-center text-xs hover:text-blue-400 transition">
          <Home size={20} />
          Home
        </a>
        <a href="#about" className="flex flex-col items-center text-xs hover:text-blue-400 transition">
          <Info size={20} />
          About
        </a>
        <a href="#contact" className="flex flex-col items-center text-xs hover:text-blue-400 transition">
          <Mail size={20} />
          Contact
        </a>
        <button
          onClick={toggleDarkMode}
          className="flex flex-col items-center text-xs hover:text-yellow-400 transition"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          Theme
        </button>
      </nav>
    </>
  );
}