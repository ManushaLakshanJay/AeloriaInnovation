import React, { useState } from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import ourStoryImage from "../assets/our-story-team.png";
import teamCollaboration from "../assets/team-collaboration.png";
import aiInnovation from "../assets/ai-innovation.png";
import techFuture from "../assets/tech-future.png";

// Define company statistics 
const stats = [
  { value: 10, label: "Years Experience", icon: "calendar-alt" },
  { value: 250, label: "Projects Completed", icon: "check-circle" },
  { value: 15, label: "Industry Awards", icon: "trophy" },
  { value: 98, label: "Client Satisfaction", icon: "heart", suffix: "%" }
];

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Michael Reynolds",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Emma Chen",
    position: "Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "David Kim",
    position: "AI Development Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

// About section tabs
const tabs = [
  { id: "story", label: "Our Story", icon: "book" },
  { id: "team", label: "Our Team", icon: "users" },
  { id: "values", label: "Core Values", icon: "star" }
];

const About: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("story");

  // Core values data
  const coreValues = [
    { title: "Innovation", description: "Pushing boundaries with bold ideas and creative solutions.", icon: "lightbulb" },
    { title: "Excellence", description: "Delivering unparalleled quality in every project we undertake.", icon: "trophy" },
    { title: "Collaboration", description: "Working together with clients to achieve transformative results.", icon: "hands-helping" },
    { title: "Integrity", description: "Operating with transparency, honesty, and ethical practices.", icon: "shield-alt" },
  ];

  return (
    <section 
      id="about" 
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
            <span className="text-sm font-medium font-montserrat text-accent tracking-wide">About Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 tracking-tight">Who We <span className="text-accent">Are</span></h2>
          <p className="text-textsecondary max-w-2xl mx-auto opacity-90">Pioneering the future of technology with innovative solutions and a commitment to excellence.</p>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card/50 rounded-2xl p-6 border border-accent/10 group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <i className={`fas fa-${stat.icon} text-accent`}></i>
                </div>
                <h3 className="text-3xl font-bold font-montserrat">
                  {stat.value}{stat.suffix || ''}
                </h3>
              </div>
              <p className="text-textsecondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Tabs navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-card/50 rounded-full p-1 border border-accent/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-accent text-white font-medium' 
                    : 'text-textsecondary hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fas fa-${tab.icon} text-xs`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab content */}
        <div className="mt-8">
          {/* Our Story tab */}
          {activeTab === "story" && (
            <div className="flex flex-col lg:flex-row items-center gap-12 animate-fadeIn">
              <div className="lg:w-1/2 relative">
                {/* Enhanced background glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent blur-xl opacity-80 -z-10"></div>
                
                {/* Red accent border with shadow */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/5 shadow-lg shadow-accent/10">
                  <img 
                    src={ourStoryImage} 
                    alt="Aeloria Team Collaboration" 
                    className="rounded-xl w-full h-auto object-cover" 
                  />
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl px-4 pt-12 pb-3">
                    <div className="text-xs font-medium text-accent">Team Collaboration</div>
                    <div className="text-xs text-white/90">Aeloria's team innovating together</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative mb-6 pb-6 border-b border-accent/10">
                  <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 relative">
                    Our Story
                  </h2>
                  
                  <p className="text-textsecondary mb-6 leading-relaxed">
                    Founded with a vision to bridge the gap between imagination and innovation, Aeloria Technologies stands at the forefront of the digital revolution. We're not just building technology; we're crafting the future.
                  </p>
                  
                  <p className="text-textsecondary leading-relaxed">
                    Our team of visionaries and technologists brings together decades of combined experience in artificial intelligence, software engineering, and creative design to deliver solutions that transcend ordinary expectations.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/30 rounded-xl p-5 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                    <h3 className="font-montserrat font-semibold text-lg mb-2 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                        <i className="fas fa-rocket text-accent text-sm"></i>
                      </span>
                      Our Mission
                    </h3>
                    <p className="text-textsecondary text-sm">To redefine what's possible through innovative technology that empowers businesses and enhances human experiences.</p>
                  </div>
                  
                  <div className="bg-card/30 rounded-xl p-5 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                    <h3 className="font-montserrat font-semibold text-lg mb-2 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                        <i className="fas fa-eye text-accent text-sm"></i>
                      </span>
                      Our Vision
                    </h3>
                    <p className="text-textsecondary text-sm">A world where technology seamlessly enhances human potential, creating a more connected, efficient, and innovative future.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Our Team tab */}
          {activeTab === "team" && (
            <div className="animate-fadeIn">
              <p className="text-textsecondary text-center max-w-3xl mx-auto mb-10">
                Meet the brilliant minds behind Aeloria Technologies. Our diverse team of experts combines technical excellence with creative vision to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl bg-card/50 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                    </div>
                    
                    <div className="p-5 relative">
                      <h3 className="text-lg font-bold font-montserrat text-white">{member.name}</h3>
                      <p className="text-accent text-sm font-medium">{member.position}</p>
                      
                      <div className="mt-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href="#" className="w-8 h-8 rounded-full bg-background border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                          <i className="fab fa-linkedin-in text-sm"></i>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-background border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                          <i className="fab fa-twitter text-sm"></i>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-background border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                          <i className="fas fa-envelope text-sm"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Core Values tab */}
          {activeTab === "values" && (
            <div className="animate-fadeIn">
              <p className="text-textsecondary text-center max-w-3xl mx-auto mb-10">
                Our core values define who we are and how we operate. They guide our decisions and shape our interactions with clients, partners, and each other.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex gap-5 bg-card/30 p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-background/80 border border-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <i className={`fas fa-${value.icon} text-accent`}></i>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-accent transition-colors">{value.title}</h3>
                      <p className="text-textsecondary">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* New Image Gallery Section - Added as requested */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
              <span className="text-sm font-medium font-montserrat text-accent tracking-wide">Our Work</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-montserrat mb-4 tracking-tight">The <span className="text-accent">Future</span> We're Building</h2>
            <p className="text-textsecondary max-w-2xl mx-auto opacity-90">Explore our innovative technologies and solutions that are shaping tomorrow's digital landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-tl from-accent/30 to-transparent blur-xl opacity-60 -z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/5 shadow-lg shadow-accent/10 h-full">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-0.5 h-full">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <img 
                      src={teamCollaboration} 
                      alt="Team Collaboration" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold font-montserrat text-white mb-2">Team Collaboration</h3>
                      <p className="text-textsecondary text-sm mb-4">Our collaborative approach brings together diverse expertise to solve complex challenges.</p>
                      <div className="flex items-center space-x-2 text-xs font-medium">
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">Innovation</span>
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">Teamwork</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent/30 to-transparent blur-xl opacity-60 -z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-1 rounded-2xl bg-gradient-to-bl from-accent/40 to-accent/5 shadow-lg shadow-accent/10 h-full">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-0.5 h-full">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <img 
                      src={aiInnovation} 
                      alt="AI Innovation" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold font-montserrat text-white mb-2">AI Innovation</h3>
                      <p className="text-textsecondary text-sm mb-4">Pioneering artificial intelligence solutions that transform industries and empower businesses.</p>
                      <div className="flex items-center space-x-2 text-xs font-medium">
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">AI</span>
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">Machine Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-transparent blur-xl opacity-60 -z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-1 rounded-2xl bg-gradient-to-tl from-accent/40 to-accent/5 shadow-lg shadow-accent/10 h-full">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-0.5 h-full">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <img 
                      src={techFuture} 
                      alt="Future Technology" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold font-montserrat text-white mb-2">Future Technology</h3>
                      <p className="text-textsecondary text-sm mb-4">Building the cutting-edge technologies that will shape our digital tomorrow.</p>
                      <div className="flex items-center space-x-2 text-xs font-medium">
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">Innovation</span>
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">Future Tech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
