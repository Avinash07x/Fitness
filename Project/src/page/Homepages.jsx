import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSect from "../components/StatsSect";
import FeaturesSection from "../components/FeaturesSection";
import WorkoutSection from "../components/WorkoutSection";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import GALLERY from "../components/GALLERY";
import FAQs from "../components/FAQs.jsx";

export default function Homepages() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <HeroSection />
      <StatsSect />
      <FeaturesSection />
      <PricingSection />
      <GALLERY />
      <WorkoutSection />
      <Testimonials />
      <FAQs />
      <CTASection />
    </div>
  );
}