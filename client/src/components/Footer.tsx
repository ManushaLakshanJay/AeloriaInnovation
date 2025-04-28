import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-8 h-8 rounded-full bg-accent animate-pulse-slow"></span>
              <span className="text-2xl font-bold font-montserrat tracking-wider">AELORIA</span>
            </div>
            <p className="text-textsecondary mb-6">
              Pioneering the future through innovative technology solutions that transform businesses and enhance human experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-textsecondary hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-textsecondary hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-textsecondary hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="text-textsecondary hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-textsecondary hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-textsecondary hover:text-accent transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="text-textsecondary hover:text-accent transition-colors">Website Development</a></li>
              <li><a href="#services" className="text-textsecondary hover:text-accent transition-colors">App Development</a></li>
              <li><a href="#services" className="text-textsecondary hover:text-accent transition-colors">UX/UI Design</a></li>
              <li><a href="#services" className="text-textsecondary hover:text-accent transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-6">Newsletter</h4>
            <p className="text-textsecondary mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 bg-black/50 border border-accent/30 rounded-l-md focus:outline-none focus:border-accent transition-colors text-white"
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accentglow px-4 py-2 text-white rounded-r-md transition-colors"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textsecondary text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aeloria Technologies. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-textsecondary hover:text-accent transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-textsecondary hover:text-accent transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-textsecondary hover:text-accent transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-textsecondary hover:text-accent transition-colors">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
