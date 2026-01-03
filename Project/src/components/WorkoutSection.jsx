import React from "react";
import { Link } from "react-router-dom";
import workout from "../assets/g2.jpg";

const skills = [
  { title: "Strength Training", value: 90 },
  { title: "Cardio Performance", value: 85 },
  { title: "Mobility & Flexibility", value: 80 },
];

function WorkoutSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        py-28 px-6
        bg-[linear-gradient(270deg,#000000,#0f1115,#111827,#000000)]
        bg-600
        animate-gradientMove
        text-white
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-red-500">
            Elite Training
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Train Smarter. <br />
            <span className="text-red-500">Get Stronger.</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            Our structured workout systems are designed to maximize strength,
            endurance, and flexibility—helping you achieve peak performance
            without burnout.
          </p>

          {/* SKILLS */}
          <div className="space-y-6 max-w-lg">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>{skill.title}</span>
                  <span className="text-gray-500">{skill.value}%</span>
                </div>

                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex gap-4 flex-wrap">
            <Link to="/getstarted" >
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 transition font-semibold tracking-wide uppercase">
              Start Training
            </button></Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={workout}
              alt="Workout Training"
              className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default WorkoutSection;
