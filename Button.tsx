import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-800 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-400 hover:bg-secondary-500 text-primary-800 focus:ring-secondary-400',
    outline: 'bg-transparent border-2 border-primary-800 text-primary-800 hover:bg-primary-800/10 focus:ring-primary-800',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-5 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={to} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;