import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQs() {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most members start seeing results within 3–6 weeks, depending on consistency, workout intensity, and nutrition discipline."
    },
    {
      question: "Do I need any equipment to start?",
      answer:
        "Not necessarily. Many of our beginner programs require no equipment. For advanced workouts, dumbbells or resistance bands are recommended."
    },
    {
      question: "Are the workouts suitable for beginners?",
      answer:
        "Absolutely. We provide beginner, intermediate, and advanced workout variations so everyone can follow comfortably."
    },
    {
      question: "Is the nutrition plan customizable?",
      answer:
        "Yes! Your nutrition plan can be tailored to weight loss, muscle gain, or athletic performance goals."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime—no contracts, no hidden fees."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .faq-title {
          animation: fadeInTitle 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .faq-item {
          animation: fadeInItem 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 40% cover 70%;
        }

        @keyframes fadeInTitle {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInItem {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section id='faqs' className="animated-bg py-24 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="faq-title text-5xl font-bold text-center mb-14 text-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-300"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg text-gray-900">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-700" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-700" />
                  )}
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default FAQs;
