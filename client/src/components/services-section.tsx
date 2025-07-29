import { Cloud, Brain, BarChart, Users, Building, Database, Cog, Server } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harnessing Expertise for Transformative Solutions
          </p>
        </div>

        {/* Enterprise Solutions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">Enterprise Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* SalesForce */}
            <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.1s' }} onClick={() => window.location.href = '/enterprise'}>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Cloud className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">SalesForce</h4>
              <p className="text-gray-300 mb-6">AI-driven Salesforce solutions for tomorrow's enterprises. Transform customer relationships with intelligent automation.</p>
            </div>

            {/* ServiceNow */}
            <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.2s' }} onClick={() => window.location.href = '/enterprise'}>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Cog className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">ServiceNow</h4>
              <p className="text-gray-300 mb-6">Transform workflows with ServiceNow's cloud-based platform that streamlines operations and boosts productivity.</p>
            </div>

            {/* SAP */}
            <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.3s' }} onClick={() => window.location.href = '/enterprise'}>
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">SAP</h4>
              <p className="text-gray-300 mb-6">Enterprise resource planning solutions that integrate business processes and drive operational excellence.</p>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cloud Transformation */}
          <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.4s' }} onClick={() => window.location.href = '/services'}>
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
              <Server className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Cloud Transformation</h4>
            <p className="text-gray-300 mb-4">Migrate to the cloud with confidence and unlock scalability, flexibility, and cost optimization.</p>
          </div>

          {/* AI & ML */}
          <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.5s' }} onClick={() => window.location.href = '/services'}>
            <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
              <Brain className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">AI & Machine Learning</h4>
            <p className="text-gray-300 mb-4">Harness the power of artificial intelligence to automate processes and gain valuable insights.</p>
          </div>

          {/* Data Strategy */}
          <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.6s' }} onClick={() => window.location.href = '/services'}>
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
              <BarChart className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Data Strategy & Analytics</h4>
            <p className="text-gray-300 mb-4">Turn your data into actionable insights with advanced analytics and strategic data management.</p>
          </div>

          {/* Staff Augmentation */}
          <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.7s' }} onClick={() => window.location.href = '/services'}>
            <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Staff Augmentation</h4>
            <p className="text-gray-300 mb-4">Scale your team with top-tier talent and specialized expertise to accelerate project delivery.</p>
          </div>

          {/* Government Solutions */}
          <div className="group floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 reveal cursor-pointer transition-all duration-300" style={{ animationDelay: '0.8s' }} onClick={() => window.location.href = '/services'}>
            <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
              <Building className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Government Solutions</h4>
            <p className="text-gray-300 mb-4">Specialized solutions for government organizations with compliance, security, and efficiency in mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
