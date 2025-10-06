import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import CookieConsent from "../components/CookieConsent"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Level One - Personal Insights for Your Day",
  description:
    "Connect your notes, habits, and favorite apps to reveal when you create, recharge, and focus best.",
  generator: "v0.app",
  icons: {
    icon: "/level-one-logo.png",
    shortcut: "/level-one-logo.png",
    apple: "/level-one-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
