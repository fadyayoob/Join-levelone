'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface FormData {
  fullName: string;
  email: string;
  country: string;
  platform: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    country: '',
    platform: 'iOS'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          country: '',
          platform: 'iOS'
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
        console.error('Form submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-bold text-3xl text-gray-900 mb-2">You're on the list!</h2>
          <p className="text-gray-600">
            Thank you for joining our waitlist. We'll notify you as soon as Level One is available.
          </p>
        </div>
        <Button 
          onClick={() => setSubmitStatus('idle')}
          className="bg-gray-900 text-white hover:bg-gray-800 py-3 px-6 rounded-2xl"
        >
          Join Another Person
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl text-gray-900 mb-2">Get Early Access</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your Full Name"
            required
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Country</label>
          <select 
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">Select</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="NL">Netherlands</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* iOS/Android */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">iOS/Android</label>
          <select 
            name="platform"
            value={formData.platform}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
          </select>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gray-900 text-white hover:bg-gray-800 py-4 text-lg font-bold rounded-2xl mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'JOINING WAITLIST...' : 'JOIN WAITLIST'}
        </Button>

        {/* Privacy Policy */}
        <p className="text-gray-500 text-sm text-center mt-6">
          By subscribing, you agree to our Privacy Policy and receive updates.
        </p>
      </form>
    </div>
  );
}
