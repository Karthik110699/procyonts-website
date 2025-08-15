import { useEffect, useState } from "react";
import procyonLogo from "@assets/logo (1)_1755251811111.png";

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
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-procyon-dark to-gray-800 flex items-center justify-center">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="floating-circle absolute top-3/4 right-1/4 w-24 h-24 bg-emerald-500/10 rounded-full animate-pulse delay-300"></div>
        <div className="floating-circle absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main logo container */}
        <div className="relative mb-12">
          {/* Rotating ring around logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-blue-400 border-r-emerald-400 animate-spin loading-ring"></div>
          </div>
          
          {/* Logo */}
          <div className="relative">
            <img 
              src={procyonLogo} 
              alt="Procyon Technostructure" 
              className="h-16 mx-auto magdemy-logo-fade"
            />
          </div>
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="loading-dot bg-blue-400 w-2 h-2 rounded-full animate-bounce"></div>
          <div className="loading-dot bg-emerald-400 w-2 h-2 rounded-full animate-bounce delay-100"></div>
          <div className="loading-dot bg-purple-400 w-2 h-2 rounded-full animate-bounce delay-200"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-300 text-sm font-medium tracking-wide loading-text">
          Loading Experience...
        </p>
      </div>
    </div>
  );
}
