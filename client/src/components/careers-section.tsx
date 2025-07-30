export default function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 reveal">
          <h2 className="text-4xl md:text-5xl font-bold">
            Reinventing <span className="gradient-text">Careers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We aim to boost a culture of self-mastery with endless possibilities. By exploring five professional development dimensions, we empower our team to be the owners of their careers.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="Cosmic digital transformation with floating holographic interfaces and collaborative AI workspaces" 
            className="w-full rounded-2xl shadow-2xl mx-auto"
          />
          <a href="#careers" className="inline-block border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Explore Careers
          </a>
        </div>
      </div>
    </section>
  );
}
