import React, { useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";
import TextReveal from "./TextReveal";
import ParallaxMouseEffect from "./ParallaxMouseEffect";
import PageTransition from "./PageTransition";
import AnimatedButton from "./AnimatedButton";
import Floating3DElement from "./Floating3DElement";

const Hero: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOrbActive, setIsOrbActive] = useState(false);
  const [pulseSize, setPulseSize] = useState(20); // Initial size of center orb
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [showPointerEffect, setShowPointerEffect] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  // Handle orb interaction with pointer position
  const handleOrbInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isOrbActive) {
      setIsOrbActive(true);
      // Pulse the orb size
      setPulseSize(28); // Increase size
      
      // Get pointer position relative to the target
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      // Calculate relative position
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Set position for the effect
      setPointerPosition({ x, y });
      setShowPointerEffect(true);
      
      // Reset after animation completes
      setTimeout(() => {
        setIsOrbActive(false);
        setPulseSize(20); // Return to original size
        // Hide the pointer effect with a small delay
        setTimeout(() => {
          setShowPointerEffect(false);
        }, 300);
      }, 800);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
      // Hide scroll hint when user scrolls down (after 100px of scrolling)
      if (currentPosition > 100 && showScrollHint) {
        setShowScrollHint(false);
      } else if (currentPosition <= 50 && !showScrollHint) {
        // Show it again when back at the top
        setShowScrollHint(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollHint]);

  // Parallax effect based on scroll position
  const getParallaxStyle = (factor: number) => ({
    transform: `translateY(${scrollPosition * factor}px)`
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-16 md:pt-24 md:pb-0"
    >
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent z-10"></div>
      
      {/* Floating elements - hide on small screens */}
      <div className="hidden sm:block absolute top-1/3 left-[10%] w-6 h-6 md:w-8 md:h-8 rounded-full border border-accent/20 animate-float z-20" style={{animationDelay: '0.5s'}}></div>
      <div className="hidden sm:block absolute top-2/3 right-[15%] w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/10 animate-float z-20" style={{animationDelay: '1.2s'}}></div>
      <div className="hidden sm:block absolute bottom-1/4 left-[25%] w-8 h-8 md:w-10 md:h-10 rounded-full border border-accent/30 animate-float z-20" style={{animationDelay: '0.8s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12" style={getParallaxStyle(-0.05)}>
          <div className="inline-flex mb-4 px-4 py-1 border border-accent/30 rounded-full bg-accent/5 items-center">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse-slow"></span>
            <span className="text-sm font-medium font-montserrat text-accent tracking-wide">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat leading-tight mb-6 tracking-tight">
            <span className="block mb-1">Redefining</span>
            <span className="relative text-accent inline-block">
              The Future
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4 Q 50 7, 100 4 T 200 4" stroke="rgba(209, 10, 48, 0.5)" fill="none" strokeWidth="2"/>
              </svg>
            </span> 
            <span className="block mt-1">With Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-textsecondary mb-8 max-w-lg font-light">
            We craft premium digital experiences that transform businesses through cutting-edge technology and elegant design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="#contact"
              className="group glow-button bg-accent hover:bg-accentglow text-white font-montserrat font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-accent/10"
            >
              <span className="mr-2">Start Your Project</span>
              <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
            
            <button className="group border border-accent/20 bg-background hover:bg-accent/5 text-white font-montserrat font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden relative">
              <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              <i className="fas fa-play-circle mr-2 text-accent relative z-10"></i>
              <span className="relative z-10">Watch Showreel</span>
            </button>
          </div>
          
          {/* Featured clients logos */}
          <div className="hidden md:block">
            <p className="text-textsecondary text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-70">
              <div className="text-white/50 text-xl font-bold">GOOGLE</div>
              <div className="text-white/50 text-xl font-bold">MICROSOFT</div>
              <div className="text-white/50 text-xl font-bold">AMAZON</div>
              <div className="text-white/50 text-xl font-bold">TESLA</div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 sm:mt-16 lg:mt-0 flex justify-center items-center" style={getParallaxStyle(0.05)}>
          <div 
            className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 animate-float cursor-pointer"
            onClick={handleOrbInteraction}
            onTouchStart={handleOrbInteraction}
            role="button"
            aria-label="Interactive Orb"
            tabIndex={0}
          >
            {/* Interactive pointer effect - appears at click/touch position */}
            {showPointerEffect && (
              <div 
                className="absolute pointer-events-none z-50"
                style={{
                  left: `${pointerPosition.x}px`,
                  top: `${pointerPosition.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Ripple effect */}
                <div className="w-16 h-16 rounded-full border-2 border-accent/40 absolute pointer-ripple" style={{top: '-8px', left: '-8px'}}></div>
                
                {/* Glow effect */}
                <div className="w-12 h-12 rounded-full bg-accent/10 absolute" style={{
                  top: '-6px', 
                  left: '-6px',
                  animation: 'pointer-fade 1s ease-out forwards'
                }}></div>
                
                {/* Core of the pointer effect */}
                <div className="w-6 h-6 rounded-full bg-accent/40 absolute" style={{
                  top: '-3px', 
                  left: '-3px',
                  animation: 'pointer-fade 0.8s ease-out forwards',
                  animationDelay: '0.1s'
                }}></div>
                
                {/* Bright center */}
                <div className="w-3 h-3 rounded-full bg-accent/80 absolute" style={{
                  top: '-1.5px', 
                  left: '-1.5px',
                  animation: 'pointer-fade 0.6s ease-out forwards',
                  animationDelay: '0.2s'
                }}></div>
              </div>
            )}
            {/* Background glow effect */}
            <div className={`absolute -inset-4 rounded-full bg-accent/5 blur-2xl transition-opacity duration-300 ${isOrbActive ? 'opacity-100' : 'opacity-60'}`}></div>
            
            {/* Main orb */}
            <div className={`absolute inset-0 rounded-full orb animate-spin-slow ${isOrbActive ? 'opacity-100 orb-pulse' : 'opacity-80'}`}></div>
            
            {/* Orbit rings */}
            <div className={`absolute inset-0 rounded-full border border-accent/20 animate-spin-slow transition-transform duration-500 ${isOrbActive ? 'scale-110' : 'scale-100'}`} style={{animationDuration: '25s'}}></div>
            <div className={`absolute inset-4 rounded-full border border-accent/15 animate-spin-slow transition-transform duration-500 ${isOrbActive ? 'scale-105' : 'scale-100'}`} style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            
            {/* Center element */}
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className={`w-36 h-36 md:w-44 md:h-44 relative bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30 shadow-lg shadow-accent/10 transition-all duration-300 ${isOrbActive ? 'border-accent/60 shadow-accent/30' : ''}`}>
                <div className={`absolute inset-2 border-2 border-accent/20 rounded-full transition-all duration-300 ${isOrbActive ? 'border-accent/40' : ''}`}></div>
                <div className={`absolute inset-0 border border-accent/40 rounded-full animate-ping opacity-30 ${isOrbActive ? 'opacity-60' : ''}`}></div>
                <div 
                  className="rounded-full bg-accent/20 animate-pulse-slow transition-all duration-300" 
                  style={{ 
                    width: isOrbActive ? `${pulseSize + 8}px` : `${pulseSize}px`, 
                    height: isOrbActive ? `${pulseSize + 8}px` : `${pulseSize}px`,
                    boxShadow: isOrbActive ? '0 0 20px 5px rgba(209, 10, 48, 0.3)' : 'none'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Floating particles - particles grow and glow when activated */}
            <div className={`absolute top-5 right-5 w-5 h-5 rounded-full bg-accent/50 animate-pulse-slow transition-all duration-300 ${isOrbActive ? 'w-6 h-6 bg-accent/70' : ''}`}></div>
            <div className={`absolute bottom-10 left-5 w-3 h-3 rounded-full bg-accent/30 animate-pulse-slow transition-all duration-300 ${isOrbActive ? 'w-4 h-4 bg-accent/50' : ''}`} style={{animationDelay: '1s'}}></div>
            <div className={`absolute top-1/2 left-0 w-4 h-4 rounded-full bg-accent/40 animate-pulse-slow transition-all duration-300 ${isOrbActive ? 'w-5 h-5 bg-accent/60' : ''}`} style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Stats or credibility indicators - adjust for mobile */}
      <div className="hidden sm:block absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-accent/10 pt-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-montserrat text-white flex items-center justify-center">
                10<span className="text-accent text-sm">+</span>
              </div>
              <div className="text-[10px] sm:text-xs text-textsecondary uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-montserrat text-white flex items-center justify-center">
                250<span className="text-accent text-sm">+</span>
              </div>
              <div className="text-[10px] sm:text-xs text-textsecondary uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-montserrat text-white flex items-center justify-center">
                50<span className="text-accent text-sm">+</span>
              </div>
              <div className="text-[10px] sm:text-xs text-textsecondary uppercase tracking-wider">Team Experts</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-montserrat text-white flex items-center justify-center">
                99<span className="text-accent text-sm">%</span>
              </div>
              <div className="text-[10px] sm:text-xs text-textsecondary uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to explore hint - conditionally shown based on scroll position */}
      {showScrollHint && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center z-30 pointer-events-none">
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
            <div className="text-xs text-textsecondary/80 mb-2 font-montserrat tracking-wider uppercase" style={{animation: 'fadeInOut 2s ease-in-out infinite'}}>
              Scroll to Explore
            </div>
            <div className="relative w-5 h-8 border border-accent/40 rounded-full flex justify-center mb-1 overflow-hidden">
              {/* Animated dot */}
              <div 
                className="w-1.5 h-1.5 bg-accent rounded-full absolute top-1.5"
                style={{animation: 'scrollDown 2s ease-in-out infinite'}}
              />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-accent/5 rounded-full blur-sm" style={{animation: 'fadeInOut 3s ease-in-out infinite', animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Arrow indicators */}
            <div className="flex flex-col items-center -mt-0.5">
              <i className="fas fa-chevron-down text-[8px] text-accent/60" style={{animation: 'scrollDown 2s ease-in-out infinite', animationDelay: '0.3s'}}></i>
              <i className="fas fa-chevron-down text-[6px] text-accent/40 -mt-1" style={{animation: 'scrollDown 2s ease-in-out infinite', animationDelay: '0.4s'}}></i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
