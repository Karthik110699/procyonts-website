import { BarChart, Database, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <BarChart className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Data Strategy & Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Turn your data into actionable insights with advanced analytics and strategic data management. Build a data-driven culture that accelerates decision-making and business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Analytics Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Data Solutions</h2>
            <p className="text-xl text-gray-300">
              From data strategy to advanced analytics - complete data transformation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Data Architecture</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Design and implement scalable data architectures that support your business objectives.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Data Warehouse Design</li>
                <li>• Data Lake Implementation</li>
                <li>• ETL/ELT Pipelines</li>
                <li>• Real-time Data Streaming</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Business Intelligence</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Transform raw data into meaningful insights with interactive dashboards and reports.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Interactive Dashboards</li>
                <li>• KPI Monitoring</li>
                <li>• Ad-hoc Reporting</li>
                <li>• Self-Service Analytics</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Leverage statistical analysis and machine learning for deeper business insights.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Statistical Analysis</li>
                <li>• Predictive Modeling</li>
                <li>• Cohort Analysis</li>
                <li>• A/B Testing</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Globe className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Data Integration</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Seamlessly connect and integrate data from multiple sources and systems.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• API Integration</li>
                <li>• Database Connectivity</li>
                <li>• Cloud Data Sources</li>
                <li>• Legacy System Integration</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Real-time Analytics</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Monitor and analyze data in real-time for immediate insights and rapid decision-making.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Stream Processing</li>
                <li>• Live Dashboards</li>
                <li>• Alert Systems</li>
                <li>• Event-driven Analytics</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">Data Governance</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Establish data quality, security, and compliance frameworks for trusted analytics.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Data Quality Management</li>
                <li>• Privacy & Compliance</li>
                <li>• Access Controls</li>
                <li>• Data Lineage Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Platforms */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leading Analytics Platforms</h2>
            <p className="text-xl text-gray-300">
              Expertise across industry-leading data and analytics tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-orange-400">Tableau</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Tableau</h3>
              <p className="text-gray-300 text-sm">Visual analytics and business intelligence platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-blue-400">Power BI</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Power BI</h3>
              <p className="text-gray-300 text-sm">Microsoft's business analytics solution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-emerald-400">Qlik</span>
              </div>
              <h3 className="text-lg font-bold mb-2">QlikView/QlikSense</h3>
              <p className="text-gray-300 text-sm">Associative analytics and data discovery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-purple-400">Looker</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Looker</h3>
              <p className="text-gray-300 text-sm">Modern BI and data platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Data Analytics Impact</h2>
          <p className="text-xl text-gray-300 mb-12">
            Measurable business outcomes through data-driven decision making
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Decision Making</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
              <div className="text-gray-300">Data Accuracy Improvement</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">45%</div>
              <div className="text-gray-300">Operational Efficiency Gain</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">220%</div>
              <div className="text-gray-300">ROI Within 15 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Value?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how data analytics can transform your business intelligence and drive growth.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Data Journey
          </Link>
        </div>
      </section>
    </div>
  );
}