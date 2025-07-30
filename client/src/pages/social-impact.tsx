import { Heart, Leaf, GraduationCap, Users, Globe, Target, Award, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";

export default function SocialImpactPage() {
  const initiatives = [
    {
      title: "Community Technology Centers",
      description: "Building digital literacy through community-based technology centers in underserved areas.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Heart,
      color: "emerald",
      stats: "15+ Centers Built",
      impact: "5,000+ Lives Touched"
    },
    {
      title: "Green Cloud Initiative",
      description: "Promoting carbon-neutral cloud infrastructure and sustainable technology practices.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Leaf,
      color: "blue",
      stats: "40% Carbon Reduction",
      impact: "1M+ CO2 Tons Saved"
    },
    {
      title: "STEM Education Program",
      description: "Scholarship programs and coding bootcamps for underprivileged students worldwide.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: GraduationCap,
      color: "purple",
      stats: "500+ Scholarships",
      impact: "85% Job Placement Rate"
    },
    {
      title: "Digital Inclusion Project",
      description: "Bridging the digital divide through free internet access and device distribution.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: Globe,
      color: "cyan",
      stats: "25 Communities Connected",
      impact: "10,000+ Devices Distributed"
    }
  ];

  const videos = [
    {
      title: "Community Impact Story",
      thumbnail: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      duration: "3:45"
    },
    {
      title: "Environmental Initiatives", 
      thumbnail: "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      duration: "2:30"
    },
    {
      title: "Education Program Success",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      duration: "4:12"
    }
  ];

  return (
    <div className="bg-procyon-dark text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-emerald-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Giving Back</span> to Society
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment extends beyond technology to creating positive social impact in the communities we serve. When you build a better company, you can build a better world.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-gray-300">Years of Community Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50,000+</div>
              <div className="text-gray-300">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">$5M+</div>
              <div className="text-gray-300">Invested in Communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-300">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Key Initiatives</h2>
            <p className="text-xl text-gray-300">Making a difference through technology and community engagement</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 border border-gray-600 relative z-10">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                        initiative.color === 'emerald' ? 'bg-emerald-500/30' :
                        initiative.color === 'blue' ? 'bg-blue-500/30' :
                        initiative.color === 'purple' ? 'bg-purple-500/30' :
                        'bg-cyan-500/30'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          initiative.color === 'emerald' ? 'text-emerald-200' :
                          initiative.color === 'blue' ? 'text-blue-200' :
                          initiative.color === 'purple' ? 'text-purple-200' :
                          'text-cyan-200'
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold">{initiative.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-300 mb-6">{initiative.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-400">Progress</div>
                        <div className="font-semibold">{initiative.stats}</div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-sm text-gray-400">Impact</div>
                        <div className="font-semibold">{initiative.impact}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Impact Stories</h2>
            <p className="text-xl text-gray-300">See how we're making a difference in communities worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl group cursor-pointer hover:scale-105 transition-all duration-500 border border-gray-600 relative z-10">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl flex items-center justify-center relative z-20">
                  <div className="text-white text-center p-4 relative z-30">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                    <div className="bg-black/30 px-3 py-1 rounded-full text-sm inline-block">
                      {video.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with us to create meaningful change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
            </Link>
            <Link 
              href="/careers" 
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Procyon Technostructure. Making a difference through technology.</p>
        </div>
      </footer>
    </div>
  );
}