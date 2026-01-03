import React, { useState } from "react";
import {
  User,
  Target,
  CalendarCheck,
  Dumbbell,
  Flame,
  LineChart,
  Calendar,
  Clock,
  MessageSquare,
} from "lucide-react";

function GetStartedPage() {
  const [form, setForm] = useState({
    name: "",
    goal: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="min-h-screen text-white bg-[linear-gradient(270deg,#000,#0f1115,#111827,#000)]">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transform Your Body <br />
          <span className="text-purple-500">Build Your Best Self</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
          Lose fat, gain muscle, and stay consistent with expert workouts,
          nutrition guidance, and real progress tracking.
        </p>
      </div>

      {/* ================= STEPS ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <StepCard
          icon={User}
          title="Create Account"
          desc="Sign up and unlock personalized workout & diet programs."
        />
        <StepCard
          icon={Target}
          title="Set Goals"
          desc="Fat loss, muscle gain, strength or total fitness."
        />
        <StepCard
          icon={CalendarCheck}
          title="Start Training"
          desc="Follow structured plans and track weekly progress."
        />
      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-24">
        <FeatureCard
          icon={Dumbbell}
          title="Expert Training"
          desc="Science-based workouts for all fitness levels."
        />
        <FeatureCard
          icon={Flame}
          title="Fat Burning"
          desc="Burn fat without losing muscle mass."
        />
        <FeatureCard
          icon={LineChart}
          title="Progress Tracking"
          desc="Track weight, strength & body transformation."
        />
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
        <Stat value="12K+" label="Members" />
        <Stat value="95%" label="Success Rate" />
        <Stat value="500+" label="Programs" />
        <Stat value="4.9★" label="Rating" />
      </div>

      {/* ================= BOOKING FORM ================= */}
      <div className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-center mb-14">
          <Dumbbell className="w-14 h-14 mx-auto text-purple-500 mb-4" />
          <h2 className="text-4xl font-extrabold mb-4">
            Book Your Fitness Session
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a personal fitness consultation with our expert trainers.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            <Input
              label="Full Name"
              icon={User}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <Select
              label="Fitness Goal"
              icon={Target}
              name="goal"
              value={form.goal}
              onChange={handleChange}
              options={[
                "Fat Loss",
                "Muscle Gain",
                "Weight Loss",
                "Overall Fitness",
              ]}
            />

            <Input
              label="Preferred Date"
              icon={Calendar}
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />

            <Input
              label="Preferred Time"
              icon={Clock}
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <label className="block text-sm mb-2 text-gray-300">
                Additional Message
              </label>
              <div className="flex items-start bg-gray-800 px-4 py-3 rounded-xl border border-gray-700 focus-within:border-purple-500">
                <MessageSquare className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any injuries or questions?"
                  className="w-full bg-transparent outline-none text-white placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-[1.02] active:scale-95 transition"
              >
                Book My Session
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStartedPage;

/* ================= COMPONENTS ================= */

const StepCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-gray-900 border border-gray-700 p-10 rounded-3xl text-center shadow-xl hover:border-purple-500 hover:-translate-y-1 transition">
    <Icon className="w-14 h-14 mx-auto text-purple-400 mb-6" />
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-10 rounded-3xl text-center shadow-xl">
    <Icon className="w-12 h-12 mx-auto text-purple-500 mb-5" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const Stat = ({ value, label }) => (
  <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
    <h3 className="text-3xl font-extrabold text-purple-500">{value}</h3>
    <p className="text-gray-400 text-sm mt-1">{label}</p>
  </div>
);

const Input = ({ label, icon: Icon, ...props }) => (
  <div>
    <label className="block text-sm mb-2 text-gray-300">{label}</label>
    <div className="flex items-center bg-gray-800 px-4 py-3 rounded-xl border border-gray-700 focus-within:border-purple-500">
      <Icon className="w-5 h-5 text-gray-400 mr-3" />
      <input
        {...props}
        className="w-full bg-transparent outline-none text-white placeholder-gray-500"
        required
      />
    </div>
  </div>
);

const Select = ({ label, icon: Icon, options, ...props }) => (
  <div>
    <label className="block text-sm mb-2 text-gray-300">{label}</label>
    <div className="flex items-center bg-gray-800 px-4 py-3 rounded-xl border border-gray-700 focus-within:border-purple-500">
      <Icon className="w-5 h-5 text-gray-400 mr-3" />
      <select
        {...props}
        className="w-full bg-transparent outline-none text-white"
        required
      >
        <option value="">Select</option>
        {options.map((o, i) => (
          <option key={i} value={o} className="bg-gray-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  </div>
);
