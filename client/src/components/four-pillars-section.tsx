import { Lightbulb, Code, RefreshCw, CheckSquare } from "lucide-react";
import abstractAiImage from "@assets/image_1753911400691.png";

export default function FourPillarsSection() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Concept to Completion</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From visionary concepts to flawless execution, we deliver transformative solutions with precision and excellence.
          </p>
        </div>

        <div className="mb-16 reveal">
          <div className="w-full h-64 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20"></div>
            
            {/* Neural Network Pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" fill="none">
              {/* Network nodes */}
              <circle cx="100" cy="150" r="8" fill="#60A5FA" className="animate-pulse">
                <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="250" cy="80" r="6" fill="#34D399" className="animate-pulse"/>
              <circle cx="250" cy="220" r="6" fill="#FBBF24" className="animate-pulse"/>
              <circle cx="400" cy="120" r="8" fill="#A78BFA" className="animate-pulse">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="400" cy="180" r="6" fill="#F472B6" className="animate-pulse"/>
              <circle cx="550" cy="100" r="8" fill="#60A5FA" className="animate-pulse"/>
              <circle cx="550" cy="200" r="6" fill="#34D399" className="animate-pulse"/>
              <circle cx="700" cy="150" r="10" fill="#FBBF24" className="animate-pulse">
                <animate attributeName="r" values="8;14;8" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              
              {/* Connecting lines */}
              <line x1="100" y1="150" x2="250" y2="80" stroke="url(#grad1)" strokeWidth="2" opacity="0.6"/>
              <line x1="100" y1="150" x2="250" y2="220" stroke="url(#grad2)" strokeWidth="2" opacity="0.6"/>
              <line x1="250" y1="80" x2="400" y2="120" stroke="url(#grad3)" strokeWidth="2" opacity="0.6"/>
              <line x1="250" y1="220" x2="400" y2="180" stroke="url(#grad4)" strokeWidth="2" opacity="0.6"/>
              <line x1="400" y1="120" x2="550" y2="100" stroke="url(#grad5)" strokeWidth="2" opacity="0.6"/>
              <line x1="400" y1="180" x2="550" y2="200" stroke="url(#grad6)" strokeWidth="2" opacity="0.6"/>
              <line x1="550" y1="100" x2="700" y2="150" stroke="url(#grad7)" strokeWidth="2" opacity="0.6"/>
              <line x1="550" y1="200" x2="700" y2="150" stroke="url(#grad8)" strokeWidth="2" opacity="0.6"/>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#F472B6" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F472B6" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>
            
            {/* Floating particles */}
            <div className="absolute top-8 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-12 left-32 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 right-16 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            
            {/* Central AI text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-30">
                AI
              </div>
            </div>
          </div>
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
