import React from 'react';

interface BorderSparkProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const BorderSpark: React.FC<BorderSparkProps> = ({ children, className = "", style, onClick }) => {
  return (
    <div className={`relative group ${className}`} style={style} onClick={onClick}>
      {/* Static border */}
      <div className="absolute inset-0 rounded-lg border border-gray-600/50 pointer-events-none" />
      
      {/* Animated border spark - only visible on hover */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="rgba(34, 197, 94, 0.4)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="70%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="80%" stopColor="rgba(34, 197, 94, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="8"
          ry="8"
          fill="none"
          stroke="url(#sparkGradient)"
          strokeWidth="2"
          strokeDasharray="40 200"
          className="animate-border-dash"
        />
      </svg>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};