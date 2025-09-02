import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/Procyon Technostructure -05_1756791057389.png";

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
              <li><Link href="/services/cloud" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Cloud Transformation</Link></li>
              <li><Link href="/services/ai-ml" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>AI & Machine Learning</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Data Analytics</Link></li>
              <li><Link href="/services/staff-augmentation" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Staff Augmentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enterprise</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/enterprise/salesforce" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Salesforce</Link></li>
              <li><Link href="/enterprise/servicenow" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>ServiceNow</Link></li>
              <li><Link href="/enterprise/sap" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>SAP</Link></li>
              <li><Link href="/services/government" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Government Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Careers</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
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
