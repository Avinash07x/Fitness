import React from "react";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  StretchHorizontal,
  Timer,
  Repeat,
} from "lucide-react";

const exercises = [
  {
    title: "Strength Training",
    desc: "Build lean muscle, increase strength, and boost metabolism with compound and isolation workouts.",
    icon: Dumbbell,
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fat Burning Cardio",
    desc: "High-intensity and steady-state cardio to burn calories and improve heart health.",
    icon: Flame,
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Endurance Training",
    desc: "Improve stamina, lung capacity, and overall athletic performance.",
    icon: HeartPulse,
    img: "https://images.unsplash.com/photo-1594737625785-cdf4f52b22b1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Flexibility & Mobility",
    desc: "Stretching and mobility routines to reduce injury risk and improve movement.",
    icon: StretchHorizontal,
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "HIIT Workouts",
    desc: "Short, intense sessions designed for maximum calorie burn in minimum time.",
    icon: Timer,
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Functional Training",
    desc: "Full-body movements that enhance strength, balance, and daily performance.",
    icon: Repeat,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
];

function Exercises() {
  return (
    <section className="min-h-screen bg-[linear-gradient(270deg,#000000,#0f1115,#111827,#000000)] text-white">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Fitness <span className="text-purple-500">Exercises</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Structured exercise systems to burn fat, build muscle, increase stamina,
          and create a strong, athletic body.
        </p>
      </div>

      {/* EXERCISE CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
        {exercises.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:scale-[1.04] transition"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-10 h-10 text-purple-500" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* WEEKLY SPLIT */}
      <div className="bg-black/70 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Sample <span className="text-blue-500">Weekly Training Split</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <SplitCard day="Monday" text="Strength + Core" />
            <SplitCard day="Wednesday" text="HIIT + Cardio" />
            <SplitCard day="Friday" text="Functional + Mobility" />
          </div>
        </div>
      </div>

      {/* EQUIPMENT */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Equipment <span className="text-purple-500">We Use</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Dumbbells", "Resistance Bands", "Kettlebells", "Bodyweight"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-6 rounded-2xl border border-gray-800"
                >
                  <h3 className="text-lg font-semibold">{item}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Train Smart. <span className="text-purple-500">Get Results.</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Science-backed workouts designed for real transformation.
        </p>
        <a href="/getstarted">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-14 py-5 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition">
            START TRAINING
          </button>
        </a>
      </div>

    </section>
  );
}

/* -------- SMALL COMPONENTS -------- */

const SplitCard = ({ day, text }) => (
  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
    <h3 className="text-xl font-semibold mb-2">{day}</h3>
    <p className="text-gray-400">{text}</p>
  </div>
);

export default Exercises;
