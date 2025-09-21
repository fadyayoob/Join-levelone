'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfUsePage() {
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

      {/* Terms of Use Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="text-gray-600 mb-8">
            <p><strong>Effective Date:</strong> 20/09/2025</p>
            <p><strong>Last Updated:</strong> 20/09/2025</p>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-8">
            <p className="text-lg">
              Welcome to Level One Health ("Level One Health," "we," "our," or "us"). By using our website, mobile application, or related services (collectively, the "Services"), you agree to these Terms of Use ("Terms").
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility</h2>
              <p>You must be at least 18 years old to use the Services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Account Registration</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may need to create an account.</li>
                <li>You must provide accurate information.</li>
                <li>You are responsible for your login credentials and all activity under your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Services</h2>
              <p className="mb-4">You agree to use the Services lawfully and not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse, interfere with, or attempt unauthorized access.</li>
                <li>Upload harmful, offensive, or unlawful content.</li>
                <li>Infringe on the rights of others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Health Disclaimer</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Services are for logging, tracking, and informational insights only.</li>
                <li>We do not provide medical advice, diagnosis, treatment, or prescriptions.</li>
                <li>Always consult a healthcare professional before making decisions about your health.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4A. AI & Beta Disclaimer</h2>
              <p>The Services may generate AI-based summaries or insights. These are experimental and may be incomplete, inaccurate, or misleading. During the beta, the Services are provided "as is" without guarantees of accuracy or availability.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p>All content and features are owned by or licensed to Level One Health and protected by applicable law. You may not copy or distribute without consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy</h2>
              <p>Your use of the Services is governed by our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Marketing & Communications</h2>
              <p>By using the Services, you consent to receiving communications from us. You can opt out of marketing emails at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7A. Beta Participation</h2>
              <p>By joining the beta, you acknowledge that features may be incomplete or unstable, and you use the Services at your own risk. We may modify or discontinue beta features without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
              <p>We are not responsible for third-party content, services, or tools linked to or integrated with our Services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination & Account Closure</h2>
              <p>We may suspend or terminate your account if you violate these Terms. If terminated, your data will be deleted according to our Privacy Policy. You may request a copy of your data before closure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not liable for direct, indirect, incidental, or consequential damages arising from use of the Services.</li>
                <li>We do not guarantee the Services will be uninterrupted, secure, or error-free.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10A. No Medical Liability</h2>
              <p>We disclaim all liability for harm or injury resulting from reliance on AI outputs, beta features, or user logs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Level One Health and its affiliates against claims arising from your use of the Services or violation of these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p>We may update these Terms. Continued use after updates constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Delaware, United States. If you are located in the EU, you may also rely on mandatory protections of your local consumer laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <p className="mb-4">For questions about these Terms:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><a href="mailto:info@levelone.health" className="text-blue-600 hover:text-blue-800 underline font-medium">info@levelone.health</a></p>
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
              <Link href="/terms" className="hover:text-white transition-colors">Terms of use</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}