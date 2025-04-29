import React, { useState } from 'react';

interface HoverImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayText?: string;
  overlayTextClassName?: string;
  hoverScale?: number;
  onClick?: () => void;
  aspectRatio?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  src,
  alt,
  className = '',
  overlayText,
  overlayTextClassName = '',
  hoverScale = 1.05,
  onClick,
  aspectRatio = 'aspect-video',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl ${aspectRatio} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Image with zoom effect */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isHovered ? `scale(${hoverScale})` : 'scale(1)' }}
      />
      
      {/* Dark overlay that fades in */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Accent colored glow from bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
      />
      
      {/* Text overlay */}
      {overlayText && (
        <div 
          className={`absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${overlayTextClassName}`}
        >
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {overlayText}
          </div>
        </div>
      )}
      
      {/* Subtle zoom indicator */}
      <div className="absolute top-4 right-4 bg-accent/80 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-0 group-hover:rotate-90">
        <i className="fas fa-plus text-xs"></i>
      </div>
    </div>
  );
};

export default HoverImage;