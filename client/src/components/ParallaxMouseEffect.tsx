import React, { useState, useEffect } from 'react';

interface ParallaxMouseEffectProps {
  children: React.ReactNode;
  strength?: number; // Higher values make elements move more
  className?: string;
}

const ParallaxMouseEffect: React.FC<ParallaxMouseEffectProps> = ({ 
  children, 
  strength = 0.03, // Default subtle movement
  className = ''
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Wait a bit before enabling the effect to avoid initial jump
    const timer = setTimeout(() => {
      setIsEnabled(true);
    }, 500);
    
    // Get the initial center point
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setPosition({ x: centerX, y: centerY });

    const handleMouseMove = (e: MouseEvent) => {
      if (isEnabled) {
        // Calculate the offset from center
        const xOffset = (e.clientX - centerX);
        const yOffset = (e.clientY - centerY);
        setPosition({ x: xOffset, y: yOffset });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isEnabled]);

  // Don't apply effect on mobile devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return <div className={className}>{children}</div>;
  }

  // Calculate transform values based on mouse position
  const xTransform = position.x * strength;
  const yTransform = position.y * strength;
  
  return (
    <div 
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${xTransform}px, ${yTransform}px)`,
        willChange: 'transform' // Performance optimization
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxMouseEffect;