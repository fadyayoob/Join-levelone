import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WaitlistForm from "@/components/WaitlistForm"

export default function HomePage() {
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
        <header className="relative z-10 container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/level-one-logo.png" alt="Level One" className="w-17 h-17 object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#" className="hover:text-white/80 transition-colors">Manifesto</a>
              <a href="#waitlist" className="hover:text-white/80 transition-colors">Join Waitlist</a>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <h1 className="font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Take full ownership of your wellbeing
            </h1>
            <p className="text-white/90 text-lg mb-2">A brand new way to get clarity and control over your health</p>
            <p className="text-white/90 text-lg mb-8">through voice logging, AI insights, and pattern recognition.</p>
            <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-medium text-lg">
              <a href="#waitlist">
                Join Waitlist
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Coach Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">A personal coach in your pocket</h2>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[650px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex justify-between items-center text-xs font-medium border-b border-gray-100">
                    <span className="text-gray-900">9:41 AM</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-6 h-3 border border-gray-400 rounded-sm">
                        <div className="w-full h-full bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Header */}
                  <div className="bg-gray-800 px-6 py-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-sm">L1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Level One Coach</h3>
                      <p className="text-gray-300 text-sm">Your personal health assistant</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-6 space-y-6 bg-white pb-24">
                    {/* Coach Message */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">L1</span>
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-md px-5 py-4 max-w-[80%]">
                        <p className="text-gray-900 text-sm leading-relaxed">Good morning! I noticed you've been experiencing fatigue after lunch. Based on your recent logs, this might be related to your meal timing.</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-gray-700 rounded-2xl rounded-tr-md px-5 py-4 max-w-[80%]">
                        <p className="text-white text-sm leading-relaxed">Yes, I've been feeling really tired around 2 PM lately</p>
                      </div>
                    </div>

                    {/* Coach Message with Suggestion */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">L1</span>
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-md px-5 py-4 max-w-[80%]">
                        <p className="text-gray-900 text-sm leading-relaxed mb-3">Try eating lunch 30 minutes earlier and include more protein. I'll track how this affects your energy levels.</p>
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <p className="text-gray-700 text-xs font-semibold mb-1">💡 Experiment Suggested</p>
                          <p className="text-gray-600 text-xs">Lunch timing adjustment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-100 rounded-full px-5 py-3">
                        <p className="text-gray-500 text-sm">Type your message...</p>
                      </div>
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                Spot trends in between your lifestyle, your symptoms and conditions — understand what they mean, effortlessly
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
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 rounded-lg font-medium text-lg">
              <a href="#waitlist">
                Join Waitlist
              </a>
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
                      "Living with chronic fatigue, gut issues, or autoimmune flare-ups and tired of retelling your story to every doctor? Level One finally helped me see the connections between my symptoms and daily choices that no doctor had spotted before."
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
                      "Recovering from an injury and want to know if your training is helping or holding you back? Level One tracked my recovery patterns and showed me exactly when to push and when to rest."
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
                      "Dealing with ADHD, fatigue, or brain fog and need to see the patterns behind it? Level One revealed how my sleep, meals, and stress were creating my brain fog cycles."
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
                      "Experimenting with supplements, sleep hacks, or routines and want clear feedback on what actually works for you? Level One showed me which of my 10 supplements were actually making a difference."
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

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              onclick="moveSlider(-1)"
            >
              <span className="text-gray-600">←</span>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              onclick="moveSlider(1)"
            >
              <span className="text-gray-600">→</span>
            </button>
          </div>

          {/* See More Link */}
          <div className="text-center mt-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              See more →
            </a>
          </div>
        </div>

        {/* JavaScript for Carousel */}
        <script dangerouslySetInnerHTML={{
          __html: `
            let currentSlide = 0;
            const totalSlides = 5;
            const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            const maxSlide = totalSlides - slidesToShow;

            function moveSlider(direction) {
              currentSlide += direction;
              if (currentSlide > maxSlide) currentSlide = 0;
              if (currentSlide < 0) currentSlide = maxSlide;
              
              const slider = document.getElementById('testimonial-slider');
              const translateX = -(currentSlide * (100 / slidesToShow));
              slider.style.transform = 'translateX(' + translateX + '%)';
            }

            // Auto-scroll every 5 seconds
            setInterval(() => moveSlider(1), 5000);
          `
        }} />
      </section>

      {/* Early Access Form Section */}
      <section id="waitlist" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
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
              <a href="#" className="hover:text-white transition-colors">Terms of use</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Contact us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}