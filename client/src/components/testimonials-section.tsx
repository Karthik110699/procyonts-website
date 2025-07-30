import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "When we talk about Procyon, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements.",
      author: "Mike David",
      role: "Developer",
      color: "blue"
    },
    {
      quote: "Procyon's AI-driven solutions have transformed our business operations. The level of innovation and technical expertise they bring is unmatched.",
      author: "Sarah Johnson",
      role: "CTO",
      color: "emerald"
    },
    {
      quote: "The cloud transformation journey with Procyon was seamless. They understood our challenges and delivered solutions that exceeded our expectations.",
      author: "Robert Lee",
      role: "Operations Director",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-teal-900/20 via-gray-900/30 to-blue-900/20 relative overflow-hidden">
      {/* Elegant gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/8 via-transparent to-cyan-900/8"></div>
      <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-blue-500/3 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-tl from-emerald-500/4 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl reveal group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-6 relative z-10">
                <Quote className={`w-8 h-8 mr-4 transition-all duration-300 group-hover:scale-110 ${
                  testimonial.color === 'blue' ? 'text-blue-400 group-hover:text-blue-300' :
                  testimonial.color === 'emerald' ? 'text-emerald-400 group-hover:text-emerald-300' :
                  'text-purple-400 group-hover:text-purple-300'
                }`} />
              </div>
              <p className="text-gray-300 mb-6 text-lg transition-colors duration-300 group-hover:text-white relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 ${
                  testimonial.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-emerald-500' :
                  testimonial.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-purple-500' :
                  'bg-gradient-to-r from-purple-500 to-amber-500'
                }`}>
                  <span className="text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold transition-colors duration-300 group-hover:text-white">{testimonial.author}</p>
                  <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
