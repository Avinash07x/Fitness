import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQs() {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most members start seeing results within 3–6 weeks, depending on consistency, workout intensity, and nutrition discipline.",
    },
    {
      question: "Do I need any equipment to start?",
      answer:
        "Not necessarily. Many beginner programs require no equipment. Advanced workouts may use dumbbells or resistance bands.",
    },
    {
      question: "Are the workouts suitable for beginners?",
      answer:
        "Absolutely. We provide beginner, intermediate, and advanced workout variations so everyone can train comfortably.",
    },
    {
      question: "Is the nutrition plan customizable?",
      answer:
        "Yes. Nutrition plans can be tailored for fat loss, muscle gain, or performance-based goals.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime. No contracts and no hidden fees.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      className="
        relative
        min-h-screen
        py-28 px-6
        bg-[linear-gradient(270deg,#000000,#0f1115,#111827,#000000)]
        bg-600
        animate-gradientMove
        text-white
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm text-red-500">
            Need Help?
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-gradient-to-br from-gray-900 to-black
                  border border-white/10
                  rounded-2xl
                  overflow-hidden
                  transition-all duration-300
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex items-center justify-between
                    px-6 py-5
                    text-left
                    hover:bg-white/5
                    transition
                  "
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      w-6 h-6 text-red-500
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
