import { Brain, Zap, BarChart, Bot, Eye, Shield } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";

export default function AIMLPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">AI & Machine Learning</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Harness the power of artificial intelligence to automate processes, gain valuable insights, and drive innovation across your organization with cutting-edge ML solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI/ML Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive AI Solutions</h2>
            <p className="text-xl text-gray-300">
              From strategy to deployment - complete artificial intelligence transformation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Brain className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Machine Learning Models</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Custom ML models tailored to your business needs with advanced algorithms and predictive capabilities.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Supervised Learning</li>
                <li>• Unsupervised Learning</li>
                <li>• Deep Learning</li>
                <li>• Reinforcement Learning</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Bot className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Natural Language Processing</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Advanced NLP solutions for text analysis, chatbots, and language understanding applications.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Sentiment Analysis</li>
                <li>• Text Classification</li>
                <li>• Language Translation</li>
                <li>• Chatbot Development</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Computer Vision</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Intelligent image and video analysis for object detection, recognition, and automation.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Object Detection</li>
                <li>• Image Classification</li>
                <li>• Facial Recognition</li>
                <li>• OCR & Document Processing</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Forecast trends, behaviors, and outcomes with sophisticated predictive modeling techniques.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Demand Forecasting</li>
                <li>• Risk Assessment</li>
                <li>• Customer Behavior Prediction</li>
                <li>• Anomaly Detection</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">AI Automation</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Intelligent process automation that learns and adapts to optimize business workflows.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Robotic Process Automation</li>
                <li>• Intelligent Document Processing</li>
                <li>• Workflow Optimization</li>
                <li>• Decision Automation</li>
              </ul>
            </div>

            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Shield className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400 relative z-10">AI Ethics & Governance</h3>
              <p className="text-gray-300 mb-4 relative z-10">
                Responsible AI implementation with ethical guidelines, bias detection, and compliance frameworks.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Bias Detection & Mitigation</li>
                <li>• Explainable AI</li>
                <li>• Data Privacy Compliance</li>
                <li>• AI Governance Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our AI Development Process</h2>
            <p className="text-xl text-gray-300">
              Structured approach to AI implementation and deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Strategy</h3>
              <p className="text-gray-300">
                Assess data quality, identify sources, and establish data governance frameworks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Model Development</h3>
              <p className="text-gray-300">
                Design, train, and validate AI models using best practices and cutting-edge techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Integration & Testing</h3>
              <p className="text-gray-300">
                Integrate AI solutions with existing systems and conduct comprehensive testing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Deployment & Monitoring</h3>
              <p className="text-gray-300">
                Deploy to production with continuous monitoring and model performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">AI Implementation Results</h2>
          <p className="text-xl text-gray-300 mb-12">
            Delivering transformational outcomes through intelligent automation
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">80%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Cost Reduction</div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock AI's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how artificial intelligence can transform your business processes and drive innovation.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your AI Journey
          </Link>
        </div>
      </section>
    </div>
  );
}