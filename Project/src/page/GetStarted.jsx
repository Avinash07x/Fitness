import React from "react";
import { Dumbbell, User, Target, CalendarCheck } from "lucide-react";

function GetStarted() {
  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffff, #c8d9daff, #96b0b7ac, #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .title-animate {
          animation: fadeInTitle 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .step-card {
          animation: fadeSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 30% cover 60%;
        }

        @keyframes fadeInTitle {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="animated-bg min-h-screen py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Page Title */}
          <h1 className="title-animate text-4xl md:text-5xl font-bold text-center text-black mb-6">
            Get Started with Elite Fitness
          </h1>
          <p className="text-center text-gray-800 max-w-2xl mx-auto mb-12">
            Follow these simple steps to begin your transformation journey.
            We’ll guide you at every stage — whether you're starting fresh or leveling up.
          </p>

          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className="step-card bg-white/90 p-8 rounded-2xl shadow-lg border border-gray-300 text-center">
              <User className="w-12 h-12 mx-auto text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">1. Create an Account</h3>
              <p className="text-gray-700">
                Sign up with your email and set up your basic profile to get personalized recommendations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card bg-white/90 p-8 rounded-2xl shadow-lg border border-gray-300 text-center">
              <Target className="w-12 h-12 mx-auto text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">2. Set Your Goals</h3>
              <p className="text-gray-700">
                Choose your fitness goals — fat loss, muscle gain, strength, or overall wellness.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card bg-white/90 p-8 rounded-2xl shadow-lg border border-gray-300 text-center">
              <CalendarCheck className="w-12 h-12 mx-auto text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">3. Start Your Program</h3>
              <p className="text-gray-700">
                Access tailored workouts, nutrition plans, and progress tracking. Stay consistent!
              </p>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Ready to Begin Your Journey?
            </h2>
            <a href="/getstartednow">
              <button className="bg-black text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:opacity-90 transition">
                Get Started Now
              </button>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}

export default GetStarted;
