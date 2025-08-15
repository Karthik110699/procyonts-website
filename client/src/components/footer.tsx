import { Facebook, Linkedin, Twitter } from "lucide-react";
import logoUrl from "../assets/procyon-logo.png";

export default function Footer() {
  return (
    <footer className="bg-procyon-dark border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoUrl} 
                alt="Procyon Technostructure" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Transforming businesses through innovative technology solutions since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ProcyonTS" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/procyonts/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Transformation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Augmentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enterprise</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">SalesForce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ServiceNow</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SAP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Procyon Technostructure. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
