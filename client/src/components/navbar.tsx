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
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/enterprise" className="hover:text-blue-400 transition-colors">Enterprise</Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-white">
              Get Started
            </Link>
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
            <Link href="/" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Home</Link>
            <Link href="/enterprise" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Enterprise</Link>
            <Link href="/services" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Services</Link>
            <Link href="/about" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">About</Link>
            <Link href="/careers" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Careers</Link>
            <Link href="/contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
