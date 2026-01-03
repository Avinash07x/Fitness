import React from "react";

function TermsAndConditions() {
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
            Terms & Conditions
          </h1>

          <p className="text-gray-400 text-center mb-12">
            Last updated: December 9, 2025 <br />
            Please read these Terms & Conditions carefully before using Elite
            Fitness services.
          </p>

          {/* Content */}
          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Elite Fitness, you agree to be bound by
                these Terms. If you do not agree, you must not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                2. Eligibility
              </h2>
              <p>
                You must be at least 13 years old to use the Service. Users under
                18 must have parental or guardian consent for paid services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                3. Accounts & Registration
              </h2>
              <p>
                You agree to provide accurate information when creating an
                account and to keep your credentials secure. You are responsible
                for all activity under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                4. Subscriptions & Payments
              </h2>
              <p>
                Some features require a subscription. By subscribing, you
                authorize recurring charges. Pricing, billing cycles, and
                cancellation details are listed on our pricing page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Refunds & Cancellations
              </h2>
              <p>
                Refunds follow our Refund Policy. To request cancellation or a
                refund, contact{" "}
                <strong className="text-white">
                  support@elitefitness.com
                </strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                6. User Conduct
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Do not use the Service for unlawful purposes</li>
                <li>Do not upload abusive, illegal, or copyrighted content</li>
                <li>Do not attempt unauthorized access to systems or accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                7. Intellectual Property
              </h2>
              <p>
                All content on Elite Fitness is owned by us or our licensors and
                protected by intellectual property laws. Unauthorized use is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                8. Third-Party Services
              </h2>
              <p>
                We may link to or integrate third-party services. Elite Fitness
                is not responsible for their content, policies, or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                9. Disclaimers & Liability
              </h2>
              <p className="uppercase text-sm tracking-wide text-gray-400">
                The Service is provided “as is” without warranties. To the
                maximum extent permitted by law, Elite Fitness is not liable for
                indirect or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold Elite Fitness harmless from any
                claims arising from your use of the Service or violation of
                these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                11. Termination
              </h2>
              <p>
                We may suspend or terminate access to the Service at any time
                for violations of these Terms or other lawful reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                12. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in
                which Elite Fitness operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                13. Changes to Terms
              </h2>
              <p>
                We may update these Terms at any time. Continued use of the
                Service means you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                14. Contact Us
              </h2>
              <p>
                📧 <strong>support@elitefitness.com</strong> <br />
                📞 <strong>+1 (555) 123-4567</strong>
              </p>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;
