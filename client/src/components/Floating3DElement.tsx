import React, { useState, useEffect, useRef } from 'react';

interface Floating3DElementProps {
  children: React.ReactNode;
  maxRotate?: number; // Maximum rotation in degrees
  maxTranslate?: number; // Maximum translation in pixels
  perspective?: number; // CSS perspective value
  className?: string;
  speed?: number; // Transition speed in ms
  reset?: boolean; // Reset to initial position on mouse leave
  shadow?: boolean; // Enable shadow effect
  shadowColor?: string; // Shadow color
  sensitive?: boolean; // More sensitive to mouse movement
}

const Floating3DElement: React.FC<Floating3DElementProps> = ({
  children,
  maxRotate = 10,
  maxTranslate = 5,
  perspective = 1000,
  className = '',
  speed = 200,
  reset = true,
  shadow = true,
  shadowColor = 'rgba(209, 10, 48, 0.3)',
  sensitive = false,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = elementRef.current.getBoundingClientRect();
    
    // Calculate center of element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate cursor position relative to element center (-1 to 1)
    const xRelative = (clientX - centerX) / (width / 2);
    const yRelative = (clientY - centerY) / (height / 2);
    
    // Calculate tilt and position
    const sensitivityFactor = sensitive ? 1.5 : 1;
    const tiltX = -yRelative * maxRotate * sensitivityFactor;
    const tiltY = xRelative * maxRotate * sensitivityFactor;
    const translateX = xRelative * maxTranslate * sensitivityFactor;
    const translateY = yRelative * maxTranslate * sensitivityFactor;
    
    setPosition({ x: translateX, y: translateY, tiltX, tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (reset) {
      setPosition({ x: 0, y: 0, tiltX: 0, tiltY: 0 });
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative ${className}`}
      style={{ perspective: `${perspective}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          transform: `
            rotateX(${position.tiltX}deg) 
            rotateY(${position.tiltY}deg)
            translate3d(${position.x}px, ${position.y}px, 0)
          `,
          transition: `transform ${speed}ms ease-out`,
          transformStyle: 'preserve-3d',
          boxShadow: isHovered && shadow 
            ? `0 ${10 + Math.abs(position.tiltY)}px ${20 + Math.abs(position.tiltX)}px ${shadowColor}`
            : 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Floating3DElement;