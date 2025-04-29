import React, { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  href?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Base styles for all button variants
  const baseStyles = 'relative overflow-hidden rounded-xl transition-all duration-300 font-montserrat flex items-center justify-center';
  
  // Size variations
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accentglow',
    secondary: 'bg-card/50 text-white hover:bg-card/70 backdrop-blur-sm',
    outline: 'bg-transparent border border-accent/30 text-white hover:border-accent hover:bg-accent/10',
  };
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled || loading) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  
  const buttonContent = (
    <>
      {/* Ripple effect */}
      {isPressed && !disabled && !loading && (
        <span 
          className="absolute rounded-full bg-white/20 animate-ripple" 
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      
      {/* Hover glow effect */}
      {isHovered && !disabled && !loading && (
        <span className="absolute inset-0 bg-accent/10 animate-pulse-slow"></span>
      )}

      {/* Content with icon */}
      <span className="relative z-10 flex items-center gap-2">
        {iconPosition === 'left' && icon && <span className={`${isHovered ? 'transform -translate-x-1 scale-110' : ''} transition-transform duration-300`}>{icon}</span>}
        {loading ? <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white/90 rounded-full animate-spin"></span> : children}
        {iconPosition === 'right' && icon && <span className={`${isHovered ? 'transform translate-x-1 scale-110' : ''} transition-transform duration-300`}>{icon}</span>}
      </span>
    </>
  );

  // Common event handlers
  const commonProps = {
    className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`,
    onMouseEnter: () => !disabled && setIsHovered(true),
    onMouseLeave: () => {
      !disabled && setIsHovered(false);
      !disabled && setIsPressed(false);
    },
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (disabled) return;
      setIsPressed(true);
      handleMouseMove(e);
    },
    onMouseUp: () => !disabled && setIsPressed(false),
    onMouseMove: handleMouseMove,
    disabled: disabled || loading,
  };

  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} {...commonProps as any}>
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button type={type} onClick={onClick} {...commonProps}>
      {buttonContent}
    </button>
  );
};

export default AnimatedButton;