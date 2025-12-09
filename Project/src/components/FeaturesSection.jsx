import React from "react";
import { Dumbbell, Heart, Target, Zap, Award, Users } from 'lucide-react';

function FeaturesSection() {
  const features = [
    { icon: <Target className="w-12 h-12" />, title: 'Goal Focused', desc: 'Personalized plans tailored to your specific fitness goals' },
    { icon: <Heart className="w-12 h-12" />, title: 'Health First', desc: 'Science-backed methods for sustainable results' },
    { icon: <Zap className="w-12 h-12" />, title: 'High Energy', desc: 'Dynamic workouts that keep you motivated' },
    { icon: <Award className="w-12 h-12" />, title: 'Proven Results', desc: 'Track your progress with measurable outcomes' },
    { icon: <Users className="w-12 h-12" />, title: 'Community', desc: 'Join a supportive network of fitness enthusiasts' },
    { icon: <Dumbbell className="w-12 h-12" />, title: 'Expert Coaches', desc: 'Learn from certified professionals' }
  ];

  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .feature-card {
          animation: cardSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 20% cover 40%;
        }

        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(100px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .feature-icon {
          animation: iconRotate 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 30% cover 60%;
        }

        @keyframes iconRotate {
          from { transform: rotate(-180deg) scale(0); opacity: 0; }
          to { transform: rotate(0deg) scale(1); opacity: 1; }
        }

        .feature-card:hover {
          transform: translateY(-10px);
          transition: transform 0.3s;
        }

        .section-title {
          animation: titleFadeIn 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @keyframes titleFadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="py-24 px-4 animated-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-5xl text-center mb-16 gradient-text">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="feature-icon text-purple-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
