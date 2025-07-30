import { Lightbulb, Code, RefreshCw, CheckSquare } from "lucide-react";
import dataAnalyticsWorkspace from "@assets/imagenew_1753913145151.png";

export default function FourPillarsSection() {
  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Magical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Vectors */}
        <div className="absolute top-20 left-10 w-8 h-8 opacity-30">
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400 animate-pulse">
            <path fill="currentColor" d="M12 2L13.09 8.26L19 7L14.74 11.74L21 13L14.74 14.26L19 19L13.09 17.74L12 24L10.91 17.74L5 19L9.26 14.26L3 13L9.26 11.74L5 7L10.91 8.26L12 2Z"/>
          </svg>
        </div>
        
        <div className="absolute top-40 right-20 w-6 h-6 opacity-25 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-emerald-400">
            <path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V4.5C15 3.1 13.9 2 12.5 2H11.5C10.1 2 9 3.1 9 4.5V6.5L3 7V9L9 8.5V21C9 22.1 10.1 23 11.5 23H12.5C13.9 23 15 22.1 15 21V8.5L21 9Z"/>
          </svg>
        </div>

        <div className="absolute bottom-32 left-1/4 w-10 h-10 opacity-20" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400">
            <path fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
          </svg>
        </div>

        <div className="absolute top-60 right-10 w-7 h-7 opacity-30 animate-spin" style={{ animationDuration: '8s' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-purple-400">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
          </svg>
        </div>

        <div className="absolute bottom-20 right-1/3 w-5 h-5 opacity-25 animate-pulse" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400">
            <path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
          </svg>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-emerald-900/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/5 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Concept to Completion</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From visionary concepts to flawless execution, we deliver transformative solutions with precision and excellence.
          </p>
        </div>

        <div className="mb-16 reveal flex justify-center">
          <img 
            src={dataAnalyticsWorkspace} 
            alt="Modern data analytics workspace with interactive dashboard, charts, and business intelligence displays" 
            className="rounded-2xl shadow-2xl"
            style={{ width: '56.25%' }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Envisioning */}
          <div className="text-center space-y-6 reveal" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Envisioning</h3>
            <p className="text-gray-300">Every great solution begins with a bold vision. We collaborate closely with our clients to understand their unique challenges and goals.</p>
          </div>

          {/* Engineering */}
          <div className="text-center space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Engineering</h3>
            <p className="text-gray-300">Once the vision is clear, we bring it to life through solid engineering. Our team builds enterprise-grade solutions that are scalable and secure.</p>
          </div>

          {/* Modernizing */}
          <div className="text-center space-y-6 reveal" style={{ animationDelay: '0.3s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center mx-auto">
              <RefreshCw className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Modernizing</h3>
            <p className="text-gray-300">As businesses grow, so must their technology. We breathe new life into legacy systems, modernizing applications and infrastructure.</p>
          </div>

          {/* Managing */}
          <div className="text-center space-y-6 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <CheckSquare className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Managing</h3>
            <p className="text-gray-300">Transformation doesn't end at deployment. We ensure ongoing performance, resilience, and innovation through proactive management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
