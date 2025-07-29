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
        {/* Display actual logo first, then animate vector letters */}
        <div className="relative">
          {/* Reference Logo (hidden but used for tracing) */}
          <img 
            src={procyonLogoPath} 
            alt="Procyon Logo" 
            className="opacity-0 absolute inset-0 max-w-lg h-auto"
          />
          
          {/* Vector Recreation with Exact Proportions */}
          <div className="flex justify-center items-center space-x-2 mb-8">
            
            {/* Dot Pattern Symbol - Exact Recreation */}
            <div className="loading-letter mr-4" style={{ animationDelay: '0.1s' }}>
              <svg width="120" height="80" viewBox="0 0 120 80">
                <defs>
                  <radialGradient id="dotPattern" cx="30%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="50%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </radialGradient>
                </defs>
                {/* Curved dot pattern matching original */}
                <path d="M20 15 Q50 5 80 25 Q70 45 40 55 Q15 45 20 15 Z" fill="url(#dotPattern)" />
                {/* Overlay dots for texture */}
                {Array.from({ length: 12 }, (_, i) => (
                  <circle
                    key={i}
                    cx={25 + (i % 4) * 12}
                    cy={20 + Math.floor(i / 4) * 8}
                    r={2.5 - Math.floor(i / 4) * 0.5}
                    fill="rgba(255,255,255,0.3)"
                  />
                ))}
              </svg>
            </div>

            {/* Uniform Letter Sizing - All 70x80 */}
            
            {/* P */}
            <div className="loading-letter" style={{ animationDelay: '0.2s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <path d="M8 8 L8 72 L20 72 L20 48 L40 48 C52 48 58 42 58 30 C58 18 52 8 40 8 Z M20 20 L40 20 C46 20 46 24 46 30 C46 36 46 36 40 36 L20 36 Z" fill="#000000" />
              </svg>
            </div>

            {/* R - With proper diagonal cut */}
            <div className="loading-letter" style={{ animationDelay: '0.3s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <path d="M8 8 L8 72 L20 72 L20 48 L35 48 L52 72 L66 72 L45 45 C54 42 58 36 58 26 C58 14 52 8 40 8 Z M20 20 L40 20 C46 20 46 24 46 26 C46 32 46 32 40 32 L20 32 Z" fill="#000000" />
                {/* Diagonal cut in R */}
                <polygon points="28,22 38,22 35,30 25,30" fill="#FFFFFF" />
              </svg>
            </div>

            {/* O */}
            <div className="loading-letter" style={{ animationDelay: '0.4s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <ellipse cx="35" cy="40" rx="27" ry="32" fill="#000000" />
                <ellipse cx="35" cy="40" rx="18" ry="23" fill="#FFFFFF" />
              </svg>
            </div>

            {/* C */}
            <div className="loading-letter" style={{ animationDelay: '0.5s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <path d="M35 8 C50 8 62 20 62 32 L62 38 L50 38 L50 32 C50 26 43 20 35 20 C27 20 20 26 20 32 L20 48 C20 54 27 60 35 60 C43 60 50 54 50 48 L50 42 L62 42 L62 48 C62 60 50 72 35 72 C20 72 8 60 8 48 L8 32 C8 20 20 8 35 8 Z" fill="#000000" />
              </svg>
            </div>

            {/* Y */}
            <div className="loading-letter" style={{ animationDelay: '0.6s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <path d="M8 8 L28 40 L28 72 L42 72 L42 40 L62 8 L48 8 L35 30 L22 8 Z" fill="#000000" />
              </svg>
            </div>

            {/* O */}
            <div className="loading-letter" style={{ animationDelay: '0.7s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <ellipse cx="35" cy="40" rx="27" ry="32" fill="#000000" />
                <ellipse cx="35" cy="40" rx="18" ry="23" fill="#FFFFFF" />
              </svg>
            </div>

            {/* N */}
            <div className="loading-letter" style={{ animationDelay: '0.8s' }}>
              <svg width="70" height="80" viewBox="0 0 70 80">
                <path d="M8 8 L8 72 L20 72 L20 35 L48 65 L60 65 L60 8 L48 8 L48 45 L20 15 L8 8 Z" fill="#000000" />
              </svg>
            </div>
          </div>
          
          {/* TECHNOSTRUCTURE Text */}
          <div className="loading-letter text-red-600 text-2xl font-bold tracking-[0.3em] mb-8" style={{ animationDelay: '0.9s' }}>
            TECHNOSTRUCTURE
          </div>
        </div>
        
        {/* Loading indicator */}
        <div className="w-40 h-1 bg-gray-300 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
