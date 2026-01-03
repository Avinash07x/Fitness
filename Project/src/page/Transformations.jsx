import React from "react";
import {
  Flame,
  TrendingDown,
  Dumbbell,
  Star,
  CheckCircle,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------- TRANSFORMATION DATA ---------------- */

const transformations = [
  {
    name: "Aarav Mehta",
    result: "Lost 18 Kg",
    time: "5 Months",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Neha Sharma",
    result: "Lost 12 Kg",
    time: "4 Months",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rohan Verma",
    result: "Lost 22 Kg",
    time: "6 Months",
    img: "https://images.unsplash.com/photo-1594737625785-cdf4f52b22b1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Simran Kaur",
    result: "Lost 15 Kg",
    time: "4.5 Months",
    img: "https://images.unsplash.com/photo-1546484959-fb6e1f23f8aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kunal Singh",
    result: "Lost 28 Kg",
    time: "8 Months",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pooja Patel",
    result: "Lost 14 Kg",
    time: "3.5 Months",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aditya Rao",
    result: "Lost 20 Kg",
    time: "6 Months",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ananya Gupta",
    result: "Lost 10 Kg",
    time: "3 Months",
    img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Vikram Joshi",
    result: "Lost 30 Kg",
    time: "9 Months",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ritika Malhotra",
    result: "Lost 16 Kg",
    time: "5 Months",
    img: "https://images.unsplash.com/photo-1526401485004-2aa6b5b0c8f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Siddharth Jain",
    result: "Lost 25 Kg",
    time: "7 Months",
    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kavya Nair",
    result: "Lost 13 Kg",
    time: "4 Months",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ---------------- MAIN PAGE ---------------- */

export default function TransformationsPage() {
  return (
    <section className="bg-[linear-gradient(270deg,#000,#0f1115,#111827,#000)] text-white">

      {/* ---------------- HERO ---------------- */}
      <div className="min-h-[90vh] flex items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Body <span className="text-purple-500">Transformations</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Real people. Real fat loss. Real discipline.
          </p>
          <Link to="/getstarted" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-sm tracking-widest uppercase transition">
            Start Training
          </Link>
        </div>
      </div>

      {/* ---------------- STATS ---------------- */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <Stat icon={Flame} value="95%" label="Success Rate" />
          <Stat icon={TrendingDown} value="-15kg" label="Avg Weight Loss" />
          <Stat icon={Dumbbell} value="12,000+" label="Members" />
          <Stat icon={Star} value="4.9/5" label="Rating" />
        </div>
      </div>

      {/* ---------------- TRANSFORMATIONS GRID ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-4xl font-bold text-center mb-16">
          Real <span className="text-purple-500">Results</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:scale-105 transition"
            >
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-purple-400 font-semibold">{t.result}</p>
                <p className="text-gray-400 text-sm">Duration: {t.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- TESTIMONIAL ---------------- */}
      <div className="bg-black/70 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 text-purple-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 mb-6">
            “This program completely changed my lifestyle. No crash diets, just
            consistency and discipline.”
          </p>
          <h4 className="font-semibold">— Verified Client</h4>
        </div>
      </div>

      {/* ---------------- PROCESS ---------------- */}
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              How <span className="text-blue-500">Transformation</span> Works
            </h2>
            <ul className="space-y-4 text-gray-300">
              {[
                "Body & lifestyle assessment",
                "Custom workout + nutrition plan",
                "Weekly tracking & accountability",
                "Sustainable fat loss results",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            <Step number="01" title="Assessment" />
            <Step number="02" title="Planning" />
            <Step number="03" title="Execution" />
            <Step number="04" title="Results" />
          </div>
        </div>
      </div>

      {/* ---------------- CTA ---------------- */}
      <div className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-purple-500">Change Your Body?</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Your transformation starts today.
        </p>
        <Link to="/getstarted" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-sm tracking-widest uppercase transition">
          Join Now
        </Link>
      </div>
    </section>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

const Stat = ({ icon: Icon, value, label }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
    <Icon className="w-10 h-10 text-purple-500 mb-4 mx-auto" />
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);

const Step = ({ number, title }) => (
  <div className="flex items-center gap-6 bg-gray-900/60 p-6 rounded-2xl border border-gray-800">
    <span className="text-3xl font-extrabold text-purple-500">{number}</span>
    <h4 className="text-xl font-semibold">{title}</h4>
  </div>
);
