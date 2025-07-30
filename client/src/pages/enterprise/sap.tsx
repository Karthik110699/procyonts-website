import { Database, TrendingUp, Shield, Zap, BarChart, Globe } from "lucide-react";
import Navbar from "@/components/navbar";

export default function SAPPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Database className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">SAP Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Enterprise resource planning solutions that integrate business processes and drive operational excellence with real-time insights and intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SAP Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete SAP Ecosystem</h2>
            <p className="text-xl text-gray-300">
              From S/4HANA to SuccessFactors - comprehensive SAP transformation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">SAP S/4HANA</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Next-generation ERP suite with in-memory computing and real-time analytics.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Finance & Controlling</li>
                <li>• Sales & Distribution</li>
                <li>• Materials Management</li>
                <li>• Production Planning</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">SAP Analytics Cloud</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Comprehensive analytics platform for planning, predictive analytics, and business intelligence.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Business Intelligence</li>
                <li>• Predictive Analytics</li>
                <li>• Enterprise Planning</li>
                <li>• Data Visualization</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">SAP SuccessFactors</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Cloud-based human capital management suite for talent acquisition and development.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Employee Central</li>
                <li>• Recruiting & Onboarding</li>
                <li>• Performance Management</li>
                <li>• Learning Management</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">SAP Ariba</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Procurement and supply chain solutions for spend management and supplier collaboration.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Procurement Solutions</li>
                <li>• Supplier Management</li>
                <li>• Contract Management</li>
                <li>• Spend Analytics</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">SAP Concur</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Travel, expense, and invoice management solutions for streamlined financial processes.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Travel Management</li>
                <li>• Expense Reporting</li>
                <li>• Invoice Processing</li>
                <li>• Compliance Monitoring</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Globe className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">SAP Integration</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Seamless integration with existing systems and third-party applications.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• API Management</li>
                <li>• Data Migration</li>
                <li>• Legacy System Integration</li>
                <li>• Cloud Connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our SAP Implementation Methodology</h2>
            <p className="text-xl text-gray-300">
              Proven approach for successful SAP transformations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Strategic Planning</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Business Assessment:</strong>
                    <span className="text-gray-300"> Comprehensive analysis of current processes</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Roadmap Development:</strong>
                    <span className="text-gray-300"> Strategic transformation timeline</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Risk Mitigation:</strong>
                    <span className="text-gray-300"> Proactive risk identification and planning</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Best Practices:</strong>
                    <span className="text-gray-300"> Industry-standard configuration and customization</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Quality Assurance:</strong>
                    <span className="text-gray-300"> Comprehensive testing and validation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Performance Optimization:</strong>
                    <span className="text-gray-300"> System tuning for optimal performance</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">SAP Transformation Results</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our SAP implementations deliver measurable business transformation
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">75%</div>
              <div className="text-gray-300">Faster Financial Closing</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-gray-300">Reduction in Manual Processes</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">90%</div>
              <div className="text-gray-300">Real-time Data Visibility</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">200%</div>
              <div className="text-gray-300">ROI Within 24 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how SAP can streamline your business processes and drive operational excellence.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your SAP Journey
          </Link>
        </div>
      </section>
    </div>
  );
}