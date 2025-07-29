import { Cloud, Settings, Database, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Enterprise Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your enterprise with our comprehensive suite of solutions designed for scale, security, and performance.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* SalesForce */}
            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/enterprise/salesforce'}>
              <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                <Cloud className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400 relative z-10">SalesForce</h2>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                AI-driven Salesforce solutions for tomorrow's enterprises. Transform customer relationships with intelligent automation, advanced analytics, and seamless integration capabilities.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Custom Salesforce Implementation</li>
                  <li>• AI-Powered Customer Insights</li>
                  <li>• Automated Workflow Integration</li>
                  <li>• Advanced Analytics & Reporting</li>
                  <li>• Mobile-First Solutions</li>
                  <li>• Third-Party System Integration</li>
                </ul>
              </div>
            </div>

            {/* ServiceNow */}
            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/enterprise/servicenow'}>
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                <Settings className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-400 relative z-10">ServiceNow</h2>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                Transform your workflows with ServiceNow's cloud-based platform that streamlines operations, automates tasks, and boosts productivity across your entire organization.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IT Service Management (ITSM)</li>
                  <li>• IT Operations Management (ITOM)</li>
                  <li>• Customer Service Management</li>
                  <li>• HR Service Delivery</li>
                  <li>• Security Operations</li>
                  <li>• Business Process Automation</li>
                </ul>
              </div>
            </div>

            {/* SAP */}
            <div className="dynamic-stroke bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 cursor-pointer transition-all duration-300" onClick={() => window.location.href = '/enterprise/sap'}>
              <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                <Database className="w-10 h-10 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400 relative z-10">SAP</h2>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                Enterprise resource planning solutions that integrate business processes and drive operational excellence with real-time insights and intelligent automation.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SAP S/4HANA Implementation</li>
                  <li>• Business Process Integration</li>
                  <li>• Financial Management</li>
                  <li>• Supply Chain Optimization</li>
                  <li>• Human Capital Management</li>
                  <li>• Real-time Analytics</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can drive your business forward.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}