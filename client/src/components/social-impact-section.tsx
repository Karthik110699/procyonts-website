import { Heart, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function SocialImpactSection() {
  return (
    <section id="social-impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Giving Back</span> to Society
            </h2>
            <p className="text-xl text-gray-300">
              When you build a better company, you can build a better world. Our commitment extends beyond technology to creating positive social impact in the communities we serve.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                  <p className="text-gray-300">Supporting local communities through technology education and digital literacy programs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Responsibility</h3>
                  <p className="text-gray-300">Promoting sustainable practices and green technology solutions for a better planet.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education Initiatives</h3>
                  <p className="text-gray-300">Empowering the next generation through STEM education and scholarship programs.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/social-impact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                View More Impact Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Community service and social impact initiatives" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
