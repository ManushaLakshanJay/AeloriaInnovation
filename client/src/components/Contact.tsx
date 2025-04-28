import React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string; // Adding subject field
  message: string;
}

const Contact: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
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
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 opacity-60"></div>
      
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
            <span className="text-sm font-medium font-montserrat text-accent tracking-wide">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 tracking-tight">Get In <span className="text-accent">Touch</span></h2>
          <p className="text-textsecondary max-w-2xl mx-auto opacity-90">Ready to transform your business with cutting-edge technology? Contact us today to discuss your project.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-card/30 p-8 rounded-2xl border border-accent/10 h-full">
              <h3 className="text-2xl font-montserrat font-semibold mb-8 relative inline-block">
                Contact Information
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent/30"></span>
              </h3>
              
              <div className="flex flex-col space-y-8 mb-10">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-background border border-accent/10 flex items-center justify-center mr-4 transition-colors group-hover:border-accent/30">
                    <i className="fas fa-map-marker-alt text-accent"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-white mb-1 group-hover:text-accent transition-colors">Location</h4>
                    <p className="text-textsecondary">1250 Technology Avenue, Suite 500<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-background border border-accent/10 flex items-center justify-center mr-4 transition-colors group-hover:border-accent/30">
                    <i className="fas fa-envelope text-accent"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-white mb-1 group-hover:text-accent transition-colors">Email</h4>
                    <p className="text-textsecondary">contact@aeloria-tech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-background border border-accent/10 flex items-center justify-center mr-4 transition-colors group-hover:border-accent/30">
                    <i className="fas fa-phone-alt text-accent"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-white mb-1 group-hover:text-accent transition-colors">Phone</h4>
                    <p className="text-textsecondary">+1 (415) 555-8765</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 mb-10">
                <h4 className="font-montserrat font-medium mb-4 flex items-center">
                  <i className="fas fa-globe text-accent mr-2"></i>
                  Social Media
                </h4>
                <div className="flex flex-wrap gap-3">
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
              </div>
              
              {/* Map image placeholder */}
              <div className="rounded-xl overflow-hidden border border-accent/10 h-48 bg-card/60 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center px-4 relative z-10">
                  <i className="fas fa-map-marked-alt text-accent text-3xl mb-2"></i>
                  <p className="text-textsecondary text-sm">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card/30 p-8 rounded-2xl border border-accent/10">
              <h3 className="text-2xl font-montserrat font-semibold mb-8 relative inline-block">
                Send Us a Message
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent/30"></span>
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="block font-montserrat text-sm mb-2 text-textsecondary">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-accent/50"></i>
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Your name" 
                        className={`w-full px-4 py-3 pl-10 bg-background border ${errors.name ? 'border-destructive' : 'border-accent/20'} rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white`}
                        {...register("name", { required: "Name is required" })}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-accent">{errors.name.message}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="block font-montserrat text-sm mb-2 text-textsecondary">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-envelope text-accent/50"></i>
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Your email address" 
                        className={`w-full px-4 py-3 pl-10 bg-background border ${errors.email ? 'border-destructive' : 'border-accent/20'} rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white`}
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-accent">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="block font-montserrat text-sm mb-2 text-textsecondary">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-tag text-accent/50"></i>
                    </div>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className={`w-full px-4 py-3 pl-10 bg-background border ${errors.subject ? 'border-destructive' : 'border-accent/20'} rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white`}
                      {...register("subject", { required: "Subject is required" })}
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-accent">{errors.subject.message}</p>
                  )}
                </div>
                
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="block font-montserrat text-sm mb-2 text-textsecondary">
                    Message <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <i className="fas fa-comment text-accent/50"></i>
                    </div>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Tell us about your project..." 
                      className={`w-full px-4 py-3 pl-10 bg-background border ${errors.message ? 'border-destructive' : 'border-accent/20'} rounded-lg focus:outline-none focus:border-accent/50 transition-colors text-white resize-none`}
                      {...register("message", { required: "Message is required" })}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-accent">{errors.message.message}</p>
                  )}
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="group w-full bg-accent hover:bg-accentglow text-white font-montserrat font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-accent/10"
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
                        <span>Send Message</span>
                        <i className="fas fa-paper-plane ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
