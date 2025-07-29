import { useEffect, useState } from "react";
import procyonLogoPath from "@assets/procyon-logo.jpg";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Exact Procyon Logo Recreation - Magdemy Style Animation */}
        <div className="flex justify-center items-center mb-8">
          
          {/* Exact Dot Pattern Symbol from Logo */}
          <div className="loading-letter mr-8" style={{ animationDelay: '0.1s' }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <radialGradient id="procyonDots" cx="30%" cy="20%" r="70%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="30%" stopColor="#EAB308" />  
                  <stop offset="60%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#2563EB" />
                </radialGradient>
              </defs>
              {/* Recreating exact curved dot pattern */}
              <path 
                d="M15 20 Q25 10 45 15 Q65 20 80 35 Q85 50 75 65 Q60 75 40 70 Q25 65 15 50 Q10 35 15 20 Z" 
                className="svg-letter" 
                fill="url(#procyonDots)" 
                stroke="none"
                style={{ animationDelay: '0.1s' }}
              />
              {/* Individual dots for authentic texture */}
              {Array.from({ length: 20 }, (_, i) => {
                const row = Math.floor(i / 5);
                const col = i % 5;
                const size = 2.5 - row * 0.3;
                return (
                  <circle
                    key={i}
                    cx={20 + col * 8 - row * 2}
                    cy={25 + row * 8}
                    r={size}
                    fill="rgba(255,255,255,0.4)"
                    opacity={1 - row * 0.15}
                  />
                );
              })}
            </svg>
          </div>

          {/* PROCYON Letters - Exact tracing from logo image */}
          
          {/* P - Exact shape */}
          <div className="loading-letter" style={{ animationDelay: '0.2s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path 
                d="M5 5 L5 75 L15 75 L15 45 L35 45 C45 45 50 40 50 30 C50 20 45 5 35 5 Z M15 15 L35 15 C40 15 40 25 40 30 C40 35 40 35 35 35 L15 35 Z" 
                className="svg-letter" 
                style={{ animationDelay: '0.2s' }}
              />
            </svg>
          </div>

          {/* R - With exact diagonal cut visible in logo */}
          <div className="loading-letter" style={{ animationDelay: '0.3s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path 
                d="M5 5 L5 75 L15 75 L15 45 L30 45 L45 75 L57 75 L40 43 C47 40 50 35 50 25 C50 15 45 5 35 5 Z M15 15 L35 15 C40 15 40 25 40 25 C40 30 40 30 35 30 L15 30 Z" 
                className="svg-letter" 
                style={{ animationDelay: '0.3s' }}
              />
              {/* Exact diagonal cut from logo */}
              <path 
                d="M25 18 L35 25 L30 32 L20 25 Z" 
                fill="#FFFFFF" 
                stroke="none"
                style={{ animationDelay: '0.35s' }}
              />
            </svg>
          </div>

          {/* O - Perfect circle */}
          <div className="loading-letter" style={{ animationDelay: '0.4s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <ellipse 
                cx="30" cy="40" rx="25" ry="30" 
                className="svg-letter" 
                style={{ animationDelay: '0.4s' }}
              />
              <ellipse cx="30" cy="40" rx="15" ry="20" fill="#FFFFFF" stroke="none" />
            </svg>
          </div>

          {/* C - Exact curve */}
          <div className="loading-letter" style={{ animationDelay: '0.5s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path 
                d="M30 10 C45 10 55 20 55 35 L55 40 L45 40 L45 35 C45 25 38 20 30 20 C22 20 15 25 15 35 L15 45 C15 55 22 60 30 60 C38 60 45 55 45 45 L45 40 L55 40 L55 45 C55 60 45 70 30 70 C15 70 5 60 5 45 L5 35 C5 20 15 10 30 10 Z" 
                className="svg-letter" 
                style={{ animationDelay: '0.5s' }}
              />
            </svg>
          </div>

          {/* Y - Sharp angles */}
          <div className="loading-letter" style={{ animationDelay: '0.6s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path 
                d="M5 5 L25 35 L25 75 L35 75 L35 35 L55 5 L45 5 L30 25 L15 5 Z" 
                className="svg-letter" 
                style={{ animationDelay: '0.6s' }}
              />
            </svg>
          </div>

          {/* O - Perfect circle */}
          <div className="loading-letter" style={{ animationDelay: '0.7s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <ellipse 
                cx="30" cy="40" rx="25" ry="30" 
                className="svg-letter" 
                style={{ animationDelay: '0.7s' }}
              />
              <ellipse cx="30" cy="40" rx="15" ry="20" fill="#FFFFFF" stroke="none" />
            </svg>
          </div>

          {/* N - Exact diagonal */}
          <div className="loading-letter" style={{ animationDelay: '0.8s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path 
                d="M5 5 L5 75 L15 75 L15 30 L40 65 L50 65 L50 5 L40 5 L40 50 L15 15 L5 5 Z" 
                className="svg-letter" 
                style={{ animationDelay: '0.8s' }}
              />
            </svg>
          </div>
        </div>
        
        {/* TECHNOSTRUCTURE - Exact red styling */}
        <div className="loading-letter text-[#DC2626] text-xl font-bold tracking-[0.25em] mb-8" style={{ animationDelay: '0.9s' }}>
          TECHNOSTRUCTURE
        </div>
        
        {/* Loading indicator */}
        <div className="w-40 h-1 bg-gray-300 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
