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
          <div className="w-full h-64 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-900 via-teal-900 to-purple-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/20 to-purple-600/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent opacity-20">
                Concept → Completion
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-8 w-16 h-16 border border-cyan-400/30 rounded-full"></div>
            <div className="absolute bottom-4 right-8 w-20 h-20 border border-purple-400/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
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
