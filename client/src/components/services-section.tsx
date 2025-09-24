import { Brain, BarChart, Users, Building, Server } from "lucide-react";
import { SiSalesforce, SiSap } from "react-icons/si";
import { ServiceNowLogo } from "@/components/servicenow-logo";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 zoom-container">
      <div className="wireframe-overlay"></div>
      <div className="morphing-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-fade-in" data-delay="0">
        <div className="text-center mb-16 reveal-fade" data-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harnessing Expertise for Transformative Solutions
          </p>
        </div>

        {/* Enterprise Solutions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-400 reveal-scale" data-delay="150">Enterprise Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Salesforce */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 reveal-slide-left stagger-delay-1 cursor-pointer transition-all duration-300" data-delay="200" onClick={() => {window.scrollTo(0, 0); window.location.href = '/enterprise/salesforce';}}>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors relative z-10">
                <SiSalesforce className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">Salesforce</h4>
              <div className="text-blue-300 text-sm font-semibold mb-2 relative z-10">40% faster case resolution, 25% faster quote cycles, HIPAA-ready Health Cloud.</div>
              <p className="text-gray-300 mb-6 relative z-10">AI-driven Salesforce solutions for tomorrow's enterprises. Transform customer relationships with intelligent automation, advanced analytics, and seamless integration capabilities.</p>
            </div>

            {/* ServiceNow */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 reveal-scale stagger-delay-2 cursor-pointer transition-all duration-300" data-delay="300" onClick={() => {window.scrollTo(0, 0); window.location.href = '/enterprise/servicenow';}}>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors relative z-10">
                <ServiceNowLogo className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">ServiceNow</h4>
              <div className="text-emerald-300 text-sm font-semibold mb-2 relative z-10">30% faster ticket resolution, 20% fewer SLA breaches, unified compliance.</div>
              <p className="text-gray-300 mb-6 relative z-10">Transform your workflows with ServiceNow's cloud-based platform that streamlines operations, automates tasks, and boosts productivity across your entire organization.</p>
            </div>

            {/* SAP */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 reveal-slide-right stagger-delay-3 cursor-pointer transition-all duration-300" data-delay="400" onClick={() => {window.scrollTo(0, 0); window.location.href = '/enterprise/sap';}}>
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors relative z-10">
                <SiSap className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">SAP</h4>
              <div className="text-purple-300 text-sm font-semibold mb-2 relative z-10">20% faster financial close cycles, 15% supply chain cost savings.</div>
              <p className="text-gray-300 mb-6 relative z-10">Enterprise resource planning solutions that integrate business processes and drive operational excellence with real-time insights and intelligent automation.</p>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-400 reveal-scale" data-delay="500">Core Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Government Solutions */}
          <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.4s' }} onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/government';}}>
            <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors relative z-10">
              <Building className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Government Solutions</h4>
            <div className="text-red-300 text-sm font-semibold mb-2 relative z-10">Secure, compliant IT solutions for federal/state agencies.</div>
            <p className="text-gray-300 mb-4 relative z-10">Specialized solutions for government organizations with compliance, security, and efficiency in mind.</p>
          </div>

          {/* Data Strategy & Analytics */}
          <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.5s' }} onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/data-analytics';}}>
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors relative z-10">
              <BarChart className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Data Strategy & Analytics</h4>
            <div className="text-purple-300 text-sm font-semibold mb-2 relative z-10">25–40% faster decision-making, 15–30% efficiency gains.</div>
            <p className="text-gray-300 mb-4 relative z-10">Unlock the full value of your data with comprehensive strategy, engineering, and analytics solutions that transform information into competitive advantage.</p>
          </div>

          {/* AI & Machine Learning */}
          <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.6s' }} onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/ai-ml';}}>
            <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors relative z-10">
              <Brain className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Artificial Intelligence</h4>
            <div className="text-emerald-300 text-sm font-semibold mb-2 relative z-10">Outcome-focused models with 95% prediction accuracy</div>
            <p className="text-gray-300 mb-4 relative z-10">Make AI work for real business outcomes with practical solutions that enhance productivity, improve decision-making, and future-proof operations.</p>
          </div>

          {/* Cloud Transformation & Optimization */}
          <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.7s' }} onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/cloud';}}>
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors relative z-10">
              <Server className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Cloud Transformation & Optimization</h4>
            <div className="text-blue-300 text-sm font-semibold mb-2 relative z-10">60% cost reduction, 99.9% uptime, 10x faster deployment.</div>
            <p className="text-gray-300 mb-4 relative z-10">Build the foundation for agility, security, and growth with comprehensive cloud transformation that drives measurable results.</p>
          </div>

          {/* Staff Augmentation & Workforce Solutions */}
          <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.8s' }} onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/staff-augmentation';}}>
            <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors relative z-10">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Staff Augmentation & Workforce Solutions</h4>
            <div className="text-amber-300 text-sm font-semibold mb-2 relative z-10">1–2 week rapid deployment, 30–50% cost savings with just in-time offerings</div>
            <p className="text-gray-300 mb-4 relative z-10">Access skilled IT professionals who bring the knowledge, agility, and experience needed to keep your projects moving forward.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
