import { Settings, Workflow, Clock, Shield, Users, Zap } from "lucide-react";
import Navbar from "@/components/navbar";

export default function ServiceNowPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center">
              <Settings className="w-10 h-10 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">ServiceNow Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Transform your workflows with ServiceNow's cloud-based platform that streamlines operations, automates tasks, and boosts productivity across your entire organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete ServiceNow Platform</h2>
            <p className="text-xl text-gray-300">
              End-to-end service management solutions for modern enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Workflow className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">IT Service Management</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Streamline IT operations with automated incident, problem, and change management.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Incident Management</li>
                <li>• Problem Management</li>
                <li>• Change Management</li>
                <li>• Asset Management</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">IT Operations Management</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Proactive monitoring and management of IT infrastructure and applications.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Performance Monitoring</li>
                <li>• Event Management</li>
                <li>• Discovery & Mapping</li>
                <li>• Capacity Planning</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Customer Service Management</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Deliver exceptional customer experiences with unified service delivery.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Customer Portal</li>
                <li>• Case Management</li>
                <li>• Knowledge Base</li>
                <li>• SLA Management</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Security Operations</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Comprehensive security incident response and vulnerability management.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Security Incident Response</li>
                <li>• Vulnerability Management</li>
                <li>• Threat Intelligence</li>
                <li>• GRC & Compliance</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">HR Service Delivery</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Modernize HR processes with self-service portals and automated workflows.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Employee Onboarding</li>
                <li>• Case Management</li>
                <li>• Performance Management</li>
                <li>• Knowledge Management</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Settings className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">Business Process Automation</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Automate complex business processes with no-code/low-code solutions.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Workflow Automation</li>
                <li>• Process Mining</li>
                <li>• RPA Integration</li>
                <li>• AI-Powered Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose ServiceNow</h2>
            <p className="text-xl text-gray-300">
              Transform your business with intelligent automation and seamless workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Operational Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Unified Platform:</strong>
                    <span className="text-gray-300"> Single platform for all enterprise workflows</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">AI-Powered:</strong>
                    <span className="text-gray-300"> Machine learning for predictive insights</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Scalable:</strong>
                    <span className="text-gray-300"> Grows with your business needs</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Business Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Faster Resolution:</strong>
                    <span className="text-gray-300"> 50% reduction in incident resolution time</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Cost Savings:</strong>
                    <span className="text-gray-300"> 30% reduction in operational costs</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">User Satisfaction:</strong>
                    <span className="text-gray-300"> 40% improvement in employee experience</span>
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
          <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our ServiceNow implementations deliver transformational outcomes
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Service Delivery</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">First-Call Resolution Rate</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Reduction in Manual Tasks</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Within 18 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how ServiceNow can transform your business processes and boost productivity.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}