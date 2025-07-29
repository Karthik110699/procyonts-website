import { useEffect, useState } from "react";
// Removed asset import - using text vectors instead

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-procyon-dark flex items-center justify-center">
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
          
          {/* PROCYON TEXT VECTORS - MAGDEMY STYLE */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="procyon-text-container">
              <svg 
                viewBox="0 0 800 200" 
                className="procyon-logo-text w-[800px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* P */}
                <path 
                  d="M20 40 L20 160 M20 40 L80 40 Q100 40 100 60 Q100 80 80 80 L20 80" 
                  className="letter-path letter-p"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* R with distinctive cut */}
                <path 
                  d="M130 40 L130 160 M130 40 L190 40 Q210 40 210 60 Q210 80 190 80 L130 80 M170 80 L210 160" 
                  className="letter-path letter-r"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* O */}
                <ellipse 
                  cx="270" 
                  cy="100" 
                  rx="40" 
                  ry="60"
                  className="letter-path letter-o"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                />
                
                {/* C */}
                <path 
                  d="M350 60 Q330 40 310 60 Q310 140 330 140 Q350 140 350 120" 
                  className="letter-path letter-c"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                
                {/* Y */}
                <path 
                  d="M380 40 L410 100 L440 40 M410 100 L410 160" 
                  className="letter-path letter-y"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* O */}
                <ellipse 
                  cx="500" 
                  cy="100" 
                  rx="40" 
                  ry="60"
                  className="letter-path letter-o2"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                />
                
                {/* N */}
                <path 
                  d="M570 40 L570 160 M570 40 L630 160 M630 40 L630 160" 
                  className="letter-path letter-n"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <div className="company-subtitle-reveal mt-8">
              <p className="text-2xl text-gray-300 tracking-[0.3em] font-light">TECHNOSTRUCTURE</p>
            </div>
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
