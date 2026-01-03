// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1599058917212-d750089bc07c"
//           alt="Fitness Training"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex items-center min-h-screen">
//         <div className="max-w-2xl">
//           <span className="inline-block mb-4 text-sm tracking-widest uppercase text-red-500">
//             Transform Your Body
//           </span>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             Build Strength.
//             <br />
//             Boost Confidence.
//           </h1>

//           <p className="text-gray-300 text-lg mb-8">
//             Personalized fitness programs designed to help you burn fat, gain
//             muscle, and stay consistent — anytime, anywhere.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 mb-12">
//             <button className="px-8 py-4 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold">
//               Start Training
//             </button>
//             <button className="px-8 py-4 border border-white/30 hover:border-white transition rounded-full font-semibold">
//               View Programs
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6 text-center md:text-left">
//             <div>
//               <h3 className="text-3xl font-bold text-white">10+</h3>
//               <p className="text-gray-400 text-sm">Years Experience</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold text-white">5K+</h3>
//               <p className="text-gray-400 text-sm">Happy Clients</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold text-white">20+</h3>
//               <p className="text-gray-400 text-sm">Fitness Programs</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Build Strength",
    highlight: "Power",
    desc: "Elite strength training programs designed for real results.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
  {
    title: "Train Hard",
    highlight: "Discipline",
    desc: "Consistency and dedication are the foundation of success.",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
  },
  {
    title: "Push Limits",
    highlight: "Endurance",
    desc: "Challenge your body and unlock your maximum potential.",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
  },
  {
    title: "Transform Body",
    highlight: "Lifestyle",
    desc: "Fitness isn’t a phase — it’s a way of life.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}
          <div className="relative z-10 flex h-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col justify-center max-w-3xl">
              <span className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
                Fitness • Strength • Performance
              </span>

              <h1 className="font-serif text-white text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6">
                {slide.title}
                <br />
                <span className="text-red-500">{slide.highlight}</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-10">
                {slide.desc}
              </p>

              <div className="flex gap-6 flex-wrap">
                <Link to="/getstarted" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-sm tracking-widest uppercase transition">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === current ? "bg-white scale-125" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;



