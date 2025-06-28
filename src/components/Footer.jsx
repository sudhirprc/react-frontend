import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-emerald-900 via-teal-900 to-cyan-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Lumora Hotels</h2>
          <p className="mt-3 text-gray-300">
            Experience nature, comfort, and timeless elegance at Lumora Hotels.
            We offer premium stays for the soulful traveler.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-yellow-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Lumora Hotels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
