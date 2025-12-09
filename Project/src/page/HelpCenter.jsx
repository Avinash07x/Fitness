import React, { useState } from "react";
import { Search, MessageCircle, HelpCircle, Phone, Mail, ChevronDown } from "lucide-react";

function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "How do I reset my password?",
      a: "Go to settings > account > reset password. You will receive a reset link in your email."
    },
    {
      q: "How can I update my workout plan?",
      a: "Navigate to the Programs page and choose a new plan that fits your goals."
    },
    {
      q: "How do I contact support?",
      a: "You can reach us via live chat, email, or phone (details below)."
    },
    {
      q: "Can I pause my membership?",
      a: "Yes, you can pause or cancel your membership anytime from your account dashboard."
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .title-animate {
          animation: fadeInTitle 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .section-animate {
          animation: fadeSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 40% cover 70%;
        }

        @keyframes fadeInTitle {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="animated-bg min-h-screen py-20 px-4">

        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <h1 className="title-animate text-5xl font-bold text-center text-black mb-8">
            Help Center
          </h1>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Find answers to your questions or reach out to our support team anytime.
          </p>

          {/* Search Bar */}
          <div className="section-animate max-w-lg mx-auto mb-14">
            <div className="flex items-center bg-white/80 p-4 rounded-2xl shadow-md border border-gray-300">
              <Search className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full bg-transparent outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Popular Topics */}
          <h2 className="text-3xl section-animate font-semibold mb-6 text-black text-center">
            Popular Topics
          </h2>

          <div className="grid md:grid-cols-3 gap-8 section-animate mb-16">
            {/* Topic Card */}
            <div className="bg-white/70 p-6 rounded-2xl shadow-md border border-gray-300 text-center">
              <HelpCircle className="mx-auto w-10 h-10 mb-3 text-gray-800" />
              <h3 className="font-bold text-lg mb-1">Account & Login</h3>
              <p className="text-gray-600 text-sm">Password, login issues, account settings</p>
            </div>

            <div className="bg-white/70 p-6 rounded-2xl shadow-md border border-gray-300 text-center">
              <MessageCircle className="mx-auto w-10 h-10 mb-3 text-gray-800" />
              <h3 className="font-bold text-lg mb-1">Training Programs</h3>
              <p className="text-gray-600 text-sm">Workouts, plans, progress tracking</p>
            </div>

            <div className="bg-white/70 p-6 rounded-2xl shadow-md border border-gray-300 text-center">
              <Phone className="mx-auto w-10 h-10 mb-3 text-gray-800" />
              <h3 className="font-bold text-lg mb-1">Billing & Membership</h3>
              <p className="text-gray-600 text-sm">Payments, cancellations, refunds</p>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-3xl font-semibold mb-6 text-black text-center section-animate">
            Common Questions
          </h2>

          <div className="space-y-6 mb-16 section-animate">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="bg-white/70 p-6 rounded-2xl border border-gray-300 shadow-md"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(i)}
                >
                  <span className="font-semibold text-lg text-gray-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === i && (
                  <p className="mt-3 text-gray-700">{item.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="section-animate bg-white/80 p-8 rounded-2xl shadow-xl border border-gray-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Still need help?
            </h3>
            <p className="text-gray-700 mb-6">
              Our team is here 24/7 to support you with anything you need.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">

              <div className="flex items-center gap-3 bg-gray-200 px-5 py-3 rounded-xl">
                <Mail className="text-gray-800" />
                support@elitefitness.com
              </div>

              <div className="flex items-center gap-3 bg-gray-200 px-5 py-3 rounded-xl">
                <Phone className="text-gray-800" />
                +1 (555) 123-4567
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HelpCenter;
