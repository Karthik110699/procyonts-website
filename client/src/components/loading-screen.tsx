import { useEffect, useState } from "react";
import generatedLogo from "@assets/generated_images/Procyon_company_logo_df97610d.png";

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
        {/* Logo with scaling animation */}
        <div className="mb-8 logo-container">
          <img 
            src={generatedLogo} 
            alt="Procyon Technostructure" 
            className="w-32 h-32 mx-auto animate-pulse logo-fade-in"
          />
        </div>
        
        {/* Company name with letter animation */}
        <div className="flex space-x-2 text-4xl font-bold mb-8">
          <span className="loading-letter text-blue-500" style={{ animationDelay: '0.1s' }}>P</span>
          <span className="loading-letter text-emerald-500" style={{ animationDelay: '0.2s' }}>R</span>
          <span className="loading-letter text-purple-500" style={{ animationDelay: '0.3s' }}>O</span>
          <span className="loading-letter text-amber-500" style={{ animationDelay: '0.4s' }}>C</span>
          <span className="loading-letter text-blue-500" style={{ animationDelay: '0.5s' }}>Y</span>
          <span className="loading-letter text-emerald-500" style={{ animationDelay: '0.6s' }}>O</span>
          <span className="loading-letter text-purple-500" style={{ animationDelay: '0.7s' }}>N</span>
        </div>
        
        {/* Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
}
