import { Heart, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function SocialImpactSection() {
  return (
    <section id="social-impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Procyon Cares</span>
            </h2>
            <p className="text-xl text-gray-300">
              At Procyon, we believe that true growth is measured not only by business success but also by the positive impact we create in the communities around us. Through our CSR initiatives, we are committed to building a brighter, more compassionate, and sustainable future.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education for All</h3>
                  <p className="text-gray-300">Supporting the education of students from underprivileged families, ensuring they have access to quality learning and opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Caring for the Elderly & Orphans</h3>
                  <p className="text-gray-300">Extending support to old age homes and orphanages, providing care, companionship, and resources for those who need it most.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Responsibility</h3>
                  <p className="text-gray-300">Actively working on cleaning up lakes, slum areas, and public spaces, driving sustainable initiatives for healthier communities.</p>
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
