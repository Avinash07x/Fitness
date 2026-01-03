import React, { useState } from "react";
import {
  Search,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "How do I reset my password?",
      a: "Go to settings → account → reset password. You’ll receive a reset link via email.",
    },
    {
      q: "How can I update my workout plan?",
      a: "Visit the Programs section and switch to a plan aligned with your goals.",
    },
    {
      q: "How do I contact support?",
      a: "You can contact us through live chat, email, or phone anytime.",
    },
    {
      q: "Can I pause my membership?",
      a: "Yes, you can pause or cancel your membership from your dashboard.",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="
        min-h-screen
        bg-[linear-gradient(270deg,#000000,#0f1115,#111827,#000000)]
        bg-600
        animate-gradientMove
        py-24
        px-4
        text-white
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Help Center
        </h1>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          Find answers to common questions or reach out to our support team anytime.
        </p>

        {/* SEARCH */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3 shadow-xl">
            <Search className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
            />
          </div>
        </div>

        {/* POPULAR TOPICS */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Topics
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <HelpCircle className="w-10 h-10 text-red-500" />,
              title: "Account & Login",
              desc: "Password, login issues, account settings",
            },
            {
              icon: <MessageCircle className="w-10 h-10 text-orange-500" />,
              title: "Training Programs",
              desc: "Workouts, plans, progress tracking",
            },
            {
              icon: <Phone className="w-10 h-10 text-blue-500" />,
              title: "Billing & Membership",
              desc: "Payments, cancellations, refunds",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                bg-gray-900
                border
                border-gray-700
                rounded-2xl
                p-6
                text-center
                shadow-xl
                hover:scale-105
                transition-transform
                duration-300
              "
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Common Questions
        </h2>

        <div className="space-y-6 mb-20">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="
                bg-gray-900
                border
                border-gray-700
                rounded-2xl
                p-6
                shadow-lg
              "
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(i)}
              >
                <span className="font-semibold text-lg text-gray-200">
                  {item.q}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT SUPPORT */}
        <div
          className="
            bg-gray-900
            border
            border-gray-700
            rounded-3xl
            p-10
            text-center
            shadow-2xl
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Still need help?
          </h3>
          <p className="text-gray-400 mb-8">
            Our support team is available 24/7 to assist you.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl">
              <Mail className="text-red-500" />
              support@elitefitness.com
            </div>
            <div className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl">
              <Phone className="text-orange-500" />
              +1 (555) 123-4567
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HelpCenter;
