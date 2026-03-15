import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PhysicianSchema } from "@/components/seo/PhysicianSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drravindrasharma.com'),
  title: {
    default: 'Dr. Ravindra Kumar Sharma | Best Cardiac Surgeon in Jaipur',
    template: '%s | Dr. Ravindra Kumar Sharma – Best Cardiac Surgeon in Jaipur',
  },
  description: 'Dr. R.K. Sharma is the Director of CTVS at Eternal Hospital, Jaipur. 44+ years experience, 7,000+ open heart surgeries. Specialist in CABG, Valve Surgery, Aortic Surgery.',
  keywords: ['best cardiac surgeon in jaipur', 'cardiac surgeon jaipur', 'Dr. Ravindra Kumar Sharma', 'Dr. R.K. Sharma cardiac surgeon', 'heart surgeon jaipur', 'bypass surgery jaipur', 'CABG surgeon jaipur', 'CTVS surgeon jaipur', 'Eternal Hospital cardiac surgery'],
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
  alternates: { canonical: 'https://drravindrasharma.com' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-[#080C18] text-white antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <PhysicianSchema />
      </body>
    </html>
  );
}
