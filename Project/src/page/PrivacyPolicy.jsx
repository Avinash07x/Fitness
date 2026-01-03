import React from "react";

function PrivacyPolicy() {
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
      <div className="max-w-4xl mx-auto">

        {/* Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-center mb-12">
            Last updated: January 2024 <br />
            Your privacy matters to us. This policy explains how Elite Fitness
            collects, uses, and protects your information.
          </p>

          {/* Sections */}
          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information such as your name, email
                address, phone number, payment details, and fitness-related data.
                Non-personal data like device type, browser, and usage analytics
                may also be collected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Deliver personalized fitness programs</li>
                <li>Process payments and manage subscriptions</li>
                <li>Improve platform performance and experience</li>
                <li>Send important updates and notifications</li>
                <li>Maintain security and prevent misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                3. Cookies & Tracking
              </h2>
              <p>
                We use cookies and similar technologies to analyze usage patterns
                and enhance functionality. You can control cookies via your
                browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                4. Data Security
              </h2>
              <p>
                Industry-standard security measures are used to protect your
                information. However, no online transmission is completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Your Rights
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access or update your personal data</li>
                <li>Request deletion of stored information</li>
                <li>Opt out of marketing communications</li>
                <li>Manage cookie preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                6. Information Sharing
              </h2>
              <p>
                We never sell your personal data. Information may be shared only
                with trusted service providers strictly for operational needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                7. Children’s Privacy
              </h2>
              <p>
                Elite Fitness is not intended for users under 13. We do not
                knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                8. Policy Updates
              </h2>
              <p>
                This Privacy Policy may be updated periodically. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have questions regarding this policy, reach us at:
              </p>
              <p className="mt-3">
                📧 <strong>support@elitefitness.com</strong><br />
                📞 <strong>+1 (555) 123-4567</strong>
              </p>
            </section>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PrivacyPolicy;
