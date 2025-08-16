import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is fundamental to us. This policy explains how Procyon Technostructure collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: August 16, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p><strong>Personal Information:</strong> When you contact us or use our services, we may collect your name, email address, phone number, company name, and job title.</p>
                <p><strong>Technical Information:</strong> We automatically collect IP addresses, browser types, device information, and website usage data to improve our services.</p>
                <p><strong>Communications:</strong> We store correspondence when you contact us through forms, email, or phone calls.</p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <ul className="space-y-2">
                  <li>• Respond to your inquiries and provide customer support</li>
                  <li>• Deliver our technology services and solutions</li>
                  <li>• Send important updates about our services</li>
                  <li>• Improve our website and service offerings</li>
                  <li>• Comply with legal obligations and industry standards</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We implement industry-standard security measures to protect your personal information:</p>
                <ul className="space-y-2">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure servers with regular security updates</li>
                  <li>• Limited access to personal data on a need-to-know basis</li>
                  <li>• Regular security audits and compliance monitoring</li>
                  <li>• Data backup and disaster recovery procedures</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-amber-400" />
                </div>
                <h2 className="text-3xl font-bold">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:</p>
                <ul className="space-y-2">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal requirements or court orders</li>
                  <li>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                  <li>• To protect our rights, property, or safety, or that of our users</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold">Your Privacy Rights</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="space-y-2">
                  <li>• Access the personal information we hold about you</li>
                  <li>• Request correction of inaccurate or incomplete data</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Request data portability in a machine-readable format</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:privacy@procyonts.com" className="text-blue-400 hover:text-blue-300">privacy@procyonts.com</a></p>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Cookies & Tracking Technologies</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>Our website uses cookies and similar technologies to:</p>
                <ul className="space-y-2">
                  <li>• Remember your preferences and settings</li>
                  <li>• Analyze website traffic and user behavior</li>
                  <li>• Improve website functionality and user experience</li>
                  <li>• Provide relevant content and advertisements</li>
                </ul>
                <p className="mt-4">You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
              <p className="text-lg mb-6">
                If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </Link>
                <a href="mailto:privacy@procyonts.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email Privacy Team
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}