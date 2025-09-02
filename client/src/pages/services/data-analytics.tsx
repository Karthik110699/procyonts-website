import { BarChart, Database, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      {/* Floating Stars Background */}
      <div className="floating-stars-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`floating-star star-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="star-svg"
            >
              <path
                d="M12 2L14.09 8.26L20 8.26L15.64 11.74L17.73 18L12 14.52L6.27 18L8.36 11.74L4 8.26L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>
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
                Unlock the full value of your data with comprehensive strategy, engineering, and analytics solutions. We help businesses move from data collection to data intelligence, transforming information into strategic assets that drive competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Analytics Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Comprehensive Data Methodology</h2>
            <p className="text-xl text-gray-300">
              A proven four-phase approach that transforms how your organization thinks about and uses data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Data Strategy & Consulting</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Collaborate with your leadership team to create clear, actionable data roadmaps that transform how your organization captures, stores, and uses data.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Data Maturity Assessments</li>
                <li>• Governance Frameworks</li>
                <li>• Scalable Data Strategies</li>
                <li>• Business Context Analysis</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Data Engineering & Architecture</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Design and implement modern, cloud-native data architectures with scalable, fault-tolerant pipelines that grow with your business.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Modern Data Warehouses</li>
                <li>• Data Lakes & Lakehouses</li>
                <li>• Real-time Streaming Platforms</li>
                <li>• ETL/ELT Pipeline Development</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Advanced Analytics & Business Intelligence</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Powerful insights with dashboards, visualization tools, and machine learning-backed analytics that predict trends and identify opportunities.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Descriptive & Predictive Analytics</li>
                <li>• Prescriptive Analytics</li>
                <li>• Real-time Analytics</li>
                <li>• Interactive BI Dashboards</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Globe className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Data Governance, Quality & Compliance</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Build frameworks that maintain high data quality, security, and compliance with industry regulations like GDPR, HIPAA, and ISO standards.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• GDPR & HIPAA Compliance</li>
                <li>• SOX & ISO 27001 Frameworks</li>
                <li>• Automated Data Quality Checks</li>
                <li>• Data Stewardship & Ownership</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Key Technologies We Work With</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Modern data platforms and tools that enable enterprise-grade data processing and analytics capabilities.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Snowflake, Amazon Redshift, BigQuery</li>
                <li>• Delta Lake, Apache Iceberg</li>
                <li>• Apache Airflow, Talend, Informatica</li>
                <li>• Apache Kafka, Amazon Kinesis</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">Architecture Benefits</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Systems designed for performance, reliability, and cost-efficiency that scale with your data volume and complexity.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• 99.9% Uptime with Auto-recovery</li>
                <li>• Fast Query Response Times</li>
                <li>• 40% Operational Cost Reduction</li>
                <li>• Unlimited Scalability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Platforms */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Modern Data Technologies</h2>
            <p className="text-xl text-gray-300">
              Enterprise-grade platforms for data warehousing, streaming, and analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-orange-400">Snowflake</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Snowflake</h3>
              <p className="text-gray-300 text-sm">Cloud data warehouse for analytics workloads</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-blue-400">BigQuery</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Google BigQuery</h3>
              <p className="text-gray-300 text-sm">Serverless data warehouse for analytics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-emerald-400">Kafka</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Apache Kafka</h3>
              <p className="text-gray-300 text-sm">Real-time streaming platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-purple-400">Airflow</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Apache Airflow</h3>
              <p className="text-gray-300 text-sm">Workflow automation and orchestration</p>
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
              <div className="text-4xl font-bold text-purple-400 mb-2">25-40%</div>
              <div className="text-gray-300">Decision-Making Speed Improvement</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15-30%</div>
              <div className="text-gray-300">Operational Efficiency Increase</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime Achievement</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction Typical</div>
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