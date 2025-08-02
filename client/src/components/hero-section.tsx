import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  const procyonServices = [
    { name: "ServiceNow", color: "from-green-400 to-green-500", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50", link: "/enterprise" },
    { name: "SalesForce", color: "from-white to-green-400", dotColor: "bg-white", shadowColor: "shadow-white/50", link: "/enterprise" },
    { name: "SAP Solutions", color: "from-yellow-400 to-green-400", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50", link: "/enterprise" },
    { name: "Government Services", color: "from-green-400 to-yellow-400", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50", link: "/services" },
    { name: "Cloud Transformation", color: "from-white to-yellow-400", dotColor: "bg-white", shadowColor: "shadow-white/50", link: "/services" },
    { name: "AI & Machine Learning", color: "from-green-400 to-green-500", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50", link: "/services" },
    { name: "Data Analytics", color: "from-yellow-400 to-yellow-500", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50", link: "/services" },
    { name: "Staff Augmentation", color: "from-yellow-400 to-white", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50", link: "/services" }
  ];



  useEffect(() => {
    // Rotate through services
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % procyonServices.length);
    }, 2000);

    return () => clearInterval(serviceInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Wave Background */}
      <div className="wave-container">
        <div className="glow-effect"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
      </div>
      
      <div className="relative z-20 flex min-h-screen">
        {/* Left Side Content */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-xl">
            
            {/* Fixed Innovative Text */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
                <span className="block animated-gradient-text mb-2">
                  AI-Powered Solutions?
                </span>
                <span className="block">Procyon's Your Partner!</span>
              </h1>
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
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Motion Graphics Space */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* Floating Service Names */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <Link href={procyonServices[currentServiceIndex].link} className="block">
                <div className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${procyonServices[currentServiceIndex].color} bg-clip-text text-transparent opacity-40 mb-4 transition-all duration-500 cursor-pointer hover:opacity-60 hover:scale-105 transform relative z-30`}>
                  {procyonServices[currentServiceIndex].name}
                </div>
              </Link>
              
              {/* Service Icons/Indicators */}
              <div className="flex justify-center space-x-2 relative z-30">
                {procyonServices.map((service, index) => (
                  <Link key={index} href={service.link} className="block">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-200 relative z-30 ${
                        index === currentServiceIndex 
                          ? `${service.dotColor} scale-150 ${service.shadowColor} shadow-lg` 
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Service-themed particles */}
          <div className="absolute inset-0 z-10">
            {procyonServices.map((service, index) => (
              <Link key={service.name} href={service.link} className="absolute" style={{
                top: `${20 + (index * 10)}%`,
                right: `${15 + (index * 8)}%`,
              }}>
                <div
                  className={`transition-all duration-1000 cursor-pointer hover:scale-110 relative z-10 ${
                    index === currentServiceIndex ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                  }`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full animate-particle-float ${service.shadowColor} shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent opacity-90 whitespace-nowrap hover:opacity-100 transition-opacity`}>
                      {service.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
