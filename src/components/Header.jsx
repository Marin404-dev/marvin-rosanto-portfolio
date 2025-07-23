import { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-[3px] px-8 py-4 md:px-16 md:py-6">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Centered Nav (Desktop only) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition">
          <Sun size={20} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden mt-2 flex flex-col space-y-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-500 transition" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className="hover:text-blue-500 transition" onClick={toggleMobileMenu}>About</a>
          <a href="#contact" className="hover:text-blue-500 transition" onClick={toggleMobileMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
}