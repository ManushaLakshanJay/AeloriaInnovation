import React from "react";
import ParticlesBackground from "./ParticlesBackground";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <div className="inline-block mb-4 px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
            <span className="text-sm font-medium font-montserrat text-accent tracking-wide">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat leading-tight mb-6 tracking-tight">
            Redefining <span className="relative text-accent inline-block">
              The Future
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"></span>
            </span> With Technology
          </h1>
          
          <p className="text-lg md:text-xl text-textsecondary mb-8 max-w-lg font-light">
            We craft premium digital experiences that transform businesses through cutting-edge technology and elegant design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="glow-button bg-accent hover:bg-accentglow text-white font-montserrat font-medium py-3 px-8 rounded-lg transition-all duration-300 uppercase tracking-wider flex items-center justify-center">
              Start Your Project
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            
            <button className="border border-accent/20 bg-background hover:bg-accent/5 text-white font-montserrat font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <i className="fas fa-play-circle mr-2 text-accent"></i>
              Watch Showreel
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center">
          <div className="relative w-72 h-72 animate-float">
            {/* Background glow effect */}
            <div className="absolute -inset-4 rounded-full bg-accent/5 blur-2xl"></div>
            
            {/* Main orb */}
            <div className="absolute inset-0 rounded-full orb animate-spin-slow"></div>
            
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow" style={{animationDuration: '25s'}}></div>
            <div className="absolute inset-4 rounded-full border border-accent/15 animate-spin-slow" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            
            {/* Center element */}
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-36 h-36 relative bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/30">
                <div className="absolute inset-2 border-2 border-accent/20 rounded-full"></div>
                <div className="absolute inset-0 border border-accent/40 rounded-full animate-ping opacity-30"></div>
                <span className="font-montserrat text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-accent/80">A</span>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-5 right-5 w-5 h-5 rounded-full bg-accent/50 animate-pulse-slow"></div>
            <div className="absolute bottom-10 left-5 w-3 h-3 rounded-full bg-accent/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-accent/40 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Stats or credibility indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-accent/10 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold font-montserrat text-white">10+</div>
              <div className="text-xs text-textsecondary uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-montserrat text-white">200+</div>
              <div className="text-xs text-textsecondary uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-montserrat text-white">50+</div>
              <div className="text-xs text-textsecondary uppercase tracking-wider">Team Experts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-montserrat text-white">99%</div>
              <div className="text-xs text-textsecondary uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
