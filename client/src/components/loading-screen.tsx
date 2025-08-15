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
    <div className="fixed inset-0 z-50 bg-procyon-dark flex items-center justify-center">
      <div className="text-center">
        {/* Procyon Logo with animation */}
        <div className="mb-8">
          <img 
            src={procyonLogo} 
            alt="Procyon Technostructure" 
            className="h-16 mx-auto animate-pulse logo-bounce"
          />
        </div>
        
        {/* Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
}
