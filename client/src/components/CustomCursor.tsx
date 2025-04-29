import React, { useState, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailTimerRef = useRef<number | null>(null);
  
  // Generate trail points when mouse moves
  useEffect(() => {
    if (position.x > 0 && position.y > 0) {
      // Add a new trail point
      const newPoint = { 
        x: position.x, 
        y: position.y, 
        opacity: 0.8 
      };
      
      // Only keep the last 5 trail points
      const updatedTrail = [...trail, newPoint].slice(-5);
      setTrail(updatedTrail);
      
      // Fade out trail points over time
      if (trailTimerRef.current) {
        clearTimeout(trailTimerRef.current);
      }
      
      trailTimerRef.current = window.setTimeout(() => {
        setTrail(prevTrail => {
          // Reduce opacity of all points
          return prevTrail.map(point => ({
            ...point,
            opacity: point.opacity > 0.1 ? point.opacity - 0.1 : 0
          })).filter(point => point.opacity > 0);
        });
      }, 100);
    }
  }, [position]);
  
  useEffect(() => {
    // Show cursor after a brief delay to avoid initial position jump
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateCursorType = () => {
      const hoveredElement = document.querySelectorAll(":hover");
      const isHoveringClickable = Array.from(hoveredElement).some(element => {
        const computedStyle = window.getComputedStyle(element as Element);
        return computedStyle.cursor === 'pointer';
      });
      
      setIsPointer(isHoveringClickable);
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      clearTimeout(timer);
      if (trailTimerRef.current) {
        clearTimeout(trailTimerRef.current);
      }
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  // Only show cursor on non-touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }
  
  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div 
          key={index}
          className="fixed pointer-events-none z-40 rounded-full bg-accent"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: '4px',
            height: '4px',
            opacity: point.opacity * 0.7,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s ease-out'
          }}
        />
      ))}
    
      {/* Outer cursor (larger circle) */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '26px',
          height: isPointer ? '40px' : '26px',
          backgroundColor: 'transparent',
          border: '1.5px solid rgba(209, 10, 48, 0.7)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, border 0.2s ease-out',
          boxShadow: isPointer ? '0 0 15px rgba(209, 10, 48, 0.4)' : '0 0 10px rgba(209, 10, 48, 0.2)'
        }}
      />
      
      {/* Inner cursor (small dot) */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full bg-accent transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isClicking ? '10px' : (isPointer ? '8px' : '6px'),
          height: isClicking ? '10px' : (isPointer ? '8px' : '6px'),
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.1s ease-out, height 0.1s ease-out',
          boxShadow: '0 0 8px rgba(209, 10, 48, 0.8)'
        }}
      />
      
      {/* Subtle glow effect */}
      <div 
        className={`fixed pointer-events-none z-40 rounded-full bg-accent/10 blur-md transition-opacity duration-300 ${isVisible ? 'opacity-80' : 'opacity-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '60px' : '30px',
          height: isPointer ? '60px' : '30px',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease-out, height 0.3s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;