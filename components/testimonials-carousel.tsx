"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  name: string
  text: string
  avatar: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) setSlidesToShow(3)
      else if (window.innerWidth >= 768) setSlidesToShow(2)
      else setSlidesToShow(1)
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  const maxSlide = Math.max(0, testimonials.length - slidesToShow)

  const moveSlider = (direction: number) => {
    setCurrentSlide(prev => {
      let newSlide = prev + direction
      if (newSlide > maxSlide) newSlide = 0
      if (newSlide < 0) newSlide = maxSlide
      return newSlide
    })
  }

  useEffect(() => {
    const interval = setInterval(() => moveSlider(1), 5000)
    return () => clearInterval(interval)
  }, [maxSlide])

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 sm:px-3"
            >
              <div className="bg-white rounded-2xl p-4 sm:p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        onClick={() => moveSlider(-1)}
      >
        <span className="text-gray-600 text-sm sm:text-base">←</span>
      </button>
      <button 
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        onClick={() => moveSlider(1)}
      >
        <span className="text-gray-600 text-sm sm:text-base">→</span>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxSlide + 1 }, (_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
