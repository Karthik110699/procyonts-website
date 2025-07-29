import { Cloud, Brain, BarChart, Users, Building, Database, Cog, Server } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powered by Procyon</span>
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
            <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">SalesForce</h4>
              <p className="text-gray-300 mb-6">AI-driven Salesforce solutions for tomorrow's enterprises. Transform customer relationships with intelligent automation.</p>
              <div className="text-sm text-blue-400 font-semibold mb-4">Powered by Procyon</div>
              <a href="#salesforce" className="text-blue-400 hover:text-blue-300 font-semibold">Learn More →</a>
            </div>

            {/* ServiceNow */}
            <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">ServiceNow</h4>
              <p className="text-gray-300 mb-6">Transform workflows with ServiceNow's cloud-based platform that streamlines operations and boosts productivity.</p>
              <div className="text-sm text-emerald-400 font-semibold mb-4">Powered by Procyon</div>
              <a href="#servicenow" className="text-emerald-400 hover:text-emerald-300 font-semibold">Learn More →</a>
            </div>

            {/* SAP */}
            <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">SAP</h4>
              <p className="text-gray-300 mb-6">Enterprise resource planning solutions that integrate business processes and drive operational excellence.</p>
              <div className="text-sm text-purple-400 font-semibold mb-4">Powered by Procyon</div>
              <a href="#sap" className="text-purple-400 hover:text-purple-300 font-semibold">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cloud Transformation */}
          <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Cloud Transformation</h4>
            <p className="text-gray-300 mb-4">Migrate to the cloud with confidence and unlock scalability, flexibility, and cost optimization.</p>
            <div className="text-sm text-blue-400 font-semibold">Powered by Procyon</div>
          </div>

          {/* AI & ML */}
          <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">AI & Machine Learning</h4>
            <p className="text-gray-300 mb-4">Harness the power of artificial intelligence to automate processes and gain valuable insights.</p>
            <div className="text-sm text-emerald-400 font-semibold">Powered by Procyon</div>
          </div>

          {/* Data Strategy */}
          <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Data Strategy & Analytics</h4>
            <p className="text-gray-300 mb-4">Turn your data into actionable insights with advanced analytics and strategic data management.</p>
            <div className="text-sm text-purple-400 font-semibold">Powered by Procyon</div>
          </div>

          {/* Staff Augmentation */}
          <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.7s' }}>
            <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Staff Augmentation</h4>
            <p className="text-gray-300 mb-4">Scale your team with top-tier talent and specialized expertise to accelerate project delivery.</p>
            <div className="text-sm text-amber-400 font-semibold">Powered by Procyon</div>
          </div>

          {/* Government Solutions */}
          <div className="floating-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
              <Building className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="text-xl font-bold mb-4">Government Solutions</h4>
            <p className="text-gray-300 mb-4">Specialized solutions for government organizations with compliance, security, and efficiency in mind.</p>
            <div className="text-sm text-red-400 font-semibold">Powered by Procyon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
