import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .policy-title {
          animation: fadeInTitle 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .policy-section {
          animation: fadeSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 30% cover 60%;
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

      <div className="animated-bg min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/80 p-10 rounded-2xl shadow-xl border border-gray-300">

          {/* Title */}
          <h1 className="policy-title text-5xl font-bold text-center mb-10 text-black">
            Privacy Policy
          </h1>

          <p className="text-gray-700 text-center mb-10">
            Last updated: January 2024  
            <br />
            Your privacy is important to us. This Privacy Policy explains how Elite Fitness collects, uses, and protects your information.
          </p>

          {/* Sections */}
          <div className="space-y-10">

            {/* Section 1 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We may collect personal information such as your name, email address, phone number, payment details, and fitness data you provide while using our services. 
                We may also collect non-personal data such as device information, browser type, and app usage analytics.
              </p>
            </section>

            {/* Section 2 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">2. How We Use Your Information</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>To provide fitness programs and personalized recommendations</li>
                <li>To process payments and manage subscriptions</li>
                <li>To improve user experience through analytics</li>
                <li>To send updates, promotional content, and notifications</li>
                <li>To enhance app performance and security</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">3. Cookies & Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to improve your experience, analyze usage patterns, and deliver relevant content. 
                You can manage cookie preferences through your browser settings.
              </p>
            </section>

            {/* Section 4 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">4. How We Protect Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to safeguard your data. 
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            {/* Section 5 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">5. Your Rights & Choices</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Access, update, or delete your personal data</li>
                <li>Request a copy of the information we store about you</li>
                <li>Opt-out of promotional emails anytime</li>
                <li>Disable cookies in your browser settings</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">6. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal information. 
                We may share data with trusted service providers (payment processors, analytics partners) strictly for operational purposes.
              </p>
            </section>

            {/* Section 7 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">7. Children’s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform is not intended for users under the age of 13. 
                We do not knowingly collect personal information from children.
              </p>
            </section>

            {/* Section 8 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">8. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy occasionally. 
                Changes will be posted on this page with an updated “Last Updated” date.
              </p>
            </section>

            {/* Section 9 */}
            <section className="policy-section">
              <h2 className="text-2xl font-bold mb-3 text-black">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or your data, contact us at:
                <br /><br />
                Email: <strong>support@elitefitness.com</strong>  
                <br />
                Phone: <strong>+1 (555) 123-4567</strong>
              </p>
            </section>

          </div>

        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
