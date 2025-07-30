import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
                  <a href="mailto:sales@procyonts.com" className="text-blue-400 hover:text-blue-300">sales@procyonts.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">Global presence, local expertise</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name*</label>
                  <Input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 focus:ring-0 focus:border-blue-500 focus:outline-none" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name*</label>
                  <Input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 focus:ring-0 focus:border-blue-500 focus:outline-none" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 focus:ring-0 focus:border-blue-500 focus:outline-none" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 focus:ring-0 focus:border-blue-500 focus:outline-none" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your challenge/goal*</label>
                <Textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 focus:ring-0 focus:border-blue-500 focus:outline-none" 
                  placeholder="Tell us about your project requirements..." 
                  required 
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-300">
                  I would like to receive Procyon communications with updates, valuable resources and useful tips.
                </label>
              </div>
              
              <Button type="submit" className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
