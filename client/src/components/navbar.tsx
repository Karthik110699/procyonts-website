import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'glass border-b border-gray-800 backdrop-blur-lg bg-procyon-dark/90' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold gradient-text">Procyon</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <div className="relative group">
                <a href="#" className="hover:text-blue-400 transition-colors">Enterprise</a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#salesforce" className="block px-4 py-2 hover:bg-gray-700 rounded-t-lg">SalesForce</a>
                  <a href="#servicenow" className="block px-4 py-2 hover:bg-gray-700">ServiceNow</a>
                  <a href="#sap" className="block px-4 py-2 hover:bg-gray-700 rounded-b-lg">SAP</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#cloud" className="block px-4 py-2 hover:bg-gray-700 rounded-t-lg">Cloud</a>
                  <a href="#ai" className="block px-4 py-2 hover:bg-gray-700">AI & ML</a>
                  <a href="#data" className="block px-4 py-2 hover:bg-gray-700">Data Analytics</a>
                  <a href="#staffing" className="block px-4 py-2 hover:bg-gray-700">Staff Augmentation</a>
                  <a href="#government" className="block px-4 py-2 hover:bg-gray-700 rounded-b-lg">Government</a>
                </div>
              </div>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#careers" className="hover:text-blue-400 transition-colors">Careers</a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors">
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Home</a>
            <a href="#about" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">About</a>
            <a href="#services" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Services</a>
            <a href="#careers" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Careers</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
