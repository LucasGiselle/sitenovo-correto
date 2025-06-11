import React, { ReactNode } from 'react';

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  animated?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  animated = true
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-8 py-4 
        bg-gradient-to-r from-gold via-yellow-400 to-gold
        hover:from-yellow-400 hover:via-gold hover:to-yellow-400
        text-dark font-bold 
        rounded-xl shadow-2xl
        transition-all duration-300
        transform hover:scale-105 hover:-translate-y-1
        text-lg
        overflow-hidden
        group
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
    </button>
  );
};

export default ActionButton;