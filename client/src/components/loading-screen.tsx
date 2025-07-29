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
        {/* Innovative Logo Asset Loading */}
        <div className="relative">
          {/* Morphing reveal animation */}
          <div className="logo-morph-container">
            <img 
              src={procyonLogoPath} 
              alt="Procyon Logo" 
              className="procyon-logo-reveal max-w-md h-auto"
            />
          </div>
          
          {/* Interactive glow effects */}
          <div className="logo-glow-effects">
            <div className="glow-ring-1"></div>
            <div className="glow-ring-2"></div>
            <div className="glow-ring-3"></div>
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
