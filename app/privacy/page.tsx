'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/level-one-logo.png" alt="Level One" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </Link>
            <Link href="/">
              <Button variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer">
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="text-gray-600 mb-8">
            <p><strong>Effective Date:</strong> 20/09/2025</p>
            <p><strong>Last Updated:</strong> 20/09/2025</p>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-8">
            <p className="text-lg">
              Level One ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information and activity data when you use our website, mobile app, and related services (collectively, the "Services").
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> name, email address, phone number, and account details when you register.</li>
                <li><strong>Lifestyle Observations:</strong> journal entries, tags, routines, reflections, energy or mood check-ins, and other context you choose to log.</li>
                <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, and activity within our Services.</li>
                <li><strong>Cookies & Tracking:</strong> we use cookies and similar technologies for analytics, personalization, and performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, personalize, and improve our Services.</li>
                <li>Analyze patterns and generate personalized lifestyle insights.</li>
                <li>Maintain security and prevent fraud.</li>
                <li>Communicate updates, new features, and support.</li>
                <li>Conduct research and improve our AI models (with anonymization or pseudonymization where possible).</li>
                <li><strong>Marketing:</strong> internally analyze trends and send you updates or recommendations, where legally permitted.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
              <p className="mb-4">We do not sell your personal data. We may share information only in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Service Providers:</strong> cloud hosting, analytics, and technical support partners.</li>
                <li><strong>For Legal Compliance:</strong> if required by law or legal process.</li>
                <li><strong>With Consent:</strong> if you agree to share with trusted collaborators or integration partners you connect.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Lawful Basis for Processing (GDPR / CCPA)</h2>
              <p className="mb-4">We process your data only where lawful bases exist, including your consent, performance of a contract, legitimate interest, or legal obligation.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>California Residents:</strong> you have the right to opt out of any "sale" or "sharing" of personal information as defined by CCPA/CPRA. We do not sell your data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cross-Border Data Transfers</h2>
              <p>If you are located in the EEA, UK, or Switzerland, your data may be transferred outside your country of residence (including to the US). We use safeguards such as Standard Contractual Clauses (SCCs) to protect your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Storage & Security</h2>
              <p className="mb-4">Your data is stored on encrypted servers.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data is encrypted both in transit (TLS/HTTPS) and at rest.</li>
                <li>Access is restricted to authorized staff only.</li>
                <li>In case of a breach affecting your data, we will notify you and relevant regulators as required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your personal data.</li>
                <li>Request a copy of your personal insight data (data portability).</li>
                <li>Restrict or object to processing.</li>
                <li>Withdraw consent at any time.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
              <p className="mt-4">Requests can be made at <a href="mailto:hello@levelone.app" className="text-blue-600 hover:text-blue-800 underline">hello@levelone.app</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p>We retain data while you actively use the Services. If inactive for 24 months, your data will be deleted unless retention is required by law. You may request deletion anytime.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Research and AI Use</h2>
              <p>During the beta trial, anonymized or pseudonymized data may be used to test, train, and improve our AI systems. You can withdraw consent for this use by contacting us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p>The Services are not directed to individuals under 18. We do not knowingly collect such data; if found, it will be deleted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to this Policy</h2>
              <p>We may update this Privacy Policy. Updates will be posted with a new "Last Updated" date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="mb-4">If you have questions, contact us at:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><a href="mailto:hello@levelone.app" className="text-blue-600 hover:text-blue-800 underline font-medium">hello@levelone.app</a></p>
                <p className="text-gray-600 mt-2">251 Little Falls Drive, Wilmington, New Castle County, Delaware, 19808</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white font-bold text-xl mb-8">Level One</div>
            <div className="text-gray-400 text-sm">
              Copyright © 2025 by Level One Ltd. All rights reserved.
            </div>
            <div className="flex justify-center items-center gap-4 mt-4 text-gray-400 text-sm">
              <Link href="#" className="hover:text-white transition-colors">Terms of use</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
