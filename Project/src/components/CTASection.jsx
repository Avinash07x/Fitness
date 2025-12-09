import React from 'react';
import ctav from '../assets/v.mp4';

function CTASection() {
  return (
    <>
      <style>{`
        .cta-section {
          animation: ctaPulse 0.8s ease-out forwards;
        }

        @keyframes ctaPulse {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .cta-button {
          animation: buttonFloat 3s ease-in-out infinite;
        }

        @keyframes buttonFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <section className="relative py-32 px-4 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={ctav}
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-gray-950/50 to-blue-900/50"></div>

        {/* Content */}
        <div className="cta-section relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Transform?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of members who are already achieving their fitness goals
          </p>
          <button className="cta-button bg-gradient-to-r from-purple-600 to-blue-600 text-white px-16 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl">
            GET STARTED TRIAL
          </button>
        </div>
      </section>
    </>
  );
}

export default CTASection;
