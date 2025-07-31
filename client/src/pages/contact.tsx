import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead, { organizationSchema } from "@/components/seo-head";

export default function ContactPage() {
  useScrollReveal();

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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead
        title="Contact Procyon Technostructure - Get Expert Enterprise Solutions"
        description="Contact Procyon for enterprise technology solutions. 24-hour response guarantee. Expert consultation for ServiceNow, SalesForce, SAP, cloud transformation, and AI/ML implementation."
        keywords="contact Procyon, enterprise consultation, ServiceNow support, SalesForce implementation, SAP consulting, technology consultation, digital transformation, get quote, business inquiry"
        canonicalUrl="https://procyon-technostructure.com/contact"
        ogTitle="Contact Procyon Technostructure - Enterprise Technology Experts"
        ogDescription="Get in touch with our expert team. 24-hour response guarantee for all business inquiries. Transform your enterprise today."
        structuredData={contactStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden">
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
                    <a href="mailto:info@procyon.tech" className="text-blue-400 hover:text-blue-300">
                      info@procyon.tech
                    </a>
                    <p className="text-gray-300 mb-1 mt-2">Business partnerships:</p>
                    <a href="mailto:partnerships@procyon.tech" className="text-blue-400 hover:text-blue-300">
                      partnerships@procyon.tech
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
                    <a href="tel:+1-555-0123" className="text-emerald-400 hover:text-emerald-300">
                      +1 (555) 012-3456
                    </a>
                    <p className="text-gray-300 mb-1 mt-2">Available:</p>
                    <span className="text-gray-300">Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-300">
                      123 Innovation Drive<br />
                      Tech District, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Quick Response Guarantee</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">General inquiries:</span>
                    <span className="text-blue-400 font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Enterprise projects:</span>
                    <span className="text-emerald-400 font-semibold">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Support requests:</span>
                    <span className="text-purple-400 font-semibold">2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
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
                        value={formData.lastName}
                        onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                        value={formData.company}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  
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