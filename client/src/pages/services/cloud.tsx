import { Server, Shield, Zap, Globe, Database, Settings } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CloudPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden relative">
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
      <div className="pt-20 pb-10 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center reveal-scale">
              <Server className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 reveal-slide-left" data-delay="200">
                <span className="gradient-text">Cloud Transformation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl reveal-fade" data-delay="400">
                Migrate to the cloud with confidence and unlock scalability, flexibility, and cost optimization. Our comprehensive cloud services accelerate your digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Cloud Solutions</h2>
            <p className="text-xl text-gray-300">
              From strategy to implementation - comprehensive cloud transformation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Cloud Migration</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Seamless migration of applications and data to AWS, Azure, or Google Cloud platforms.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Application Assessment</li>
                <li>• Migration Planning</li>
                <li>• Data Transfer</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Cloud-Native Development</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Build scalable, resilient applications designed specifically for cloud environments.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Microservices Architecture</li>
                <li>• Containerization</li>
                <li>• Serverless Computing</li>
                <li>• API-First Design</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">DevOps & CI/CD</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Automated deployment pipelines for faster, more reliable software delivery.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Infrastructure as Code</li>
                <li>• Automated Testing</li>
                <li>• Continuous Integration</li>
                <li>• Monitoring & Alerting</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Cloud Security</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Comprehensive security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Identity & Access Management</li>
                <li>• Data Encryption</li>
                <li>• Network Security</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Database className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Data Management</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Modern data platforms for analytics, machine learning, and business intelligence.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Data Lakes & Warehouses</li>
                <li>• Real-time Analytics</li>
                <li>• Data Pipeline Automation</li>
                <li>• ML/AI Integration</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">Performance Optimization</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Optimize cloud infrastructure for maximum performance and cost efficiency.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Cost Optimization</li>
                <li>• Auto-scaling</li>
                <li>• Load Balancing</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Multi-Cloud Expertise</h2>
            <p className="text-xl text-gray-300">
              Certified experts across all major cloud platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-400">AWS</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Amazon Web Services</h3>
              <p className="text-gray-300 mb-4">
                Complete AWS ecosystem including EC2, S3, Lambda, RDS, and advanced services like SageMaker and Bedrock.
              </p>
              <div className="text-sm text-orange-400">Advanced Consulting Partner</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">Azure</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Microsoft Azure</h3>
              <p className="text-gray-300 mb-4">
                Full Azure stack including Virtual Machines, App Services, Azure AI, and enterprise integration with Microsoft 365.
              </p>
              <div className="text-sm text-blue-400">Gold Partner</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-400">GCP</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Google Cloud Platform</h3>
              <p className="text-gray-300 mb-4">
                Google Cloud services including Compute Engine, BigQuery, Vertex AI, and Kubernetes Engine for modern applications.
              </p>
              <div className="text-sm text-emerald-400">Premier Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Cloud Transformation Impact</h2>
          <p className="text-xl text-gray-300 mb-12">
            Delivering measurable results across all cloud initiatives
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Achievement</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Deployment</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">180%</div>
              <div className="text-gray-300">ROI Within 12 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Cloud Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how cloud transformation can unlock new possibilities for your business.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Cloud Migration
          </Link>
        </div>
      </section>
    </div>
  );
}