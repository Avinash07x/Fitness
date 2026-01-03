// // import React, { useEffect, useState, useRef } from "react";
// // import { FaUsers, FaDumbbell, FaUserTie, FaThumbsUp } from "react-icons/fa";


// // function StatsSect() {
// //   const stats = [
// //     { num: 98, label: "Members", suffix: "+", icon: <FaUsers size={36} /> },
// //     { num: 32, label: "Workouts", suffix: "+", icon: <FaDumbbell size={36} /> },
// //     { num: 7, label: "Trainers", suffix: "+", icon: <FaUserTie size={36} /> },
// //     { num: 98, label: "Success Rate", suffix: "%", icon: <FaThumbsUp size={36} /> },
// //   ];

// //   const [counts, setCounts] = useState(stats.map(() => 0));
// //   const [hasAnimated, setHasAnimated] = useState(false);
// //   const sectionRef = useRef(null);

// //   // Scroll into view observer
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting && !hasAnimated) {
// //           setHasAnimated(true);
// //         }
// //       },
// //       { threshold: 0.3 }
// //     );

// //     if (sectionRef.current) observer.observe(sectionRef.current);

// //     return () => {
// //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// //     };
// //   }, [hasAnimated]);

// //   // Animated counter
// //   useEffect(() => {
// //     if (!hasAnimated) return;

// //     const duration = 2000; // ms
// //     let startTime;

// //     const animate = (timestamp) => {
// //       if (!startTime) startTime = timestamp;
// //       const progress = Math.min((timestamp - startTime) / duration, 1);

// //       const newCounts = stats.map((stat) =>
// //         Math.floor(stat.num * progress)
// //       );
// //       setCounts(newCounts);

// //       if (progress < 1) requestAnimationFrame(animate);
// //     };

// //     requestAnimationFrame(animate);
// //   }, [hasAnimated]);

// //   return (
// //     <>
// //       <style>{`
// //         .stat{
// //           background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
// //           background-size: 800% 800%;
// //           animation: gradientMove 20s ease infinite;
// //         }
// //         .stat-item {
// //           animation: statAppear 1s ease-out both;
// //           animation-timeline: view();
// //           animation-range: entry 30% cover 50%;
// //         }

// //         @keyframes statAppear {
// //           from { opacity: 0; transform: translateX(-50px) rotate(-10deg); }
// //           to { opacity: 1; transform: translateX(0) rotate(0deg); }
// //         }

// //         .stat-item:nth-child(1) { animation-delay: 0ms; }
// //         .stat-item:nth-child(2) { animation-delay: 100ms; }
// //         .stat-item:nth-child(3) { animation-delay: 200ms; }
// //         .stat-item:nth-child(4) { animation-delay: 300ms; }

// //         .stat-number {
// //           transition: transform 0.3s;
// //         }

// //         .stat-item:hover .stat-number {
// //           transform: scale(1.2);
// //         }
// //       `}</style>

// //       <section ref={sectionRef} className="stat py-24 px-4">
// //         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
// //           {stats.map((stat, idx) => (
// //             <div key={idx} className="stat-item text-center flex flex-col items-center">
// //               <div className="text-blue-400 mb-2">{stat.icon}</div> {/* Icon */}
// //               <div className="stat-number text-5xl font-bold text-blue-500 mb-2">
// //                 {counts[idx].toLocaleString()}
// //                 {stat.suffix}
// //               </div>
// //               <div className="text-black text-lg">{stat.label}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // export default StatsSect;

import React from "react";
import { Link } from "react-router-dom";

/* ================= ABOUT DATA ================= */
const aboutData = {
  tag: "About Our Fitness Studio",
  titleLine1: "Build Strength.",
  titleLine2: "Boost Confidence.",
  description:
    "We help people transform their lives through structured training, expert coaching, and sustainable fitness programs designed for long-term results.",
  backgroundImage:
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",

};

/* ================= STATS DATA ================= */
const statsData = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "5K+",
    label: "Happy Clients",
  },
  {
    value: "20+",
    label: "Fitness Programs",
  },
];

const StatsSect = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutData.backgroundImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex items-center min-h-screen">
        <div className="max-w-2xl">
          {/* ABOUT TAG */}
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-red-500">
            {aboutData.tag}
          </span>

          {/* ABOUT TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {aboutData.titleLine1}
            <br />
            {aboutData.titleLine2}
          </h1>

          {/* ABOUT DESCRIPTION */}
          <p className="text-gray-300 text-lg mb-8">
            {aboutData.description}
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link to="/getstarted" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-sm tracking-widest uppercase transition">
              Start Training
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 text-center md:text-left">
            {statsData.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSect;
