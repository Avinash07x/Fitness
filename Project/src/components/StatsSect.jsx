import React, { useEffect, useState, useRef } from "react";
import { FaUsers, FaDumbbell, FaUserTie, FaThumbsUp } from "react-icons/fa";


function StatsSect() {
  const stats = [
    { num: 98, label: "Members", suffix: "+", icon: <FaUsers size={36} /> },
    { num: 32, label: "Workouts", suffix: "+", icon: <FaDumbbell size={36} /> },
    { num: 7, label: "Trainers", suffix: "+", icon: <FaUserTie size={36} /> },
    { num: 98, label: "Success Rate", suffix: "%", icon: <FaThumbsUp size={36} /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Scroll into view observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  // Animated counter
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // ms
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const newCounts = stats.map((stat) =>
        Math.floor(stat.num * progress)
      );
      setCounts(newCounts);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <>
      <style>{`
        .stat{
          background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }
        .stat-item {
          animation: statAppear 1s ease-out both;
          animation-timeline: view();
          animation-range: entry 30% cover 50%;
        }

        @keyframes statAppear {
          from { opacity: 0; transform: translateX(-50px) rotate(-10deg); }
          to { opacity: 1; transform: translateX(0) rotate(0deg); }
        }

        .stat-item:nth-child(1) { animation-delay: 0ms; }
        .stat-item:nth-child(2) { animation-delay: 100ms; }
        .stat-item:nth-child(3) { animation-delay: 200ms; }
        .stat-item:nth-child(4) { animation-delay: 300ms; }

        .stat-number {
          transition: transform 0.3s;
        }

        .stat-item:hover .stat-number {
          transform: scale(1.2);
        }
      `}</style>

      <section ref={sectionRef} className="stat py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item text-center flex flex-col items-center">
              <div className="text-blue-400 mb-2">{stat.icon}</div> {/* Icon */}
              <div className="stat-number text-5xl font-bold text-blue-500 mb-2">
                {counts[idx].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-black text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default StatsSect;
