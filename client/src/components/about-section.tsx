import { useCounterAnimation } from "@/hooks/use-counter-animation";

export default function AboutSection() {
  const projectsCount = useCounterAnimation(500, 2000);
  const expertsCount = useCounterAnimation(100, 2000);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Holographic AI interface with floating data visualizations and quantum computing elements" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8 reveal">
            <div className="space-y-4">
              <h3 className="text-blue-400 font-semibold text-lg">Who we are</h3>
              <h2 className="text-4xl md:text-5xl font-bold">Building the Digital Bridge for Tomorrow</h2>
              <p className="text-xl text-gray-300">
                Founded in 2004, Procyon Technostructure was established to guide organizations across industries toward successful digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">{projectsCount}+</div>
                <p className="text-gray-400 mt-2">Projects Countless Successes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">{expertsCount}+</div>
                <p className="text-gray-400 mt-2">Experts, Globally Connected</p>
              </div>
            </div>
            
            <a href="#about" className="inline-block border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Know more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
