import React, { useState, useEffect } from "react";
import { Link } from "wouter";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-lg' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-accent animate-pulse-slow"></span>
            <span className="text-2xl font-bold font-montserrat tracking-wider">AELORIA</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">Home</a>
            <a href="#about" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">About</a>
            <a href="#services" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">Services</a>
            <a href="#projects" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">Contact</a>
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none" 
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <div className={`md:hidden transition-all duration-300 mt-4 bg-background/95 rounded-lg p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#projects" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="navlink font-montserrat text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
