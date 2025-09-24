import { Lightbulb, Code, RefreshCw, CheckSquare } from "lucide-react";
import { Link } from "wouter";
import dataAnalyticsWorkspace from "@assets/imagenew_1753913145151.png";

export default function FourPillarsSection() {
  return (
    <section className="py-20 bg-gray-900/50 zoom-container">
      <div className="wireframe-overlay"></div>
      <div className="morphing-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section" data-delay="0">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Concept to Completion</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From visionary concepts to flawless execution.
          </p>
        </div>

        <div className="mb-16 reveal-scale flex justify-center" data-delay="200">
          <img 
            src={dataAnalyticsWorkspace} 
            alt="Modern data analytics workspace with interactive dashboard, charts, and business intelligence displays" 
            className="rounded-2xl shadow-2xl"
            style={{ width: '56.25%' }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Envisioning */}
          <Link href="/about">
            <div className="text-center space-y-6 reveal-slide-left stagger-delay-1 cursor-pointer hover:scale-105 transition-transform duration-300" data-delay="100">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Envisioning</h3>
              <p className="text-gray-300">Every great solution begins with a bold vision. We collaborate closely with our clients to understand their unique challenges and goals.</p>
            </div>
          </Link>

          {/* Engineering */}
          <Link href="/services">
            <div className="text-center space-y-6 reveal-slide-right stagger-delay-2 cursor-pointer hover:scale-105 transition-transform duration-300" data-delay="200">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-emerald-500/50 transition-shadow">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Engineering</h3>
              <p className="text-gray-300">Once the vision is clear, we bring it to life through agile engineering principles. Our team builds enterprise-grade solutions that are scalable and secure.</p>
            </div>
          </Link>

          {/* Modernizing */}
          <Link href="/enterprise">
            <div className="text-center space-y-6 reveal-slide-left stagger-delay-3 cursor-pointer hover:scale-105 transition-transform duration-300" data-delay="300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-purple-500/50 transition-shadow">
                <RefreshCw className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Modernizing</h3>
              <p className="text-gray-300">As businesses grow, so must their technology. We breathe new life into legacy systems, modernizing applications and infrastructure.</p>
            </div>
          </Link>

          {/* Managing */}
          <Link href="/contact">
            <div className="text-center space-y-6 reveal-slide-right stagger-delay-4 cursor-pointer hover:scale-105 transition-transform duration-300" data-delay="400">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-amber-500/50 transition-shadow">
                <CheckSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Managing</h3>
              <p className="text-gray-300">Transformation doesn't end at deployment. We ensure ongoing performance, resilience, and innovation through proactive management.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
