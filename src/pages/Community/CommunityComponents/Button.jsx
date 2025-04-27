import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 font-medium';
  
  const variantStyles = {
    primary: 'bg-[#8957FF] text-white hover:bg-[#8957FF]/90 active:bg-[#8957FF]/80',
    outline: 'border border-[#8957FF] text-[#8957FF] hover:bg-[#8957FF]/10 active:bg-[#8957FF]/20',
    ghost: 'text-[#8957FF] hover:bg-[#8957FF]/10 active:bg-[#8957FF]/20'
  };
  
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-2.5 px-5 text-lg'
  };
  
  const disabledStyles = disabled || isLoading 
    ? 'opacity-70 cursor-not-allowed' 
    : '';
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
      
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="inline-flex">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !isLoading && (
        <span className="inline-flex">{icon}</span>
      )}
    </button>
  );
};

export default Button;