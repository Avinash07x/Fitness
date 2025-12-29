import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "29",
    features: [
      "3 Workouts/Week",
      "Basic Nutrition Guide",
      "Community Access",
      "Basic Support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "59",
    popular: true,
    features: [
      "Unlimited Workouts",
      "Personal Coach",
      "Custom Meal Plans",
      "Priority Support",
    ],
  },
  {
    id: "elite",
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

function PricingSection() {
  return (
    <>
      <style>{`
        .pricing {
          background: linear-gradient(
            270deg,
            #ffffff,
            #c8d9da,
            #96b0b7,
            #4e797a
          );
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .pricing-card {
          animation: pricingFloat 0.6s ease-out both;
          animation-timeline: view();
          animation-range: entry 20% cover 45%;
        }

        @keyframes pricingFloat {
          from {
            opacity: 0;
            transform: translateY(80px) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        .pricing-card:hover {
          transform: translateY(-15px) scale(1.02);
          transition: all 0.3s ease;
        }

        .pricing-title {
          animation: pricingTitleSlide 0.6s ease-out both;
          animation-timeline: view();
          animation-range: entry 15% cover 35%;
        }

        @keyframes pricingTitleSlide {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .popular-badge {
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
          }
        }
      `}</style>

      <section id="plan" className="pricing py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pricing-title text-5xl font-bold text-center mb-16 text-black">
            Choose Your Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-2 relative ${
                  plan.popular
                    ? "border-purple-500 scale-105"
                    : "border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full text-sm font-bold text-white">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-purple-500">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400"> /month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* ✅ SAME PAGE FOR ALL PLANS */}
                <Link
                  to="/getstarted"
                  className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  Get Started
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
