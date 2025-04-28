import React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We will contact you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 relative z-10 section-animate ${inView ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">Let's Start a Conversation</h2>
            <p className="text-textsecondary mb-8">
              Ready to transform your business with cutting-edge technology? Contact us today to discuss your project and discover how we can help you achieve your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-map-marker-alt text-accent"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Location</h4>
                  <p className="text-textsecondary">1250 Technology Avenue, Suite 500<br/>San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-envelope text-accent"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Email</h4>
                  <p className="text-textsecondary">contact@aeloria-tech.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-phone-alt text-accent"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Phone</h4>
                  <p className="text-textsecondary">+1 (415) 555-8765</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-montserrat font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-background/60 border border-accent/20 rounded-xl p-8">
              <h3 className="text-xl font-montserrat font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className={`w-full px-4 py-3 bg-black/50 border ${errors.name ? 'border-destructive' : 'border-accent/30'} rounded-md focus:outline-none focus:border-accent transition-colors text-white`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email address" 
                    className={`w-full px-4 py-3 bg-black/50 border ${errors.email ? 'border-destructive' : 'border-accent/30'} rounded-md focus:outline-none focus:border-accent transition-colors text-white`}
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className={`w-full px-4 py-3 bg-black/50 border ${errors.message ? 'border-destructive' : 'border-accent/30'} rounded-md focus:outline-none focus:border-accent transition-colors text-white resize-none`}
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="glow-button w-full bg-accent hover:bg-accentglow text-white font-montserrat font-medium py-3 px-6 rounded-md transition-all duration-300 uppercase tracking-wider flex items-center justify-center"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
