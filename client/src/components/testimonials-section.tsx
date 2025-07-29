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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <Quote className={`w-8 h-8 mr-4 ${
                  testimonial.color === 'blue' ? 'text-blue-400' :
                  testimonial.color === 'emerald' ? 'text-emerald-400' :
                  'text-purple-400'
                }`} />
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  testimonial.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-emerald-500' :
                  testimonial.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-purple-500' :
                  'bg-gradient-to-r from-purple-500 to-amber-500'
                }`}>
                  <span className="text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
