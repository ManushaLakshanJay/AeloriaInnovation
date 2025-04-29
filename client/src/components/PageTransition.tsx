import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
  duration = 800,
  delay = 0,
  from = { opacity: 0, y: 30 },
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  const defaultFrom = {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
    ...from,
  };

  const initialStyle = {
    opacity: defaultFrom.opacity,
    transform: `translate3d(${defaultFrom.x}px, ${defaultFrom.y}px, 0) scale(${defaultFrom.scale})`,
  };

  const visibleStyle = {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale(1)',
  };

  return (
    <div
      className={`transition-all will-change-transform ${className}`}
      style={{
        ...initialStyle,
        ...(isVisible ? visibleStyle : {}),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;