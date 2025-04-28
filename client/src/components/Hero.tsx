import React from "react";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6">
            Redefining The Future With 
            <span className="text-accent"> Advanced AI</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-textsecondary mb-8 max-w-lg">
            We craft premium digital experiences that transform businesses through cutting-edge technology and elegant design.
          </p>
          <button className="glow-button bg-accent hover:bg-accentglow text-white font-montserrat font-medium py-3 px-8 rounded-md transition-all duration-300 uppercase tracking-wider flex items-center">
            Let's Build The Future
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
          <div className="relative w-64 h-64 animate-float">
            <div className="absolute inset-0 rounded-full orb animate-spin-slow"></div>
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-2 border-4 border-accent/30 rounded-full"></div>
                <div className="absolute inset-0 border border-accent rounded-full animate-ping"></div>
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold">
                  <span className="font-montserrat">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
