import { Users, MapPin, Clock, DollarSign, Code, Brain, Shield } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Join Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Build the future of technology with us. We're looking for passionate individuals who want to make a difference through innovation and collaboration.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Procyon?</h2>
            <p className="text-xl text-gray-300">
              More than just a job - it's a career-defining opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Innovation First</h3>
              <p className="text-gray-300">
                Work with cutting-edge technologies and shape the future of AI and cloud solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Collaborative Culture</h3>
              <p className="text-gray-300">
                Join a diverse team of experts who value collaboration, learning, and mutual success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Competitive Benefits</h3>
              <p className="text-gray-300">
                Comprehensive benefits package including health, dental, vision, and equity opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Growth & Learning</h3>
              <p className="text-gray-300">
                Continuous learning opportunities, mentorship programs, and clear career advancement paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300">
              Find your next opportunity
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Software Engineer */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">Senior Software Engineer</h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Remote / Hybrid
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Full-time
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          $120k - $180k
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Join our engineering team to build scalable, AI-powered solutions. Work with React, Node.js, Python, and cloud technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">AWS</span>
                  </div>
                </div>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Data Scientist */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-400">Senior Data Scientist</h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Remote / On-site
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Full-time
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          $130k - $200k
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Lead AI/ML initiatives and develop intelligent solutions. Work with Python, TensorFlow, and big data technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">PyTorch</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">SQL</span>
                  </div>
                </div>
                <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* DevOps Engineer */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400">DevOps Engineer</h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Remote
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Full-time
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          $110k - $160k
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Build and maintain cloud infrastructure, CI/CD pipelines, and ensure system reliability and security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Kubernetes</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Docker</span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Terraform</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">AWS</span>
                  </div>
                </div>
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-gray-300">
              Simple, transparent, and focused on finding the right fit
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-gray-300 text-sm">Submit your application and tell us about yourself</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-400">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Screen</h3>
              <p className="text-gray-300 text-sm">Initial conversation to learn more about your background</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Interview</h3>
              <p className="text-gray-300 text-sm">Technical and cultural fit interviews with team members</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-400">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Offer</h3>
              <p className="text-gray-300 text-sm">Welcome to the team! Let's build the future together</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for exceptional talent. Send us your resume and let's discuss opportunities.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}