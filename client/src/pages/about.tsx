import { Users, Target, Award, Globe } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Procyon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative AI-powered solutions and cutting-edge digital services.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower organizations with transformative technology solutions that drive innovation, efficiency, and sustainable growth. We believe in harnessing the power of AI and modern technology to solve complex business challenges.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-400">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading partner for digital transformation, creating a future where technology seamlessly integrates with human potential to unlock unprecedented possibilities for businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Award className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every project, delivering solutions that exceed expectations and drive meaningful results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership, working closely with clients to understand their unique challenges and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Innovation</h3>
              <p className="text-gray-300">
                We embrace cutting-edge technologies and innovative approaches to solve tomorrow's challenges today.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Impact</h3>
              <p className="text-gray-300">
                We measure success by the positive impact our solutions have on businesses, communities, and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-gray-300">
              Our track record of success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-300">Expert Team Members</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to unlock your organization's full potential with innovative technology solutions.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}