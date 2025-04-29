import React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";

const services = [
  {
    id: 1,
    icon: "brain",
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence with custom machine learning models, natural language processing, and predictive analytics tailored to your business needs.",
    features: [
      "Custom ML Models",
      "Intelligent Automation",
      "Predictive Analytics"
    ]
  },
  {
    id: 2,
    icon: "code",
    title: "Website Development",
    description: "From stunning corporate websites to robust e-commerce platforms, we design and develop responsive, high-performance digital experiences that capture your brand essence.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Content Management"
    ]
  },
  {
    id: 3,
    icon: "mobile-alt",
    title: "App Development",
    description: "Create seamless mobile experiences with our custom application development services for iOS, Android, and cross-platform solutions that engage users and drive results.",
    features: [
      "Native iOS & Android",
      "Cross-platform Solutions",
      "App Maintenance & Support"
    ]
  }
];

const Services: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 bg-black relative z-10 section-animate ${inView ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
            <span className="text-sm font-medium font-montserrat text-accent tracking-wide">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 tracking-tight">Premium <span className="text-accent">Services</span></h2>
          <p className="text-textsecondary max-w-2xl mx-auto opacity-90">Experience our comprehensive suite of high-end technological solutions designed to elevate your business to new heights.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card bg-gradient-to-br from-card/80 to-card border border-accent/10 rounded-2xl p-6 flex flex-col hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 group relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Icon */}
              <div className="relative bg-gradient-to-br from-background to-card w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-accent/10 group-hover:border-accent/30 transition-colors">
                <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <i className={`fas fa-${service.icon} text-accent text-xl relative`}></i>
              </div>
              
              {/* Content */}
              <div className="z-10">
                <h3 className="text-xl font-montserrat font-semibold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                
                <p className="text-textsecondary mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 flex items-center">
                        <i className="fas fa-check text-accent mr-2 text-xs"></i>
                      </span>
                      <span className="text-sm text-textsecondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Footer */}
              <a 
                href="#contact" 
                className="mt-auto py-3 px-5 border border-accent/20 rounded-lg bg-background/40 hover:bg-accent hover:text-white text-accent text-center font-montserrat text-sm tracking-wide transition-all flex items-center justify-center group-hover:shadow-md group-hover:shadow-accent/10">
                Explore Service
                <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
