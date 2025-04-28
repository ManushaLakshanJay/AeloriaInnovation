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
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Premium Services</h2>
          <p className="text-textsecondary max-w-2xl mx-auto">Experience our comprehensive suite of high-end technological solutions designed to elevate your business to new heights.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card bg-background/60 border border-accent/20 rounded-xl p-8 flex flex-col items-center text-center hover:border-accent/50">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <i className={`fas fa-${service.icon} text-accent text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-montserrat font-semibold mb-4">{service.title}</h3>
              
              <p className="text-textsecondary mb-6">
                {service.description}
              </p>
              
              <ul className="text-left w-full space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    <span className="text-sm text-textsecondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="mt-auto text-accent hover:text-accentglow font-montserrat uppercase text-sm tracking-wider transition-colors flex items-center">
                Learn More
                <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
