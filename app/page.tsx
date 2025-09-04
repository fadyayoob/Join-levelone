"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Sarah",
      text: "Level One helped me identify that my afternoon crashes were linked to my breakfast timing. I've never felt more in control of my energy levels.",
      avatar: "👤"
    },
    {
      name: "Mike", 
      text: "The voice logging feature is incredible. I can just talk about how I'm feeling and it automatically tracks everything. No more forgetting to log symptoms.",
      avatar: "👤"
    },
    {
      name: "Emma",
      text: "I love how Level One suggests personalized experiments. It's like having a health coach who actually knows my body and lifestyle.",
      avatar: "👤"
    },
    {
      name: "David",
      text: "Level One showed me which of my 10 supplements were actually making a difference. The pattern recognition is game-changing.",
      avatar: "👤"
    },
    {
      name: "Rachel",
      text: "Level One caught subtle changes in my energy and sleep patterns months before my annual checkup. It's like having a crystal ball for my health.",
      avatar: "👤"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-image.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Header */}
        <header className="relative z-10 container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="/level-one-logo.png" alt="Level One" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <div className="text-white font-bold text-lg sm:text-xl">Level One</div>
            </div>
            {/* Mobile menu button */}
            <button 
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white text-sm lg:text-base">
              <a href="#" className="hover:text-white/80 transition-colors">The app</a>
              <a href="#" className="hover:text-white/80 transition-colors">Manifesto</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Join the waitlist</a>
              <a href="#" className="hover:text-white/80 transition-colors">We are hiring</a>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-4 right-4 bg-black/95 backdrop-blur-sm mt-4 rounded-lg p-4 border border-white/20">
              <div className="flex flex-col space-y-4 text-white">
                <a href="#" className="hover:text-white/80 transition-colors py-2 border-b border-white/20">The app</a>
                <a href="#" className="hover:text-white/80 transition-colors py-2 border-b border-white/20">Manifesto</a>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white/80 transition-colors py-2 border-b border-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join the waitlist
                </a>
                <a href="#" className="hover:text-white/80 transition-colors py-2">We are hiring</a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-xs sm:text-sm font-medium">Join 10,000+ users already transforming their health</span>
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight">
              Take full ownership of your wellbeing
            </h1>
            <p className="text-white/90 text-base sm:text-lg mb-2">A brand new way to get clarity and control over your health</p>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8">through voice logging, AI insights, and pattern recognition.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button asChild className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg w-full sm:w-auto backdrop-blur-sm">
                <a href="#how-it-works">
                  See How It Works
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Coach Section */}
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-4">A personal coach in your pocket</h2>
            <div className="flex justify-center mb-8 sm:mb-12">
              <Button asChild className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg w-full sm:w-auto max-w-xs">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 sm:w-72 md:w-80 h-[520px] sm:h-[580px] md:h-[650px] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-gray-100 px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex justify-between items-center text-xs font-medium">
                    <span>9:41 AM</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-5 sm:w-6 h-2.5 sm:h-3 border border-gray-400 rounded-sm">
                        <div className="w-full h-full bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Header */}
                  <div className="bg-gray-800 px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-xs sm:text-sm">L1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg">Level One Coach</h3>
                      <p className="text-gray-300 text-xs">Your personal health assistant</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-2 sm:p-3 md:p-4 space-y-3 sm:space-y-4 bg-gray-100 pb-16 sm:pb-20">
                    {/* Coach Message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">L1</span>
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 max-w-[85%] shadow-sm border border-gray-200">
                        <p className="text-gray-800 text-xs sm:text-sm">Good morning! I noticed you've been experiencing fatigue after lunch. Based on your recent logs, this might be related to your meal timing.</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-gray-700 rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2 sm:py-3 max-w-[85%]">
                        <p className="text-white text-xs sm:text-sm">Yes, I've been feeling really tired around 2 PM lately</p>
                      </div>
                    </div>

                    {/* Coach Message with Suggestion */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">L1</span>
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 max-w-[85%] shadow-sm border border-gray-200">
                        <p className="text-gray-800 text-xs sm:text-sm">Try eating lunch 30 minutes earlier and include more protein. I'll track how this affects your energy levels.</p>
                        <div className="mt-2 sm:mt-3 bg-gray-50 border border-gray-300 rounded-lg p-2 sm:p-3">
                          <p className="text-gray-700 text-xs font-medium">💡 Experiment Suggested</p>
                          <p className="text-gray-600 text-xs mt-1">Lunch timing adjustment</p>
                        </div>
                      </div>
                    </div>

                    {/* User Response */}
                    <div className="flex justify-end">
                      <div className="bg-gray-700 rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2 sm:py-3 max-w-[85%]">
                        <p className="text-white text-xs sm:text-sm">That makes sense! I'll try that today</p>
                      </div>
                    </div>

                    {/* Coach Message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">L1</span>
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 max-w-[85%] shadow-sm border border-gray-200">
                        <p className="text-gray-800 text-xs sm:text-sm">Perfect! I'll monitor your energy levels and let you know if we see improvements. Remember to log your meals and energy levels.</p>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <input 
                          type="text" 
                          placeholder="Type your message..." 
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">Why Level One?</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Discover the unique features that make Level One the ultimate health companion</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Personalized Insights</h3>
              <p className="text-gray-600 text-sm sm:text-base">Get AI-powered recommendations tailored to your unique health patterns and goals</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Voice Logging</h3>
              <p className="text-gray-600 text-sm sm:text-base">Simply speak to log your symptoms, mood, and experiences naturally</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Pattern Recognition</h3>
              <p className="text-gray-600 text-sm sm:text-base">Identify hidden connections between your lifestyle and health outcomes</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Health Experiments</h3>
              <p className="text-gray-600 text-sm sm:text-base">Test different approaches and measure their impact on your wellbeing</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">How it works</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Get started in minutes and see results in weeks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 min-h-[3rem] flex items-center justify-center">Log everything in seconds</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                Type or speak your symptoms, moods, habits, add photos of your meals, medications, upload your workouts. Our AI will structure and store all of this data into a smart, actionable timeline.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 min-h-[3rem] flex items-center justify-center">See patterns behind your symptoms</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                AI connects the dots across all logged information, such as symptoms, sleep, stress, exercise, and daily routines. You'll see what's affecting each of your conditions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 min-h-[3rem] flex items-center justify-center">Run simple experiments</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                Turn insights into action. Test small changes like adjusting your nutrition and exercise and track how your body responds.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center flex flex-col h-full">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 min-h-[3rem] flex items-center justify-center">Build and share your health record</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                Everything is organized into a living record you control. Export summaries for your doctor, or just use it yourself to guide smarter choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">What our users say</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">Join thousands of users who have transformed their health with Level One</p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />

              

          {/* See More Link */}
          <div className="text-center mt-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
              See more →
            </a>
          </div>
        </div>


      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">Ready to take control of your health?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the patterns in their health and transformed their wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium text-lg">
              <a href="#">
                Watch Demo
              </a>
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about Level One and how it can transform your health journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">How does Level One protect my privacy?</h3>
              <p className="text-gray-700 leading-relaxed">
                Your health data is encrypted and stored securely. You own your data and control who has access to it. We never share your information with third parties without your explicit consent.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Can I export my health data?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! You can export your complete health record at any time in multiple formats (PDF, CSV) to share with healthcare providers or for your own records.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">How accurate are the AI insights?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our AI learns from your unique patterns over time, becoming more accurate with each log. It identifies correlations between your symptoms, lifestyle, and health factors to provide personalized insights.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">What if I need to cancel my subscription?</h3>
              <p className="text-gray-700 leading-relaxed">
                You can cancel anytime with no penalties. Your data remains accessible for 30 days after cancellation, and you can always reactivate your account later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 text-center mb-8 sm:mb-12">Choose your plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Annual Plan */}
            <Card className="bg-blue-50 border border-blue-200 p-6 sm:p-8 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full">Recommended</span>
              </div>
              <CardContent className="p-0">
                <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2">Annual</h3>
                    <p className="text-sm text-gray-500">Paid annually</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-bold text-2xl sm:text-3xl text-gray-900">$6.99<span className="text-sm sm:text-base font-normal text-gray-500">/ month</span></div>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Symptom logging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Daily health insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Personalised experiments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Habit tracking and reminders</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800 py-2.5 sm:py-3 text-sm sm:text-base">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2">Monthly</h3>
                    <p className="text-sm text-gray-500">Paid monthly</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-bold text-2xl sm:text-3xl text-gray-900">$9.99<span className="text-sm sm:text-base font-normal text-gray-500">/ month</span></div>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Symptom logging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Daily health insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:w-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Personalised experiments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Habit tracking and reminders</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800 py-2.5 sm:py-3 text-sm sm:text-base">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime Plan */}
            <Card className="bg-green-50 border border-green-200 p-6 sm:p-8 rounded-2xl md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2">Lifetime</h3>
                    <p className="text-sm text-gray-500">One time payment</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-bold text-2xl sm:text-3xl text-gray-900">$179</div>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Symptom logging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Daily health insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Personalised experiments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Habit tracking and reminders</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-green-600 text-white hover:bg-green-700 py-2.5 sm:py-3 text-sm sm:text-base">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSduSnHl2SbpIJpDzvUAMNexeeeIqsurXwHVGtNg0CLRLNmkBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">Trusted by thousands of users</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your health and privacy are our top priorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Bank-level Security</h3>
              <p className="text-gray-600">End-to-end encryption and HIPAA compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Machine learning that gets smarter over time</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">User-First Design</h3>
              <p className="text-gray-600">Built for real people with real health challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/level-one-logo.png" alt="Level One" className="w-8 h-8 object-contain" />
                <div className="text-white font-bold text-lg">Level One</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Take full ownership of your wellbeing with AI-powered health insights and personalized coaching.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                Copyright © 2025 by Level One Ltd. All rights reserved.
              </div>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}