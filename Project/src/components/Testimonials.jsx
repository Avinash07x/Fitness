import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Lost 30 lbs",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This program changed my life completely. The trainers are amazing and the community support is unmatched.",
    },
    {
      name: "Mike Chen",
      role: "Gained 15 lbs Muscle",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I have tried many programs but this one actually delivered results. The nutrition guidance was game-changing.",
    },
    {
      name: "Emma Davis",
      role: "Marathon Runner",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The conditioning work helped me achieve my best marathon time. Highly recommend to serious athletes.",
    },
  ];

  return (
    <section
      id="experience"
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
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <span className="text-sm tracking-widest uppercase text-red-500">
            Real Results
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Success <span className="text-red-500">Stories</span>
          </h2>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="
                group
                bg-gradient-to-br from-gray-900 to-black
                border border-white/10
                p-8 rounded-3xl
                shadow-xl
                transition-all duration-500
                hover:-translate-y-3 hover:scale-[1.03]
                hover:border-red-500/40
              "
            >
              {/* AVATAR */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="
                      relative
                      w-14 h-14
                      rounded-full
                      object-cover
                      ring-2 ring-white/20
                      group-hover:ring-red-500
                      transition
                    "
                  />
                </div>

                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-red-500">{t.role}</p>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-gray-400 leading-relaxed">
                “{t.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
