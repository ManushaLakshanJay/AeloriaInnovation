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
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Featured Projects</h2>
          <p className="text-textsecondary max-w-2xl mx-auto">Discover our portfolio of innovative solutions that have transformed businesses across industries.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card rounded-xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <h3 className="text-lg font-montserrat font-semibold">{project.title}</h3>
                    <p className="text-textsecondary text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-background border-t border-accent/20">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <p className="text-textsecondary text-sm mb-4">
                  {project.description}
                </p>
                <a href="#" className="text-accent hover:text-accentglow font-montserrat uppercase text-xs tracking-wider transition-colors flex items-center">
                  View Case Study
                  <i className="fas fa-arrow-right ml-2 text-xs"></i>
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
