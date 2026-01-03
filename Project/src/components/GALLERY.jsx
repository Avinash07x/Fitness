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
    <>
      <style>{`
        /* Dark Fitness Theme Gradient */
        .animated-bg {
          background: linear-gradient(
            270deg,
            #000000,
            #0f1115,
            #111827,
            #000000
          );
          background-size: 600% 600%;
          animation: gradientMove 20s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .section-title {
          color: #ffffff;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
        }

        .gallery-card {
          transition: all 0.5s ease-in-out;
          border-radius: 1rem;
          overflow: hidden;
          border: 2px solid #1f2937; /* dark border */
          background-color: #111827; /* dark fallback */
        }

        .gallery-card:hover {
          transform: scale(1.05);
          z-index: 10;
          border-color: #f87171; /* red border on hover */
        }
      `}</style>

      <div
        id="gallery"
        className="min-h-screen bg-[linear-gradient(270deg,#000000,#0f1115,#111827,#000000)] bg-600 animate-gradientMove
        text-center text-white text-white font-sans px-4 grid place-items-center"
      >
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="section-title text-3xl md:text-5xl font-bold">
            GALLERY <span className="text-red-500">GYM</span>
          </h1>
        </header>

        {/* MAIN GRID */}
        <main className="flex gap-5 justify-center items-center flex-wrap">
          {movies.map((movie, index) => {
            const isActive = index === activeIndex;
            const shouldHide = activeIndex !== null && !isActive;

            return (
              <div
                key={index}
                className={`
                  gallery-card
                  relative w-[15vw] min-w-[120px] aspect-[3/4.2]
                  shadow-2xl
                  ${isActive ? "border-dashed border-red-500 scale-110 z-10" : ""}
                  ${shouldHide ? "opacity-0 w-0 pointer-events-none" : ""}
                `}
                style={{
                  backgroundImage: `url(${movie.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* CLICK HANDLER */}
                <input
                  type="checkbox"
                  checked={isActive}
                  aria-label={`movie, ${movie.title}`}
                  onChange={() => setActiveIndex(isActive ? null : index)}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />

                {/* TITLE OVERLAY */}
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
