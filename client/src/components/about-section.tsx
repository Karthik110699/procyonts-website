import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { Link } from "wouter";
import aibrainImage from "@assets/Trial1_1753910986636.png";

export default function AboutSection() {
  const { count: projectsCount, ref: projectsRef } = useCounterAnimation(200, 2000);
  const { count: expertsCount, ref: expertsRef } = useCounterAnimation(75, 2000);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80 zoom-container">
      <div className="wireframe-overlay"></div>
      <div className="morphing-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-slide-up" data-delay="0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-slide-left lg:order-1 order-2" data-delay="200">
            <img 
              src={aibrainImage} 
              alt="AI brain with neural network connections and data analytics dashboards showing intelligent insights" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8 reveal-slide-right lg:order-2 order-1" data-delay="300">
            <div className="space-y-4">
              <h3 className="text-blue-400 font-semibold text-lg">Value-driven approach</h3>
              <h2 className="text-4xl md:text-5xl font-bold">What we do</h2>
              <p className="text-xl text-gray-300">
                At Procyon, we turn ideas into market-ready solutions, deliver enterprise technology that scales, and provide the right talent to drive digital growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <div className="text-blue-400 font-semibold">Innovation</div>
                  <div className="text-blue-400 font-semibold">Visionary thinking</div>
                  <div className="text-blue-400 font-semibold">AI Transformation</div>
                </div>
                <div className="space-y-2">
                  <div className="text-emerald-400 font-semibold">Product Strategy</div>
                  <div className="text-emerald-400 font-semibold">Enterprise Architecture</div>
                  <div className="text-emerald-400 font-semibold">Staffing Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center" ref={expertsRef}>
                <div className="text-4xl font-bold gradient-text">{expertsCount}+</div>
                <p className="text-gray-400 mt-2">Customers Globally</p>
              </div>
              <div className="text-center" ref={projectsRef}>
                <div className="text-4xl font-bold gradient-text">{projectsCount}+</div>
                <p className="text-gray-400 mt-2">Successful Projects</p>
              </div>
            </div>
            
            <Link href="/about" className="inline-block border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Know more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
