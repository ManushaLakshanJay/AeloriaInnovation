import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  once?: boolean; // If true, animate only once on mount
  as?: keyof JSX.IntrinsicElements; // allows specifying element type (h1, p, etc)
  highlightWords?: string[]; // Words to be highlighted
  highlightColor?: string; // CSS class for highlight color
  children?: React.ReactNode; // For nested content
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  once = false,
  as: Component = 'div',
  highlightWords = [],
  highlightColor = 'text-accent',
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer for element visibility detection
  useEffect(() => {
    if (once && hasAnimated) return; // Skip if animation should only run once and has already run
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (once) setHasAnimated(true);
      } else if (!once) {
        setIsVisible(false);
        setCharCount(0);
      }
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, hasAnimated]);

  // Handle the text reveal animation
  useEffect(() => {
    if (!isVisible) return;
    
    let timer: NodeJS.Timeout;
    
    // Initial delay before starting the animation
    const initialDelayTimer = setTimeout(() => {
      // Increment character count until the full text is shown
      timer = setInterval(() => {
        setCharCount((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(initialDelayTimer);
      clearInterval(timer);
    };
  }, [isVisible, text, speed, delay]);

  // Process text to highlight specific words
  const processText = () => {
    // If we have specific words to highlight
    if (highlightWords.length > 0) {
      let textArray = text.split(' ');
      return textArray.map((word, index) => {
        const shouldHighlight = highlightWords.some(
          highlight => word.toLowerCase().includes(highlight.toLowerCase())
        );
        return (
          <span key={index} className={shouldHighlight ? highlightColor : ''}>
            {index < textArray.length - 1 ? `${word} ` : word}
          </span>
        );
      });
    }
    
    // Default: just show the revealed characters
    return text.substring(0, charCount);
  };

  return (
    <div ref={elementRef}>
      <Component className={className}>
        {processText()}
        {children}
      </Component>
    </div>
  );
};

export default TextReveal;