import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-procyon-dark text-white relative">
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
              At Procyon Technostructure, we are committed to protecting the privacy and security of our website visitors and users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: February 13, 2025
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
                <p><strong>Personal Information:</strong> When you voluntarily provide it to us, such as when you fill out a contact form, register for a course, or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, and other relevant details.</p>
                <p><strong>Website Usage Information:</strong> We may collect non-personal information about your visit to our website, including your IP address, browser type, operating system, referral source, pages viewed, and other usage data. This information helps us analyze and improve the performance and usability of our website.</p>
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
                <p>We may use the information we collect for the following purposes:</p>
                <ul className="space-y-2">
                  <li>• To communicate with you and respond to your inquiries, requests, and feedback</li>
                  <li>• To process your course registrations and provide you with access to our educational resources and services</li>
                  <li>• To send you promotional materials, updates, and newsletters about our courses, events, and other relevant information</li>
                  <li>• To analyze website usage trends, monitor the effectiveness of our marketing efforts, and improve the functionality and user experience of our website</li>
                  <li>• To comply with legal obligations and enforce our website policies</li>
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
                <p>We implement a variety of security measures to safeguard your personal information and protect it from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your data.</p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-amber-400" />
                </div>
                <h2 className="text-3xl font-bold">Third-Party Disclosure</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide you with the services you request or as required by law.</p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold">Your Rights and Choices</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to access, update, or delete your personal information, as well as to object to or restrict its processing. You may also choose to unsubscribe from our communications at any time by following the instructions provided in the emails we send you.</p>
              </div>
            </div>

            {/* Updates to Privacy Policy */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Updates to this Privacy Policy</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We reserve the right to update or revise this Privacy Policy at any time, and any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically for updates.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us through our contact page.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </Link>
              </div>
              <p className="text-sm mt-4 opacity-90">
                Thank you for trusting Procyon Technostructure with your personal information.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}