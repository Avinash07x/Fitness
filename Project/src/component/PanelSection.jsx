import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PanelSection() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current.children;
    gsap.from(cards, {
      y: 100,
      rotate: -15,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="panel bg-gray-100 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Enrich your product page</h3>
          <p>
            Look at those cards. They animate in from the bottom and rotate magically.
          </p>
        </div>
        <div className="flex-1 relative">
          <div ref={cardsRef} className="cards relative h-64 w-full">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="card absolute w-full h-32 bg-purple-500 rounded-lg shadow-lg"
                style={{ top: `${i * 20}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
