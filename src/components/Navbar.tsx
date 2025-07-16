import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Removed DevPortfolio text */}
        <a href="/Sandaruwan_Aththanayak.pdf" download className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition-colors mr-4">
          Download Resume
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'projects', 'experience', 'contact'].map(item => <li key={item}>
                <a href={`#${item}`} className="text-gray-300 hover:text-purple-500 capitalize font-medium transition-colors" onClick={e => {
              e.preventDefault();
              scrollToSection(item);
            }}>
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-gray-800 shadow-lg absolute top-full left-0 right-0 border-t border-gray-700">
          <ul className="flex flex-col p-4">
            {['about', 'projects', 'experience', 'contact'].map(item => <li key={item} className="py-2">
                <a href={`#${item}`} className="block text-gray-300 hover:text-purple-500 capitalize font-medium transition-colors" onClick={e => {
            e.preventDefault();
            scrollToSection(item);
          }}>
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>}
    </header>;
};