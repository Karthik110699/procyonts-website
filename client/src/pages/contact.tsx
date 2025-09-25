import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead, { organizationSchema } from "@/components/seo-head";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  useScrollReveal();
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

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Procyon Technostructure",
    "description": "Get in touch with Procyon Technostructure for enterprise technology solutions. 24-hour response guarantee for all inquiries.",
    "url": "https://procyon-technostructure.com/contact",
    "mainEntity": organizationSchema,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://procyon-technostructure.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://procyon-technostructure.com/contact"
        }
      ]
    }
  };


  return (
    <>
      <SEOHead
        title="Contact Procyon Technostructure - Get Expert Enterprise Solutions"
        description="Contact Procyon for enterprise technology solutions. 24-hour response guarantee. Expert consultation for ServiceNow, Salesforce, SAP, cloud transformation, and AI/ML implementation."
        keywords="contact Procyon, enterprise consultation, ServiceNow support, Salesforce implementation, SAP consulting, technology consultation, digital transformation, get quote, business inquiry"
        canonicalUrl="https://procyon-technostructure.com/contact"
        ogTitle="Contact Procyon Technostructure - Enterprise Technology Experts"
        ogDescription="Get in touch with our expert team. 24-hour response guarantee for all business inquiries. Transform your enterprise today."
        structuredData={contactStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden relative">
      {/* Floating Stars Background */}
      <div className="floating-stars-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`floating-star star-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="star-svg"
            >
              <path
                d="M12 2L14.09 8.26L20 8.26L15.64 11.74L17.73 18L12 14.52L6.27 18L8.36 11.74L4 8.26L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 reveal-scale">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ready to transform your business? Let's discuss how our AI-powered solutions can drive your success.
          </p>
        </div>
      </div>

      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-300 mb-1">General inquiries:</p>
                    <a href="mailto:hello@procyonts.com" className="text-blue-400 hover:text-blue-300">
                      hello@procyonts.com
                    </a>
                    <p className="text-gray-300 mb-1 mt-2">Business partnerships:</p>
                    <a href="mailto:connect@procyonts.com" className="text-blue-400 hover:text-blue-300">
                      connect@procyonts.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-300 mb-1">US Office:</p>
                    <a href="tel:+1-415-382-8040" className="text-emerald-400 hover:text-emerald-300">
                      +1 415 382 8040
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-1">USA Headquarters</h4>
                        <p className="text-gray-300">
                          Procyon Technostructure LLC<br />
                          7250 Redwood Blvd, Suite # 211<br />
                          Novato, CA 94945<br />
                          United States
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-1">Canada Office</h4>
                        <p className="text-gray-300">
                          202-1825 MARKHAM ROAD<br />
                          SCARBOROUGH ON M1B 4Z9<br />
                          Canada
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-400 mb-1">India Office</h4>
                        <p className="text-gray-300">
                          RNG TOWER, 824/1, Anna Salai<br />
                          CIT Nagar West, CIT Nagar<br />
                          Chennai, Tamil Nadu 600035<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                
                <form ref={formRef} action="https://procyonts.com/php/contact.php" method="post" role="form" className="php-email-form space-y-6">
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
      </div>
    </div>
    </>
  );
}