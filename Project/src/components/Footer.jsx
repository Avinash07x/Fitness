import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .section-title {
          animation: titleFadeIn 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .footer-content {
          animation: footerSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 40% cover 70%;
        }

        @keyframes footerSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-link:hover {
          opacity: 0.7;
          transition: 0.2s;
        }
      `}</style>

      <footer className="animated-bg border-t border-gray-800 py-16 px-4 text-black">
        <div className="footer-content max-w-6xl mx-auto">

          {/* Logo */}
          <div className="text-center mb-10">
            <Dumbbell className="w-12 h-12 mx-auto section-title" />
            <p className="text-gray-700 mt-2">Transforming lives through strength and wellness.</p>
          </div>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="footer-link">HOME</a></li>
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
                <li><a href="/help" className="footer-link">Help Center</a></li>
                <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
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
                  <MapPin size={18} /> Jaipur , INDIA
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
              &copy; 2025 Elite Fitness. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
