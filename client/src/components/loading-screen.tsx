import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 z-50 bg-procyon-dark flex items-center justify-center">
      <div className="text-center">
        {/* Exact Procyon Logo Recreation - Vector Animation */}
        <div className="flex justify-center items-center mb-8">
          
          {/* Dot Pattern Symbol */}
          <div className="loading-letter mr-6" style={{ animationDelay: '0.1s' }}>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <defs>
                <radialGradient id="dotGradient" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="40%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </radialGradient>
              </defs>
              {/* Recreating the dot pattern */}
              {Array.from({ length: 8 }, (_, row) => 
                Array.from({ length: Math.ceil(8 - row * 0.8) }, (_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={12 + col * 8}
                    cy={12 + row * 8}
                    r={3 - row * 0.2}
                    fill="url(#dotGradient)"
                    opacity={1 - row * 0.1}
                  />
                ))
              )}
            </svg>
          </div>

          {/* P - Bold Vector */}
          <div className="loading-letter" style={{ animationDelay: '0.2s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <path d="M5 5 L5 65 L15 65 L15 40 L30 40 C40 40 45 35 45 25 C45 15 40 5 30 5 Z M15 15 L30 15 C35 15 35 20 35 25 C35 30 35 30 30 30 L15 30 Z" fill="#000000" />
            </svg>
          </div>

          {/* R - Bold Vector with Distinctive Cut */}
          <div className="loading-letter" style={{ animationDelay: '0.3s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <path d="M5 5 L5 65 L15 65 L15 40 L25 40 L40 65 L50 65 L32 37 C40 35 45 30 45 20 C45 10 40 5 30 5 Z M15 15 L30 15 C35 15 35 20 35 20 C35 25 35 25 30 25 L15 25 Z" fill="#000000" />
              {/* The distinctive cut in R */}
              <rect x="20" y="18" width="8" height="5" fill="#FFFFFF" />
            </svg>
          </div>

          {/* O - Bold Vector */}
          <div className="loading-letter" style={{ animationDelay: '0.4s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <ellipse cx="25" cy="35" rx="20" ry="25" fill="#000000" />
              <ellipse cx="25" cy="35" rx="12" ry="17" fill="#0F172A" />
            </svg>
          </div>

          {/* C - Bold Vector */}
          <div className="loading-letter" style={{ animationDelay: '0.5s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <path d="M25 10 C35 10 43 18 43 28 L43 32 L33 32 L33 28 C33 23 29 20 25 20 C21 20 17 23 17 28 L17 42 C17 47 21 50 25 50 C29 50 33 47 33 42 L33 38 L43 38 L43 42 C43 52 35 60 25 60 C15 60 7 52 7 42 L7 28 C7 18 15 10 25 10 Z" fill="#000000" />
            </svg>
          </div>

          {/* Y - Bold Vector */}
          <div className="loading-letter" style={{ animationDelay: '0.6s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <path d="M5 5 L20 35 L20 65 L30 65 L30 35 L45 5 L35 5 L25 25 L15 5 Z" fill="#000000" />
            </svg>
          </div>

          {/* O - Bold Vector */}
          <div className="loading-letter" style={{ animationDelay: '0.7s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <ellipse cx="25" cy="35" rx="20" ry="25" fill="#000000" />
              <ellipse cx="25" cy="35" rx="12" ry="17" fill="#0F172A" />
            </svg>
          </div>

          {/* N - Bold Vector */}
          <div className="loading-letter" style={{ animationDelay: '0.8s' }}>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <path d="M5 5 L5 65 L15 65 L15 25 L35 55 L45 55 L45 5 L35 5 L35 45 L15 15 L5 5 Z" fill="#000000" />
            </svg>
          </div>
        </div>
        
        {/* TECHNOSTRUCTURE Text */}
        <div className="loading-letter text-red-500 text-lg font-bold tracking-widest mb-8" style={{ animationDelay: '0.9s' }}>
          TECHNOSTRUCTURE
        </div>
        
        {/* Minimal loading indicator */}
        <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
