import React from "react";

function TermsAndConditions() {
  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .terms-title {
          animation: fadeInTitle 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        .terms-section {
          animation: fadeSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 30% cover 60%;
        }

        @keyframes fadeInTitle {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .term-list li {
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="animated-bg min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/90 p-10 rounded-2xl shadow-xl border border-gray-300">

          <h1 className="terms-title text-4xl md:text-5xl font-bold text-center mb-6 text-black">
            Terms & Conditions
          </h1>

          <p className="text-gray-700 text-center mb-8">
            Last updated: December 9, 2025
            <br />
            Please read these Terms & Conditions ("Terms", "Terms and Conditions") carefully before using the Elite Fitness website and services.
          </p>

          <div className="space-y-8">

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using Elite Fitness (the "Service"), you agree to be bound by these Terms. If you do not agree, you must not use the Service.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 13 years old to use the Service. If you are under 18, you must have parental or guardian consent to use our paid services.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">3. Accounts & Registration</h2>
              <p className="text-gray-700 leading-relaxed">
                When you create an account, you agree to provide accurate and complete information and to keep that information up-to-date. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">4. Subscriptions & Payments</h2>
              <p className="text-gray-700 leading-relaxed">
                Some parts of the Service are provided on a subscription basis. By subscribing, you authorize recurring charges to your chosen payment method. Prices, fees, and billing cycles are described on the pricing page. You may cancel at any time; see our refund policy for details.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">5. Refunds & Cancellations</h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds are processed in accordance with our Refund Policy. To request cancellation or a refund, contact support at <strong>support@elitefitness.com</strong>. We reserve the right to refuse refunds in cases of abuse or fraud.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">6. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree not to:
              </p>
              <ul className="term-list list-disc ml-6 text-gray-700">
                <li>Use the Service for any unlawful purpose.</li>
                <li>Upload content that infringes copyrights, is abusive, defamatory, or obscene.</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content available through the Service, including text, graphics, logos, images, and software, is owned by Elite Fitness or its licensors and protected by copyright, trademark, and other laws. You may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">8. Third-Party Links & Integrations</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service may contain links to third-party websites or integrate third-party services. We are not responsible for those third parties' content, privacy practices, or terms. Use of third-party services is at your own risk.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">9. Disclaimers & Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. ELITE FITNESS DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELITE FITNESS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Elite Fitness and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may suspend or terminate your access for violations of these Terms or for any reason with or without notice. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the jurisdiction where Elite Fitness is established, without regard to conflict of law principles. Any disputes will be resolved in the competent courts of that jurisdiction.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may modify these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the Service after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="text-2xl font-semibold mb-3 text-black">14. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms, contact us:
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

export default TermsAndConditions;
