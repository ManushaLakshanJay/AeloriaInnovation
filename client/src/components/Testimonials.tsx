import React, { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVision Inc.",
    quote: "The AI solution developed by Aeloria has transformed our data analysis capabilities. We've seen a 40% increase in predictive accuracy and significant time savings across our operations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, EcoSmart Solutions",
    quote: "Aeloria delivered our mobile application ahead of schedule and exceeded our expectations in terms of design and functionality. Their attention to detail is unmatched.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, LuxBrands",
    quote: "Our e-commerce website redesign by Aeloria resulted in a 65% increase in conversion rates and significantly improved customer engagement. They truly understand luxury digital experiences.",
    rating: 4.5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Founder, FutureFin",
    quote: "Working with Aeloria on our financial technology platform was a game-changer. Their team's expertise in security and user experience design set a new standard for our industry.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const [position, setPosition] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };
  
  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);
  
  const nextSlide = () => {
    if (position < testimonials.length - slidesToShow) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };
  
  const prevSlide = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(testimonials.length - slidesToShow);
    }
  };
  
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = 100 / slidesToShow;
      sliderRef.current.style.transform = `translateX(-${position * slideWidth}%)`;
    }
  }, [position, slidesToShow]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className={`py-20 bg-black relative z-10 section-animate ${inView ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Client Testimonials</h2>
          <p className="text-textsecondary max-w-2xl mx-auto">Hear what our clients have to say about their experience working with Aeloria Technologies.</p>
        </div>
        
        <div className="testimonial-container">
          <div 
            className="testimonial-slider flex transition-transform duration-500" 
            ref={sliderRef}
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card px-4"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="bg-background/60 border border-accent/20 rounded-xl p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <i className="fas fa-user text-accent"></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                      <p className="text-textsecondary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <i className="fas fa-quote-left text-accent/30 text-4xl"></i>
                  </div>
                  <p className="text-textsecondary mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex text-accent">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
