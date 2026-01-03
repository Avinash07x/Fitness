import React from "react";
import { Dumbbell, Heart, Target, Zap, Award, Users } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Goal Focused",
      desc: "Personalized plans tailored to your specific fitness goals",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Health First",
      desc: "Science-backed methods for sustainable results",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "High Energy",
      desc: "Dynamic workouts that keep you motivated",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Results",
      desc: "Track your progress with measurable outcomes",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community",
      desc: "Join a supportive network of fitness enthusiasts",
    },
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Expert Coaches",
      desc: "Learn from certified professionals",
    },
  ];

  return (
    <>
      <style>{`
        .features-bg {
          background: linear-gradient(
            270deg,
            #000000,
            #0f1115,
            #111827,
            #000000
          );
          background-size: 600% 600%;
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

        /* PURE CSS ANIMATIONS */
        .feature-card {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.8s ease forwards;
        }

        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-icon {
          animation: iconPop 0.6s ease forwards;
        }

        @keyframes iconPop {
          from {
            transform: scale(0.6);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          transition: 0.3s ease;
        }
      `}</style>

      <section className="features-bg py-28 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Why Choose <span className="text-red-500">Us</span>
          </h2>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-black/70 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-red-500/60 transition"
              >
                <div className="feature-icon text-red-500 mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
