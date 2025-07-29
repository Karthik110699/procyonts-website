export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-procyon-dark/90 to-blue-900/70"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block gradient-text">AI in the cloud</span>
            <span className="block text-white">where innovation meets</span>
            <span className="block gradient-text typing-effect">intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Leverage cloud-based AI to unlock real-time insights, boost innovation, and stay agile in a fast-changing market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </a>
            <a href="#services" className="border-2 border-blue-600 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-amber-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
