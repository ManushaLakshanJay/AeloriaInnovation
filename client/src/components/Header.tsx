import React, { useState, useEffect } from "react";
import { Link } from "wouter";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for background changes
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "services", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-background/90 backdrop-blur-lg shadow-lg border-b border-accent/10' 
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-slow"></span>
              <span className="absolute w-6 h-6 rounded-full bg-accent/30 blur-sm"></span>
              <span className="relative text-xl font-bold font-montserrat">A</span>
            </div>
            <span className="text-xl font-bold font-montserrat tracking-wider">AELORIA</span>
          </div>
          
          <nav className="hidden md:flex items-center">
            <div className="relative bg-card/50 backdrop-blur-sm px-1 py-1 rounded-full border border-accent/10 flex space-x-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`relative px-4 py-2 rounded-full font-montserrat text-sm transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-textsecondary hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-slow"></span>
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="ml-6 bg-accent hover:bg-accentglow text-white text-sm font-montserrat py-2 px-5 rounded-full transition-all duration-300 flex items-center"
            >
              Get Started
              <i className="fas fa-arrow-right ml-2 text-xs"></i>
            </a>
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-accent/20 bg-background/50 focus:outline-none" 
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-accent`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '76px' }}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col space-y-6">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`group flex items-center space-x-4 ${
                  activeSection === item.id ? 'text-accent' : 'text-textsecondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={`w-2 h-2 rounded-full ${
                  activeSection === item.id ? 'bg-accent' : 'bg-textsecondary/50 group-hover:bg-accent/50'
                } transition-colors`}></span>
                <span className="font-montserrat text-xl font-medium transition-colors group-hover:text-white">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          
          <div className="mt-12 pt-6 border-t border-accent/10">
            <a 
              href="#contact" 
              className="w-full block bg-accent hover:bg-accentglow text-white text-center font-montserrat py-3 px-6 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
