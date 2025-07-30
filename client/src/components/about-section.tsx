import { useCounterAnimation } from "@/hooks/use-counter-animation";
import aibrainImage from "@assets/Trial1_1753910986636.png";

export default function AboutSection() {
  const { count: projectsCount, ref: projectsRef } = useCounterAnimation(1200, 2000);
  const { count: expertsCount, ref: expertsRef } = useCounterAnimation(250, 2000);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80 zoom-container">
      <div className="wireframe-overlay"></div>
      <div className="morphing-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-slide-up" data-delay="0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-slide-left" data-delay="200">
            <img 
              src={aibrainImage} 
              alt="AI brain with neural network connections and data analytics dashboards showing intelligent insights" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8 reveal-slide-right" data-delay="300">
            <div className="space-y-4">
              <h3 className="text-blue-400 font-semibold text-lg">Value-driven approach</h3>
              <h2 className="text-4xl md:text-5xl font-bold">What we do</h2>
              <p className="text-xl text-gray-300">
                Founded in 2004, Procyon empowers its customers to re-imagine the way they do business to maximize their ROI and drive growth through innovative technology solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <div className="text-blue-400 font-semibold">Innovation</div>
                  <div className="text-blue-400 font-semibold">Visionary thinking</div>
                  <div className="text-blue-400 font-semibold">Idea-to-market delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-emerald-400 font-semibold">Product strategy</div>
                  <div className="text-emerald-400 font-semibold">Enterprise architecture</div>
                  <div className="text-emerald-400 font-semibold">Digital strategy</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center" ref={projectsRef}>
                <div className="text-4xl font-bold gradient-text">{projectsCount}+</div>
                <p className="text-gray-400 mt-2">Projects Countless Successes</p>
              </div>
              <div className="text-center" ref={expertsRef}>
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
