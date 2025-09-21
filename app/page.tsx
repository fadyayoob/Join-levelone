'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WaitlistForm from "@/components/WaitlistForm"
import { useState } from 'react'

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
  // State for carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Screenshot data
  const screenshots = [
    {
      src: "/Screenshot%202025-09-04%20at%2010.58.20.png",
      alt: "My Health screen"
    },
    {
      src: "/Screenshot%202025-09-04%20at%2011.04.28.png", 
      alt: "Health Assistant chat"
    },
    {
      src: "/Screenshot%202025-09-04%20at%2011.05.16.png",
      alt: "Home insights"
    }
  ]

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? screenshots.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === screenshots.length - 1 ? 0 : prev + 1
    )
  }
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
                Take full ownership of your wellbeing
              </h1>
              <p className="text-white/95 text-sm md:text-lg mb-2 leading-relaxed">A brand new way to get clarity and control over your health</p>
              <p className="text-white/95 text-sm md:text-lg mb-4 md:mb-8 leading-relaxed">through voice logging, AI insights, and pattern recognition.</p>
              <Button asChild className="bg-white text-black hover:bg-gray-100 md:bg-black md:text-white md:hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg cursor-pointer w-full sm:w-auto">
                <button onClick={scrollToWaitlist}>
                  Join Waitlist
                </button>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Coach Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">A personal health companion that understands you</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              For anyone managing ongoing symptoms, chronic conditions, or unexplained health challenges — and ready to finally see the full picture.
            </p>
          </div>

          {/* Screenshots carousel */}
          <div className="mt-6 relative max-w-md mx-auto px-12 md:px-0">
            {/* Main image display */}
          <div className="flex justify-center">
              <img
                src={screenshots[currentImageIndex].src}
                alt={screenshots[currentImageIndex].alt}
                className="w-[320px] md:w-[360px] rounded-3xl shadow-2xl border border-gray-200 transition-all duration-300 ease-in-out"
                loading="lazy"
              />
                  </div>

            {/* Left arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-500/20 rounded-lg transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right arrow */}
            <button
              onClick={goToNext}
              className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-500/20 rounded-lg transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? 'bg-gray-300' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
                      </div>
                    </div>

          {/* Use case bubbles */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Chronic fatigue</span>
                      </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Gut issues</span>
                    </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Metabolic health</span>
                      </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Hormonal shifts</span>
                      </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Autoimmune flare-ups</span>
                    </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Migraines & pain</span>
                  </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>ADHD</span>
                        </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Brain fog</span>
                      </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Injury recovery</span>
                        </div>
            <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-100 rounded-full px-5 py-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span>Longevity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Why Level One?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Discover the unique features that make Level One the ultimate health companion
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
              <h3 className="font-bold text-xl mb-4 text-gray-900">Log everything in seconds</h3>
              <p className="text-gray-600 leading-relaxed">
                No more endless symptoms checklists – record a voice note or snap a picture, and L1 will add it to your daily health log
              </p>
            </div>

            {/* Pillar 2: Track Symptoms with lightbulb icon */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Track Symptoms, Decode Patterns</h3>
              <p className="text-gray-600 leading-relaxed">
                Spot trends between your lifestyle and your symptoms — understand what they mean, effortlessly
              </p>
            </div>

            {/* Pillar 3: Pattern Recognition */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Daily, Personalized Actions</h3>
              <p className="text-gray-600 leading-relaxed">
                Know exactly what to do — day by day — to support your body and mind
              </p>
            </div>

            {/* Pillar 4: Health Experiments */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Your Health Story, In One Place</h3>
              <p className="text-gray-600 leading-relaxed">
                Build and share a living record with any healthcare professional — no more repeating your story again and again
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



      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Level One stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from real people who've found clarity, patterns, and control through Level One.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" id="testimonial-slider">
                {/* Testimonial 1 */}
                <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-semibold">👤</span>
                      </div>
                      <span className="font-semibold text-gray-900">Sarah</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "I used to wake up exhausted every day, even after 9 hours of sleep. Logging symptoms showed a clear link between my late-night snacking and restless nights. Once I cut that out, my mornings finally  finally felt normal again."
                    </p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-semibold">👤</span>
                      </div>
                      <span className="font-semibold text-gray-900">Marcus</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "For years I thought my bloating was random. The app flagged a recurring pattern with dairy. I eliminated any dairy containing products, and within days my digestion calmed down."
                    </p>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-semibold">👤</span>
                      </div>
                      <span className="font-semibold text-gray-900">Elena</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "My flare-ups seemed unpredictable until I saw how stress spikes at work always preceded them. I started stress-tracking and breathing exercises, and the flares are less frequent now.”
                    </p>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-semibold">👤</span>
                      </div>
                      <span className="font-semibold text-gray-900">David</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "The AI showed that my migraines coincided with dehydration and skipped meals. I carry a water bottle now — migraines dropped by half."
                    </p>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-semibold">👤</span>
                      </div>
                      <span className="font-semibold text-gray-900">Rachel</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "Focused on longevity and want to spot early shifts before they turn into bigger problems? Level One caught subtle changes in my energy and sleep patterns months before my annual checkup."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows removed; carousel is scrollable by drag/scroll */}
          </div>

          {/* See More Link */}
          <div className="text-center mt-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              See more →
            </a>
          </div>
        </div>
        {/* Removed inline script; using native horizontal scroll for simplicity */}
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
              Have questions about Level One? Want to learn more about our health companion? 
              We'd love to hear from you.
            </p>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a 
                href="mailto:info@levelone.health" 
                className="text-xl text-gray-900 hover:text-gray-700 transition-colors font-medium"
              >
                info@levelone.health
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
              <a href="/terms" className="hover:text-white transition-colors">Terms of use</a>
              <span>|</span>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}