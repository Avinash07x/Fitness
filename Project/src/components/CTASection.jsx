import React from "react";
import { Link } from "react-router-dom";
import ctav from "../assets/v.mp4";

function CTASection() {
  return (
    <section
      className="
        relative
        min-h-[80vh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ctav}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-4xl
          px-6
          text-center
          text-white
          animate-[fadeInScale_0.8s_ease-out_forwards]
        "
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Ready to Transform?
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Join thousands of members already pushing limits and
          transforming their bodies.
        </p>

        <Link to="/getstarted" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-sm tracking-widest uppercase transition">
          Start Training
        </Link>

      </div>

      {/* LOCAL KEYFRAMES */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

export default CTASection;
