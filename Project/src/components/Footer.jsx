import React from "react";
import {
  Dumbbell,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="
        relative
        bg-[linear-gradient(270deg,#000000,#0f1115,#111827,#000000)]
        bg-600
        animate-gradientMove
        text-gray-300
        border-t border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* LOGO */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <Dumbbell className="w-12 h-12 text-red-500" />
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            Transforming lives through strength, discipline, and wellness.
          </p>
        </div>

        {/* FOOTER GRID */}
        <div className="grid gap-12 md:grid-cols-4 text-center md:text-left">

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <a href="#plan" className="footer-link">Plans</a>
              </li>
              <li>
                <a href="#gallery" className="footer-link">Gallery</a>
              </li>
              <li>
                <a href="#experience" className="footer-link">Experience</a>
              </li>
              <li>
                <a href="/transformations" className="footer-link">Transformations</a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#faqs" className="footer-link">FAQs</a>
              </li>
              <li>
                <Link to="/help" className="footer-link">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-red-500" />
                elitefitness@mail.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-red-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-red-500" />
                Jaipur, India
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="#" className="social-icon">
                <Facebook size={26} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={26} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Elite Fitness. All rights reserved.
          </p>
        </div>
      </div>

      {/* LOCAL UTIL CLASSES */}
      <style>{`
        .footer-link {
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #ef4444;
        }
        .social-icon {
          color: #9ca3af;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #ef4444;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
