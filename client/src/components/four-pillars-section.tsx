import { Lightbulb, Code, RefreshCw, CheckSquare } from "lucide-react";
import dataAnalyticsWorkspace from "@assets/2151966696_1753912619747.jpg";

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
