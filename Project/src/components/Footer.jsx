import React from "react";
import {
  Dumbbell,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="animated-bg border-t border-gray-800 py-16 px-4 text-black">
        <div className="footer-content max-w-6xl mx-auto">

          {/* Logo */}
          <div className="text-center mb-10">
            <Dumbbell className="w-12 h-12 mx-auto section-title" />
            <p className="text-gray-700 mt-2">
              Transforming lives through strength and wellness.
            </p>
          </div>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="footer-link">HOME</Link></li>
                <li><a href="#plan" className="footer-link">PLANS</a></li>
                <li><a href="#gallery" className="footer-link">GALLERY</a></li>
                <li><a href="#experience" className="footer-link">EXPERIENCE</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#faqs" className="footer-link">FAQs</a></li>
                <li><Link to="/help" className="footer-link">Help Center</Link></li>
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} /> elitefitness@mail.com
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} /> +1 (555) 123-4567
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={18} /> Jaipur, INDIA
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="footer-link"><Facebook size={26} /></a>
                <a href="#" className="footer-link"><Instagram size={26} /></a>
                <a href="#" className="footer-link"><Youtube size={26} /></a>
              </div>
            </div>

          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12 pt-6 border-t border-gray-700">
            <p className="text-gray-700">
              © 2025 Elite Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
