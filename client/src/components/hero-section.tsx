import { useState, useEffect } from "react";

export default function HeroSection() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [poweredByVisible, setPoweredByVisible] = useState(false);

  useEffect(() => {
    // Show "Powered by" on interaction/scroll
    const handleInteraction = () => {
      setPoweredByVisible(true);
    };

    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);
    
    // Auto show after 3 seconds
    const timer = setTimeout(() => setPoweredByVisible(true), 3000);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Static */}
        <div className="w-1/2 bg-gradient-to-br from-gray-900 via-blue-900 to-procyon-dark">
          <div className="absolute inset-0 bg-gradient-to-r from-procyon-dark/90 to-transparent"></div>
        </div>
        {/* Right Side - Motion Graphics */}
        <div className="w-1/2 bg-gradient-to-bl from-blue-800 via-emerald-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-procyon-dark/20"></div>
        </div>
      </div>

      {/* Motion Graphics - Right Side Only */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {/* Morphing Shapes */}
          <div className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-r from-blue-500/25 to-emerald-500/15 animate-morphing blur-md" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-32 right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/10 animate-morphing blur-lg" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-emerald-500/25 to-blue-500/15 animate-morphing blur-sm" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Floating Particles */}
          <div className="absolute top-24 right-24 w-4 h-4 bg-blue-400/80 rounded-full animate-particle-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-48 right-40 w-3 h-3 bg-emerald-400/80 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-48 right-20 w-5 h-5 bg-purple-400/80 rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-64 right-48 w-2 h-2 bg-pink-400/80 rounded-full animate-particle-float" style={{ animationDelay: '3s' }}></div>
          
          {/* Animated SVG Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rightGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q200,50 400,150 T800,100" stroke="url(#rightGradient1)" strokeWidth="3" fill="none" opacity="0.7">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                values="M0,200 Q200,50 400,150 T800,100;M0,150 Q200,250 400,100 T800,200;M0,200 Q200,50 400,150 T800,100" />
            </path>
          </svg>
          
          {/* Pulsing Orbs */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-500/60 rounded-full animate-pulse-glow" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-emerald-500/60 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side Content */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-xl">
            
            {/* Fixed Innovative Text */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
                <span className="block mb-2">The Rise of</span>
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  AI-Driven Software
                </span>
                <span className="block">Development</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Boost productivity and accelerate innovation today with AI embedded in every phase of the software development cycle.
              </p>
            </div>

            {/* Search Feature */}
            <div className="mb-8">
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/15 transition-all duration-300 w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-left flex-1">
                    {searchQuery || "Search for AI solutions, services, or technologies..."}
                  </span>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                </button>
                
                {searchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type your search..."
                      className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Take the leap today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-400/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Motion Graphics Space */}
        <div className="w-1/2 relative">
          {/* Content overlay on motion graphics if needed */}
        </div>
      </div>

      {/* Interactive "Powered by" Badge */}
      {poweredByVisible && (
        <div className="fixed bottom-8 right-8 z-20 transition-all duration-500 transform">
          <div className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 backdrop-blur-md border border-blue-500/40 rounded-full animate-gradient-shift overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-emerald-500/15 to-purple-500/15 animate-gradient-shift"></div>
            
            {/* Pulsing Dot */}
            <div className="relative w-2 h-2 mr-3">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            </div>
            
            {/* Text */}
            <span className="relative text-sm font-semibold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Powered by Procyon
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
