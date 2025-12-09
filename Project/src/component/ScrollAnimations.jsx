// src/components/ScrollAnimations.jsx
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <div className="hero flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Scroll animations with CSS
        </h1>
        <div className="text-lg font-semibold">You don't need JS for everything</div>
      </div>

      {/* Calendar Section */}
      <section className="my-16 relative perspective-[1000px]">
        <div className="calendar-wide w-full aspect-[2/1] bg-blue1 rounded-3xl border-4 border-gray-0 shadow-3xl animate-[calendarLargeAppear_1s_ease-out]">
          {/* wide calendar content */}
        </div>
        <div className="calendar-mobile absolute top-[3%] left-[5%] w-[22rem] aspect-[1/1.5] bg-blue1 rounded-3xl border-4 border-gray-0 shadow-3xl opacity-0 animate-[calendarSmallAppear_1s_ease-out]">
          {/* mobile calendar content */}
        </div>
      </section>

      {/* Panel Section */}
      <section className="panel bg-gray1 rounded-3xl shadow-3xl my-16 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl mb-4">Enrich your product page</h3>
            <p>
              Look at those cards. They animate in from the bottom and with
              some magic they also rotate.
            </p>
          </div>
          <div className="relative h-64 w-full">
            <div className="card absolute w-full h-full bg-blue1 rounded-3xl border-4 border-gray-0 shadow-3xl animate-[cardUp_1s_ease-out]">
              {/* card content */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[50vh]"></footer>
    </div>
  );
};

export default ScrollAnimations;
