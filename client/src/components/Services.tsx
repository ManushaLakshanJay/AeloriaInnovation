import React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import servicesPreviewImg from '../assets/services-preview.png';

const services = [
  {
    id: 1,
    icon: "circle-dot",
    iconColor: "#d10a30",
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
    iconColor: "#d10a30",
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
    iconColor: "#d10a30", 
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
        
        {/* Image Preview - We'll show this on larger screens, hidden on mobile */}
        <div className="hidden lg:block w-full mb-16">
          <img 
            src={servicesPreviewImg} 
            alt="Aeloria Services" 
            className="w-full h-auto object-cover rounded-lg shadow-xl shadow-accent/5 border border-accent/10"
          />
        </div>

        {/* Services Cards - Custom design matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card bg-black border border-accent/10 rounded-xl p-6 flex flex-col hover:border-accent/20 transition-all duration-500 group relative overflow-hidden"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            >
              {/* Icon */}
              <div className="mb-6">
                {service.id === 1 && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>
                )}
                {service.id === 2 && (
                  <div className="text-2xl text-accent">
                    <i className="fas fa-code"></i>
                  </div>
                )}
                {service.id === 3 && (
                  <div className="text-2xl text-accent">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="z-10">
                <h3 className="text-xl font-montserrat font-bold mb-4 text-white">{service.title}</h3>
                
                <p className="text-textsecondary mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
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
                className="mt-auto flex items-center text-accent hover:text-white font-montserrat text-sm relative group"
              >
                <span>Explore Service</span>
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
