'use client'

import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/WaitlistForm"
import { Mail } from "lucide-react"

// Smooth scroll function
const scrollToWaitlist = (e: React.MouseEvent) => {
  e.preventDefault()
  const waitlistSection = document.getElementById('waitlist')
  if (waitlistSection) {
    waitlistSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[75vh] md:min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat scale-105 transition-transform duration-700 hover:scale-100"
          style={{
            backgroundImage: `url('/hero-image.jpg')`,
            backgroundPosition: '75% center',
          }}
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

        {/* Header */}
        <header className="relative z-10 container mx-auto px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/level-one-logo.png" alt="Level One" className="w-12 h-12 md:w-17 md:h-17 object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white">
              <button onClick={scrollToWaitlist} className="hover:text-white/80 transition-colors cursor-pointer">Join Waitlist</button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={scrollToWaitlist} className="text-white text-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                Join Waitlist
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-32 flex items-end md:items-center min-h-[calc(75vh-80px)] md:min-h-[calc(100vh-80px)]">
          <div className="max-w-2xl w-full">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:bg-transparent md:backdrop-blur-none md:rounded-none md:p-0">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white mb-3 md:mb-6 leading-tight">
                Level One helps you make sense of your body's signals.
              </h1>
              <p className="text-white/95 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed">
                Connect your daily notes, habits, and data from your favorite apps to see clear patterns in how you sleep, move, and focus so you always know what helps you feel your best.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Button asChild className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg cursor-pointer w-full sm:w-auto">
                  <a href="#features">
                    Learn More
                  </a>
                </Button>
                <Button asChild className="bg-white/10 text-white hover:bg-white/20 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg cursor-pointer w-full sm:w-auto">
                  <button onClick={scrollToWaitlist}>
                    Join Waitlist
                  </button>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Why Level One?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Discover the unique features that help you translate everyday signals into confident action.
          </p>

          {/* Four Value Proposition Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
            {/* Pillar 1: Log everything in seconds with microphone icon */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Capture every signal</h3>
              <p className="text-gray-600 leading-relaxed">
                Drop in a note, voice memo, or screenshot. Level One keeps the context of your day in one living timeline.
              </p>
            </div>

            {/* Pillar 2: Track Symptoms with lightbulb icon */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Spot the patterns</h3>
              <p className="text-gray-600 leading-relaxed">
                See how habits, inputs, and outcomes connect with rich visuals instead of endless spreadsheets.
              </p>
            </div>

            {/* Pillar 3: Pattern Recognition */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Get actionable nudges</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive gentle prompts tuned to your goals, energy, and intentions so you can stay in flow.
              </p>
            </div>

            {/* Pillar 4: Health Experiments */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Share what matters</h3>
              <p className="text-gray-600 leading-relaxed">
                Bring a crystal-clear picture to teammates, coaches, or collaborators without digging through scattered notes.
              </p>
            </div>
          </div>
          
          {/* Call to Action Below Pillars */}
          <div className="text-center mt-16">
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 rounded-lg font-medium text-lg cursor-pointer">
              <button onClick={scrollToWaitlist}>
                Join Waitlist
              </button>
            </Button>
          </div>
        </div>
      </section>



      {/* Early Access Form Section */}
      <section id="waitlist" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Have questions about Level One? Want a closer look at how we surface your signals?
              We'd love to hear from you.
            </p>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <a 
                href="mailto:info@levelone.app" 
                className="text-xl text-gray-900 hover:text-gray-700 transition-colors font-medium"
              >
                info@levelone.app
              </a>
              <p className="text-gray-500 text-sm mt-4">
                We typically respond within 24 hours
              </p>
                    </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white font-bold text-xl mb-8">Level One</div>
            <div className="text-gray-400 text-sm">
              Copyright © 2025 by Level One Ltd. All rights reserved.
            </div>
            <div className="flex justify-center items-center gap-4 mt-4 text-gray-400 text-sm">
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
