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
        {/* Vector-like Logo Animation - Magdemy Style */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          {/* P - Vector Shape */}
          <div className="loading-letter" style={{ animationDelay: '0.1s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path d="M10 10 L10 70 L15 70 L15 45 L35 45 C45 45 50 40 50 30 L50 25 C50 15 45 10 35 10 Z M15 15 L35 15 C40 15 45 20 45 25 L45 30 C45 35 40 40 35 40 L15 40 Z" fill="url(#grad1)" />
            </svg>
          </div>

          {/* R - Vector Shape with Cut */}
          <div className="loading-letter" style={{ animationDelay: '0.2s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path d="M10 10 L10 70 L15 70 L15 45 L35 45 L50 70 L56 70 L40 43 C47 40 50 35 50 25 C50 15 45 10 35 10 Z M15 15 L35 15 C40 15 45 20 45 25 C45 30 40 35 35 35 L15 35 Z M25 25 L35 25 L35 30 L25 30 Z" fill="url(#grad2)" />
            </svg>
          </div>

          {/* O - Vector Shape */}
          <div className="loading-letter" style={{ animationDelay: '0.3s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <ellipse cx="30" cy="40" rx="20" ry="25" fill="url(#grad3)" />
              <ellipse cx="30" cy="40" rx="15" ry="20" fill="#0F172A" />
            </svg>
          </div>

          {/* C - Vector Shape */}
          <div className="loading-letter" style={{ animationDelay: '0.4s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path d="M30 15 C40 15 48 23 48 33 L48 37 L43 37 L43 33 C43 26 37 20 30 20 C23 20 17 26 17 33 L17 47 C17 54 23 60 30 60 C37 60 43 54 43 47 L43 43 L48 43 L48 47 C48 57 40 65 30 65 C20 65 12 57 12 47 L12 33 C12 23 20 15 30 15 Z" fill="url(#grad4)" />
            </svg>
          </div>

          {/* Y - Vector Shape */}
          <div className="loading-letter" style={{ animationDelay: '0.5s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path d="M10 10 L10 15 L25 40 L25 70 L30 70 L30 40 L45 15 L45 10 L40 10 L27.5 32 L15 10 Z" fill="url(#grad5)" />
            </svg>
          </div>

          {/* O - Vector Shape */}
          <div className="loading-letter" style={{ animationDelay: '0.6s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <ellipse cx="30" cy="40" rx="20" ry="25" fill="url(#grad6)" />
              <ellipse cx="30" cy="40" rx="15" ry="20" fill="#0F172A" />
            </svg>
          </div>

          {/* N - Vector Shape */}
          <div className="loading-letter" style={{ animationDelay: '0.7s' }}>
            <svg width="60" height="80" viewBox="0 0 60 80" className="fill-current">
              <defs>
                <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path d="M10 10 L10 70 L15 70 L15 25 L40 60 L45 60 L45 10 L40 10 L40 55 L15 20 L10 10 Z" fill="url(#grad7)" />
            </svg>
          </div>
        </div>
        
        {/* Minimal loading indicator */}
        <div className="w-24 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
