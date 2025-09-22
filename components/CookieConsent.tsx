'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowBanner(true)
    } else {
      const consentValue = consent === 'true'
      setConsentGiven(consentValue)
      if (consentValue) {
        loadGTM()
      }
    }
  }, [])

  const loadGTM = () => {
    // Load GTM script
    const script = document.createElement('script')
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T9XKLHCD');
    `
    document.head.appendChild(script)

    // Add noscript fallback
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9XKLHCD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.body.insertBefore(noscript, document.body.firstChild)
  }

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setConsentGiven(true)
    setShowBanner(false)
    loadGTM()
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false')
    setConsentGiven(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies and similar technologies to improve your experience, analyze site usage, 
              and assist with marketing efforts. By clicking "Accept", you consent to the use of 
              cookies for analytics and marketing purposes. You can learn more in our{' '}
              <a href="/privacy" className="underline hover:no-underline">
                Privacy Policy
              </a>.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="min-w-[100px]"
            >
              Decline
            </Button>
            <Button 
              onClick={handleAccept}
              className="min-w-[100px]"
            >
              Accept
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}