import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 overflow-hidden border-t border-accent/10">
      {/* Top curved divider */}
      <div className="relative">
        <div className="absolute inset-0 bg-accent/5"></div>
        <svg className="relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="rgba(209, 10, 48, 0.05)" 
            d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,176C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      {/* Footer background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-40"></div>
      
      {/* Main footer content */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            {/* Company info */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-slow"></span>
                  <span className="absolute w-6 h-6 rounded-full bg-accent/30 blur-sm"></span>
                </div>
                <span className="text-2xl font-bold font-montserrat tracking-wider">AELORIA</span>
              </div>
              
              <p className="text-textsecondary mb-8 max-w-md">
                Pioneering the future through innovative technology solutions that transform businesses and enhance human experiences in an ever-evolving digital landscape.
              </p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="w-10 h-10 rounded-lg border border-accent/20 bg-background flex items-center justify-center transition-all hover:bg-accent hover:text-white hover:border-accent group">
                  <i className="fab fa-linkedin-in text-accent group-hover:text-white transition-colors"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg border border-accent/20 bg-background flex items-center justify-center transition-all hover:bg-accent hover:text-white hover:border-accent group">
                  <i className="fab fa-twitter text-accent group-hover:text-white transition-colors"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg border border-accent/20 bg-background flex items-center justify-center transition-all hover:bg-accent hover:text-white hover:border-accent group">
                  <i className="fab fa-instagram text-accent group-hover:text-white transition-colors"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg border border-accent/20 bg-background flex items-center justify-center transition-all hover:bg-accent hover:text-white hover:border-accent group">
                  <i className="fab fa-github text-accent group-hover:text-white transition-colors"></i>
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#" className="text-xs text-textsecondary hover:text-white transition-colors">Privacy Policy</a>
                <span className="w-1 h-1 bg-accent/50 rounded-full"></span>
                <a href="#" className="text-xs text-textsecondary hover:text-white transition-colors">Terms of Service</a>
                <span className="w-1 h-1 bg-accent/50 rounded-full"></span>
                <a href="#" className="text-xs text-textsecondary hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
            
            {/* Quick links and services */}
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="font-montserrat font-semibold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent/30"></span>
              </h4>
              <ul className="space-y-3 mb-8">
                {["Home", "About Us", "Services", "Projects", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-textsecondary hover:text-accent transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-montserrat font-semibold mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent/30"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  "AI Solutions", 
                  "Website Development", 
                  "App Development", 
                  "UX/UI Design", 
                  "Digital Transformation"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-textsecondary hover:text-accent transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter and contact info */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="font-montserrat font-semibold mb-6 relative inline-block">
                Newsletter
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent/30"></span>
              </h4>
              <p className="text-textsecondary mb-6">Subscribe to our newsletter for the latest updates and insights on technology and innovation.</p>
              
              <form className="mb-10">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 pl-10 bg-background border border-accent/20 rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white pr-12"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-accent/50"></i>
                  </div>
                  <button 
                    type="submit" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accentglow w-8 h-8 rounded-lg text-white flex items-center justify-center transition-colors"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <p className="text-xs text-textsecondary mt-2">We respect your privacy. Unsubscribe at any time.</p>
              </form>
              
              <h4 className="font-montserrat font-semibold mb-4 relative inline-block">
                Contact Info
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent/30"></span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                    <i className="fas fa-envelope text-accent text-xs"></i>
                  </div>
                  <span className="text-textsecondary">contact@aeloria-tech.com</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                    <i className="fas fa-phone-alt text-accent text-xs"></i>
                  </div>
                  <span className="text-textsecondary">+1 (415) 555-8765</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-accent/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-textsecondary text-sm mb-4 md:mb-0 opacity-75">
              &copy; {currentYear} Aeloria Technologies. All rights reserved.
            </p>
            
            <div className="text-sm text-textsecondary opacity-75">
              Designed with <span className="text-accent">♥</span> for innovation and excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
