import { ArrowLeft, Cloud, CheckCircle, Zap, Users, BarChart, Shield, Globe } from "lucide-react";
import { Link } from "wouter";

export default function SalesforcePage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/enterprise" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Enterprise
          </Link>
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Cloud className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Salesforce Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Transform your customer relationships with AI-driven Salesforce solutions designed for tomorrow's enterprises. Build intelligent, automated workflows that drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Salesforce Services</h2>
            <p className="text-xl text-gray-300">
              End-to-end Salesforce implementation, customization, and optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Custom Implementation</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Tailored Salesforce setup aligned with your business processes and objectives.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Sales Cloud Configuration</li>
                <li>• Service Cloud Setup</li>
                <li>• Marketing Cloud Integration</li>
                <li>• Custom Object Creation</li>
              </ul>
            </div>

            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">AI-Powered Insights</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Leverage Einstein AI to predict customer behavior and optimize sales processes.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Einstein Lead Scoring</li>
                <li>• Predictive Analytics</li>
                <li>• Automated Recommendations</li>
                <li>• Customer Journey Mapping</li>
              </ul>
            </div>

            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Real-time dashboards and reports that provide actionable business insights.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Custom Dashboard Creation</li>
                <li>• Real-time Reporting</li>
                <li>• Performance Metrics</li>
                <li>• ROI Tracking</li>
              </ul>
            </div>

            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Security & Compliance</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Enterprise-grade security with compliance for regulatory requirements.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• GDPR Compliance</li>
                <li>• SOC 2 Certification</li>
                <li>• Data Encryption</li>
                <li>• Access Controls</li>
              </ul>
            </div>

            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Globe className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Third-Party Integration</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Seamless integration with existing systems and third-party applications.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• ERP Integration</li>
                <li>• Marketing Automation</li>
                <li>• Financial Systems</li>
                <li>• Custom API Development</li>
              </ul>
            </div>

            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">Ongoing Support</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                24/7 support and maintenance to ensure optimal performance and ROI.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• 24/7 Technical Support</li>
                <li>• Regular Health Checks</li>
                <li>• Performance Optimization</li>
                <li>• User Training Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Implementation Process</h2>
            <p className="text-xl text-gray-300">
              A proven methodology for successful Salesforce deployments
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery & Planning</h3>
              <p className="text-gray-300">
                Understand your business requirements, current processes, and define project scope.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Configuration</h3>
              <p className="text-gray-300">
                Create custom solutions, configure workflows, and design user interfaces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Testing & Training</h3>
              <p className="text-gray-300">
                Comprehensive testing, user acceptance, and team training for smooth adoption.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Launch & Support</h3>
              <p className="text-gray-300">
                Go-live support, performance monitoring, and ongoing optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our Salesforce implementations deliver measurable business impact
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-gray-300">Increase in Sales Productivity</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Lead Response Time</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Improvement in Customer Satisfaction</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">250%</div>
              <div className="text-gray-300">ROI Within 12 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our Salesforce expertise can accelerate your business growth.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}