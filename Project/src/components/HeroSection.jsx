import React from 'react';
import hero from '../assets/hero.jpg';

// Hero Component
function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          animation: heroFadeIn 1s ease-out;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0.95;
            transform: scale(0.98);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-icon {
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>

      <section
        className="hero-section relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-blue-900/30"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Transform Your Body
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            FREE TRIAL SESSION WITH A TRAINER
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl">
            Start
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
