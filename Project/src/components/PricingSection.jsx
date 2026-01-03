import React from "react";
import { Link } from "react-router-dom";

function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "29",
      features: [
        "3 Workouts / Week",
        "Basic Nutrition Guide",
        "Community Access",
        "Basic Support",
      ],
    },
    {
      name: "Pro",
      price: "59",
      features: [
        "Unlimited Workouts",
        "Personal Coach",
        "Custom Meal Plans",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "99",
      features: [
        "Everything in Pro",
        "1-on-1 Training",
        "Recovery Sessions",
        "Supplement Guide",
      ],
    },
  ];

  return (
    <>
      <style>{`
        /* DARK ONLY – NO WHITE */
        .pricing-bg {
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

        /* SIMPLE FADE-UP (NO GSAP) */
        .pricing-card {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.8s ease forwards;
        }

        .pricing-card:nth-child(1) { animation-delay: 0.1s; }
        .pricing-card:nth-child(2) { animation-delay: 0.25s; }
        .pricing-card:nth-child(3) { animation-delay: 0.4s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pricing-card:hover {
          transform: translateY(-10px) scale(1.02);
          transition: 0.3s ease;
        }
      `}</style>

      <section id="plan" className="pricing-bg py-28 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Choose Your <span className="text-red-500">Plan</span>
          </h2>

          {/* PRICING GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`pricing-card bg-black/70 backdrop-blur-lg p-8 rounded-2xl border ${plan.popular
                  ? "border-red-500 scale-105"
                  : "border-white/10"
                  }`}
              >
                {/* POPULAR TAG */}
                {plan.popular && (
                  <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-red-500">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-red-500">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400"> / month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="w-2 h-2 rounded-full bg-red-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/getstarted">
                  <button
                    className={`w-full py-3 tracking-widest transition ${plan.popular
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-white/10 hover:bg-white/20"
                      }`}
                  >

                    Get Started

                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSection;
