import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PhysicianSchema } from "@/components/seo/PhysicianSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ChatBubble from "@/components/sections/ChatBubble";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drravindrasharma.com'),
  title: {
    default: 'Dr. Ravindra Kumar Sharma | Best Cardiac Surgeon in Jaipur',
    template: '%s | Dr. R.K. Sharma',
  },
  description: 'Director of CTVS at Eternal Hospital Jaipur. 44+ years experience & 7,000+ open heart surgeries. Off-pump CABG specialist. Call +91-7231044444 to book your consultation.',
  keywords: [
    'ravindra kumar sharma', 'dr ravindra kumar sharma', 'dr r.k. sharma', 'ravindra sharma',
    'ravindra jaipur', 'ravindra surgeon', 'ravindra cardiac surgeon', 'ravindra kumar sharma jaipur',
    'ravindra sharma surgeon', 'ravindra sharma cardiac surgeon', 'ravindra sharma jaipur',
    'dr ravindra sharma jaipur', 'dr ravindra kumar sharma cardiac surgeon',
    'cardiac surgeon', 'cardiac surgeon jaipur', 'cardiac surgeon in jaipur',
    'best cardiac surgeon', 'best cardiac surgeon in jaipur', 'best cardiac surgeon jaipur',
    'surgeon jaipur', 'surgeon in jaipur', 'best surgeon', 'best surgeon jaipur', 'best surgeon in jaipur',
    'jaipur surgeon', 'jaipur cardiac surgeon', 'jaipur best surgeon', 'jaipur best cardiac surgeon',
    'heart surgeon', 'heart surgeon jaipur', 'heart surgeon in jaipur', 'best heart surgeon in jaipur',
    'bypass surgery jaipur', 'CABG surgeon jaipur', 'CTVS surgeon jaipur',
    'valve surgery jaipur', 'lung surgery jaipur', 'open heart surgery jaipur',
    'heart doctor jaipur', 'best heart doctor in jaipur', 'cardiac doctor jaipur',
    'heart specialist jaipur', 'cardiac specialist jaipur', 'best cardiac specialist in jaipur',
    'Eternal Hospital cardiac surgery', 'Eternal Hospital surgeon', 'Eternal Hospital jaipur doctor',
    'best surgeon rajasthan', 'cardiac surgeon rajasthan', 'heart surgeon rajasthan',
  ],
  authors: [{ name: 'Dr. Ravindra Kumar Sharma' }],
  creator: 'Dr. Ravindra Kumar Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drravindrasharma.com',
    siteName: 'Dr. Ravindra Kumar Sharma – Cardiac Surgeon Jaipur',
    title: 'Dr. Ravindra Kumar Sharma | Best Cardiac Surgeon in Jaipur',
    description: 'Director CTVS, Eternal Hospital Jaipur. 44+ years. 7,000+ surgeries. Expert in CABG, Valve, Aortic & Minimally Invasive Cardiac Surgery.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dr. Ravindra Kumar Sharma – Cardiac Surgeon Jaipur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ravindra Kumar Sharma | Best Cardiac Surgeon in Jaipur',
    description: 'Director CTVS, Eternal Hospital Jaipur. 7,000+ open heart surgeries.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'add-your-google-site-verification-here' },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body className="font-inter bg-[#080C18] text-white antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ChatBubble />
        <PhysicianSchema />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
