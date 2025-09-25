import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      setIsSubmitting(true);
      setResponseMessage("");
      setResponseType("");

      try {
        const formData = new FormData(form);
        
        // Debug: Log form data
        console.log('Form data being sent:');
        formData.forEach((value, key) => {
          console.log(key, value);
        });
        
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(formData as any)
        });

        if (response.ok) {
          const result = await response.text();
          if (result.trim() === 'OK') {
            setResponseMessage("Your message has been sent. Thank you!");
            setResponseType("success");
            form.reset();
          } else {
            setResponseMessage("There was an issue sending your message. Please try again.");
            setResponseType("error");
          }
        } else {
          setResponseMessage("Failed to send message. Please try again.");
          setResponseType("error");
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setResponseMessage("Network error. Please check your connection and try again.");
        setResponseType("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    form.addEventListener('submit', handleSubmit);
    
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 reveal">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                🖐️ Hello!<br />
                Let's <span className="gradient-text">Talk</span>
              </h2>
              <p className="text-xl text-gray-300">
                Tell us how we can help you transform your business with cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hello@procyonts.com" className="text-blue-400 hover:text-blue-300">hello@procyonts.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+1 415 382 8040</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold mb-3">Our Locations</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-purple-400">USA:</p>
                      <p className="text-gray-300">7250 Redwood Blvd, Suite # 211<br />Novato, CA 94945</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-400">Canada:</p>
                      <p className="text-gray-300">202-1825 Markham Road<br />Scarborough ON M1B 4Z9<br />Canada</p>
                    </div>
                    <div>
                      <p className="font-medium text-emerald-400">India:</p>
                      <p className="text-gray-300">RNG TOWER, 824/1, Anna Salai<br />CIT Nagar West, CIT Nagar<br />Chennai, Tamil Nadu 600035</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form ref={formRef} action="https://magnifuratech.com/assets/procyonts/contact.php" method="post" role="form" className="php-email-form space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="services">General Services</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>
                
                {responseMessage && (
                  <div className={`my-3 p-3 rounded-lg ${responseType === "success" ? "bg-green-900/50 text-green-300 border border-green-600" : "bg-red-900/50 text-red-300 border border-red-600"}`}>
                    {responseMessage}
                  </div>
                )}
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
