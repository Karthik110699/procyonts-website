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
        {/* Clean Professional Logo Animation */}
        <div className="flex justify-center items-center mb-8">
          <div className="text-8xl font-bold tracking-wider">
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.1s' }}>P</span>
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>R</span>
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>O</span>
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>C</span>
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.5s' }}>Y</span>
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.6s' }}>O</span>
            <span className="loading-letter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{ animationDelay: '0.7s' }}>N</span>
          </div>
        </div>
        
        {/* Minimal loading indicator */}
        <div className="w-16 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
