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
        {/* SPECTACULAR BIG WOW ANIMATION */}
        <div className="logo-spectacular relative w-full h-screen flex items-center justify-center">
          
          {/* Cosmic Rings */}
          <div className="cosmic-ring cosmic-ring-1"></div>
          <div className="cosmic-ring cosmic-ring-2"></div>
          
          {/* Energy Particles Explosion */}
          <div className="energy-particles">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="particle" style={{ 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)'
              }}></div>
            ))}
          </div>
          
          {/* Main Logo - MASSIVE SIZE */}
          <div className="relative z-10">
            <img 
              src={procyonLogoPath} 
              alt="Procyon Logo" 
              className="procyon-logo-reveal w-[800px] h-auto max-w-none"
            />
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
