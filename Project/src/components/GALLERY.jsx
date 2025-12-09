import { useState } from "react";
import g1 from "../assets/g8.jpg";
import g2 from "../assets/g1.jpg";
import g3 from "../assets/g4.jpg";
import g4 from "../assets/g5.jpg";
import g5 from "../assets/g7.jpg";


const movies = [
  { title: "THE GYM", img: g1 },
  { title: "THE BOX JUMP", img: g2 },
  { title: "THE SQUAT", img: g3 },
  { title: "THE PUNCHING BAG", img: g4 },
  { title: "THE ROPE TRAINING", img: g5 },
];

export default function GALLERY() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .section-title {
          animation: titleFadeIn 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    <div id = "gallery" className="animated-bg min-h-screen  text-white grid place-items-center font-sans px-4">
      
      {/* ================= HEADER ================= */}
      <header className="text-center mb-12">
        <h1 className="section-title text-3xl md:text-5xl font-bold gradient-text">
          GALLERY GYM
        </h1>
        <p className="text-gray-400 mt-2">
          Click on a poster to focus it
        </p>
      </header>

      <main className="flex gap-5 justify-center items-center flex-wrap">
        {movies.map((movie, index) => {
          const isActive = index === activeIndex;
          const shouldHide = activeIndex !== null && !isActive;

          return (
            <div
              key={index}
              className={`
                relative w-[15vw] min-w-[120px] aspect-[3/4.2]
                rounded-xl shadow-2xl border border-gray-700 bg-black
                transition-all duration-500 ease-in-out overflow-hidden
                ${isActive ? "border-dashed border-purple-500 scale-110 z-10" : ""}
                ${shouldHide ? "opacity-0 w-0 pointer-events-none" : ""}
              `}
              style={{
                backgroundImage: `url(${movie.img})`,
                backgroundSize: "contain",
                backgroundPosition: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* ✅ CLICK HANDLER */}
              <input
                type="checkbox"
                checked={isActive}
                aria-label={`movie, ${movie.title}`}
                onChange={() => setActiveIndex(isActive ? null : index)}
                className="absolute inset-0 cursor-pointer opacity-0"
              />

              {/* ✅ TITLE OVERLAY */}
              {isActive && (
                <div className="absolute bottom-0 w-full bg-black/70 text-center py-2 text-sm font-semibold backdrop-blur">
                  {movie.title}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
    </>
  );
}
