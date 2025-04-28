import React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 relative z-10 section-animate ${inView ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Futuristic Technology" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover" 
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 relative">
              <span className="absolute -left-4 top-0 text-accent opacity-40 text-7xl font-light">A</span>
              Our Story
            </h2>
            
            <p className="text-textsecondary mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between imagination and innovation, Aeloria Technologies stands at the forefront of the digital revolution. We're not just building technology; we're crafting the future.
            </p>
            
            <p className="text-textsecondary mb-8 leading-relaxed">
              Our team of visionaries and technologists brings together decades of combined experience in artificial intelligence, software engineering, and creative design to deliver solutions that transcend ordinary expectations.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-montserrat font-semibold text-lg">Our Mission</h3>
                <p className="text-textsecondary">To redefine what's possible through innovative technology that empowers businesses.</p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-montserrat font-semibold text-lg">Our Vision</h3>
                <p className="text-textsecondary">A world where technology enhances human potential without limitations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
