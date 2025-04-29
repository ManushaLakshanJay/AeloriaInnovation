import React, { useState } from 'react';
import ParallaxMouseEffect from './ParallaxMouseEffect';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  parallaxStrength?: number;
  borderColor?: string;
  glowColor?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  parallaxStrength = 0.02,
  borderColor = 'border-accent/20',
  glowColor = 'shadow-accent/20',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ParallaxMouseEffect strength={parallaxStrength}>
      <div
        className={`
          relative backdrop-blur-md bg-background/30 border ${borderColor} 
          rounded-xl overflow-hidden transition-all duration-500
          ${className}
          ${glowOnHover && isHovered ? `shadow-lg ${glowColor}` : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle gradient overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
        />
        
        {/* Glass shimmer effect */}
        <div 
          className={`absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-0 -z-10 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 transition-all duration-1000 ${isHovered ? 'opacity-5 animate-shimmer' : ''}`}
        />
        
        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </div>
    </ParallaxMouseEffect>
  );
};

export default GlassCard;