import React from 'react';
import hero from '../assets/hero.jpg';

function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          animation: heroFadeIn 1s ease-out both;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-blue-900/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Transform Your Body
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            FREE TRIAL SESSION WITH A TRAINER
          </p>

          <a href="/getstartednow">
            <button className="bg-black text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:opacity-90 transition">
              GET STARTED
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
