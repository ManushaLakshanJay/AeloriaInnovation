import React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    subtitle: "Predictive Analytics Platform",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "Analytics", "Dashboard"],
    description: "An advanced analytics platform with predictive capabilities for enterprise decision-making."
  },
  {
    id: 2,
    title: "Luxury E-commerce",
    subtitle: "Premium Shopping Experience",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["E-commerce", "Web Design", "Payment"],
    description: "A high-end e-commerce platform with immersive product experiences and seamless checkout."
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    subtitle: "Secure Banking Experience",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile", "FinTech", "Security"],
    description: "A secure, feature-rich mobile banking application with biometric authentication and real-time analytics."
  },
  {
    id: 4,
    title: "VR Training Platform",
    subtitle: "Immersive Learning Experience",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["VR", "Training", "Education"],
    description: "Virtual reality training solution for corporate and educational environments with real-time feedback."
  },
  {
    id: 5,
    title: "Smart Home System",
    subtitle: "IoT Control Platform",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Smart Home", "Mobile"],
    description: "Comprehensive IoT platform for smart home automation with voice control and energy optimization."
  },
  {
    id: 6,
    title: "Enterprise SaaS",
    subtitle: "Business Management Platform",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["SaaS", "Enterprise", "Cloud"],
    description: "Cloud-based business management solution with integrated workflows and advanced reporting."
  }
];

const Projects: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 relative z-10 section-animate ${inView ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
            <span className="text-sm font-medium font-montserrat text-accent tracking-wide">Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 tracking-tight">Featured <span className="text-accent">Projects</span></h2>
          <p className="text-textsecondary max-w-2xl mx-auto opacity-90">Discover our collection of innovative solutions that have transformed businesses across various industries.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-card/90 to-card border border-accent/10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
              {/* Background glow effect on hover */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Image container */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card opacity-100"></div>
                
                {/* Project type badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-white text-xs font-medium font-montserrat tracking-wide">
                    {project.tags[0]}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-grow z-10 relative">
                <h3 className="text-xl font-montserrat font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-textsecondary text-sm mb-4">{project.subtitle}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(1).map((tag, index) => (
                    <span key={index} className="text-xs bg-background border border-accent/10 text-textsecondary px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-textsecondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Action button */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-accent hover:text-accentglow font-montserrat text-sm tracking-wide transition-colors group-hover:font-medium"
                >
                  <span className="relative">
                    View Case Study
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </span>
                  <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
